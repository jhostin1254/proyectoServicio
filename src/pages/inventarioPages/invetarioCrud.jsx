import React, { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
  Pagination,
  useDisclosure,
  Spinner,
  Chip,
} from "@nextui-org/react";
import { Buscador } from "../../componentes/crud/buscador";
import { DeleteIcon } from "../../componentes/crud/DeleteIcon";
import { EyeIcon } from "../../componentes/crud/EyeIcon";
import { EditIcon } from "../../componentes/crud/EditIcon";
import { getPantalla } from "../../API/getPantalla";
import { AddModal } from "../../componentes/crud/addModal";
import { EditModal } from "../../componentes/crud/editModal";
//El numero de paginas para la paginacion
const N_PAGINAS = 10;

export function InventarioCrud() {
  //El use params es para recuperar el id de de router para manejarlo de maera dinamica
  const { id } = useParams();
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedItem, setSelectedItem] = useState(null);

  //Esto la funcion getPantalla
  const { data, isLoading, error, refetch } = getPantalla(
    "https://localhost:44343/api/Pantalla",
    id.toLowerCase(),
    search
  );

  // esto es para la pagiacion
  //aqui calculamos las paginas que abra
  const pages = Math.ceil((data?.length || 0) / N_PAGINAS);

  // esto es para guardar en momoria los items paginados
  const items = useMemo(() => {
    const start = (page - 1) * N_PAGINAS;
    const end = start + N_PAGINAS;
    return data?.slice(start, end) || [];
  }, [page, data]);

  // para el boton edit
  const handleEdit = (item) => {
    setSelectedItem(item);
    onOpen();
  };

  // para el boton view
  const handleView = (item) => {
    console.log("Ver detalles de:", item);
  };
  //para eliminar
  const handleDelete = async (item) => {
    if (window.confirm(`¿Estás seguro de eliminar ${item.dpanta}?`)) {
      try {
        // Implementar lógica de eliminación
        await deleteItem(item.ID);
        refetch(); //Esto es de fetch pantalla y es para recargar los datos
      } catch (error) {
        console.error("Error al eliminar:", error);
      }
    }
  };

  // si hay algun error al cargar los datos rertorna el error y un boton para refrescar
  if (error) {
    return (
      <div className="p-8 text-center">
        <p className="text-danger">Error: {error}</p>
        <button
          onClick={refetch}
          className="mt-4 px-4 py-2 bg-primary text-white rounded-md"
        >
          Reintentar
        </button>
      </div>
    );
  }

  return (
    <main className="p-3">
      <div className="bg-white rounded-md w-full h-full shadow-sm">
        <div className="p-3">
          <section className="flex justify-between items-center pb-4">
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-semibold">
                {id.toLocaleUpperCase()}
              </h2>
              {/* una condicional y muestra el espiner por si no esta cargando los datos*/}
              {isLoading && <Spinner size="sm" />}
            </div>
            <Chip size="sm" variant="flat" color="secondary">
              {/*cuenta cuantos datos hay en total y si el valor es null o undefine le pone 0*/}
              Total: {data?.length || 0}
            </Chip>
          </section>

          {/* El buscador y el boton agregar*/}
          <section className="flex justify-between pb-4">
            <Buscador
              search={search}
              setSearch={setSearch}
              disabled={isLoading}
            />
            <AddModal
              isOpen={isOpen}
              onClose={onClose}
              selectedItem={selectedItem}
              onSave={refetch}
            />
          </section>

          {/*La tabla*/}
          <Table
            aria-label="Inventario de Pantallas"
            //paginacion
            bottomContent={
              <div className="flex w-full justify-center">
                <Pagination
                  isCompact
                  showControls
                  showShadow
                  color="secondary"
                  page={page}
                  total={pages}
                  onChange={setPage}
                />
              </div>
            }
            classNames={{
              wrapper: "min-h-[400px]",
            }}
          >
            <TableHeader>
              <TableColumn>Código</TableColumn>
              <TableColumn>Nombre</TableColumn>
              <TableColumn>Calidad</TableColumn>
              <TableColumn>Precio</TableColumn>
              <TableColumn align="center">Cantidad</TableColumn>
              <TableColumn align="center">Acciones</TableColumn>
            </TableHeader>
            <TableBody
              emptyContent={
                isLoading ? "Cargando..." : "No hay elementos disponibles"
              }
              loadingContent={<Spinner />}
              isLoading={isLoading}
            >
              {items.map((item) => (
                <TableRow key={item.ID}>
                  <TableCell>{item.cpanta}</TableCell>
                  <TableCell>{item.dpanta}</TableCell>
                  <TableCell>
                    <Chip size="sm" variant="flat">
                      {item.calidad}
                    </Chip>
                  </TableCell>
                  <TableCell>S/ {item.precio.toFixed(2)}</TableCell>
                  <TableCell>
                    <Chip
                      variant="flat"
                      color={item.qpanta > 0 ? "primary" : "danger"}
                      size="sm"
                    >
                      {item.qpanta}
                    </Chip>
                  </TableCell>
                  <TableCell>
                    <div className="flex justify-center gap-2">
                      <button
                        onClick={() => handleView(item)}
                        className="text-lg text-default-400 cursor-pointer hover:text-primary active:opacity-50"
                      >
                        <EyeIcon />
                      </button>

                      <EditModal items={item} refresh={refetch} />

                      <button
                        onClick={() => handleDelete(item)}
                        className="text-lg text-danger cursor-pointer hover:text-danger-400 active:opacity-50"
                      >
                        <DeleteIcon />
                      </button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </main>
  );
}

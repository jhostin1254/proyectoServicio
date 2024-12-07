import React, { useMemo, useState } from "react";
import { Buscador } from "../../componentes/crud/buscador";
import { DeleteIcon } from "../../componentes/crud/DeleteIcon";
import { EyeIcon } from "../../componentes/crud/EyeIcon";
import { EditIcon } from "../../componentes/crud/EditIcon";
import { AddModal } from "../../componentes/crud/addModal";
import { EditModal } from "../../componentes/crud/editModal";
import { getMarca } from "../../API/getMarca";
import { Chip, useDisclosure, Spinner } from "@nextui-org/react";
import { CardMarca } from "../../componentes/marca/CardMarca";
import { Divider } from "@nextui-org/react";
import { AddModalMarca } from "../../componentes/marca/addModalMarca";

export function Marcas() {
  const [search, setSearch] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedItem, setSelectedItem] = useState(null);

  const { data, isLoading, error, refetch } = getMarca(
    "https://localhost:44338/api/Marca",
    search
  );
  console.log(data);
  const handleEdit = (item) => {
    setSelectedItem(item);
    onOpen();
  };

  const handleView = (item) => {
    console.log("Ver detalles de:", item);
  };

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
              <h2 className="text-xl font-semibold">Marca</h2>
              {isLoading && <Spinner size="sm" />}
            </div>
            <Chip size="sm" variant="flat" color="secondary">
              Total: {data?.length || 0}
            </Chip>
          </section>

          <section className="flex justify-between pb-4">
            <Buscador
              search={search}
              setSearch={setSearch}
              disabled={isLoading}
            />
            <AddModalMarca
              isOpen={isOpen}
              onClose={onClose}
              selectedItem={selectedItem}
              onSave={refetch}
            />
          </section>
          <Divider orientation="horizontal" className="mb-4" />
          <section className="flex flex-wrap gap-4  justify-evenly">
            {data?.map((marca) => (
              <div key={marca.Nidmar}>
                <CardMarca dmarca={marca.Dmarca} imagen={marca.Imagen} />
              </div>
            ))}
          </section>
        </div>
      </div>
    </main>
  );
}

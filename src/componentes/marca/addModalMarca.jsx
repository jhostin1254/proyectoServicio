import { useState } from "react";
import { useDisclosure } from "@nextui-org/react";
import { IoAddOutline } from "react-icons/io5";
import {
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { postPantalla } from "../../API/postPantalla";
import { Spinner } from "@nextui-org/react";
import { Image } from "react-bootstrap";

export function AddModalMarca() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      // Crear una URL para previsualizar la imagen
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [codigo, setCodigo] = useState("");
  const [pantalla, setPantalla] = useState("");
  const [calidad, setCalidad] = useState(new Set([]));
  const [precio, setPrecio] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [mensaje, setMensaje] = useState("");

  const clearData = () => {
    setCodigo("");
    setPantalla("");
    setCalidad(new Set([]));
    setPrecio("");
    setCantidad("");
  };
  const handleAdd = async (onClose) => {
    setIsLoading(true);
    setMensaje("");

    if (!codigo || !pantalla || !precio || !cantidad || calidad.size === 0) {
      setMensaje("Por favor complete todos los campos requeridos");
      setIsLoading(false);

      setTimeout(() => {
        setMensaje("");
      }, 2500);
      return;
    }

    const datosPantalla = {
      cpanta: codigo,
      dpanta: pantalla,
      precio: Number(precio),
      qpanta: Number(cantidad),
      calidad: Array.from(calidad)[0] || "amoled",
    };

    try {
      const resultado = await postPantalla(datosPantalla);

      if (resultado.success) {
        setMensaje("Datos guardados correctamente");
        setTimeout(() => {
          onClose();
          clearData();
          setMensaje("");
        }, 1500);
      } else {
        setMensaje("Error al guardar los datos: la pantalla ya existe");
        setTimeout(() => {
          setMensaje("");
        }, 2500);
      }
    } catch (error) {
      setMensaje("Error al guardar los datos: " + error.message);
      setTimeout(() => {
        setMensaje("");
      }, 2500);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = (onClose) => {
    setMensaje("");
    clearData();
    onClose();
  };

  return (
    <>
      <Button
        onPress={onOpen}
        size="medium"
        variant="flat"
        color="primary"
        endContent={<IoAddOutline />}
      >
        Agregar
      </Button>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Agregar Marca
              </ModalHeader>
              <ModalBody>
                <Input
                  type="text"
                  label="Marca"
                  placeholder="agrega nombre ..."
                  labelPlacement="outside"
                  value={pantalla}
                  onValueChange={setPantalla}
                />
                <div className="flex gap-4">
                  <Input
                    type="text"
                    label="Codigo"
                    placeholder="agrega codigo ..."
                    labelPlacement="outside"
                    value={codigo}
                    onValueChange={setCodigo}
                  />
                  <Input
                    type="file"
                    label="Imagen"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="mb-4 w-full max-w-xs"
                  />
                </div>
                {selectedImage && (
                  <div>
                    <h3 className="text-lg my-3">Vista Previa:</h3>
                    <div className="flex justify-center">
                      <Image
                        src={selectedImage}
                        alt="Vista previa"
                        className="max-w-xs max-h-64 rounded-lg shadow-md"
                        width={150}
                        rounded
                      />
                    </div>
                  </div>
                )}

                {mensaje && (
                  <div
                    className={`p-2 text-center rounded${
                      mensaje.includes("Error")
                        ? "text-red-500"
                        : "text-green-500"
                    }`}
                  >
                    {mensaje}
                  </div>
                )}
              </ModalBody>
              <ModalFooter>
                <Button
                  color="danger"
                  variant="light"
                  onPress={() => handleClose(onClose)}
                >
                  Cerrar
                </Button>
                <Button
                  color="primary"
                  onPress={() => handleAdd(onClose)}
                  isLoading={isLoading}
                  disabled={
                    isLoading || !codigo || !pantalla || !precio || !cantidad
                  }
                >
                  {isLoading
                    ? `Guardando ${(<Spinner size="sm" />)}`
                    : "Guardar"}
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

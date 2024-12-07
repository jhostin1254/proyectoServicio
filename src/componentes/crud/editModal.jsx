import { useState } from "react";
import { useDisclosure } from "@nextui-org/react";
import { Button, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Input, Select, SelectItem } from "@nextui-org/react";
import { EditIcon } from "./EditIcon";
import { putPantalla } from "../../API/putPantalla";

export function EditModal({items, refresh}) {
    const xcalidad = ['amoled', 'super amoled', 'lcd', 'incel', 'original', 'copia'];

    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    const [codigo, setCodigo] = useState(items.cpanta);
    const [pantalla, setPantalla] = useState(items.dpanta);
    const [calidad, setCalidad] = useState(new Set([items.calidad]));
    const [precio, setPrecio] = useState(items.precio);
    const [cantidad, setCantidad] = useState(items.qpanta);

    const [isLoading, setIsLoading] = useState(false);
    const [mensaje, setMensaje] = useState('');

    const handleEdit = async (onClose) => {
        setIsLoading(true);
        setMensaje('');

        if (!codigo || !pantalla || !precio || !cantidad || calidad.size === 0) {
            setMensaje('Por favor complete todos los campos requeridos');
            setIsLoading(false);
            return;
        }

        const datosPantalla = {
            ID: items.ID,
            cpanta: codigo,
            dpanta: pantalla,
            precio: Number(precio),
            qpanta: Number(cantidad),
            calidad: Array.from(calidad)[0] || 'amoled'
        };

        try {
            const resultado = await putPantalla(datosPantalla);

            if (resultado.success) {
                setMensaje('Datos guardados correctamente');
                refresh();
                setTimeout(() => {
                    setMensaje('');
                    onClose();
                }, 1500);

            } else {
                setMensaje('Error al guardar los datos: ' + resultado.message);
                setTimeout(() => {
                    setMensaje('');
                }, 2500);
            }
        } catch (error) {
            setMensaje('Error al guardar los datos: ' + error.message);
            setTimeout(() => {
                setMensaje('');
            }, 2500);
        } finally {
            setIsLoading(false);
        }
    };

    const handleClose = (onClose) => {
        setMensaje('');
        onClose();
    }

    return (
        <>
            <Button
                onPress={onOpen}
                size='medium'
                variant='flat'
                color='secondary'
                endContent={<EditIcon/>}
            >
                
            </Button>

            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Agregar Pantalla</ModalHeader>
                            <ModalBody>
                                <Input
                                    type="text"
                                    label="Pantalla"
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
                                    <Select
                                        label="Calidad"
                                        placeholder="Selecciona calidad"
                                        labelPlacement="outside"
                                        defaultSelectedKeys={["amoled"]}
                                        selectedKeys={calidad}
                                        onSelectionChange={setCalidad}
                                        className="max-w-xs"
                                    >
                                        {xcalidad.map((c) => (
                                            <SelectItem key={c} value={c}>
                                                {c}
                                            </SelectItem>
                                        ))}
                                    </Select>
                                </div>

                                <div className="flex gap-4">
                                    <Input
                                        type="number"
                                        label="Precio"
                                        placeholder="00.0"
                                        labelPlacement="outside"
                                        endContent={
                                            <div className="pointer-events-none flex items-center">
                                                <span className="text-default-400 text-small">PEN</span>
                                            </div>
                                        }
                                        value={precio}
                                        onValueChange={setPrecio}
                                    />
                                    <Input
                                        type="number"
                                        label="Cantidad"
                                        placeholder="00"
                                        labelPlacement="outside"
                                        value={cantidad}
                                        onValueChange={setCantidad}
                                    />
                                </div>

                                {mensaje && (
                                    <div className={`p-2 text-center rounded ${mensaje.includes('Error') ? 'text-red-500' : 'text-green-500'
                                        }`}>
                                        {mensaje}
                                    </div>
                                )}
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={() => handleClose(onClose)}>
                                    Cerrar
                                </Button>
                                <Button
                                    color="primary"
                                    onPress={() => handleEdit(onClose)}
                                    isLoading={isLoading}
                                    disabled={isLoading || !codigo || !pantalla || !precio || !cantidad}
                                >
                                    {isLoading ? 'Guardando...' : 'Guardar'}
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
import { BsRadioactive, BsGear, BsPower } from "react-icons/bs";
import { LuLayoutDashboard } from "react-icons/lu";
import { TbCashRegister } from "react-icons/tb";
import { IoArchiveOutline } from "react-icons/io5";

export const LinkIcon = ({ nombreIcon }) => {
    switch (nombreIcon) {
        case 'pantalla':
            return <IoArchiveOutline />
        case 'dashboard':
            return <LuLayoutDashboard />;
        case 'configuracion':
            return <BsGear />;
        case 'salir':
            return <BsPower />;
        case 'ventas':
            return <TbCashRegister />;
        default:
            return <BsRadioactive />;
    }
};
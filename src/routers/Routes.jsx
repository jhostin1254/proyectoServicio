import { Routes, Route } from "react-router-dom";
import { Dashboard } from "../pages/dashboard";
import { Configuracion } from "../pages/Configuracion";
import { Salir } from "../pages/Salir";
import { Ventas } from "../pages/Ventas";
import { InventarioCrud } from "../pages/inventarioPages/invetarioCrud";
import { Marcas } from "../pages/inventarioPages/marcasCrud";

export function MyRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/ventas" element={<Ventas />} />
        <Route path="/inventario/:id" element={<InventarioCrud />} />
        <Route path="/marcas" element={<Marcas />} />
        <Route path="/configuracion" element={<Configuracion />} />
        <Route path="/salir" element={<Salir />} />
      </Routes>
    </>
  );
}

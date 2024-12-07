import { BrowserRouter } from "react-router-dom";
import { MyRoutes } from "./routers/Routes";
import { Sidebar } from "./componentes/sidebar/Sidebar";
import { useSidebarContext } from "./context/SidebarContext";
import "./index.css";

export function App() {
  const { isOpen } = useSidebarContext();

  return (
    <>
      <BrowserRouter>
        <div>
          <main className={isOpen ? "sidebarBig" : "sidebarLittle"}>
            <Sidebar />
            <MyRoutes />
          </main>
        </div>
      </BrowserRouter>
    </>
  );
}

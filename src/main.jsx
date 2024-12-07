import "bootstrap/dist/css/bootstrap.min.css";
import { createRoot } from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import "./index.css";
import { App } from "./App";
import { SidebarProvider } from "./context/SidebarContext.jsx";

const root = createRoot(document.getElementById("root"));

root.render(
  <>
    <NextUIProvider>
      <SidebarProvider>
        <App />
      </SidebarProvider>
    </NextUIProvider>
  </>
);

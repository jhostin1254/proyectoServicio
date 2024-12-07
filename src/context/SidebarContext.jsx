import React, { createContext, useContext, useState } from "react";

const sidebarStateContext = createContext(null);

export function useSidebarContext() {
  return useContext(sidebarStateContext);
}

export function SidebarProvider({ children }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <sidebarStateContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </sidebarStateContext.Provider>
  );
}

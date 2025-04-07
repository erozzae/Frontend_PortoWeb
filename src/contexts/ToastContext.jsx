import { createContext, useContext, useState } from "react";

const ToastContext = createContext();

export function ToastProvider({ children }) {
  const [showToast, setShowToast] = useState(false);

  const toggleToast = () => setShowToast(!showToast);

  return (
    <ToastContext.Provider value={{ showToast, setShowToast, toggleToast }}>
      {children}
    </ToastContext.Provider>
  );
}

export function useToast() {
  return useContext(ToastContext);
}

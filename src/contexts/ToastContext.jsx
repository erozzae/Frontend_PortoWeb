import { createContext, useContext, useState } from "react";

const ToastContext = createContext();

export function ToastProvider({ children }) {
  const primaryProps = {
    title: "Success",
    message: "Message sent successfully",
  };

  const dangerProps = {
    title: "Failed",
    message: "Message failed to send",
  };

  const [primaryToast, setPrimaryToast] = useState({
    show: false,
  });

  const [dangerToast, setDangerToast] = useState({
    show: false,
    
  });

  const showPrimaryToast = () => {
    setPrimaryToast({ show: true, ...primaryProps });
  };

  const hidePrimaryToast = () => {
    setPrimaryToast({ show: false, ...primaryProps });
  };

  const showDangerToast = () => {
    setDangerToast({ show: true, ...dangerProps });
  };

  const hideDangerToast = () => {
    setPrimaryToast({ show: false, ...dangerProps });
  };

  return (
    <ToastContext.Provider
      value={{
        showPrimaryToast,
        hidePrimaryToast,
        showDangerToast,
        hideDangerToast,
        primaryToast,
        dangerToast,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export function useToast() {
  return useContext(ToastContext);
}

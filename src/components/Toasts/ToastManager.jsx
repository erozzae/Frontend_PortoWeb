import React from "react";
import { useToast } from "../../contexts/ToastContext";
import DangerToast from "./DangerToast";
import NormalToast from './NormalToast';

const ToastManager = () => {
  const {
    primaryToast,
    dangerToast,
    hidePrimaryToast,
    hideDangerToast,
  } = useToast();

  return <>
    <NormalToast show={primaryToast.show} onClose={hidePrimaryToast} title={primaryToast.title} message={primaryToast.message}/>
    <DangerToast show={dangerToast.show} onClose={hideDangerToast} title={dangerToast.title} message={dangerToast.message}/>
  </>;
}

export default ToastManager;

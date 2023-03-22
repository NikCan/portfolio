import {ToastContainer} from "react-toastify";
import React from "react";

export const Toast = () => {
  return <ToastContainer
    position="top-center"
    autoClose={5000}
    hideProgressBar
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"
  />
}
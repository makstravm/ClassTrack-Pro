import { toast } from "react-toastify";

export const notifyError = (msg: string) => {
  toast.error(msg, {
    position: "top-right",
    autoClose: 3500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
  });
};

export const notifySuccess = (msg: string) => {
  toast.success(msg, {
    position: "top-right",
    autoClose: 2500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
  });
};

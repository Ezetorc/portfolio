import Toastify from "toastify-js";

export const FailureToast = (label: string) => {
  return Toastify({
    text: label,
    duration: 1000,
    close: false,
    gravity: "top",
    position: "center",
    style: {
      background: "#02172b",
      fontFamily: "Poppins-Semibold",
      border: "#FC100D 1px solid",
      borderRadius: "8px",
      color: "#FFFFFF",
    },
  });
};

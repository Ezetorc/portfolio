import Toastify from "toastify-js";

export const SuccessToast = (label: string) => {
  return Toastify({
    text: label,
    duration: 1000,
    close: false,
    gravity: "top",
    position: "center",
    style: {
      background: "#02172b",
      fontFamily: "Poppins-Semibold",
      border: "#4BB543 1px solid",
      borderRadius: "8px",
      color: "#FFFFFF",
    },
  });
};

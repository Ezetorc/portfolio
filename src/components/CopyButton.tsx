import toast from "react-hot-toast";

export default function CopyButton({
  text,
  label,
}: {
  text: string;
  label: string;
}) {
  const handleClick = () => {
    navigator.clipboard
      .writeText(text)
      .then(() =>
        toast.success(label, {
          style: {
            backgroundColor: "#BDF8FF",
            fontFamily: "Poppins-Semibold",
            color: "#000E1C",
          },
        })
      )
      .catch(() => toast.error("Error during copy"));
  };

  return (
    <>
      <button onClick={handleClick} className=" clickable secondary">
        {label}
      </button>
    </>
  );
}

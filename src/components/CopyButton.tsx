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
            backgroundColor: "#02172b",
            fontFamily: "Poppins-Semibold",
            border: "#30679a 1px solid",
            color: "#FFFFFF",
          },
        })
      )
      .catch(() => toast.error("Error during copy"));
  };

  return (
    <>
      <button onClick={handleClick} className="clickable secondary">
        {label}
      </button>
    </>
  );
}

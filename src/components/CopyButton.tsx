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
      .then(() => toast.success(label, { style: { backgroundColor: "#BDF8FF", fontFamily: "Poppins-Semibold", color: "#000E1C" } }))
      .catch(() => toast.error("Error during copy"));
  };

  return (
    <>
      <button
        onClick={handleClick}
        className="cursor-pointer font-poppins-semibold mobile:h-[48px] desktop:h-[64px] desktop:text-[20px] mobile:text-[16px] text-white mobile:px-3 desktop:px-6 rounded-lg bg-[#002E5D] border-[1px] border-[#0F4A7B] drop-shadow-2xl tablet:active:scale-95 transition-transform duration-200 ease-in-out"
      >
        {label}
      </button>
    </>
  );
}

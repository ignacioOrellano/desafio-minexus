import { useEffect } from "react";

export function Toast({ value, open, handleClose }) {
  const { msg, error } = value;

  useEffect(() => {
    const tout = setTimeout(handleClose, 3000);

    return () => {
      clearTimeout(tout);
    };
  }, [open]);

  return (
    <div
      className={`fixed bottom-10 right-4 text-white font-medium rounded-lg pl-3 pr-1 py-1.5 animate-slide-in flex flex-row gap-2 justify-between items-center ${
        open ? "block" : "hidden"
      } ${error ? "bg-red-500" : "bg-green-500"}`}
    >
      <p className="text-sm">{msg}</p>
      <div
        onClick={handleClose}
        className="cursor-pointer rounded text-sm font-normal hover:bg-[rgba(0,0,0,0.2)] transition-all duration-150"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </div>
    </div>
  );
}

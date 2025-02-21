import { useTranslation } from "react-i18next";

export function ConfirmationModal({
  openModal,
  handleCloseModal,
  data,
  handleConfirm,
}) {
  const { t } = useTranslation(["confirmationModal", "common"]);
  const { name, email, country, state, city, direction } = data;

  const handleClick = () => {
    handleCloseModal();
    handleConfirm();
  };

  return (
    <div
      className={`fixed inset-0 bg-[rgb(0,0,0,0.1)] backdrop-blur-xs z-40 ${
        openModal ? "block" : "hidden"
      }`}
    >
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-lg pt-8 px-10 pb-2.5 ring-4 ring-blue-600 w-[90vw] xs:w-100 h-fit flex flex-col justify-start z-50 text-lg">
        <div
          className="absolute top-2 right-2 rounded-md xs:text-lg content-center cursor-pointer text-blue-600 hover:bg-stone-100 transition duration-150 hover:text-pink-500"
          onClick={handleCloseModal}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </div>
        <h2 className="text-2xl font-mono font-bold select-none drop-shadow-[3px_3px_#fda5d5] mb-2">
          {t("title")}
        </h2>
        <p className="p-0 m-1 break-words hyphens-manual selection:bg-pink-300 selection:text-white">
          <strong>{t("name")}:</strong> {name}
        </p>
        <p className="p-0 m-1 break-words hyphens-manual selection:bg-pink-300 selection:text-white">
          <strong>{t("email")}:</strong> {email}
        </p>
        <p className="p-0 m-1 break-words hyphens-manual selection:bg-pink-300 selection:text-white">
          <strong>{t("country")}:</strong> {country}
        </p>
        {state && (
          <p className="p-0 m-1 break-words hyphens-manual selection:bg-pink-300 selection:text-white">
            <strong>{t("state")}:</strong> {state}
          </p>
        )}
        {city && (
          <p className="p-0 m-1 break-words hyphens-manual selection:bg-pink-300 selection:text-white">
            <strong>{t("city")}:</strong> {city}
          </p>
        )}
        {direction && (
          <p className="p-0 m-1 break-words hyphens-manual selection:bg-pink-300 selection:text-white">
            <strong>{t("address")}:</strong> {direction}
          </p>
        )}
        <button
          className="bg-white text-xl font-semibold rounded-lg ring-2 ring-black px-5 py-2 my-4 transition duration-300 ease-in-out cursor-pointer hover:shadow-[8px_8px_#155dfc] hover:text-blue-600 hover:ring-blue-600 self-center"
          onClick={handleClick}
        >
          {t("confirmButton")}
        </button>
      </div>
    </div>
  );
}

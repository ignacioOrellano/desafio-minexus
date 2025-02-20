export function ConfirmationModal({
  openModal,
  handleCloseModal,
  data,
  handleConfirm,
}) {
  const { name, mail, country, state, city, direction } = data;

  const handleClick = () => {
    handleCloseModal();
    handleConfirm();
  };

  return (
    <div
      className={`fixed inset-0 bg-[rgb(0,0,0,0.1)] backdrop-blur-xs z-40 ${
        openModal ? "visible" : "invisible"
      }`}
    >
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-lg pt-8 px-10 pb-2.5 ring-4 ring-blue-600 w-80 h-fit flex flex-col justify-start z-50">
        <div
          className="absolute top-2 right-2.5 rounded-md text-lg content-center cursor-pointer text-blue-600 hover:bg-stone-100 transition duration-150 hover:text-pink-500"
          onClick={handleCloseModal}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </div>
        <h2 className="text-lg font-mono font-bold select-none drop-shadow-[3px_3px_#fda5d5] mb-2">
          ¿Desea enviar datos?
        </h2>
        <p className="p-0 m-1 text-sm break-words hyphens-manual selection:bg-pink-300 selection:text-white">
          <strong>Nombre:</strong> {name}
        </p>
        <p className="p-0 m-1 text-sm break-words hyphens-manual selection:bg-pink-300 selection:text-white">
          <strong>Email:</strong> {mail}
        </p>
        <p className="p-0 m-1 text-sm break-words hyphens-manual selection:bg-pink-300 selection:text-white">
          <strong>País:</strong> {country}
        </p>
        {state && (
          <p className="p-0 m-1 text-sm break-words hyphens-manual selection:bg-pink-300 selection:text-white">
            <strong>Estado:</strong> {state}
          </p>
        )}
        {city && (
          <p className="p-0 m-1 text-sm break-words hyphens-manual selection:bg-pink-300 selection:text-white">
            <strong>Ciudad:</strong> {city}
          </p>
        )}
        {direction && (
          <p className="p-0 m-1 text-sm break-words hyphens-manual selection:bg-pink-300 selection:text-white">
            <strong>Dirección:</strong> {direction}
          </p>
        )}
        <button
          className="bg-white font-medium rounded-lg ring-2 ring-black px-5 py-2 my-4 transition duration-300 ease-in-out cursor-pointer hover:shadow-[8px_8px_#155dfc] hover:text-blue-600 hover:ring-blue-600 self-center"
          onClick={handleClick}
        >
          Confirmar
        </button>
      </div>
    </div>
  );
}

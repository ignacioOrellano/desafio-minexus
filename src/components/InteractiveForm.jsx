import React, { useState } from "react";
import { useCountries } from "../hooks/useCountries";
import { validateForm } from "../utils/validate";
import { ConfirmationModal } from "./confirmationModal";
import { Toast } from "./Toast";

function InteractiveForm() {
  const {
    countries,
    states,
    cities,
    handleChangeCountry,
    handleChangeState,
    getCountries,
  } = useCountries();

  const [data, setData] = useState({});
  const [errors, setErrors] = useState({});

  const [openModal, setOpenModal] = useState(false);

  const [openToast, setOpenToast] = useState(false);
  const [toastValue, setToastValue] = useState({
    msg: "",
    error: false,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const fields = Object.fromEntries(new window.FormData(event.target));
    const { isValid, errors: newErrors } = validateForm(fields);
    if (!isValid) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    setData(fields);
    setOpenModal(true);
  };

  const handleConfirm = () => {
    // TODO: send data, check if res status is 200
    setOpenToast(true);
    setToastValue({
      msg: "Datos enviados con éxito!",
      error: false,
    });
    const form = document.forms["main"];
    form.reset();
    getCountries();
  };

  return (
    <>
      <ConfirmationModal
        data={data}
        openModal={openModal}
        handleCloseModal={() => setOpenModal(false)}
        handleConfirm={handleConfirm}
      />
      <Toast
        value={toastValue}
        open={openToast}
        handleClose={() => setOpenToast(false)}
      />

      <div className="flex-grow content-center place-items-center bg-zinc-50">
        <form
          name="main"
          className="px-5 py-2 w-screen xs:w-100 bg-white flex flex-col gap-2 rounded-xl ring-4 ring-blue-600 focus:shadow-[10px_10px_#155dfc]  hover:shadow-[10px_10px_#155dfc] transition duration-200 ease-in-out select-none"
          onSubmit={handleSubmit}
        >
          <p className="text-4xl font-bold font-mono drop-shadow-[5px_5px_#fda5d5] ">
            Regístrese.
          </p>
          <div className="flex flex-col justify-start gap-0.5">
            <label htmlFor="countries" className="text-lg">
              Seleccione un país
            </label>
            {countries ? (
              <select
                name="country"
                id="countries"
                className="rounded-sm p-0.5 shadow-[5px_5px_#1447e6] ring-1 ring-blue-700 hover:cursor-pointer hover:shadow-none focus:outline-none transition duration-150 ease-in-out hover:ring-2"
                onChange={handleChangeCountry}
              >
                {countries.map((country) => {
                  return (
                    <option
                      key={country.id}
                      value={country.name}
                      className={`text-blue-600 checked:font-bold`}
                    >
                      {country.name}
                    </option>
                  );
                })}
              </select>
            ) : (
              <div className="rounded-sm p-0.5 px-1.5 shadow-[5px_5px_#1447e6] ring-1 ring-blue-700 hover:cursor-pointer hover:shadow-none focus:outline-none transition duration-150 ease-in-out hover:ring-2">
                Loading...
              </div>
            )}
          </div>

          <div className="flex flex-col justify-start gap-0.5">
            <label htmlFor="states" className="text-md">
              Seleccione un estado
            </label>
            {states ? (
              <select
                name="state"
                id="states"
                className="rounded-sm p-0.5 shadow-[5px_5px_#1447e6] ring-1 ring-blue-700 hover:cursor-pointer hover:shadow-none focus:outline-none transition duration-150 ease-in-out hover:ring-2"
                onChange={handleChangeState}
              >
                {states.map((state) => {
                  return (
                    <option
                      className="text-blue-600 checked:font-bold"
                      key={state.id}
                      value={state.name}
                    >
                      {state.name}
                    </option>
                  );
                })}
              </select>
            ) : (
              <div className="rounded-sm p-0.5 px-1.5 shadow-[5px_5px_#1447e6] ring-1 ring-blue-700 hover:cursor-pointer hover:shadow-none focus:outline-none transition duration-150 ease-in-out hover:ring-2">
                Loading...
              </div>
            )}
          </div>

          {cities ? (
            cities.length > 0 && (
              <div className="flex flex-col justify-start gap-0.5">
                <label htmlFor="city" className="text-md">
                  Seleccione una ciudad
                </label>
                <select
                  name="city"
                  id="city"
                  className="rounded-sm p-0.5 shadow-[5px_5px_#1447e6] ring-1 ring-blue-700 hover:cursor-pointer hover:shadow-none focus:outline-none transition duration-150 ease-in-out hover:ring-2"
                >
                  {cities.map((city) => {
                    return (
                      <option
                        key={city.id}
                        value={city.name}
                        className="text-blue-600 checked:font-bold"
                      >
                        {city.name}
                      </option>
                    );
                  })}
                </select>
              </div>
            )
          ) : (
            <div className="flex flex-col justify-start gap-0.5">
              <p htmlFor="city" className="text-md">
                Seleccione una ciudad
              </p>
              <div className="rounded-sm p-0.5 px-1.5 shadow-[5px_5px_#1447e6] ring-1 ring-blue-700 hover:cursor-pointer hover:shadow-none focus:outline-none transition duration-150 ease-in-out hover:ring-2">
                Loading...
              </div>
            </div>
          )}

          <div className="flex flex-col justify-start gap-0.5">
            <label htmlFor="name" className="text-md">
              Nombre completo
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className={`rounded-sm py-0.5 px-2 ring-1 hover:shadow-none focus:shadow-none focus:outline-none transition duration-150 ease-in-out hover:ring-2 focus:ring-2 selection:bg-pink-400 selection:text-white ${
                errors.name
                  ? "ring-red-500 shadow-[5px_5px_#fb2c36]"
                  : " ring-blue-700 shadow-[5px_5px_#1447e6]"
              }`}
            />
            {errors.name && (
              <span className="text-xs font-bold text-red-500 pt-0.5">
                *{errors.name}
              </span>
            )}
          </div>
          <div className="flex flex-col justify-start gap-0.5">
            <label htmlFor="mail" className="text-md">
              Correo electrónico
            </label>
            <input
              type="text"
              name="mail"
              id="mail"
              className={`rounded-sm py-0.5 px-2 ring-1 hover:shadow-none focus:shadow-none focus:outline-none transition duration-150 ease-in-out hover:ring-2 focus:ring-2 selection:bg-pink-400 selection:text-white ${
                errors.mail
                  ? "ring-red-500 shadow-[5px_5px_#fb2c36]"
                  : " ring-blue-700 shadow-[5px_5px_#1447e6]"
              }`}
            />
            {errors.mail && (
              <span className="text-xs font-bold text-red-500 pt-0.5">
                *{errors.mail}
              </span>
            )}
          </div>

          <div className="flex flex-col justify-start gap-0.5">
            <label htmlFor="direction" className="text-md">
              Dirección
            </label>
            <input
              type="text"
              name="direction"
              id="direction"
              className={`rounded-sm py-0.5 px-2 ring-1 ring-blue-700 shadow-[5px_5px_#1447e6] hover:shadow-none focus:shadow-none focus:outline-none transition duration-150 ease-in-out hover:ring-2 focus:ring-2 selection:bg-pink-400 selection:text-white`}
            />
          </div>

          <div className="flex justify-around m-3">
            <button
              type="submit"
              className="bg-white text-lg font-semibold rounded-lg ring-2 ring-black px-5 py-2 transition-all duration-300 ease-in-out cursor-pointer hover:shadow-[8px_8px_#05df72] hover:text-green-400 hover:ring-green-400"
              // onClick={handleConfirm}
            >
              Guardar
            </button>
            <button
              type="reset"
              className="bg-white text-lg font-semibold rounded-lg ring-2 ring-black px-5 py-2 transition-all duration-300 ease-in-out cursor-pointer hover:shadow-[8px_8px_#fb2c36] hover:text-red-500 hover:ring-red-500"
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default InteractiveForm;

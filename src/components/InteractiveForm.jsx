import React from "react";

function InteractiveForm() {
  return (
    <div className="flex-grow content-center place-items-center bg-zinc-50">
      <form
        name="main"
        className="px-5 py-2 w-screen xs:w-100 bg-white flex flex-col gap-2 rounded-xl ring-4 ring-blue-600 focus:shadow-[10px_10px_#155dfc]  hover:shadow-[10px_10px_#155dfc] transition duration-200 ease-in-out select-none"
        // className={openModal ? "form blur" : "form"}
        // onSubmit={handleSubmit}
      >
        <p className="text-3xl font-bold font-mono">Regístrese.</p>
        <div className="flex flex-col justify-start gap-0.5">
          <label htmlFor="countries" className="text-sm">
            Seleccione un país
          </label>
          <select
            name="country"
            id="countries"
            className="rounded-sm p-0.5 shadow-[5px_5px_#1447e6] ring-1 ring-blue-700 hover:cursor-pointer hover:shadow-none focus:outline-none transition duration-150 ease-in-out hover:ring-2"
          >
            <option className="text-blue-600 checked:font-bold">
              Argentina
            </option>
            <option className="text-blue-600 checked:font-bold">Brasil</option>
            <option className="text-blue-600 checked:font-bold">Chile</option>
          </select>
          {/* {countries ? (
            <select
              name="country"
              id="countries"
              onChange={handleChangeCountry}
            >
              {countries.map((country) => {
                return (
                  <option key={country.id} value={country.name}>
                    {country.name}
                  </option>
                );
              })}
            </select>
          ) : (
            <div className="loading">Loading...</div>
          )} */}
        </div>

        <div className="flex flex-col justify-start gap-0.5">
          <label htmlFor="states" className="text-sm">
            Seleccione un estado
          </label>
          <select
            name="state"
            id="states"
            className="rounded-sm p-0.5 shadow-[5px_5px_#1447e6] ring-1 ring-blue-700 hover:cursor-pointer hover:shadow-none focus:outline-none transition duration-150 ease-in-out hover:ring-2"
          >
            <option className="text-blue-600 checked:font-bold">
              Argentina
            </option>
            <option className="text-blue-600 checked:font-bold">Brasil</option>
            <option className="text-blue-600 checked:font-bold">Chile</option>
          </select>
          {/* {states ? (
            <select name="state" id="states" onChange={handleChangeState}>
              {states.map((state) => {
                return (
                  <option key={state.id} value={state.name}>
                    {state.name}
                  </option>
                );
              })}
            </select>
          ) : (
            <div className="loading">Loading...</div>
          )} */}
        </div>

        <div className="flex flex-col justify-start gap-0.5">
          <label htmlFor="city" className="text-sm">
            Seleccione una ciudad
          </label>
          <select
            name="city"
            id="city"
            className="rounded-sm p-0.5 shadow-[5px_5px_#1447e6] ring-1 ring-blue-700 hover:cursor-pointer hover:shadow-none focus:outline-none transition duration-150 ease-in-out hover:ring-2"
          >
            <option className="text-blue-600 checked:font-bold">
              Argentina
            </option>
            <option className="text-blue-600 checked:font-bold">Brasil</option>
            <option className="text-blue-600 checked:font-bold">Chile</option>
          </select>
          {/* {cities ? (
            <select name="city" id="city">
              {cities.map((city) => {
                return (
                  <option key={city.id} value={city.name}>
                    {city.name}
                  </option>
                );
              })}
            </select>
          ) : (
            <div className="loading">Loading...</div>
          )} */}
        </div>

        <div className="flex flex-col justify-start gap-0.5">
          <label htmlFor="name" className="text-sm">
            Nombre completo
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="rounded-sm py-0.5 px-2 shadow-[5px_5px_#1447e6] ring-1 ring-blue-700 hover:cursor-pointer hover:shadow-none focus:shadow-none focus:outline-none transition duration-150 ease-in-out hover:ring-2 focus:ring-2 selection:bg-pink-400 selection:text-white"
            // className={errors.name && "error"}
          />
          {/* {errors.name && <span className="errorLabel">*{errors.name}</span>} */}
        </div>
        <div className="flex flex-col justify-start gap-0.5">
          <label htmlFor="mail" className="text-sm">
            Correo electrónico
          </label>
          <input
            type="text"
            name="mail"
            id="mail"
            className="rounded-sm py-0.5 px-2 shadow-[5px_5px_#1447e6] ring-1 ring-blue-700 hover:cursor-pointer hover:shadow-none focus:shadow-none focus:outline-none transition duration-150 ease-in-out hover:ring-2 focus:ring-2 selection:bg-pink-400 selection:text-white"
            // className={errors.name && "error"}
          />
          {/* {errors.mail && <span className="errorLabel">*{errors.mail}</span>} */}
        </div>

        <div className="flex flex-col justify-start gap-0.5">
          <label htmlFor="direction" className="text-sm">
            Dirección
          </label>
          <input
            type="text"
            name="direction"
            id="direction"
            className="rounded-sm py-0.5 px-2 shadow-[5px_5px_#1447e6] ring-1 ring-blue-700 hover:cursor-pointer hover:shadow-none focus:shadow-none focus:outline-none transition duration-150 ease-in-out hover:ring-2 focus:ring-2 selection:bg-pink-400 selection:text-white"
            // className={errors.name && "error"}
          />
        </div>

        <div className="flex justify-around m-3">
          <button
            type="submit"
            className="bg-white font-medium rounded-lg ring-2 ring-black px-5 py-2 transition-all duration-300 ease-in-out cursor-pointer hover:shadow-[8px_8px_#05df72] hover:text-green-400 hover:ring-green-400"
          >
            Guardar
          </button>
          <button
            type="reset"
            className="bg-white font-medium rounded-lg ring-2 ring-black px-5 py-2 transition-all duration-300 ease-in-out cursor-pointer hover:shadow-[8px_8px_#fb2c36] hover:text-red-500 hover:ring-red-500"
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
}

export default InteractiveForm;

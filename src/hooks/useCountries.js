import { useEffect, useState } from "react";
import {
  searchCountries,
  searchStates,
  searchCities,
} from "../services/countriesApi";

export function useCountries() {
  const [countries, setCountries] = useState();
  const [states, setStates] = useState();
  const [cities, setCities] = useState();

  const [selectedCountry, setSelectedCountry] = useState({});
  const [selectedState, setSelectedState] = useState({});

  const getCountries = async () => {
    setCountries();
    setStates();
    setCities();
    const newCountries = await searchCountries();
    if (!newCountries) return;
    setCountries(newCountries);
    setSelectedCountry(newCountries[0]);
    return newCountries;
  };

  const getStates = async ({ country }) => {
    setStates();
    setCities();
    const newStates = await searchStates({ country });
    if (!newStates) return;
    setStates(newStates);
    setSelectedState(newStates[0]);
    return newStates;
  };

  const getCities = async ({ state, country }) => {
    setCities();
    const newCities = await searchCities({ state, country });
    if (!newCities) return;
    setCities(newCities);
    return newCities;
  };

  useEffect(() => {
    getCountries();
  }, []);

  useEffect(() => {
    getStates({ country: selectedCountry });
  }, [selectedCountry]);

  useEffect(() => {
    getCities({ state: selectedState, country: selectedCountry });
  }, [selectedState]);

  const handleChangeCountry = async (event) => {
    let newSelectedCountry = await countries.find(
      (country) => country.name === event.target.value
    );
    if (!newSelectedCountry) return;
    setSelectedCountry(newSelectedCountry);
  };

  const handleChangeState = async (event) => {
    let newSelectedState = await states.find(
      (state) => state.name === event.target.value
    );
    if (!newSelectedState) return;
    setSelectedState(newSelectedState);
  };

  return {
    countries,
    getCountries,
    states,
    getStates,
    cities,
    getCities,
    handleChangeCountry,
    handleChangeState,
    getCountries,
  };
}

const API_ENDPOINT = "https://countriesnow.space/api/v0.1";

const headers = new Headers();
headers.append("Content-Type", "application/json");

const mapCountries = (countries) => {
  const mappedCountries = countries.map((country, index) => ({
    id: "co" + index,
    name: country.name,
    ciso: country.iso2,
    flag: country.flag,
  }));
  return mappedCountries;
};

const mapStates = (states) => {
  const mappedStates = states.map((state, index) => ({
    id: "st" + index,
    name: state.name,
  }));
  return mappedStates;
};

const mapCities = (cities) => {
  const mappedCities = cities.map((city, index) => ({
    id: "ci" + index,
    name: city,
  }));
  return mappedCities;
};

export async function searchCountries() {
  try {
    const res = await fetch(`${API_ENDPOINT}/countries/flag/images`, {
      method: "GET",
    });
    const json = await res.json();

    return mapCountries(json.data);
  } catch (error) {
    console.log(error);
    throw new Error("Error searching countries");
  }
}

export async function searchStates({ country }) {
  if (!country) return null;

  const { name } = country;
  if (!name) return null;

  try {
    const res = await fetch(`${API_ENDPOINT}/countries/states`, {
      method: "POST",
      body: JSON.stringify({ country: name }),
      headers: headers,
    });
    const json = await res.json();

    return mapStates(json.data.states);
  } catch (error) {
    console.log(error);
    throw new Error("Error searching states");
  }
}

export async function searchCities({ state, country }) {
  if (!state || !country) return null;

  if (!state.name || !country.name) return null;

  try {
    const res = await fetch(`${API_ENDPOINT}/countries/state/cities`, {
      method: "POST",
      body: JSON.stringify({ country: country.name, state: state.name }),
      headers: headers,
    });
    const json = await res.json();

    return mapCities(json.data);
  } catch (error) {
    console.log(error);
    throw new Error("Error searching cities");
  }
}

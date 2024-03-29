/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useContext, useReducer } from "react";

const CitiesContext = createContext();

function CitiesProvider({ children }) {
  const BASE_URL = "http://localhost:8000";

  const initialState = {
    cities: [],
    isLoading: false,
    currentCity: {},
    error: "",
  };

  function reducer(state, action) {
    switch (action.type) {
      case "loading":
        return { ...state, isLoading: true };

      case "cities/loaded":
        return {
          ...state,
          isLoading: false,
          cities: action.payload,
        };

      case "city/loaded":
        return { ...state, isLoading: false, currentCity: action.payload };

      case "city/created":
        return {
          ...state,
          isLoading: false,
          cities: [...state.cities, action.payload],
          currentCity: action.payload,
        };

      case "city/deleted":
        return {
          ...state,
          isLoading: false,
          cities: state.cities.filter((city) => city.id !== action.payload),
          currentCity: {},
        };

      case "rejected":
        return {
          ...state,
          isLoading: false,
          error: action.payload,
        };

      default:
        throw new Error("Unknown action type");
    }
  }

  // const [cities, setCities] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [currentCity, setCurrentCity] = useState({});
  const [{ cities, isLoading, currentCity, error }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(function () {
    dispatch({ type: "loading" });
    async function fetchCities() {
      try {
        const response = await fetch(`${BASE_URL}/cities`);
        const data = await response.json();
        dispatch({
          type: "cities/loaded",
          payload: data,
        });
      } catch (error) {
        dispatch({
          type: "rejected",
          payload: "There was an error loading data...",
        });
      }
    }
    fetchCities();
  }, []);

  async function createCity(newCity) {
    dispatch({ type: "loading" });
    try {
      const response = await fetch(`${BASE_URL}/cities`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newCity),
      });
      const data = await response.json();
      dispatch({ type: "city/created", payload: data });
    } catch (rejected) {
      dispatch({
        type: "rejected",
        payload: "Ther was an error creating city...",
      });
    }
  }

  async function deleteCity(id) {
    dispatch({ type: "loading" });
    try {
      await fetch(`${BASE_URL}/cities/${id}`, {
        method: "DELETE",
      });
      dispatch({ type: "city/delted", payload: id });
    } catch (error) {
      dispatch({
        type: "rejected",
        payload: "There was an error deleting city",
      });
    }
  }

  async function getCity(id) {
    dispatch({ type: "loading" });
    try {
      const response = await fetch(`${BASE_URL}/cities/${id}`);
      const data = await response.json();
      dispatch({ type: "city/loaded", payload: data });
    } catch (error) {
      dispatch({
        type: "rejected",
        payload: "there was an error loading city",
      });
    }
  }

  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
        currentCity,
        getCity,
        createCity,
        deleteCity,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined) {
    throw new Error("useCities must be used within a CitiesContext");
  }
  return context;
}

export { useCities, CitiesProvider };

import {
  FILTER_ORIGIN,
  FILTER_TYPES,
  GET_ALL,
  GET_BY_NAME,
  NEXT,
  ORDER,
  POST_ON_DB,
  PREV,
} from "./action-types";

const initialState = {
  allPokemons: [],
  numPage: 1,
  filteredPokemons: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL:
      return {
        ...state,
        allPokemons: payload,
        filteredPokemons: payload,
      };
    case GET_BY_NAME:
      return {
        ...state,
        filteredPokemons: payload,
      };
    case POST_ON_DB:
      return {
        ...state,
      };
    case FILTER_TYPES:
      const pokemonsTypesFiltered = state.filteredPokemons.filter((pokemon) =>
        pokemon.Types
          ? pokemon.Types.find((type) => {
              return type.name === payload;
            })
          : false
      );
      return {
        ...state,
        filteredPokemons:
          payload === "Select" 
          ? [...state.allPokemons] 
          : pokemonsTypesFiltered,
        numPage: 1,
      };
    case FILTER_ORIGIN:
      if (payload === "All") {
        return {
          ...state,
          filteredPokemons: state.allPokemons,
        };
      }
      return {
        ...state,
        filteredPokemons:
          payload === "Existing"
            ? state.allPokemons.filter((pokemon) => pokemon.api_id)
            : state.allPokemons.filter((pokemon) => !pokemon.api_id),
        numPage: 1,
      };
    case ORDER:
      const allPokemonsCopy = [...state.filteredPokemons];

      if (payload === "A") {
        allPokemonsCopy.sort((a, b) => {
          if (a.name < b.name) {
            return -1;
          }
          if (a.name > b.name) {
            return 1;
          }
          return 0;
        });
      }
      if (payload === "D") {
        allPokemonsCopy.sort((a, b) => {
          if (a.name > b.name) {
            return -1;
          }
          if (a.name < b.name) {
            return 1;
          }
          return 0;
        });
      }
      if (payload === "Max") {
        allPokemonsCopy.sort((a, b) => b.attack - a.attack);
      }
      if (payload === "Min") {
        allPokemonsCopy.sort((a, b) => a.attack - b.attack);
      }

      return {
        ...state,
        filteredPokemons: allPokemonsCopy,
      };
    case PREV:
      return {
        ...state,
        numPage: state.numPage - 1,
      };
    case NEXT:
      return {
        ...state,
        numPage: state.numPage + 1,
      };

    default:
      return { ...state };
  }
};

export default reducer;

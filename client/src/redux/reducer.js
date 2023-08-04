import { GET_ALL, GET_BY_NAME } from "./action-types";

const initialState = {
  allPokemons: [],
};

const reducer = (state = initialState, { type, payload }) => {

  switch (type) {
    case GET_ALL:
      return {
        ...state,
        allPokemons: payload,
      };
    case GET_BY_NAME:
      return {
        payload,
      };

    default:
      return { ...state };
  }
};

export default reducer;

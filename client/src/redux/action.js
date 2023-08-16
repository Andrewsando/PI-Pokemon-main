import {
  GET_ALL,
  GET_BY_NAME,
  POST_ON_DB,
  FILTER_TYPES,
  FILTER_ORIGIN,
  ORDER,
  PREV,
  NEXT,
} from "./action-types";
import axios from "axios";

export const getAll = () => {
  const endpoint = "http://localhost:3001/pokemons";
  return async (dispatch) => {
    try {
      const { data } = await axios(endpoint);
      return dispatch({
        type: GET_ALL,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export const getByName = (name) => {
  const endpoint = `http://localhost:3001/pokemons?name=${name}`;
  return async (dispatch) => {
    try {
      const { data } = await axios(endpoint);
      return dispatch({
        type: GET_BY_NAME,
        payload: data,
      });
    } catch (error) {
      return dispatch({ type: GET_BY_NAME, payload: [] });
    }
  };
};
export const postOnDB = (obj) => {
  console.log("entré a la action postOnDB");
  const endpoint = "http://localhost:3001/pokemons";
  return async (dispatch) => {
    try {
      console.log("entré al try");
      await axios.post(endpoint, obj);
      console.log("data3");
      return dispatch({
        type: POST_ON_DB,
      });
    } catch (error) {
      return error.message;
    }
  };
};
export const filterTypes = (types) => {
  return (dispatch) =>
    dispatch({
      type: FILTER_TYPES,
      payload: types,
    });
};
export const filterOrigin = (origin) => {
  return (dispatch) =>
    dispatch({
      type: FILTER_ORIGIN,
      payload: origin,
    });
};

export const orderCards = (orden) => {
  return (dispatch) =>
    dispatch({
      type: ORDER,
      payload: orden,
    });
};

export function prev() {
  return {
    type: PREV,
  };
}
export function next() {
  return {
    type: NEXT,
  };
}

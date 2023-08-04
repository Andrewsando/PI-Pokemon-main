import { GET_ALL, GET_BY_NAME} from "./action-types";
import axios from "axios";

export const getAll = () => {
    console.log('holi')
    const endpoint = "http://localhost:3001/pokemons";
    return async (dispatch) =>{
        try{
            const {data} = await axios(endpoint)
            console.log('datitaaa',data)
            return dispatch({
                type: GET_ALL,
                payload: data
            })
           
        } catch(error){
            console.log(error)
        }
    }
}
export const getByName = (name)=>{
    const endpoint = `http://localhost:3001/pokemons?name=${name}`
    return async (dispatch)=>{
        try{
            const {data} = await axios(endpoint)
            console.log('data2', data);
            return dispatch({
                type: GET_BY_NAME,
                payload: data
            })
        }
        catch(error){
            console.log(error.message)
        }
    }
}
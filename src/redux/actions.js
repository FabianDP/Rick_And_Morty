import { ADD_FAV, REMOVE_FAV, FILTER_CARDS, ORDER_CARDS } from "./action-type"
import axios from "axios";

export const addFav = (character) => {
    // return{type:ADD_FAV, payload:character }
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return async (dispatch) => {
        try {
            const {data}=await axios.post(endpoint, character)
            if (!data.length) throw Error('no hay datos') 
                return dispatch({
                    type: ADD_FAV,
                    payload: data,
                });
        } catch (error) {
            console.log(error.message);
        }

    };
}
export const removeFav = (id) => {
    // return{type:REMOVE_FAV, payload:id }
    const endpoint =`http://localhost:3001/rickandmorty/fav/${id}`;
    return async (dispatch) => {
        try {
            const {data}= await axios.delete(endpoint)
          
                return dispatch({
                    type: REMOVE_FAV,
                    payload: data,
                });   
        } catch (error) {
            console.log(error.message);
        }
    };
}
// id o character
export const filterCards = (gender) => {
    return { type: FILTER_CARDS, payload: gender }
}
// 2opc {a,b}[a,b] o direc order=>id o char
export const orderCards = (order) => {
    return { type: ORDER_CARDS, payload: order }
}
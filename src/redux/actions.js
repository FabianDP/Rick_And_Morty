import { ADD_FAV,REMOVE_FAV,FILTER_CARDS,ORDER_CARDS } from "./action-type"

export const addFav=(character)=>{
    return{type:ADD_FAV, payload:character }
}
export const removeFav=(id)=>{
    return{type:REMOVE_FAV, payload:id }
}   
                        // id o character
export const filterCards=(gender)=>{
    return {type:FILTER_CARDS, payload:gender }
}
                        // 2opc {a,b}[a,b] o direc order=>id o char
export const orderCards=(order)=>{
    return {type:ORDER_CARDS , payload:order }
}
import { ADD_FAV, REMOVE_FAV, FILTER_CARDS, ORDER_CARDS } from "./action-type"
const initialState = {
    myFavorites: [],
    allCharacters: [],
}
//type, paylod
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAV:
            return {
                // ...state,
                // myFavorites:[...state.allCharacters,action.payload],
                // allCharacters:[...state.allCharacters,action.payload]
                ...state,
                myFavorites: action.payload,
                allCharacters: action.payload
            }
        case REMOVE_FAV:
            return {
                ...state,
                myFavorites: action.payload,
                allCharacters: action.payload
            };
        // return{

        //     ...state,
        //     myFavorites:state.myFavorites.filter(fav=>fav.id !== action.payload)
        // }
        case FILTER_CARDS:
            const allCharactersFil = state.allCharacters.filter(fil => fil.gender === action.payload)
            return {
                ...state,
                myFavorites:
                    action.payload === 'All' ? [...state.allCharacters] : allCharactersFil
                // ||[...state.allCharacters]

            }
        case ORDER_CARDS:
            const allCharactersOrd = [...state.allCharacters]
            return {
                ...state,
                myFavorites:
                    action.payload === "A"
                        ? allCharactersOrd.sort((a, b) => a.id - b.id)
                        : allCharactersOrd.sort((a, b) => b.id - a.id)
            }

        default:
            return { ...state }
    }
}

export default reducer;
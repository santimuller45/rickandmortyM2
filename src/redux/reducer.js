import {ADD_FAV, DELETE_FAV} from "./actions";

const initialState = {
    myFavorites:[],
    allCharacters: []
}
function reducerFav(state = initialState, actions) {
    switch(actions.type) {
        case ADD_FAV: {
            return {
                ...state,
                myFavorites: [...state.allCharacters, actions.payload],
                allCharacters: [...state.allCharacters, actions.payload]
            }
        }
        case DELETE_FAV: {
            return {
                ...state,
                myFavorites: state.myFavorites.filter(char => (char.id !== actions.payload))
            }
        }
        case "FILTER": {
            const filteredChar = state.allCharacters.filter(char => char.gender === actions.payload);
            return {
                ...state,
                myFavorites: filteredChar
            }
        }
        case "ORDER": {
            const orderChar = state.allCharacters.sort((elemA,elemB) => {
                if(actions.payload === "Ascendente") {
                    if(elemA.id < elemB.id) return -1;
                    if(elemB.id < elemA.id) return 1;
                    return 0;
                } else {
                    if(elemA.id < elemB.id) return 1;
                    if(elemB.id < elemA.id) return -1;
                    return 0;
                }
            })
            return {
                ...state,
                myFavorites: [...orderChar]
            }
        }
        default:
            return {...state};
    }
}

export default reducerFav
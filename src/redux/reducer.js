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
                myFavorites: [...state.myFavorites, actions.payload]
            }
        }
        case DELETE_FAV: {
            return {
                ...state,
                myFavorites: state.myFavorites.filter(char => (char.id !== actions.payload))
            }
        }
        case "FILTER": {
            return {
                ...state,
                myFavorites: [{...state.allCharacters}].filter((element) => element.gender === actions.payload)
            }
        }
        case "ORDER": {
            return {
                ...state,
                myFavorites: [{...state.allCharacters}].sort((elementA, elementB) => actions.payload === "Ascendente" ? elementA.id - elementB.id : elementB.id - elementA.id)
            }
        }
        default:
            return {...state};
    }
}

export default reducerFav
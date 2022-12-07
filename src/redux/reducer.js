import {ADD_FAV, DELETE_FAV} from "./actions";

const initialState = {
    myFavorites:[]
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
        default:
            return {...state};
    }
}

export default reducerFav
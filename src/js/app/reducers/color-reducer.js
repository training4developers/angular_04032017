import { actionTypes } from '../action-types';


export const colorReducer = (state = { colors: [] }, action) => {

    switch(action.type) {
        case actionTypes.ADD_COLOR:
            return Object.assign({}, state, { colors: state.colors.concat(action.color) });
        default:
            return state;
    }

};
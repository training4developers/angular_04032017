import { actionTypes } from '../action-types';

export const colors = (state = { status: '', list: [] }, action) => {
    console.log('colors reducer executed');
    switch (action.type) {
        case actionTypes.REFRESH_COLORS_REQUEST:
            return Object.assign({}, state, { status: 'LOADING', list: action.colors });
        case actionTypes.REFRESH_COLORS_DONE:
            return Object.assign({}, state, { status: 'LOADED', list: action.colors });
        case actionTypes.ADD_COLOR:
            return state.concat(action.color);
        default:
            return state;
    }
};

export const cars = (state = [], action) => {
    console.log('cars reducer executed');
    switch (action.type) {
        case actionTypes.ADD_CAR:
            return state.concat(action.car);
        default:
            return state;
    }
};

// export const appReducer = (state = {
//     colors: [],
//     cars: [],
// }, action) => {
//     let newState = Object.assign({}, state);
//     newState.colors = colorReducer(state.colors, action);
//     newState.cars = carReducer(state.cars, action);

//     return newState;
// };
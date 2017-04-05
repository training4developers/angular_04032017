import { actionTypes } from '../action-types';

export const colors = (state = { status: '', list: [] }, action) => {
    console.log('colors reducer executed');
    switch (action.type) {
        case actionTypes.REFRESH_COLORS_REQUEST:
            return Object.assign({}, state, { status: 'LOADING', list: action.colors });
        case actionTypes.REFRESH_COLORS_DONE:
            return Object.assign({}, state, { status: 'LOADED', list: action.colors });
        case actionTypes.ADD_COLOR_REQUEST:
            return Object.assign({}, state, { status: 'LOADING', list: [] });
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

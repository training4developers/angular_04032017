import { actionTypes } from '../action-types';

export const refreshColorsRequest = () => ({
    type: actionTypes.REFRESH_COLORS_REQUEST,
    colors:[],
});

export const refreshColorsDone = colors => ({
    type: actionTypes.REFRESH_COLORS_DONE,
    colors
});

export const refreshColors = () => {

    return dispatch => {

        dispatch(refreshColorsRequest());

        return fetch('http://localhost:3010/colors')
            .then(res => res.json())
            .then(colors => {
                dispatch(refreshColorsDone(colors.map(color =>
                    color.name)));
            });
    };

};
import { actionTypes } from '../action-types';
import { refreshColorsDone } from './refresh-colors-action';

export const addColorRequest = color => ({
    type: actionTypes.ADD_COLOR_REQUEST,
    color
});

export const addColorDone = color => ({
    type: actionTypes.ADD_COLOR_DONE,
    color
});

export const addColor = color => {

    return dispatch => {

        dispatch(addColorRequest(color));

        return fetch('http://localhost:3010/colors', {
            method: 'POST',
            body: JSON.stringify({ name: color }),
            headers: { 'Content-Type': 'application/json' },
        })
            .then(() => fetch('http://localhost:3010/colors'))
            .then(res => res.json())
            .then(colors => dispatch(refreshColorsDone(colors.map(color => color.name))));

    };

};
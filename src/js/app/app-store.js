import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { colors, cars } from './reducers/app-reducer';

export const appStore = createStore(combineReducers({
    colors, cars
}), applyMiddleware(thunk));
import { createStore } from 'redux';

import { colorReducer } from './reducers/color-reducer';

export const appStore = createStore(colorReducer);
import { bindActionCreators } from 'redux';

import { addColor } from '../actions/add-color-action';

// class Actions {

//     constructor(appStore) {
//         return bindActionCreators({ addColor }, appStore.dispatch);
//     }

// }

const actionsFactory = (appStore) => {
    return bindActionCreators({ addColor }, appStore.dispatch);
};

actionsFactory.$inject = ['appStore'];

export const actions = [ 'actions', actionsFactory ];
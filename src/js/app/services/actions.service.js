import { bindActionCreators } from 'redux';

import { addColor } from '../actions/add-color-action';
import { refreshColors } from '../actions/refresh-colors-action';

// class Actions {

//     constructor(appStore) {
//         return bindActionCreators({ addColor }, appStore.dispatch);
//     }

// }

 

const actionsFactory = (appStore, $rootScope) => {
    let boundActions = bindActionCreators({
        addColor,
        refreshColors
    }, appStore.dispatch);

    let rc = boundActions.refreshColors;

    boundActions.refreshColors = () =>
        rc().then(() => $rootScope.$apply());

    return boundActions;
};

actionsFactory.$inject = ['appStore', '$rootScope'];

export const actions = [ 'actions', actionsFactory ];
import { bindActionCreators } from 'redux';

import { addColor } from '../actions/add-color-action';
import { refreshColors } from '../actions/refresh-colors-action';

const actionsFactory = (appStore, $rootScope) => {

    let boundActions = bindActionCreators({
        addColor,
        refreshColors
    }, appStore.dispatch);

    let digestBoundActions = {};
    Object.keys(boundActions).forEach(boundActionKey => {
        const fn = boundActions[boundActionKey];
        digestBoundActions[boundActionKey] = (...params) =>
            fn(...params).then(() => $rootScope.$apply());
    });

    return digestBoundActions;
};

actionsFactory.$inject = ['appStore', '$rootScope'];

export const actions = [ 'actions', actionsFactory ];
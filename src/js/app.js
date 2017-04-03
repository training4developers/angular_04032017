import 'angular';
import { createStore, bindActionCreators } from 'redux';

import 'bootstrap-loader';
import '../css/styles.scss';

angular.module('MyApp', [])
    .constant('actionTypes', {
        ADD: 'ADD',
        SUBTRACT: 'SUBTRACT',
    })
    .service('appStore', ['actionTypes', function(actionTypes) {

        const reducer = (state = 0, action) => {
            console.log('state', state, 'action', action);
            switch (action.type) {
                case actionTypes.ADD:
                    return state + action.value;
                case actionTypes.SUBTRACT:
                    return state - action.value;
                default:
                    return state;
            }
        };

        return createStore(reducer);
    }])
    .factory('actions', ['actionTypes', 'appStore', function(actionTypes, appStore) {
        const add = value => ({ type: actionTypes.ADD, value });
        const subtract = value => ({ type: actionTypes.SUBTRACT, value });
        return bindActionCreators({ add, subtract }, appStore.dispatch);
    }])
    .controller('calculatorCtrl', ['appStore', '$scope', 'actions', function(appStore, $scope, actions) {

        this.inputValue = 0;
        this.results = 0;

        const appStoreUnsubscribe = appStore.subscribe(() => {
            this.results = appStore.getState();
        });

        $scope.$on('$destroy', () => {
            appStoreUnsubscribe();
        });

        this.add = () => {
            actions.add(Number(this.inputValue));
        };

        this.subtract = function() {
            actions.subtract(Number(this.inputValue));
        };

    }]);

import 'angular';
import { createStore } from 'redux';

import 'bootstrap-loader';
import '../css/styles.scss';




// my code has a bug, where is it?
angular.module('MyApp', [])
    .service('appStore', function() {

        const reducer = (state = 0, action) => {
            console.log('state', state, 'action', action);
            switch (action.type) {
                case 'ADD':
                    return state + action.value;
                case 'SUBTRACT':
                    return state - action.value;
                default:
                    return state;
            }
        };

        return createStore(reducer);
    })
    .controller('calculatorCtrl', ['appStore', function(appStore) {

        this.inputValue = 0;
        this.results = 0;

        appStore.subscribe(() => {
            this.results = appStore.getState();
        });

        this.add = () => {
            appStore.dispatch({ type: 'ADD', value: Number(this.inputValue) });
        };

        this.subtract = function() {
            appStore.dispatch({ type: 'SUBTRACT', value: Number(this.inputValue) });
        };

    }]);

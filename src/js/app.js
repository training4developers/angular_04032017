import 'angular';

import 'bootstrap-loader';
import '../css/styles.scss';

// my code has a bug, where is it?
angular.module('MyApp', [])
    .controller('calculatorCtrl', function() {

        this.inputValue = 0;
        this.results = 0;

        this.add = () => {
            this.results += Number(this.inputValue);
        };

        this.subtract = function() {
            this.results -= Number(this.inputValue);
        };

    });

// example code

import { createStore } from 'redux';

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

const store = createStore(reducer);

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch({ type:'ADD', value: 1 });
store.dispatch({ type:'SUBTRACT', value: 2 });
store.dispatch({ type:'ADD', value: 3 });
store.dispatch({ type:'SUBTRACT', value:4 });
store.dispatch({ type:'ADD', value:5 });




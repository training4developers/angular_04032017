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

// const createStore = reducerFn => {

//     let state;

//     const subscribers = [];

//     return {
//         getState: () => state,
//         dispatch: action => {
//             state = reducerFn(state, action);
//             subscribers.forEach(cb => cb());
//         },
//         subscribe: cb => subscribers.push(cb),
//     };

// };

const store = createStore(reducer);

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch({ type:'ADD', value: 1 });
store.dispatch({ type:'SUBTRACT', value: 2 });
store.dispatch({ type:'ADD', value: 3 });
store.dispatch({ type:'SUBTRACT', value:4 });
store.dispatch({ type:'ADD', value:5 });

// import 'angular';

// import 'bootstrap-loader';
// import '../css/styles.scss';

// create a list of colors on the model
// display the list of colors as an unordered list in the template

// $scope.$ctrl = new constructorFn();

// angular.module('MyApp', [])
//     .component('main', {
//         template: `
//             <h1>{{$ctrl.message}}</h1>
//             <ul>
//                 <li ng-repeat="color in $ctrl.colors">
//                     {{color}}
//                 </li>
//             </ul>
//         `,
//         controller: function() {
//             this.message = 'Hello World!!!';
//             this.colors = ['red','yellow','blue','green','white','saffron','black'];
//         }
//     });

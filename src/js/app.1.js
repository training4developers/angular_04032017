
// actions
const actions = [
    { type:'ADD', value: 1 },
    { type:'SUBTRACT', value: 2 },
    { type:'ADD', value: 3 },
    { type:'SUBTRACT', value:4 },
    { type:'ADD', value:5 },
];
const initialState = 0;

// const sum = nums.reduce( (prev, current) => prev + current );
// pure function
// does not modify parameters
// does not use outside values
// does not cause side-effects
// only output is the return value
const finalState = actions.reduce( (state, action) => {
    console.log('state', state, 'action', action);
    switch (action.type) {
        case 'ADD':
            return state + action.value;
        case 'SUBTRACT':
            return state - action.value;
        default:
            return state;
    }
}, initialState );

console.log('state', finalState);




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

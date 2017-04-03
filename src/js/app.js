import 'angular';

angular.module('MyApp', [])
    .component('main', {
        template: `
            <h1>{{$ctrl.message}}</h1>
        `,
        controller: function() {
            this.message = 'Hello World!!!';
        }
    });

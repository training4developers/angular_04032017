
import { appComponent } from './app.component';

export const appModule = angular.module('App', [])
    .filter('demo', function() {
        return function(value) {
            console.log('demo ran');
            return value;
        };
    })
    .component(...appComponent);
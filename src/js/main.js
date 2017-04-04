import 'angular';

import '../css/styles.scss';

import { appModule } from './app/app.module';

document.addEventListener('DOMContentLoaded', () => {

    angular.bootstrap(document.querySelector('main'), [ appModule.name ]);

});
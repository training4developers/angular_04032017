
import { appComponent } from './app.component';
import { itemList } from './components/item-list.component';

export const appModule = angular.module('App', [])
    .component(...appComponent)
    .component(...itemList);
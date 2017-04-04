
import { appComponent } from './app.component';
import { itemList } from './components/item-list.component';
import { colorForm } from './components/color-form.component';

export const appModule = angular.module('App', [])
    .component(...appComponent)
    .component(...itemList)
    .component(...colorForm);
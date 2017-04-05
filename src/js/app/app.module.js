
import { appStore } from './services/app-store.service';
import { actions } from './services/actions.service';

import { appComponent } from './app.component';
import { itemList } from './components/item-list.component';
import { colorForm } from './components/color-form.component';
import { colorTool } from './components/color-tool.component';



export const appModule = angular.module('App', [])
    .value('appStore', appStore)
    .factory(...actions)
    .component(...appComponent)
    .component(...itemList)
    .component(...colorForm)
    .component(...colorTool);
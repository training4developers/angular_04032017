import 'angular';
import 'angular-mocks';

import { appModule } from './app.module';

// the appStore and actions need mocks to test appComponent
// the solution also demonstrates in general on approach to mocking
// your own services, appMockModule could be moved its own file
// so other unit tests could make use of it
const appMockModule = angular.module('App.Mock', [])
    .value('appStore', { 
        getState() { },
        subscribe() {
            return () => {};
        },
        dispatch() { },
    })
    .value('actions', { 
        refreshColors() { },
        addColor() { },
    });

describe('app component tests', () => {

    let mockScope = null;
    let compileSvc = null;

    beforeEach(angular.mock.module(appModule.name));
    beforeEach(angular.mock.module(appMockModule.name));

    beforeEach(angular.mock.inject([
        '$rootScope', '$compile', 'appStore',
        ($rootScope, $compile, appStore) => {

            console.log(appStore.getState());

            mockScope = $rootScope.$new(true);
            compileSvc = $compile;

        },
    ]));

    it('dom structure', () => {

        const linkingFn = compileSvc('<main></main>');
        const componentElement = linkingFn(mockScope);

        mockScope.$parent.$digest();

        expect(componentElement.find('h3').text(), 'Color Tool!');
    });

});


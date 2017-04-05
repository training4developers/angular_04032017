import 'angular';
import 'angular-mocks';

import { appModule } from '../app.module';

describe('item list tests', () => {

    let mockScope = null;
    let compileSvc = null;

    beforeEach(angular.mock.module(appModule.name));

    beforeEach(angular.mock.inject(['$rootScope', '$compile', ($rootScope, $compile) => {

        mockScope = $rootScope.$new(true);

        mockScope.$ctrl = {
            colors: [ 'red', 'blue', 'white' ],
        };

        compileSvc = $compile;

    }]));

    it('dom structure', () => {

        const linkingFn = compileSvc('<item-list items="$ctrl.colors"></item-list>');
        const componentElement = linkingFn(mockScope);

        mockScope.$digest();

        expect(componentElement.find('li').length, 3);
    });

});


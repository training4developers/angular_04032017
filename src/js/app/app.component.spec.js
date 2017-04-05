import 'angular';
import 'angular-mocks';

import { appModule } from './app.module';

describe('app component tests', () => {

    let mockScope = null;
    let compileSvc = null;


    beforeEach(angular.mock.module(appModule.name));

    beforeEach(angular.mock.inject(['$rootScope', '$compile', ($rootScope, $compile) => {

        mockScope = $rootScope.$new(true);
        compileSvc = $compile;

    }]));

    it('dom structure', () => {

        const linkingFn = compileSvc('<main></main>');
        const componentElement = linkingFn(mockScope);

        mockScope.$parent.$digest();


        expect(componentElement.find('h3').text(), 'Color Tool!');
    });

});


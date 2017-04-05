class ColorTool {

    constructor(appStore, actions) {
        this.appStore = appStore;
        this.actions = actions;

        this.$onInit = () => {
            this.appStoreUnsubscribe = this.appStore.subscribe(() => {
                this.colors = this.appStore.getState().colors;
            });
        };

        this.$onDestroy = () => {
            this.appStoreUnsubscribe();
        };
    }

    colors = [];
}

ColorTool.$inject = [ 'appStore', 'actions' ];

export const colorTool = [ 'colorTool', {
    templateUrl: 'app/components/color-tool.component.html',
    controller: ColorTool,
    transclude: {
        // slot name: slot selector
        header: 'header',
        footer: 'footer'
    },
} ];
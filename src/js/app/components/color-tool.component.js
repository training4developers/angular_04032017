class ColorTool {

    constructor(appStore, actions) {
        this.appStore = appStore;
        this.actions = actions;

        this.$onInit = () => {

            this.appStoreUnsubscribe = this.appStore.subscribe(() => {
                this.colors = this.appStore.getState().colors.list;
            });

            this.actions.refreshColors();
        };

        this.$onDestroy = () => {
            this.appStoreUnsubscribe();
        };
    }

    colors = [];
}

ColorTool.$inject = [ 'appStore', 'actions', '$scope' ];

export const colorTool = [ 'colorTool', {
    templateUrl: 'app/components/color-tool.component.html',
    controller: ColorTool,
    transclude: {
        header: 'header',
        footer: 'footer'
    },
} ];
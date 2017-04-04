class ColorTool {
    colors = ['red','blue','yellow'];

    addColor(color) {
        this.colors = this.colors.concat(color);
    }

}

export const colorTool = [ 'colorTool', {
    templateUrl: 'app/components/color-tool.component.html',
    controller: ColorTool,
    transclude: {
        // slot name: slot selector
        header: 'header',
        footer: 'footer'
    },
} ];
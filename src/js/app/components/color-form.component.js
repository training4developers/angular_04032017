
class ColorForm {

    newColor = '';

    addColor() {
        this.onNewColor({ color: this.newColor });
    }
}

export const colorForm = [ 'colorForm', {
    templateUrl: 'app/components/color-form.component.html',
    controller: ColorForm,
    bindings: {
        onNewColor: '&', // outputs binding
    }
} ];
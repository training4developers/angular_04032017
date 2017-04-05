
class ColorForm {

    newColor = '';

    formValues = {
        newColor: '',
    };

    addColor() {
        this.newColor = this.formValues.newColor;

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
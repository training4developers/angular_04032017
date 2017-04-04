
class AppComponent {

    header = 'Color Tool';
    colors = ['red','blue','yellow'];
    hotels = [
        'Holiday Inn',
        'Holiday Inn Express',
        'Holiday Inn Resorts',
        'Holiday Inn Club Vacations',
    ];
    newColor = '';

    addColor() {
        this.colors = this.colors.concat(this.newColor);
    }
}

export const appComponent = [ 'main', {
    templateUrl: 'app/app.component.html',
    controller: AppComponent,
} ];
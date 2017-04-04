
class AppComponent {

    header = 'Color Tool';
    colors = ['red','blue','yellow'];
    hotels = [
        'Holiday Inn',
        'Holiday Inn Express',
        'Holiday Inn Resorts',
        'Holiday Inn Club Vacations',
    ];

    addColor(color) {
        this.colors = this.colors.concat(color);
    }
}

export const appComponent = [ 'main', {
    templateUrl: 'app/app.component.html',
    controller: AppComponent,
} ];
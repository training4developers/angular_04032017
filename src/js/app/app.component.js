
class AppComponent {

    header = 'Color Tool';
    colors = ['red','blue','yellow'];
    lastColors = null;
    newColor = '';

    addColor() {
        this.colors = this.colors.concat(this.newColor);
    }

    get sortedColors() {

        if (this.lastColors !== this.colors) {
            console.log('sorting colors');
            this.colors.sort();
            this.lastColors = this.colors;
        }

        return this.colors;
    }
}

// function AppComponent() {

//     Object.defineProperty(this, 'sortedColors', {
//         configurable: true,
//         enumerable: true,
//         get: function() {
//             return this.colors;
//         }
//     });

// }

export const appComponent = [ 'main', {
    templateUrl: 'app/app.component.html',
    controller: AppComponent,
} ];
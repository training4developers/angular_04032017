
class ItemList {
    items = [];
}

export const itemList = [ 'itemList', {
    templateUrl: 'app/components/item-list.component.html',
    controller: ItemList,
    bindings: {
        items: '<', // inputs
    }
} ];
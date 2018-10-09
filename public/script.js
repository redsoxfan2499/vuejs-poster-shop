new Vue({
    el: '#app',
    data: {
        message: 'test',
        total: 0,
        items: [
            {
                title: 'Item 1',
            }, {
                title: 'Item 2',
            }, {
                title: 'Item 3',
            }
        ],
        cart: []
    },
    methods: {
        addItem: function (index) {
            this.total += 9.99;
            var item = this.items[index];
            this.cart.push({
                title: item.title,
                qty: 1
            });


        }
    }
});
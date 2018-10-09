new Vue({
    el: '#app',
    data: {
        message: 'test',
        total: 0,
        items: [
            {
                title: 'Item one',
            }, {
                title: 'Item two',
            }, {
                title: 'Item three',
            }
        ]
    },
    methods: {
        addItem: function () {
            this.total += 9.99;
        }
    }
});
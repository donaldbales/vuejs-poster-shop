new Vue({
  el: '#app', // assign a css selector string for where Vue can access the DOM
  data: {
    total: 0,
    items: [
      { title: 'Item 1' },
      { title: 'Item 2' },
      { title: 'Item 3' }
    ],
    cart: []
  },          // global data 
  methods: {
    addItem: function(index) {
      this.total += 9.99;
      var item = this.items[index]; 
      this.cart.push({
        title: item.title,
        qty: 1
      });
    }
  }
});

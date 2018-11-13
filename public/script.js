var PRICE = 9.99;

new Vue({
  el: '#app', // assign a css selector string for where Vue can access the DOM
  data: {
    total: 0,
    items: [
      { id: 1, title: 'Item 1' },
      { id: 2, title: 'Item 2' },
      { id: 3, title: 'Item 3' }
    ],
    cart: []
  },          // global data 
  methods: {
    addItem: function(index) {
      this.total += PRICE;
      var item = this.items[index]; 
      var found = false;
      for (var i = 0; i < this.cart.length; i++) {
        if (this.cart[i].id === item.id ) {
          found = true;
          this.cart[i].qty++;
        }
      }
      if (!found) {
        this.cart.push({
          id: item.id,
          title: item.title,
          qty: 1,
          price: PRICE 
        });
      }
    },
    dec: function(item) {
      item.qty--;
      this.total -= PRICE;
      if (item.qty <= 0) {
        for (var i = 0; i < this.cart.length; i++) {
          if (this.cart[i].id === item.id) {
            this.cart.splice(i, 1);
            break;
          }
        }
      } 
    },
    inc: function(item) {
      item.qty++;
      this.total += PRICE;
    }
  },
  filters: {
    currency: function(value) {
      return '$'.concat(value.toFixed(2));
    }
  }
});

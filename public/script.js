new Vue({
  el: '#app', // assign a css selector string for where Vue can access the DOM
  data: {
    total: 0,
    items: [
      { title: 'Item 1' },
      { title: 'Item 2' },
      { title: 'Item 3' }
    ]
  },          // global data 
  methods: {
    addItem: function() {
      this.total += 9.99;
    }
  }
});

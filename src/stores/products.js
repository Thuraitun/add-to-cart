import { defineStore } from 'pinia'

export const productsStore = defineStore('products', {
  state: () => ({
    products: [],
    cart: [],
  }),

  actions: {
    fetchProductsFormDB() {
      fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(json => {
          this.products = json.products;
        })
    },

    addToCart(product) {
      this.cart.push(product) 
    },

    removeFromCart(id) {
      this.cart = this.cart.filter((item) => item.id !== id)
    }
  }
})



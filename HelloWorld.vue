<template>
  <div id="app">
    <h2>Please Enjoy Shopping At my Online Shopping Center!</h2>
    <router-link to="/">Home</router-link>  <router-link to="/login">Login</router-link> <router-link to="/profile">Profile</router-link> <h1>My Shopping Cart</h1>
    <ul>
      <li v-for="product in products" :key="product.id">
        {{ product.name }} - ₱{{ product.price }}
        <button @click="addToCart(product)">Add to Cart</button>
      </li>
    </ul>
    <h2>Cart Items</h2>
    <div v-for="item in cartItems" :key="item.id">
      <span>{{ item.name }} ({{ item.quantity }}) - ₱{{ item.price * item.quantity }}</span>
      <button @click="removeFromCart(item)">Remove</button>
      <input type="number" v-model="item.quantity" @change="updateQuantity(item, $event.target.value)">
    </div>
    <p v-if="cartItems.length === 0">Your Cart is empty.</p>
    <p v-else>Total: ₱{{ totalPrice }}</p>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      products: [
        { id: 1, name: 'Apple', price: 25, quantity: 0 },
        { id: 2, name: 'Orange', price: 30, quantity: 0 },
        { id: 3, name: 'Banana', price: 49, quantity: 0 },
        { id: 4, name: 'Milk', price: 215, quantity: 0 },
        { id: 5, name: 'Bread', price: 150, quantity: 0 },
        { id: 6, name: 'Eggs', price: 10, quantity: 0 },
        { id: 7, name: 'Pancakes', price: 38, quantity: 0 },
      ],
      cartItems: [],
      backgroundColor: '#5F9EA0', 
      productListBackground: '#fff', 
      productItemBackground: '#eee', 
      cartItemBackground: '#fff', 
      emptyCartBackground: '#5F9EA0', 
      totalPriceBackground: '#f0f0f0', 
    };
  },
  computed: {
    totalPrice() {
      return this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    },
  },
  methods: {
    addToCart(product) {
      const foundItem = this.cartItems.find(item => item.id === product.id);
      if (foundItem) {
        foundItem.quantity++;
      } else {
        this.cartItems.push({ ...product, quantity: 1 }); 
      }
    },
    removeFromCart(item) {
      const index = this.cartItems.findIndex(cartItem => cartItem.id === item.id);
      if (index !== -1) {
        this.cartItems.splice(index, 1);
      }
    },
    updateQuantity(item, quantity) {
      const cartItem = this.cartItems.find(cartItem => cartItem.id === item.id);
      if (cartItem) {
        cartItem.quantity = Math.max(quantity, 0); 
      }
    },
  },
};
</script>

<style scoped>
.container {
  font-family: Arial, sans-serif;
  margin: 0 auto;
  width: 80%;
  max-width: 600px;
}

.product-list,
.cart-item,
.empty-cart,
.total-price {
  padding: 10px;
  border-bottom: 1px solid brown;
}
.product-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.empty-cart,
.total-price {
  text-align: center;
  margin-top: 10px;
}
</style>

<template>
  <header>
    <v-toolbar title="Shopping Cart">
      <v-btn variant="outlined" color="amber-darken-4" @click="router.push({name: 'CartView'})">Item in Car: {{ store.cart.length }}</v-btn>
    </v-toolbar>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<script setup>
import { useRouter } from 'vue-router';
import {productsStore} from '@/stores/products';

const router = useRouter()
const store = productsStore()
</script>

<style scoped>
/* .cart-items {
  text-align: end;
  padding: 16px;
  font-weight: bold;
  font-size: 24px;
  cursor: pointer;
} */
</style>

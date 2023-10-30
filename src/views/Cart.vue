<template>
    <div v-if="!store.cart.length" style="text-align: center;">
        <h1 class="my-5">Empty Cart...</h1>
        <v-btn @click="router.push({name: 'catalog'})" variant="outlined" color="red-accent-4">Back to Catalog</v-btn>
    </div>
    <div v-else class="mx-5">
        <v-btn class="my-5" @click="router.push({name: 'catalog'})" variant="outlined" color="amber-darken-4">Continue Shopping</v-btn>
        <div 
            class="cart-item"
            v-for="item in store.cart"
            :key="item.id"
        >
            <div class="item-details">
                <img :src="item.thumbnail" alt="">
                <span>Brand: {{ item.brand }}</span>
                <span>Cateogory: {{ item.category }}</span>
                <span>Price: $ {{ item.price }}</span>
                <v-btn @click="removeFromCart(item.id)" color="red-accent-4" variant="outlined">Remove</v-btn>
            </div>
        </div>
    </div>
</template>

<script>
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'CartView',
    });
</script>

<script setup>
import { productsStore } from '@/stores/products';
import { useRouter } from 'vue-router';

const router = useRouter();
const store = productsStore();

const removeFromCart = (id) => {
    store.removeFromCart(id);
    console.log(id);
}
</script>

<style scoped>

.btn {
    padding: 8px 13px;
    border: 0;
    border-radius: 5px;
    color: #ffff;
    background-color: #ff0000;
    margin-bottom: 16px;
}
.item-details {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 32px;
    box-shadow: 0 0 17px 6px #e7e7e7;
    border-radius: 8px;
    padding: 16px;
}

.item-details img {
    width: 20%;
}
</style>
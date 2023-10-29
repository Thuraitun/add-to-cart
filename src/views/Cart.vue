<template>
    <div v-if="!store.cart.length" style="text-align: center;">
        <h1>Empty Cart...</h1>
        <button class="btn" @click="router.push({name: 'catalog'})">Back to Catalog</button>
    </div>
    <div v-else>
        <button class="btn" @click="router.push({name: 'catalog'})">Continue Shopping</button>
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
                <button @click="removeFromCart(item.id)">Remove</button>
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
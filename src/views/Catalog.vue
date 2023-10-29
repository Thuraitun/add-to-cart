<template>
    <div class="products-list">
        <div class="product"
            v-for="product in store.products" 
            :key="product.id"
            >
            <img :src="product.thumbnail" alt="">
            <h2>Brand: {{ product.brand }}</h2>
            <p>Description: {{ product.description }}</p>
            <h2>Price: $ {{ product.price }}</h2>
            <div class="groupBtn">
                <button class="addToCartBtn" @click="addToCart(product)">Add to Cart</button>
                <button class="detailBtn" @click="goToProductPage(product.id)">Detail</button>
            </div>
            
        </div>
    </div>
</template>

<script>
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'CatalogView'
    });
</script>

<script setup>
import { onMounted } from 'vue';
import { productsStore } from '@/stores/products';
import { useRouter } from 'vue-router';

const store = productsStore();
const router = useRouter();

const goToProductPage = (id) => {
    router.push({ name: 'ProductView', params: { id } });
}

const addToCart = (product) => {
    store.addToCart(product);
    router.push({name:'CartView'})
}

onMounted(async () => {
    await store.fetchProductsFormDB();
});
</script>

<style scoped>
.products-list {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
.product {
    flex-basis: 18%;
    margin: 8px;
    padding: 16px;
    box-shadow: 0px 0px 14px 1px #e6e6e6;
    cursor: pointer;
}

.product img {
    width: 70% ;
}

.groupBtn {
    display: flex;
}
.addToCartBtn {
    padding: 8px 10px;
    border: 0;
    border-radius: 5px;
    color: #ffff;
    background-color: blue;
    margin-right: 4px;
}

.detailBtn {
    padding: 8px 10px;
    border: 0;
    border-radius: 5px;
    color: #ffff;
    background-color: orangered;
    margin-right: 4px;
}
</style>
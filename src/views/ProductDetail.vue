<template>
    <div class="main">
        <v-btn
            @click="router.push({name: 'catalog'})"
            varient="outlined" 
            color="amber-darken-4"
        >
            <v-icon
            start
            icon="mdi-arrow-left"
            ></v-icon>
            Go to Catalog
        </v-btn>
        <div class="product">
            <div class="product-image">
                <img :src="selectedProduct.thumbnail" alt="">
            </div>
            <div class="product-details">
                <h2>Brand: {{ selectedProduct.brand }}</h2>
                <p>Description: {{ selectedProduct.description }}</p>
                <h2>Price: $ {{ selectedProduct.price }}</h2>
                <v-btn @click="addToCart" variant="flat" color="blue-darken-4">Add to Cart</v-btn>
            </div>
        </div>
    </div>
</template>

<script>
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'ProducutDetails',
    });
</script>

<script setup>
import { computed } from 'vue';
import { productsStore } from '@/stores/products';
import { useRoute, useRouter } from 'vue-router';

const store = productsStore();
const router = useRouter();
const route = useRoute();

const selectedProduct = computed(() => {
    return store.products.find((item) => item.id == Number(route.params.id))
});

const addToCart = () => {
    store.addToCart(selectedProduct.value);
    router.push({name:'CartView'})
}

</script>

<style scoped>

.main {
    margin: 30px;
}
.product {
    display: flex;
    margin-top: 50px;
}

.product-image {
    margin-right: 24px;
}

.btn {
    padding: 8px 10px;
    border: none;
    border-radius: 8px;
    color: white;
    background-color: orangered;
    font-weight: bold;
}


</style>
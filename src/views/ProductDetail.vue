<template>
    <div class="mx-5 my-5">
        <v-btn
            class="my-5"
            @click="router.push({name: 'catalog'})"
            variant="outlined" 
            color="amber-darken-4"
        >
            Go to Catalog
        </v-btn>

        <v-row no-gutters>
            <v-col
                cols="12"
                sm="6"
            >
                <v-sheet>
                    <img :src="selectedProduct.thumbnail" alt="">
                </v-sheet>
                <v-sheet>
                    <h2>Brand: {{ selectedProduct.brand }}</h2>
                    <p>Description: {{ selectedProduct.description }}</p>
                    <h3>Price: $ {{ selectedProduct.price }}</h3>
                    <v-btn class="my-4" @click="addToCart" variant="outlined" color="blue-darken-4">Add to Cart</v-btn>
                </v-sheet>
            </v-col>
        </v-row>

        <!-- <div class="product">
            <div class="product-image">
                <img :src="selectedProduct.thumbnail" alt="">
            </div>
            <div class="product-details">
                <h2>Brand: {{ selectedProduct.brand }}</h2>
                <p>Description: {{ selectedProduct.description }}</p>
                <h3>Price: $ {{ selectedProduct.price }}</h3>
                <v-btn @click="addToCart" variant="outlined" color="blue-darken-4">Add to Cart</v-btn>
            </div>
        </div> -->
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

</style>
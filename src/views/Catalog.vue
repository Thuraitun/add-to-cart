<template>
    <div class="mx-5 my-5">
        <v-row no-gutters>
            <v-col 
                v-for="product in store.products" 
                :key="product.id" 
                cols="12" 
                sm="6"
                md="4"
                lg="3">
                <v-sheet class="ma-2 pa-2">
                    <v-card>
                        <v-img :src="product.thumbnail" height="200px" cover />
                        <v-card-title>
                            {{ product.brand }}
                        </v-card-title>
                        <v-card-subtitle>
                            $ {{ product.price }}
                        </v-card-subtitle>
                        <v-card-text>
                            {{ product.description }}
                        </v-card-text>
                        <v-card-actions>
                            <v-btn @click="addToCart(product)" color="blue-darken-4" variant="outlined">Add to Cart</v-btn>
                            <v-btn @click="goToProductPage(product.id)" color="amber-darken-4" variant="outlined">Detail</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-sheet>
            </v-col>
        </v-row>
       
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
    router.push({ name: 'CartView' })
}

onMounted(async () => {
    await store.fetchProductsFormDB();
});
</script>

<style scoped>
/* .products-list {
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
    width: 70%;
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
} */
</style>
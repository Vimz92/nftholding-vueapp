<template>
    <div class="container">
        <div class="row">
            <div class="col-12 text-center">
                <h4> Our Categories</h4>
                <router-link :to="{name: 'AddCategory'}">
                    <button class="btn btn-primary" >
                        Add Category
                    </button> </router-link>
            </div>
        </div>
        <div class="row">
<!--            display all the products in productbox component-->
            <div v-for="product of products" :key="product.id"
                 class="col-md-6 col-xl-4 col-12 pt-3 d-flex">
                <ProductBox :product="product"/>
            </div>
        </div>
    </div>
</template>

<script>

const axios = require("axios");
import ProductBox from "../../components/ProductBox"; //CategoryBox has so using ProductBox some issues shows Vue Internal Bug..trying to fix it.
    export default {
        components: {ProductBox},
        props:["products"],
  data() {
    return {
      baseURL : "https://fakestoreapi.com",
      products: [],
    }
  },
  methods: {
    async getProducts() {
      await axios
        .get(`${this.baseURL}/products`)
        .then((res) => (this.products = res.data))
        .catch((err) => console.log(err));
    },
  },
  mounted() {
    this.getProducts();
  },
};
</script>
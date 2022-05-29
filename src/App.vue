<template>
    <div class="navbar navbar-dark bg-dark text-white">
      <a class="navbar-brand" href="#"> <strong> <i> NFT Holdings</i></strong>  <img src="bitcoin-bitcoins.gif" width="65"/></a>
       
        <ul class="nav">
            <li class="nav-item">
                <router-link class="nav-link text-white" to="/">Home</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link text-white" to="/dashboard">Dashboard</router-link>
            </li>
            <li class="nav-item">
              <button class="btn btn-primary"> 
                <router-link class="nav-link text-white" to="/login">Login</router-link>
                 </button>
            </li>
        </ul>
    </div>
    <div class="container py-4">
        <router-view />
    </div>
         
</template>

<script>

import axios from 'axios';
import Category from "./views/Category/Category.vue";
export default {
  components:  {Category},
  data() {
    return {
      baseURL : "https://fakestoreapi.com",
    }
  },
  methods: {
    async fetchData() {
      // api call to get all the categories
      await axios.get(this.baseURL + "/carts") 
      .then(res => {
        this.categories = res.data
      }).catch((err) => console.log('err', err));
      // api call to get the products
      await axios.get(this.baseURL + "/products/categories")
      .then(res => {
        this.products = res.data
      }).catch((err) => console.log('err', err));
    }
  },
  mounted() {
    this.fetchData();
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  
}

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
}


</style>
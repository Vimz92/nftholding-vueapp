<template>
<div class="container">
    <router-link :to="{name: 'Category'}" >
        <button class="btn btn-primary btn-lg"> Category</button>
    </router-link>
 
    <br />
    <router-link :to="{name: 'Product'}" >
        <button class="btn btn-warning btn-lg"> Product</button>
    </router-link>
    
     </div>


</template>
<script>
export default {
}
</script>
<style>
    .btn {
        margin-bottom: 30px;
    }

    .container{ 
        background-color: teal; 
    }


</style>
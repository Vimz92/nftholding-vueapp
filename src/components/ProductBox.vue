<template>
    <div class="card h-100 w-100">
        <div class="embed-responsive embed-responsive-16by9">
            <img
                class="card-img-top embed-responsive-item"
                :src="product.image"
                alt="Card image cap"
            />
        </div>
        <div class="card-body">
            <h1 class="card-title">{{ product.category }}</h1>
            <p class="card-text">
                 <p class="card-title"> AED {{ product.price }}</p>
               
            </p>
            <a href="#" class="btn btn-warning">Add to Cart</a>
        </div>
    </div>
</template>
<script>
    export default {
        name: "ProductBox",
        props: ["product"]
    }
</script>
<style scoped>
    .card-img-top {
        object-fit: cover;
        cursor: pointer;
      
    }

    .card-title{ 
        font-size: 28px;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-weight: 600;
    }

    .card-body{ 
        border-radius: 10px;

    }
</style>
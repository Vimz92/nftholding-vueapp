import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/login",
        name: "Login", 
        component: () => import("../views/Login.vue")
    },
    {
        path: "/signup",
        name: "Signup", 
        component: () => import("../views/SignUp.vue")
    },
    {
        path: "/dashboard",
        name: "Dashboard", 
        component: () => import("../views/Dashboard.vue"),
        meta: {
            requiresAuth: true
        }
    },
    {
      path: "/admin",
      name: "Admin", 
      component: () => import("../views/Admin.vue")
  },
  {
    path: "/category",
    name: "Category", 
    component: () => import("../views/Category/Category.vue")
},
{
  path: "/addcategory",
  name: "AddCategory", 
  component: () => import("../views/Category/AddCategory.vue")
},
{
  path: "/addproduct",
  name: "AddProduct", 
  component: () => import("../views/Product/AddProduct.vue")
},
{
  path: "/product",
  name: "Product", 
  component: () => import("../views/Product/Product.vue")
},
{
  path: "/productbox",
  name: "ProductBox", 
  component: () => import("../components/ProductBox.vue")
},
   
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

router.beforeEach((to, from, next) => {
    const authenticatedUser = firebase.auth().currentUser;
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
    
    if ( requiresAuth && ! authenticatedUser ) {
        alert("You are not authorized to access this area.");
        next("login");
    }
    else {
        next();
    }
});

export default router;
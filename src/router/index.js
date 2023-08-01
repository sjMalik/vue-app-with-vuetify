import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Products from '@/components/Products';
import Product from '@/components/Product';
import Create from '@/components/Create';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/products',
      name: 'Products',
      component: Products,
    },
    {
      path: '/products/create',
      name: 'Create',
      component: Create,
    },
    {
      path: '/products/:id',
      name: 'Product',
      component: Product,
    },
  ],
});

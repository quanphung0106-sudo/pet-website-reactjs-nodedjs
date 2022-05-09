import Cart from '~/pages/cart/Cart';
import Detail from '~/pages/detail/Detail';
import Home from '~/pages/home/Home';
import MyItem from '~/pages/items/MyItems';
import Orders from '~/pages/orders/Orders';
import Products from '~/pages/products/Products';

const publicRoutes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/products',
    component: Products,
  },
  {
    path: '/products/:productId',
    component: Detail,
  },
  {
    path: '/cart',
    component: Cart,
  },
  {
    path: '/my-items',
    component: MyItem,
  },
  {
    path: '/orders',
    component: Orders,
  },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };

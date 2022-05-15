import Cart from '~/pages/cart/Cart';
import Detail from '~/pages/detail/Detail';
import Home from '~/pages/home/Home';
import MyItem from '~/pages/items/MyItems';
import ItemsNotLogin from '~/pages/itemsNotLogin/ItemsNotLogin';
import Login from '~/pages/login/Login';
import Orders from '~/pages/orders/Orders';
import Products from '~/pages/products/Products';

const publicRoutes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/products',
    component: Products,
  },
  {
    path: `/products/:id`,
    component: Detail,
  },
  {
    path: '/cart',
    component: Cart,
  },
  {
    path: '/stranger-items',
    component: ItemsNotLogin,
  },
  {
    path: `/orders/:id`,
    component: Orders,
  },
];

const privateRoutes = [
  {
    path: '/my-items',
    component: MyItem,
  },
];

export { publicRoutes, privateRoutes };

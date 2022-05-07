import Detail from '~/pages/detail/Detail';
import Home from '~/pages/home/Home';
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
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };

import { createBrowserRouter } from 'react-router-dom';

import Admin from '~/pages/admin/Admin';
import Cart from '~/pages/cart/Cart';
import Detail from '~/pages/detail/Detail';
import Error from '~/pages/error/Error';
import Home from '~/pages/home/Home';
import MyItem from '~/pages/items/MyItems';
import ItemsNotLogin from '~/pages/itemsNotLogin/ItemsNotLogin';
import Login from '~/pages/login/Login';
import Orders from '~/pages/orders/Orders';
import Products from '~/pages/products/Products';

export const routes = createBrowserRouter([
  {
    path: '/*',
    element: <Error />,
    errorElement: <Error />,
  },
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/products',
    element: <Products />,
  },
  {
    path: '/products/:id',
    element: <Detail />,
  },
  {
    path: '/cart',
    element: <Cart />,
  },
  {
    path: '/stranger-items',
    element: <ItemsNotLogin />,
  },
  {
    path: `/orders/:id`,
    element: <Orders />,
  },
  {
    path: '/my-items',
    element: <MyItem />,
  },
  {
    path: '/admin',
    element: <Admin />,
    errorElement: <Error />,
  },
]);

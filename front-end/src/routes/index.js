import { createBrowserRouter, Outlet } from 'react-router-dom';

import Admin from '~/pages/admin/Admin';
import Cart from '~/pages/cart/Cart';
import Detail from '~/pages/detail/Detail';
import Error from '~/pages/error/Error';
import Home from '~/pages/home/Home';
import MyItem from '~/pages/items/MyItems';
import ItemsNotLogin from '~/pages/itemsNotLogin/ItemsNotLogin';
import Login from '~/pages/login/Login';
import Register from '~/pages/register/Register';
import Orders from '~/pages/orders/Orders';
import Products from '~/pages/products/Products';
import { Box, Grid } from '@mui/material';
import Footer from '~/components/footer/Footer';
import Header from '~/components/Header/Header';
import Test from '~/pages/Test/Test';
import ScrollToTop from '~/components/scrollToTop/ScrollToTop';

const Layout = () => {
  return (
    <Box>
      <Header />
      <Grid>
        <Outlet />
      </Grid>
      <Footer />
      <ScrollToTop />
    </Box>
  );
};

export const routes = createBrowserRouter([
  {
    path: '/*',
    element: <Error />,
    errorElement: <Error />,
  },
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/test',
        element: <Test />,
      },
      {
        path: '/',
        element: <Home />,
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
    ],
  },
  {
    path: '/signin',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Register />,
  },
]);

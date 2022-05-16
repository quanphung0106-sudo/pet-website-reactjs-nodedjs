import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '~/routes/Routes';
import { useSelector } from 'react-redux';
import Login from './pages/login/Login';
import Admin from './pages/admin/Admin';
import Home from './pages/home/Home';
import Products from './pages/products/Products';
import Detail from './pages/detail/Detail';
import Cart from './pages/cart/Cart';
import Orders from './pages/orders/Orders';
import MyItem from './pages/items/MyItems';
import ItemsNotLogin from './pages/itemsNotLogin/ItemsNotLogin';
function App() {
  const user = useSelector((state) => state.user.user);

  const isAdmin = user !== null && user.isAdmin;

  console.log(isAdmin);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="products">
              <Route index element={<Products />} />
              <Route path=":id" element={<Detail />} />
            </Route>
            <Route path="cart">
              <Route index element={<Cart />} />
            </Route>
            <Route path="orders">
              <Route path=":id" element={<Orders />} />
            </Route>
            {user ? (
              <Route path="/my-items" element={<MyItem />} />
            ) : (
              <Route path="/stranger-items" element={<ItemsNotLogin />} />
            )}
          </Route>

          {/* <Route path="/admin" element={user && isAdmin === true ? <Admin /> : <Login />} />
          <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} /> */}

          {/* {publicRoutes.map((route, index) => {
            const Page = route.component;
            return (
              <Route path={route.path} key={index}>
                <Route index element={<Page />} />
              </Route>
            );
          })}
          {privateRoutes.map((route, index) => {
            const Page = route.component;
            return (
              <Route path={route.path} key={index}>
                <Route index element={<Page />} />
              </Route>
            );
          })} */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

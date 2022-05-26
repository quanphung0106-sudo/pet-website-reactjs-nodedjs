import styles from './Navbar.module.css';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Tippy from '@tippyjs/react/headless';
import { useState } from 'react';
import { logout } from '~/redux/userSlice';

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  const user = useSelector((state) => state.user.user);
  const isAdmin = user !== null && user.isAdmin;

  console.log(isAdmin);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [visible, setVisible] = useState(false);
  const show = () => setVisible(true);
  const hide = () => setVisible(false);

  const navigateToAdminPage = () => {
    if (isAdmin === true) {
      navigate('/admin');
    }
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callIcon}>
          <PhoneEnabledIcon />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>BUY NOW!</div>
          <div className={styles.text}>0935 123 456</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.ul}>
          <Link to="/">
            <li className={styles.li}>Homepage</li>
          </Link>
          <Link to="/products">
            <li className={styles.li}>Pet</li>
          </Link>
          <Link to="/stranger-items">
            <li className={styles.li}>Item</li>
          </Link>
          <img className={styles.img} src="/img/logo.png" alt="" />
          {/* <div className={styles.imgContainer}>
          </div> */}
          <li className={styles.li}>Events</li>
          <li className={styles.li}>Blog</li>
          <li className={styles.li}>Contact</li>
        </ul>
      </div>
      <div className={styles.item}>
        <Link to="/cart">
          <div className={styles.cart}>
            <ShoppingCartIcon className={styles.cartIcon} />
            {quantity === 0 ? '' : <div className={styles.counter}>{quantity}</div>}
          </div>
        </Link>
        {user ? (
          <Tippy
            render={(attrs) => (
              <div {...attrs}>
                <ul className={styles.listItem}>
                  <Link className={styles.link} to="/my-items">
                    <li className={styles.accountItem}>My Order</li>
                  </Link>
                  {isAdmin && (
                    <li onClick={navigateToAdminPage} className={styles.accountItem}>
                      Manage
                    </li>
                  )}
                  <li onClick={handleLogout} className={styles.accountItem}>
                    Log out
                  </li>
                </ul>
              </div>
            )}
            interactive={true}
            visible={visible}
            onClickOutside={hide}
            placement="bottom-start"
          >
            <div className={styles.avatarContainer}>
              <img onClick={visible ? hide : show} className={styles.avatar} src="/img/my-avatar.jpg" alt="" />
            </div>
          </Tippy>
        ) : (
          <>
            <button className={styles.register}>Register</button>
            <Link to="/login">
              <button className={styles.login}>Login</button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;

import styles from './Contact.module.css';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';

const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>{/* <img className={styles.img} src="/img/contact.png" alt="" /> */}</div>

      <div className={styles.formContainer}>
        <div className={styles.left}>
          <div className={styles.contentWrapper}>
            <h1 className={styles.title}>Contact us</h1>
            <div className={styles.texts}>
              <div className={styles.text}>3045 10 Sunrize Avenue, 123-456-7890</div>
              <div className={styles.text}>Mon – Fri: 9:00 am – 8:00 pm</div>
              <div className={styles.text}>Sat – Sun: 9:00 am – 10 pm</div>
              <div className={styles.text}>
                <a className={styles.link} href="/">
                  contacts@gmail.com
                </a>
              </div>
            </div>
            <div className={styles.iconWrapper}>
              <FacebookOutlinedIcon className={styles.icon} />
              <TwitterIcon className={styles.icon} />
              <InstagramIcon className={styles.icon} />
              <GoogleIcon className={styles.icon} />
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.inputWrapper}>
            <input className={styles.input} type="text" placeholder="Enter your name" />
            <input className={styles.input} type="text" placeholder="Enter a valid email address" />
            <textarea className={styles.textarea} rows={4} placeholder="Enter your message"></textarea>
            <div className={styles.button}>SUBMIT</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

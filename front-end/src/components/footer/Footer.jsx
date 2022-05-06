import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <img className={styles.img} src="/img/footer.jpg" alt="" />
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.texts}>
          <h2 className={styles.h2}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod.
          </h2>
        </div>
        <div className={styles.texts}>
          <h3 className={styles.title}>find our shop</h3>
          <div className={styles.textWrapper}>
            <div className={styles.text}>50 Nguyễn Xuân Hữu, Đà Nẵng</div>
            <div className={styles.text}>42 Cống Quỳnh, Cẩm Lệ, Đã Nẵng</div>
            <div className={styles.text}>52 Cách Mạng Tháng 8, Đà Nẵng</div>
          </div>
          <div className={styles.textWrapper}>
            <div className={styles.text}>Số 2/47, Nguyễn Khả Trạc, Hà Nội</div>
            <div className={styles.text}>
              Số nhà 88, ngõ 79 Cầu Giấy, Hà Nội
            </div>
            <div className={styles.text}>Số 7 Đại Lộ Thăng Long, Hà Nội</div>
          </div>
          <div className={styles.textWrapper}>
            <div className={styles.text}>
              Số 1 Công xã Paris, Quận 1, thành phố Hồ Chí Minh
            </div>
            <div className={styles.text}>
              Số 135 đường Nam Kỳ Khởi Nghĩa, thành phố Hồ Chí Minh
            </div>
            <div className={styles.text}>
              {" "}
              Số 125 Công xã Paris, Bến Nghé, Quận 1
            </div>
          </div>
        </div>
        <div className={styles.texts}>
          <h3 className={styles.title}>working hour</h3>
          <div className={styles.textWrapper}>
            <div className={styles.text}>MONDAY ULTI FRIDAY</div>
            <div className={styles.text}>9:00 - 22:00</div>
          </div>
          <div className={styles.textWrapper}>
            <div className={styles.text}>SATURDAY - SUNDAY</div>
            <div className={styles.text}>12:00 - 24:00</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

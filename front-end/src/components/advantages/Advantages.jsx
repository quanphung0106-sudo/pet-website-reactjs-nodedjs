import styles from "./Advantages.module.css";

const Advantages = () => {
  const datas = [
    {
      id: 1,
      img: "/img/advantages-1.png",
      title: "Dog Trainings",
    },
    {
      id: 2,
      img: "/img/advantages-2.png",
      title: "Advanced Training",
    },
    {
      id: 3,
      img: "/img/advantages-3.png",
      title: "Health Checks",
    },
    {
      id: 4,
      img: "/img/advantages-4.png",
      title: "Dog Tricks",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        {datas.map((data) => (
          <div className={styles.textsWrapper} key={data.id}>
            <div className={styles.iconWrapper}>
              <img className={styles.icon} src={data.img} alt="" />
            </div>
            <div className={styles.texts}>
              <div className={styles.title}>{data.title}</div>
              <div className={styles.text}>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.modalWrapper}>
        <div className={styles.modal}>
          <div className={styles.textModal}>
            Article evident arrived express highest men did boy. Mistress
            sensible entirely am so. Quick can manor smart money hopes worth
            too. Comfort produce husband boy her had hearing. Law others theirs
            passed but wishes. You day real less till dear read. Considered use
            dispatched melancholy sympathize discretion led. Oh feel if up to
            till like. He an thing rapid these after going drawn or.
          </div>
          <button className={styles.button}>READMORE</button>
        </div>
      </div>
    </div>
  );
};

export default Advantages;

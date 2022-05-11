import styles from './DataList.module.css';
// import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";

const DataList = () => {
  const datas = [
    {
      id: 1,
      number: '8827',
      span: 'HAPPY DOG OWNERS',
      text: 'Sample text. Click to select the text box. Click again or double click to start editing the text.',
    },
    {
      id: 2,
      number: 'only 10',
      span: 'MINUTES OF DAILY TRAINING TIME NEEDED',
      text: 'Sample text. Click to select the text box. Click again or double click to start editing the text.',
    },
    {
      id: 3,
      number: '$650',
      span: 'AVERAGE SAVINGS COMPARED TO IN-PERSON CLASSES',
      text: 'Sample text. Click to select the text box. Click again or double click to start editing the text.',
    },
    {
      id: 4,
      number: '219.844',
      span: 'TOTAL TRAINING VIDEO VIEWS',
      text: 'Sample text. Click to select the text box. Click again or double click to start editing the text.',
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.card}>
          <h1 className={styles.title}>
            Join thousands of Happy Dog Owners Who Have Successfully Completed Our Courses.
          </h1>
          <p className={styles.text}>
            By following our programs, you will see definite changes in your dog’s behavior after one month. However,
            many owners report that their dogs a a lot better after as little as two weeks!
          </p>
          <div className={styles.imgWrapper}>
            <img className={styles.arrow} src="/img/arrow.png" alt="" />
          </div>
        </div>
      </div>
      <div className={styles.right}>
        {datas.map((data) => (
          <div className={styles.texts} key={data.id}>
            <h1 className={styles.number}>{data.number}</h1>
            <span className={styles.span}>{data.span}</span>
            <p className={styles.text}>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataList;

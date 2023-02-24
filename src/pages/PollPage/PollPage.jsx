import styles from './PollPage.module.less';

const content = [
  {
    id: 1,
    text: 'Do you like septims?',
  },
  {
    id: 2,
    text: 'Do you want Dwemer boots for free?',
  },
  {
    id: 3,
    text: 'Do you like to ride a steelstrider?',
  },
  {
    id: 4,
    text: 'Do you often walk on a dark night?',
  },
  {
    id: 5,
    text: 'Do you hear the clink of coins from afar?',
  },
  {
    id: 6,
    text: 'Will you take what is not lying well?',
  },
  {
    id: 7,
    text: 'Is there skuma in your veins?',
  },
  {
    id: 8,
    text: 'Do you know firsthand about lunar sugar?',
  },
  {
    id: 9,
    text: 'Do you always have a hole in your pocket?',
  },
  {
    id: 10,
    text: 'North for the Nords?',
  },
  {
    id: 11,
    text: 'The best means of transportation on the rocks is a horse?',
  },
  {
    id: 12,
    text: "Have you ever absorbed a dragon's soul?",
  },
];

function PollPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading_primary}>
        Hello stranger! Please answer all the questions.
      </h1>
      <div className={styles.poll_box}>
        {content.map(({ id, text }) => (
          <div className={styles.poll_item} key={id}>
            <h2 className={styles.heading_secondary}>{text}</h2>
            <div className={styles.actions}>
              <button className={styles.btn}>yes</button>
              <button className={styles.btn}>no</button>
            </div>
          </div>
        ))}
      </div>
      <button className={styles.btn_result}>find out the result</button>
    </div>
  );
}

export default PollPage;

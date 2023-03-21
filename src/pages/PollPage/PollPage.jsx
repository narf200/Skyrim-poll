import { useState } from 'react';
import Button from './components/Button';
import Modal from './components/Modal';
import { questions } from './constants/constants';
import styles from './PollPage.module.less';

function PollPage() {
  const [answerCounter, setAnswerCounter] = useState(0);
  const [isModalShow, setIsModalShow] = useState(false);

  const handleIncrase = () => {
    setAnswerCounter((prevAnswerCounter) => {
      return prevAnswerCounter + 1;
    });
  };
  const handleDecrease = () => {
    setAnswerCounter((prevAnswerCounter) => {
      return prevAnswerCounter - 1;
    });
  };

  const handleShowModal = () => {
    setIsModalShow(true);
  };

  const handleResetCounter = () => {
    setAnswerCounter((prevAnswerCounter) => {
      return prevAnswerCounter - prevAnswerCounter;
    });
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading_primary}>
        Hello stranger! Please answer all the questions.
      </h1>
      <div className={styles.poll_box}>
        {questions.map(({ id, text }) => (
          <div className={styles.poll_item} key={id}>
            <h2 className={styles.heading_secondary}>{text}</h2>
            <div className={styles.actions}>
              <Button className={styles.btn} handler={handleIncrase}>
                yes
              </Button>
              <Button className={styles.btn} handler={handleDecrease}>
                no
              </Button>
            </div>
          </div>
        ))}
      </div>
      <button
        className={styles.btn_result}
        data-testid="close-modal"
        onClick={handleShowModal}
      >
        find out the result
      </button>
      {isModalShow && (
        <Modal
          handleResetCounter={handleResetCounter}
          answerCounter={answerCounter}
        />
      )}
    </div>
  );
}

export default PollPage;

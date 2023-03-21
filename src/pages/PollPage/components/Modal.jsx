import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import getCalculationCharacter from '../helpers/helpers';
import styles from './Modal.module.less';

export default function Modal({ answerCounter, handleResetCounter }) {
  const { name, url } = getCalculationCharacter(answerCounter);

  return (
    <div className={styles.modal_backdrop} data-testid="modal">
      <div className={styles.modal}>
        {url && (
          <>
            <h1 className={styles.heading_primary}>You are a {name}</h1>
            <img className={styles.character_image} src={url} alt={name} />
            <button onClick={handleResetCounter} className={styles.btn_result}>
              <Link to="/">Take the test again</Link>
            </button>
          </>
        )}
      </div>
    </div>
  );
}

Modal.propTypes = {
  handleResetCounter: PropTypes.func,
  answerCounter: PropTypes.number,
};

Modal.defaultProps = {
  handleResetCounter: PropTypes.func,
  answerCounter: PropTypes.number,
};

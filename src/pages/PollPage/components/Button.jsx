import PropTypes from 'prop-types';
import { useState } from 'react';
import styles from './Button.module.less';

function Button({ handler, children }) {
  const [isActive, setIsActive] = useState(false);

  const handleClck = () => {
    handler();
    setIsActive(true);
  };

  return (
    <button disabled={isActive} onClick={handleClck} className={styles.btn}>
      {children}
    </button>
  );
}

Button.propTypes = {
  handler: PropTypes.func,
  children: PropTypes.node,
};

Button.defaultProps = {
  handler: PropTypes.func,
  children: PropTypes.node,
};

export default Button;

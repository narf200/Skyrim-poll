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
    <button
      className={styles.btn}
      data-testid={children === 'yes' ? `yes-button` : `no-button`}
      disabled={isActive}
      onClick={handleClck}
    >
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

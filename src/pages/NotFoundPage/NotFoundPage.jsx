import { Link } from 'react-router-dom';
import sadCat from '../../assets/images/sad_cat.png';
import styles from './NotFoundPage.module.less';

function NotFoundPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading_primary}>Not found</h1>
      <div className={styles.img_box}>
        <img className={styles.content_img} src={sadCat} alt="cat" />
      </div>
      <button className={styles.btn}>
        <Link to="/">Go Home</Link>
      </button>
    </div>
  );
}

export default NotFoundPage;

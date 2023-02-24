import { Link } from 'react-router-dom';
import threeCat from '../../assets/images/three_cat.png';
import styles from './MainPage.module.less';

function MainPage() {
  return (
    <div className={styles.container}>
      <div className={styles.main_content}>
        <header className={styles.header}>
          <h1 className={styles.heading_primary}>
            Hi! Take the test to find out what kind of Kajit you are.
          </h1>
        </header>
        <div>
          <img className={styles.content_img} src={threeCat} alt="three cats" />
        </div>
        <footer className={styles.footer}>
          <button className={styles.btn}>
            <Link to="/poll">Take the test</Link>
          </button>
        </footer>
      </div>
    </div>
  );
}

export default MainPage;

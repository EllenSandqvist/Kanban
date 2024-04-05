import { Link } from "react-router-dom";

//import styles from separate css stylesheet
import styles from "../styling/MissingPage.module.css";

//import of images/icons
import missing from "../assets/missing404.svg";

const MissingPage = () => {
  return (
    <main className={styles.MissingPage}>
      <div className={styles.div}>
        <img src={missing} alt="404 page not found" />
        <p className={styles.text}>Whoops! It looks like you're lost!</p>
      </div>
      <button className={styles.btn} type="button">
        <Link className={styles.link} to="/">
          Back to Home
        </Link>
      </button>
    </main>
  );
};

export default MissingPage;

import { Link } from "react-router-dom";

//import styles from separate css stylesheet
import styles from "../styling/Header.module.css";

const Header = () => {
  return (
    <header className={styles.Header}>
      <h1>
        <Link className={styles.link} to="/">
          The Board App
        </Link>
      </h1>
    </header>
  );
};

export default Header;

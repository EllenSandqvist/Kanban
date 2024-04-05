import { Link } from "react-router-dom";

//import styles from separate css stylesheet
import styles from "../styling/Column.module.css";

const ColumnHeading = ({ columnTitle }) => {
  //making first letter in columnTitle lowercased for use in link
  const lowerCaseTitle = columnTitle && columnTitle.toLowerCase();

  return (
    <div className={styles.ColumnHeading}>
      <h2 className={styles.headingText}>
        <Link className={styles.headingLink} to={`/${lowerCaseTitle}`}>
          {columnTitle}
        </Link>
      </h2>
    </div>
  );
};

export default ColumnHeading;

import { Link } from "react-router-dom";

const ColumnHeading = ({ columnTitle }) => {
  //making first letter in columnTitle lowercased for use in link
  const lowerCaseTitle = columnTitle && columnTitle.toLowerCase();

  return (
    <div className="ColumnHeading">
      <h2 className="ColumnHeading-h2">
        <Link className="ColumnHeading-link" to={`/${lowerCaseTitle}`}>
          {columnTitle}
        </Link>
      </h2>
    </div>
  );
};

export default ColumnHeading;

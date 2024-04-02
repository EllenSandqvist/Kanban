import { Link } from "react-router-dom";

const ColumnHeading = ({ columnTitle }) => {
  const lowerCaseTitle = columnTitle && columnTitle.toLowerCase();

  return (
    <div className="column-heading-bg">
      <h2 className="column-heading-h2">
        <Link to={`/${lowerCaseTitle}`}>{columnTitle}</Link>
      </h2>
    </div>
  );
};

export default ColumnHeading;

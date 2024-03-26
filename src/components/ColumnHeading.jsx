const ColumnHeading = ({ columnName }) => {
  return (
    <div className="column-heading-bg">
      <h2 className="column-heading-h2">{columnName}</h2>
    </div>
  );
};

export default ColumnHeading;

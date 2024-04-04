import { Link } from "react-router-dom";

//import of images/icons
import missing from "../assets/missing404.svg";

const MissingPage = () => {
  return (
    <main className="MissingPage">
      <div className="MissingPage-div">
        <img src={missing} alt="404 page not found" />
        <p className="MissingPage-text">Whoops! It looks like you're lost!</p>
      </div>
      <button className="MissingPage-btn" type="button">
        <Link className="MissingPage-link" to="/">
          Back to Home
        </Link>
      </button>
    </main>
  );
};

export default MissingPage;

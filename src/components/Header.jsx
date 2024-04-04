import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>
        <Link className="header-link" to="/">
          The Board App
        </Link>
      </h1>
    </header>
  );
};

export default Header;

import { Link } from "react-router-dom";
import Nav from "./Nav";

const Header = () => {
  return (
    <header>
      <h1>
        <Link className="logo-link" to="/">
          The Board App
        </Link>
      </h1>
      <Nav />
    </header>
  );
};

export default Header;

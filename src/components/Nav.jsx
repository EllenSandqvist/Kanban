import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="Nav">
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/todo">Todo</NavLink>
        </li>
        <li>
          <NavLink to="/doing">Doing</NavLink>
        </li>
        <li>
          <NavLink to="/done">Done</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <Link to="/">BuildIt</Link>
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
      </ul>
    </header>
  );
};

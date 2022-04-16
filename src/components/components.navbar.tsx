import { Link } from 'react-router-dom';
import './components.navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/negynegynegy">444 (demo)</Link>
      </li>
    </div>
  );
};
export default Navbar;

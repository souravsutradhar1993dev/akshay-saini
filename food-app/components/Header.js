import logo from '../assets/images/logo.png';
import '../assets/css/header.css';
const Logo = (
    <div className="logo">
        <img alt="logo" src={logo} />
    </div>
);

const NavItems = (
    <div className="nav-items">
        <ul className="nav-items-lists">
            <li>Home</li>
            <li>Offers</li>
            <li>Restaurant Lists</li>
            <li>Orders</li>
            <li>Cart</li>
        </ul>
    </div>
);

const Header = () => (
    <div className="header">
        {Logo}
        {NavItems}
    </div>
);

export default Header;
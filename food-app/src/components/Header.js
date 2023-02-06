import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import '../assets/css/header.css';

const Header = () => {
    const Logo = (
        <div className="logo">
            <img alt="logo" src={logo} />
        </div>
    );
    
    const NavItems = (
        <div className="nav-items">
            <ul className="nav-items-lists">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/offers">Offers</Link></li>
                <li><Link to="/restaurant-lists">Restaurant Lists</Link></li>
                <li><Link to="/orders">Orders</Link></li>
                <li><Link to="/cart">Cart</Link></li>
                <li><Link to="/login"><button className='nav-button'>Login</button></Link></li>
            </ul>
        </div>
    );
    return (
        <div className="header">
            {Logo}
            {NavItems}
        </div>
    )
};

export default Header;
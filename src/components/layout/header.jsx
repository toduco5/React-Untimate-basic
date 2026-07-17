import { Link, NavLink } from 'react-router-dom'
import '../layout/styles/header.css'
const Header = () => {
    return (
        <div className="header">
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/user">User</NavLink></li>
                <li><NavLink to="/product">Product</NavLink></li>
            </ul>
        </div>
    )

}
export default Header
import {Link, NavLink} from "react-router-dom";


export const Header = () => {
    return (
        <nav>
            <div className="nav-wrapper">
                <Link to={"/"}>Home</Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <NavLink to="/contact">Contact</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
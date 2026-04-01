import { NavLink } from "react-router-dom";
import '../../src/App.css'

const HeaderComponent = () => {
    return (
        <header className="header">
            <h2>CRUD APPLICATION</h2>

            <nav>
                <NavLink to="/" className="nav-link">
                    HOME
                </NavLink>
                <NavLink to="/about" className="nav-link">
                    ABOUT
                </NavLink>
            </nav>
        </header>
    );
};

export default HeaderComponent;
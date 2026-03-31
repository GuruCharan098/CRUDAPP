import { Link } from "react-router-dom";
import '../../src/App.css'
const HeaderComponent = () => {
    return (
        <>
            <div className="header">
                <h2>CRUD APPLICATION</h2>
                <nav>
                    <Link to='/'>HOME</Link>
                    <Link to='/about'>ABOUT</Link>
                </nav>
            </div>
        </>
    )
}

export default HeaderComponent;
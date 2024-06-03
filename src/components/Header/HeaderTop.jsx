import "./header.css"
import { Link } from 'react-router-dom'
const HeaderTop = () => {
    return (
        <header className="header-top">
            <h2 className="header-title">Muranga University Tech Club</h2>
            <nav className="header-nav">
                <ol className="header-nav-list">
                    <li className="header-nav-item"><Link to="/">Home</Link></li>
                    <li className="header-nav-item"><Link to="/leadership">Leadership</Link></li>
                    <li className="header-nav-item"><Link to="/tracks">Tracks</Link></li>
                    <li className="header-nav-item"><Link to="/events">Events</Link></li>
                </ol>
            </nav>


        </header>
    )
};
export default HeaderTop;
 
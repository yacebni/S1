import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const location = useLocation();

    return (
        <nav>
            <div className="nav-left">
                <ul className="nav-links">
                    <li className={location.pathname === '/' ? 'active' : ''}>
                        <Link to="/">Accueil</Link>
                    </li>
                    <li className={location.pathname === '/skills' ? 'active' : ''}>
                        <Link to="/skills">Compétences</Link>
                    </li>
                    <li className={location.pathname === '/projects' ? 'active' : ''}>
                        <Link to="/projects">Projets</Link>
                    </li>
                    <li className={location.pathname === '/contact' ? 'active' : ''}>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
            <div className="nav-right">
                <h1 className="name">Yacine Bouanani</h1>
            </div>
        </nav>
    );
};

export default Navbar;

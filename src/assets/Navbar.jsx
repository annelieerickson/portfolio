import { NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className="nav" aria-label="Main">
            <div className="nav-inner">
                <div className="brand">
                    <span>ANNIE ERICKSON</span> / <NavLink to="/" end>PRODUCT DESIGNER</NavLink>
                </div>
                <ul>
                    <li><NavLink to="/" end className={({isActive}) => isActive ? 'active' : undefined}>ABOUT ME</NavLink></li>
                    <li><NavLink to="/resume" className={({isActive}) => isActive ? 'active' : undefined}>RESUME</NavLink></li>
                    <li><NavLink to="/projects" className={({isActive}) => isActive ? 'active' : undefined}>PROJECTS</NavLink></li>
                    <li><NavLink to="/art" className={({isActive}) => isActive ? 'active' : undefined}>ART</NavLink></li>
                </ul>
            </div>
        </nav>
    );
}
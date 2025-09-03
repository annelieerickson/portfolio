export default function Navbar(){
    return (
        <nav className="nav wrapper" aria-label="Main">
            <div className="brand">
                <span>Annie Erickson</span> / <a href="#">Student Developer</a>
            </div>
            <ul>
                <li><a className="active" href="#about">ABOUT ME</a></li>
                <li><a href="#resume">RESUME</a></li>
                <li><a href="#projects">PROJECTS</a></li>
                <li><a href="#contact">CONTACT</a></li>
            </ul>
        </nav>
    );
}
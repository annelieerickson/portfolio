import ProfileCard from './ProfileCard'
import { Link } from 'react-router-dom';


export default function Hero(){
    return (
        <section className="hero wrapper" id="about">
            <ProfileCard />


            <div className="right">
                <h1>
                    HELLO <span className="light">WORLD!</span>
                </h1>
                <p className="lead">About Me</p>


                <div className="btnRow">
                    <Link className="btn primary" to="/resume">RESUME</Link>
                    <Link className="btn primary" to="/projects"> CODING PROJECTS</Link>
                    <Link className="btn primary" to="/art"> ART PROJECTS</Link>
                </div>


                <p>
                    My name is Annie Erickson and I'm a computer science major currently attending Iowa State University in my junior year. I've been studying computer science since my senior year in high school, and am comfortable coding in Java, Python, Javascript, CSS, HTML, and React. When not in classes, I'm often drawing and creating art for friends to help in whatever passion project they've begun.
                </p>
            </div>
        </section>
    );
}
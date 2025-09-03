import ProfileCard from './ProfileCard'


export default function Hero(){
    return (
        <section className="hero wrapper" id="about">
            <ProfileCard />


            <div className="right">
                <h1>
                    HELLO <span className="light">EVERYONE</span>
                </h1>
                <p className="lead">Here’s Who I am &amp; What I do.</p>


                <div className="btnRow">
                    <a className="btn primary" href="#resume">RESUME</a>
                    <a className="btn ghost" href="#codingprojects">CODING PROJECTS</a>
                    <a className="btn ghost" href="#artprojects">ART PROJECTS</a>
                </div>


                <p>
                    My name is Annie Erickson and I'm a computer science major currently attending Iowa State University in my junior year. I've been studying computer science since my senior year in high school, and am comfortable coding in Java, Python, Javascript, CSS, HTML, and React. When not in classes, I'm often drawing and creating art for friends to help in whatever passion project they've begun.
                </p>
            </div>
        </section>
    );
}
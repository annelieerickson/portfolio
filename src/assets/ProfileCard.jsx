import anniepfp from '../assets/anniepfp.jpg';
import githubLogo from '../assets/github.png';
import linkedinLogo from '../assets/linkedin.png';

export default function ProfileCard(){
    return (
        <aside className="card" aria-label="Profile">
            <div className="avatarWrap">
            <img src={anniepfp} alt="Your avatar" />
            </div>

            <h3>Annie Erickson</h3>
            <div className="divider" />
            <h4>Aspiring Web Developer & Illustrator</h4>


            <div className="follow">
                <strong>Connect With Me On ...</strong>
                <div className="socials">
                    <a className="iconBtn" aria-label="GitHub" href="#">
                        <img src={githubLogo} alt="Github Logo" />
                    </a>
                    <a className="iconBtn" aria-label="LinkedIn" href="#">
                        <img src={linkedinLogo} alt="LinkedIn Logo" />
                    </a>
                </div>
            </div>
        </aside>
    );
}
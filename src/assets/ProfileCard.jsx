import anniepfp from '../assets/anniepfp.jpg';

export default function ProfileCard(){
    return (
        <aside className="card" aria-label="Profile">
            <div className="avatarWrap">
            <img src={anniepfp} alt="Your avatar" />
            </div>

            <h3>Annie Erickson</h3>
            <div className="divider" />
            <h4>Aspiring Computer Scientist & Illustrator</h4>


            <div className="follow">
                <strong>Follow On</strong>
                <div className="socials">
                    <a className="iconBtn" aria-label="Instagram" href="#">⌾</a>
                    <a className="iconBtn" aria-label="Facebook" href="#">f</a>
                </div>
            </div>
        </aside>
    );
}
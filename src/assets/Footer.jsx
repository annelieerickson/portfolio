export default function Footer(){
    const year = new Date().getFullYear();
    return (
        <footer className="footer" id="contact">
            <div className="bar wrapper">
                <small>© {year} Your Name. Created with React.</small>
                <div><strong>CALL</strong><br/>📞 <a href="tel:+19100000000">+(91)0000000</a></div>
                <div><strong>E-MAIL</strong><br/>✉️ <a href="mailto:thismail@gmail.com">thismail@gmail.com</a></div>
            </div>
        </footer>
    );
}
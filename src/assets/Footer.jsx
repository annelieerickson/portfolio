export default function Footer(){
    const year = new Date().getFullYear();
    return (
        <footer className="footer" id="contact">
            <div className="bar wrapper">
                <small>© {year} Annelie Erickson. Created with React. Icons from flaticon.com</small>
                <div className="link"><strong>E-MAIL</strong><br/> <a href="mailto:annelieerickson@gmail.com">annelieerickson@gmail.com</a> / <a href="mailto:aericks@iastate.edu">aericks@iastate.edu</a></div>
            </div>
        </footer>
    );
}
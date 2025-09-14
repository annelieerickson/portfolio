import resumePdf from '../assets/resume.pdf';

export default function Resume(){
    const pdf = resumePdf;
    return (
        <section className="wrapper" id="resume">
            <h1>Resume</h1>
            <p><a className="btn primary" href={pdf} download>Download PDF</a></p>

            <object data={pdf} type="application/pdf" width="100%" height="800" style={{display:'block'}}>
                <iframe src={pdf} title="Resume PDF" width="100%" height="800" style={{border:'none', display:'block'}} />
            </object>

            <p><a href={pdf} target="_blank" rel="noreferrer">Open in new tab</a></p>
        </section>
    );
}

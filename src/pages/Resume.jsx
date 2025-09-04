export default function Resume(){
    const pdf = import.meta.env.BASE_URL + 'resume.pdf'
    return (
        <section className="wrapper" id="resume">
            <h1>Resume</h1>
            <p><a className="btn primary" href={pdf} download>Download PDF</a></p>
            <object data={pdf} type="application/pdf" width="100%" height="800">
                <p>Can’t display the PDF inline. <a href={pdf} target="_blank" rel="noreferrer">Open it here</a>.</p>
            </object>
        </section>
    )
}
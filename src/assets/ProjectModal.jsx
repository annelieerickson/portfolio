import Modal from './Modal'
import ImageCarousel from './ImageCarousel'


export default function ProjectModal({ open, onClose, project }){
    if (!project) return null
    const { title, description, details, tags = [], images = [], live, repo } = project


    return (
        <Modal open={open} onClose={onClose} labelledBy="project-title">
            <div className="projectModalContent">
                <h2 id="project-title">{title}</h2>
                {images.length > 0 && (
                    <ImageCarousel images={images} altPrefix={`${title} image`} />
                )}
                <p className="projectDetails">{details || description}</p>
                {!!tags.length && (
                    <div className="tags">{tags.map(t => <span className="tag" key={t}>{t}</span>)}</div>
                )}
                <div className="links">
                    {live && <a className="btn ghost" href={live} target="_blank" rel="noreferrer">Live</a>}
                    {repo && <a className="btn primary" href={repo} target="_blank" rel="noreferrer">Code</a>}
                </div>
            </div>
        </Modal>
    )
}
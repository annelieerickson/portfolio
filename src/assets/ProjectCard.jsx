export default function ProjectCard({ title, description, collaborators, tags = [], image, live, repo, onOpen }){
    return (
        <article
            className="project-card"
            role="button"
            tabIndex={0}
            onClick={onOpen}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onOpen?.() } }}
        >
            {image && <img src={image} alt="" />}
            <div className="project-body">
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="collaboratorTag">
                    <p><em>Collaborators: {collaborators}</em></p>
                </div>
                {!!tags.length && (
                    <div className="tags">{tags.map(t => <span className="tag" key={t}>{t}</span>)}</div>
                )}
                <div className="links" onClick={(e) => e.stopPropagation()}>
                    {live && <a className="btn ghost" href={live} target="_blank" rel="noreferrer">Live</a>}
                    {repo && <a className="btn primary" href={repo} target="_blank" rel="noreferrer">Code</a>}
                </div>
            </div>
        </article>
    )
}
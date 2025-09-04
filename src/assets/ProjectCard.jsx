export default function ProjectCard({ title, description, tags = [], image, live, repo }){
    return (
        <article className="project-card">
            {image && <img src={image} alt="" />}
            <div className="project-body">
                <h3>{title}</h3>
                <p>{description}</p>
                {!!tags.length && (
                    <div className="tags">
                        {tags.map(t => <span className="tag" key={t}>{t}</span>)}
                    </div>
                )}
                <div className="links">
                    {live && <a className="btn ghost" href={live} target="_blank" rel="noreferrer">Live</a>}
                    {repo && <a className="btn primary" href={repo} target="_blank" rel="noreferrer">Code</a>}
                </div>
            </div>
        </article>
    )
}
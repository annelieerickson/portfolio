import ProjectCard from '../assets/ProjectCard'


const pieces = [
    { title: 'Character Concept – Mage', description: 'Digital painting (Procreate).', tags: ['Digital Art', 'Concept'] },
    { title: 'Grand Canyon Study', description: 'Plein air gouache on toned paper.', tags: ['Traditional', 'Landscape'] },
    { title: 'D&D Portraits', description: 'Commissioned party portraits in a stylized look.', tags: ['Commission', 'Portrait'] },
]


export default function ArtProjects(){
    return (
        <section className="wrapper" id="art">
            <h1>Art Projects</h1>
            <div className="grid">
                {pieces.map(p => <ProjectCard key={p.title} {...p} />)}
            </div>
        </section>
    )
}
import ProjectCard from '../assets/ProjectCard'


// Optional: import images from src/assets and pass as `image`
// import dungeonImg from '../assets/dungeon-escape.jpg'
// import kanbanImg from '../assets/kanban.jpg'
// import robotsImg from '../assets/robots.jpg'
// import pathImg from '../assets/pathfinding.jpg'
// import coursesImg from '../assets/courses.jpg'
// import portfolioImg from '../assets/portfolio.jpg'


const projects = [
    {
        title: 'Dungeon Escape – Multiplayer Turn‑Based',
        description: 'Android + Spring Boot game on a grid. Real‑time WebSocket sync for moves, chat overlay, player icons, reconnect support, and turn order managed server‑side (@ServerEndpoint).',
        tags: ['Android', 'Java', 'Spring Boot', 'WebSockets', 'nv-websocket-client'],
// image: dungeonImg,
        // repo: 'https://github.com/<your-username>/dungeon-escape'
    },
    {
        title: 'Task Board / Kanban',
        description: 'React + Express + MongoDB CRUD app with columns (todo, inProgress, completed), modal forms, and REST endpoints for create/update/delete.',
        tags: ['React', 'Express', 'MongoDB', 'REST'],
// image: kanbanImg,
        // repo: 'https://github.com/<your-username>/task-board'
    },
    {
        title: 'Robots CRUD Dashboard',
        description: 'Simple CRUD dashboard to manage a robots collection. Includes search/filter and React‑Bootstrap UI components.',
        tags: ['React', 'Express', 'MongoDB', 'Bootstrap'],
// image: robotsImg,
        // repo: 'https://github.com/<your-username>/robots-crud'
    },
    {
        title: 'Pathfinding Visualizer',
        description: 'Interactive visualizer for Dijkstra / BFS / DFS on weighted grids with step‑by‑step animations and runtime insights.',
        tags: ['Algorithms', 'Dijkstra', 'React'],
// image: pathImg,
        // repo: 'https://github.com/<your-username>/pathfinding-visualizer'
    },
    {
        title: 'Course Browser UI',
        description: 'Responsive React + Tailwind interface to browse and filter course offerings with cards and search.',
        tags: ['React', 'Tailwind', 'UI'],
// image: coursesImg,
        // repo: 'https://github.com/<your-username>/course-browser'
    },
    {
        title: 'This Portfolio (Vite + GitHub Pages)',
        description: 'Source for this site: Vite + React, HashRouter for Pages, GitHub Actions deploy, and an accessible, responsive layout.',
        tags: ['React', 'Vite', 'GitHub Pages'],
// image: portfolioImg,
        // repo: 'https://github.com/<your-username>/<your-repo>'
    }
]


export default function CodingProjects(){
    return (
        <section className="wrapper" id="projects">
            <h1>Coding Projects</h1>
            <div className="grid">
                {projects.map(p => <ProjectCard key={p.title} {...p} />)}
            </div>
        </section>
    )
}
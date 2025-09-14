import {useState} from 'react'
import ProjectCard from '../assets/ProjectCard'
import ProjectModal from '../assets/ProjectModal'


import art1 from '../assets/codingcarousel/art1.png'
import art2 from '../assets/codingcarousel/art2.png'
import art3 from '../assets/codingcarousel/art3.png'
import art4 from '../assets/codingcarousel/art4.png'
import art5 from '../assets/codingcarousel/art5.png'
import art6 from '../assets/codingcarousel/art6.png'

import dungeon1 from '../assets/codingcarousel/dungeon1.png'
import dungeon2 from '../assets/codingcarousel/dungeon2.png'
import dungeon3 from '../assets/codingcarousel/dungeon3.png'
import dungeon4 from '../assets/codingcarousel/dungeon4.png'
import dungeon5 from '../assets/codingcarousel/dungeon5.png'
import dungeon6 from '../assets/codingcarousel/dungeon6.png'
import dungeon7 from '../assets/codingcarousel/dungeon7.png'

import taskboard1 from '../assets/codingcarousel/taskboard1.png'
import taskboard2 from '../assets/codingcarousel/taskboard2.png'
import taskboard3 from '../assets/codingcarousel/taskboard3.png'



const projects = [
    {
        title: 'Dungeon Escape – Multiplayer Turn‑Based',
        description: 'Android + Spring Boot game on a grid. Real‑time WebSocket sync for moves, chat overlay, player icons, reconnect support, and turn order managed server‑side (@ServerEndpoint).',
        collaborators: 'Annie Erickson, Tobias Wydra, Ben Gilbert, Davin Meyers',
        tags: ['Android', 'Java', 'Spring Boot', 'WebSockets'],
        images: [dungeon1, dungeon2, dungeon3, dungeon4, dungeon5, dungeon6, dungeon7],
        details: ''
// image: dungeonImg,
        // repo: 'https://github.com/<your-username>/dungeon-escape'
    },
    {
        title: 'Task Board / Kanban',
        description: 'React + Express + MongoDB CRUD app with columns (todo, inProgress, completed), modal forms, and REST endpoints for create/update/delete.',
        tags: ['React', 'Express', 'MongoDB', 'REST'],
        collaborators: 'Alex O\'Donohue',
        images: [taskboard1, taskboard2, taskboard3],
        details: ''
// image: kanbanImg,
        // repo: 'https://github.com/<your-username>/task-board'
    },
    {
        title: 'Art History Webpage',
        description: 'Responsive React + Tailwind interface to browse and filter various artworks, visit an ecommerce section, and view a timeline of art history',
        tags: ['React', 'Tailwind', 'UI'],
        collaborators: 'Alex O\'Donohue',
        images: [art1, art2, art3, art4, art5, art6],
        details: ''
// image: coursesImg,
        // repo: 'https://github.com/<your-username>/course-browser'
    },
    {
        title: 'This Portfolio (Vite + GitHub Pages)',
        description: 'Source for this site: Vite + React, HashRouter for Pages, GitHub Actions deploy, and an accessible, responsive layout.',
        tags: ['React', 'Vite', 'GitHub Pages'],
        collaborators: 'Solo Project',
        images: [/* tbd */],
        details: ''
// image: portfolioImg,
        // repo: 'https://github.com/<your-username>/<your-repo>'
    }
]


export default function CodingProjects() {
    const [selected, setSelected] = useState(null)


    return (
        <section className="wrapper" id="projects">
            <h1>Coding Projects</h1>
            <div className="grid">
                {projects.map(p => (
                    <ProjectCard key={p.title} {...p} onOpen={() => setSelected(p)}/>
                ))}
            </div>


            <ProjectModal open={!!selected} onClose={() => setSelected(null)} project={selected}/>
        </section>
    )
}
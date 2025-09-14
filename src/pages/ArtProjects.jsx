import {useState} from 'react'
import ProjectCard from '../assets/ProjectCard'
import ProjectModal from '../assets/ProjectModal'

import artis1 from '../assets/artcarousel/artis1.png'
import artis2 from '../assets/artcarousel/artis2.png'
import artis3 from '../assets/artcarousel/artis3.png'
import artis4 from '../assets/artcarousel/artis4.png'
import artis5 from '../assets/artcarousel/artis5.png'

import dsn1 from '../assets/artcarousel/dsn1.png'
import dsn2 from '../assets/artcarousel/dsn2.png'
import dsn3 from '../assets/artcarousel/dsn3.png'
import dsn4 from '../assets/artcarousel/dsn4.png'

import dungeonart1 from '../assets/artcarousel/dungeonart1.jpg'
import dungeonart2 from '../assets/artcarousel/dungeonart2.jpg'
import dungeonart3 from '../assets/artcarousel/dungeonart3.jpg'
import dungeonart4 from '../assets/artcarousel/dungeonart4.jpg'
import dungeonart5 from '../assets/artcarousel/dungeonart5.jpg'
import dungeonart6 from '../assets/artcarousel/dungeonart6.jpg'
import dungeonart7 from '../assets/artcarousel/dungeonart7.jpg'
import dungeonart8 from '../assets/artcarousel/dungeonart8.jpg'
import dungeonart9 from '../assets/artcarousel/dungeonart9.jpg'

import poolshark1 from '../assets/artcarousel/pool1.png'
import poolshark2 from '../assets/artcarousel/pool2.jpg'
import poolshark3 from '../assets/artcarousel/pool3.jpg'
import poolshark4 from '../assets/artcarousel/pool4.jpg'


const pieces = [
    {
        title: 'Pool Sharks',
        description: 'Custom assets for virtual billiards game. Includes subtle animations in the table.',
        collaborators: 'Game created by Oliver Strauss',
        tags: ['Digital Art', 'Assets', 'Pixel Art'],
        images: [poolshark1, poolshark2, poolshark3, poolshark4],
        details: ''
    },
    {
        title: 'Escape The Dungeon',
        description: 'Custom player sprites, buttons, title card created for a multiplayer mobile dungeon crawler created in Procreate',
        collaborators: 'Game created by Annie Erickson, Tobias Wydra, Ben Gilbert, Davin Meyers',
        tags: ['Pixel Art', 'Group Project'],
        images: [dungeonart1, dungeonart2, dungeonart3, dungeonart4, dungeonart5, dungeonart6, dungeonart7, dungeonart8, dungeonart9],
        details: ''
    },
    {
        title: 'Drawing I',
        description: 'A collection of drawings completed in DSN 1310',
        collaborators: 'Solo project',
        tags: [],
        images: [dsn1, dsn2, dsn3, dsn4],
        details: ''
    },
    {
        title: 'Drawing II',
        description: 'A collection of drawings completed in ARTIS 2300',
        collaborators: 'Solo project',
        tags: [],
        images: [artis1, artis2, artis3, artis4, artis5],
        details: ''
    },
]


export default function ArtProjects() {
    const [selected, setSelected] = useState(null)


    return (
        <section className="wrapper" id="art">
            <h1>Art Projects</h1>
            <div className="grid">
                {pieces.map(p => (
                    <ProjectCard key={p.title} {...p} onOpen={() => setSelected(p)}/>
                ))}
            </div>


            <ProjectModal open={!!selected} onClose={() => setSelected(null)} project={selected}/>
        </section>
    )
}
import './styles.css'
import Navbar from './assets/Navbar'
import Footer from './assets/Footer'
import Home from './pages/Home'
import Resume from './pages/Resume'
import CodingProjects from './pages/CodingProjects'
import ArtProjects from './pages/ArtProjects'
import NotFound from './pages/NotFound'
import { Routes, Route } from 'react-router-dom'


export default function App(){
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/projects" element={<CodingProjects />} />
                <Route path="/art" element={<ArtProjects />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </>
    )
}
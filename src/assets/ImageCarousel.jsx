import { useEffect, useState } from 'react'


export default function ImageCarousel({ images = [], startIndex = 0, altPrefix = 'Slide' }){
    const [index, setIndex] = useState(startIndex)
    const count = images.length


    useEffect(() => { setIndex(Math.min(startIndex, count - 1)) }, [startIndex, count])


    const prev = () => setIndex(i => (i - 1 + count) % count)
    const next = () => setIndex(i => (i + 1) % count)


    useEffect(() => {
        const onKey = (e) => { if (e.key === 'ArrowLeft') prev(); if (e.key === 'ArrowRight') next(); }
        document.addEventListener('keydown', onKey)
        return () => document.removeEventListener('keydown', onKey)
    }, [count])


    if (!count) return <div className="carouselEmpty">No images</div>


    return (
        <div className="carousel" aria-roledescription="carousel">
            <div className="carouselViewport">
                <img src={images[index]} alt={`${altPrefix} ${index + 1} of ${count}`} />
            </div>
            <button className="carouselBtn prev" onClick={prev} aria-label="Previous image">‹</button>
            <button className="carouselBtn next" onClick={next} aria-label="Next image">›</button>
            <div className="carouselDots" role="tablist" aria-label="Select slide">
                {images.map((_, i) => (
                    <button key={i} className={`dot ${i === index ? 'active' : ''}`} aria-label={`Go to slide ${i + 1}`} aria-selected={i === index} onClick={() => setIndex(i)} />
                ))}
            </div>
        </div>
    )
}
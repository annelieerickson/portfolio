import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

export default function Modal({ open, onClose, children, labelledBy = 'modal-title'}) {
    const overlayRef = useRef(null)
    const panelRef = useRef(null)

    useEffect(() => {
        if (!open) return
        const prevOverflow = document.body.style.overflow
        document.body.style.overflow = 'hidden'


        panelRef.current?.focus()


        const onKey = (e) => { if (e.key === 'Escape') onClose?.() }
        document.addEventListener('keydown', onKey)
        return () => {
            document.body.style.overflow = prevOverflow
            document.removeEventListener('keydown', onKey)
        }
    }, [open, onClose])


    if (!open) return null


    const onOverlayMouseDown = (e) => {
        if (e.target === overlayRef.current) onClose?.()
    }


    return createPortal(
        <div ref={overlayRef} className="modalOverlay" onMouseDown={onOverlayMouseDown} role="presentation">
            <div className="modalPanel" role="dialog" aria-modal="true" aria-labelledby={labelledBy} tabIndex={-1} ref={panelRef}>
                <button className="modalClose" onClick={onClose} aria-label="Close">×</button>
                {children}
            </div>
        </div>,
        document.body
    )
}
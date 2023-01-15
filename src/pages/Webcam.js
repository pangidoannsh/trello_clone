import { useState } from 'react';
import Webcam from 'react-webcam';
import './App.css';


function Webcam() {
    const [position, setposition] = useState({
        x: 0, y: 0
    });
    const [style, setStyle] = useState({
        left: 0,
        top: 0
    });
    const [isDragging, setIsDragging] = useState(false);

    const handleDrag = e => {
        setIsDragging(true)
        setposition({
            x: e.screenX - e.currentTarget.getBoundingClientRect().left,
            y: e.screenY - e.currentTarget.getBoundingClientRect().top
        })
    }
    const dragging = e => {
        if (isDragging) {
            const left = e.screenX - position.x;
            const top = e.screenY - position.y;
            setStyle({
                left,
                top
            })
        }
    }
    const handleDrop = e => {
        setIsDragging(false);
    }
    return (
        <>
            <div className="dragable bg-sky-400 rounded border-2 border-sky-600" style={style}
                onMouseDown={handleDrag} onMouseMove={dragging} onMouseUp={handleDrop} onMouseLeave={handleDrop}>
                <Webcam width={300} />
            </div>
        </>
    );
}

export default Webcam;

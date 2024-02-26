"use client"

import { useEffect, useRef, useState } from "react";



export default function Cursor() {
    const circleElementRef = useRef(null);

    const [mouse, setMouse] = useState({ x: 0, y: 0 });
    const [previousMouse, setPreviousMouse] = useState({ x: 0, y: 0 });
    const [circle, setCircle] = useState({ x: 0, y: 0 });
    const [currentScale, setCurrentScale] = useState(0);
    const [currentAngle, setCurrentAngle] = useState(0);
  
    const speed = 0.17;
  
    useEffect(() => {
      const handleMouseMove = (e) => {
        setMouse({ x: e.clientX, y: e.clientY });
      };
  
      window.addEventListener('mousemove', handleMouseMove);
  
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }, []);
  
    useEffect(() => {
      const tick = () => {
        setCircle((prevCircle) => ({
          x: prevCircle.x + (mouse.x - prevCircle.x) * speed,
          y: prevCircle.y + (mouse.y - prevCircle.y) * speed,
        }));
  
        const translateTransform = `translate(${circle.x}px, ${circle.y}px)`;
  
        const deltaMouseX = mouse.x - previousMouse.x;
        const deltaMouseY = mouse.y - previousMouse.y;
  
        setPreviousMouse({ x: mouse.x, y: mouse.y });
  
        const mouseVelocity = Math.min(
          Math.sqrt(deltaMouseX ** 2 + deltaMouseY ** 2) * 4,
          150
        );
  
        const scaleValue = (mouseVelocity / 150) * 0.5;
        setCurrentScale((prevScale) => prevScale + (scaleValue - prevScale) * speed);
        const scaleTransform = `scale(${1 + currentScale}, ${1 - currentScale})`;
  
        const angle = (Math.atan2(deltaMouseY, deltaMouseX) * 180) / Math.PI;
  
        if (mouseVelocity > 20) {
          setCurrentAngle(angle);
        }
  
        const rotateTransform = `rotate(${currentAngle}deg)`;
  
        circleElementRef.current.style.transform = `${translateTransform} ${rotateTransform} ${scaleTransform}`;
  
        window.requestAnimationFrame(tick);
      };
  
      tick();
  
      return () => {
        // Clean up any resources if needed
      };
    }, [mouse, previousMouse, circle, currentScale, currentAngle]);

    return(
        <div ref={circleElementRef} className="circle z-90">
            <style jsx>
            {`
            .circle {
                --circle-size: 40px;
                position: fixed;
                height: var(--circle-size);
                width: var(--circle-size);
                border: 1px solid white;
                border-radius: 100%;
                top: calc(var(--circle-size) / 2 * -1);
                left: calc(var(--circle-size) / 2 * -1);
                pointer-events: none;
            }            
            `}
            </style>
        </div>

        
    ); 
}
// import React, { useEffect, useRef } from 'react';

// const FloatingParticles = ({ children }) => {
//     const canvasRef = useRef(null);
//     const particlesRef = useRef([]);

//     class Particle {
//         constructor(canvas) {
//             this.canvas = canvas;
//             this.x = Math.random() * canvas.width;
//             this.y = Math.random() * canvas.height;
//             this.size = Math.random() * 2 + 1;
//             this.speedX = Math.random() * 0.5 - 0.25;
//             this.speedY = Math.random() * 0.5 - 0.25;
//             this.opacity = Math.random() * 0.5 + 0.2;
//         }

//         update() {
//             // Update position
//             this.x += this.speedX;
//             this.y += this.speedY;

//             // Wrap around screen
//             if (this.x < 0) this.x = this.canvas.width;
//             if (this.x > this.canvas.width) this.x = 0;
//             if (this.y < 0) this.y = this.canvas.height;
//             if (this.y > this.canvas.height) this.y = 0;
//         }

//         draw(ctx) {
//             ctx.beginPath();
//             ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
//             ctx.fillStyle = `rgba(209,166,61, ${this.opacity})`;
//             ctx.fill();
//         }
//     }

//     useEffect(() => {
//         const canvas = canvasRef.current;
//         const ctx = canvas.getContext('2d');
//         let animationFrame;

//         const handleResize = () => {
//             canvas.width = canvas.offsetWidth;
//             canvas.height = canvas.offsetHeight;
//             initParticles();
//         };

//         const initParticles = () => {
//             particlesRef.current = [];
//             const numberOfParticles = Math.floor((canvas.width * canvas.height) / 6000);
//             for (let i = 0; i < numberOfParticles; i++) {
//                 particlesRef.current.push(new Particle(canvas));
//             }
//         };

//         const animate = () => {
//             ctx.clearRect(0, 0, canvas.width, canvas.height);

//             particlesRef.current.forEach(particle => {
//                 particle.update();
//                 particle.draw(ctx);
//             });

//             animationFrame = requestAnimationFrame(animate);
//         };

//         // Initialize
//         handleResize();
//         animate();

//         // Event listener for resize
//         window.addEventListener('resize', handleResize);

//         return () => {
//             window.removeEventListener('resize', handleResize);
//             cancelAnimationFrame(animationFrame);
//         };
//     }, []);

//     return (
//         <div className="relative min-h-screen w-full">
//             <canvas
//                 ref={canvasRef}
//                 className="absolute inset-0 w-full h-full opacity-60"
//             />
//             <div className="relative z-10 min-h-screen p-8 flex items-center justify-center">
//                 {children}
//             </div>
//         </div>
//     );
// };

// export default FloatingParticles;


import React, { useEffect, useRef } from 'react';

const FloatingParticles = ({ children, theme }) => {
    const canvasRef = useRef(null);
    const particlesRef = useRef([]);

    class Particle {
        constructor(canvas) {
            this.canvas = canvas;
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 1;
            this.speedX = Math.random() * 0.5 - 0.25;
            this.speedY = Math.random() * 0.5 - 0.25;
            this.opacity = Math.random() * 0.5 + (theme === 'light' ? 1.0 : 0.2);
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            if (this.x < 0) this.x = this.canvas.width;
            if (this.x > this.canvas.width) this.x = 0;
            if (this.y < 0) this.y = this.canvas.height;
            if (this.y > this.canvas.height) this.y = 0;
        }

        draw(ctx) {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(209, 166, 61, ${this.opacity})`;
            ctx.fill();
        }
    }

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrame;

        const handleResize = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
            initParticles();
        };

        const initParticles = () => {
            particlesRef.current = [];
            const numberOfParticles = Math.floor((canvas.width * canvas.height) / 6000);
            for (let i = 0; i < numberOfParticles; i++) {
                particlesRef.current.push(new Particle(canvas));
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particlesRef.current.forEach(particle => {
                particle.update();
                particle.draw(ctx);
            });

            animationFrame = requestAnimationFrame(animate);
        };

        handleResize();
        animate();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrame);
        };
    }, [theme]);

    return (
        <div className="relative min-h-screen w-full">
            <canvas
                ref={canvasRef}
                className={`absolute inset-0 w-full h-full ${theme === 'light' ? 'opacity-80' : 'opacity-60'}`}
            />
            <div className="relative z-10 min-h-screen p-8 flex items-center justify-center">
                {children}
            </div>
        </div>
    );
};

export default FloatingParticles;
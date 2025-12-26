import React, { useRef, useEffect } from 'react';

const GeometricBackground = () => {
    const canvasRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let width, height;
        let animationFrameId;

        // Configuration
        const baseColor = '#020b12'; // Dark Black-Blue (Outer/Edge Color)
        const strokeColor = '#4fd1c5'; // Vibrant Teal / Cyan-Aquamarine

        // State
        let mouseX = 0;
        let mouseY = 0;
        let targetMouseX = 0;
        let targetMouseY = 0;

        // 3D Projection
        const project = (x, y, z, w, h) => {
            const fov = 1000;
            const scale = fov / (fov + z);
            const x2d = (x * scale) + w / 2;
            const y2d = (y * scale) + h / 2;
            return { x: x2d, y: y2d, scale: scale };
        };

        const rotateX = (v, angle) => ({ x: v.x, y: v.y * Math.cos(angle) - v.z * Math.sin(angle), z: v.y * Math.sin(angle) + v.z * Math.cos(angle) });
        const rotateY = (v, angle) => ({ x: v.x * Math.cos(angle) - v.z * Math.sin(angle), y: v.y, z: v.x * Math.sin(angle) + v.z * Math.cos(angle) });
        const rotateZ = (v, angle) => ({ x: v.x * Math.cos(angle) - v.y * Math.sin(angle), y: v.x * Math.sin(angle) + v.y * Math.cos(angle), z: v.z });

        // GEOMETRY DEFINITIONS
        const createShape = (type) => {
            let verts = [];
            let edges = [];

            if (type === 'cube') {
                verts = [
                    { x: -1, y: -1, z: -1 }, { x: 1, y: -1, z: -1 }, { x: 1, y: 1, z: -1 }, { x: -1, y: 1, z: -1 },
                    { x: -1, y: -1, z: 1 }, { x: 1, y: -1, z: 1 }, { x: 1, y: 1, z: 1 }, { x: -1, y: 1, z: 1 }
                ];
                edges = [
                    [0, 1], [1, 2], [2, 3], [3, 0], [4, 5], [5, 6], [6, 7], [7, 4], [0, 4], [1, 5], [2, 6], [3, 7]
                ];
            } else if (type === 'tetra') {
                verts = [
                    { x: 1, y: 1, z: 1 }, { x: -1, y: -1, z: 1 }, { x: -1, y: 1, z: -1 }, { x: 1, y: -1, z: -1 }
                ];
                edges = [
                    [0, 1], [0, 2], [0, 3], [1, 2], [1, 3], [2, 3]
                ];
            } else if (type === 'octa') {
                verts = [
                    { x: 0, y: 0, z: 1.41 }, { x: 0, y: 0, z: -1.41 }, { x: 1, y: 1, z: 0 }, { x: -1, y: -1, z: 0 }, { x: 1, y: -1, z: 0 }, { x: -1, y: 1, z: 0 }
                ];
                // Simplified Octa connections
                edges = [
                    [0, 2], [0, 3], [0, 4], [0, 5],
                    [1, 2], [1, 3], [1, 4], [1, 5],
                    [2, 4], [4, 3], [3, 5], [5, 2]
                ];
            } else {
                // Icosahedron
                const t = (1 + Math.sqrt(5)) / 2;
                verts = [
                    { x: -1, y: t, z: 0 }, { x: 1, y: t, z: 0 }, { x: -1, y: -t, z: 0 }, { x: 1, y: -t, z: 0 },
                    { x: 0, y: -1, z: t }, { x: 0, y: 1, z: t }, { x: 0, y: -1, z: -t }, { x: 0, y: 1, z: -t },
                    { x: t, y: 0, z: -1 }, { x: t, y: 0, z: 1 }, { x: -t, y: 0, z: -1 }, { x: -t, y: 0, z: 1 }
                ];
                for (let i = 0; i < verts.length; i++) {
                    for (let j = i + 1; j < verts.length; j++) {
                        if (Math.hypot(verts[i].x - verts[j].x, verts[i].y - verts[j].y, verts[i].z - verts[j].z) < 2.01) edges.push([i, j]);
                    }
                }
            }
            return { verts, edges };
        }

        // 3D Elastic Collision Physics
        const resolveCollision = (p1, p2) => {
            const dx = p1.x - p2.x;
            const dy = p1.y - p2.y;
            const dz = p1.z - p2.z;
            const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

            // Simple bounding sphere collision
            // Heuristic: scale size slightly down for "wireframe" feel so they interlock a bit before bouncing
            const minDist = (p1.size + p2.size) * 0.8;

            if (dist < minDist) {
                // Normal vector
                const nx = dx / dist;
                const ny = dy / dist;
                const nz = dz / dist;

                // Relative velocity
                const dvx = p1.vx - p2.vx;
                const dvy = p1.vy - p2.vy;
                const dvz = p1.vz - p2.vz;

                const velAlongNormal = dvx * nx + dvy * ny + dvz * nz;

                // Don't resolve if moving apart
                if (velAlongNormal > 0) return;

                // Restitution (bounciness)
                const e = 1;
                let j = -(1 + e) * velAlongNormal;
                j /= (1 / p1.mass + 1 / p2.mass);

                // Impulse
                const ix = j * nx;
                const iy = j * ny;
                const iz = j * nz;

                p1.vx += ix / p1.mass;
                p1.vy += iy / p1.mass;
                p1.vz += iz / p1.mass;
                p2.vx -= ix / p2.mass;
                p2.vy -= iy / p2.mass;
                p2.vz -= iz / p2.mass;

                // Separation (avoid sticking)
                const overlap = minDist - dist;
                const separation = overlap / 2;
                p1.x += nx * separation;
                p1.y += ny * separation;
                p1.z += nz * separation;
                p2.x -= nx * separation;
                p2.y -= ny * separation;
                p2.z -= nz * separation;
            }
        };

        const shapes = [];
        const particles = [];

        const initParticles = () => {
            particles.length = 0;
            const particleCount = 150;
            for (let i = 0; i < particleCount; i++) {
                particles.push({
                    x: (Math.random() - 0.5) * width * 2,
                    y: (Math.random() - 0.5) * height * 2,
                    z: Math.random() * 1000 - 500,
                    size: Math.random() * 2 + 0.5,
                    color: Math.random() > 0.5 ? '#ffffff' : '#e0f2f1', // Pure White or Soft Mint
                    opacity: Math.random() * 0.5 + 0.3
                });
            }
        };

        const initShapes = () => {
            shapes.length = 0;
            const types = ['cube', 'tetra', 'octa', 'icosa'];

            for (let i = 0; i < 70; i++) {
                const type = types[Math.floor(Math.random() * types.length)];
                const geo = createShape(type);
                const size = Math.random() * 30 + 20;

                shapes.push({
                    geo,
                    x: (Math.random() - 0.5) * width * 1.5,
                    y: (Math.random() - 0.5) * height * 1.5,
                    z: Math.random() * 1000 - 200,
                    vx: (Math.random() - 0.5) * 0.5, // Velocity X
                    vy: (Math.random() - 0.5) * 0.5, // Velocity Y
                    vz: (Math.random() - 0.5) * 0.5, // Velocity Z
                    rx: Math.random() * Math.PI * 2,
                    ry: Math.random() * Math.PI * 2,
                    rz: Math.random() * Math.PI * 2,
                    // Calm rotation
                    rsx: (Math.random() - 0.5) * 0.001,
                    rsy: (Math.random() - 0.5) * 0.001,
                    rsz: (Math.random() - 0.5) * 0.001,
                    size: size,
                    mass: size // Mass proportional to size
                });
            }
        };

        const animate = () => {
            // Smooth Easing
            mouseX += (targetMouseX - mouseX) * 0.02;
            mouseY += (targetMouseY - mouseY) * 0.02;

            const camX = -(mouseX - width / 2) * 0.3;
            const camY = -(mouseY - height / 2) * 0.3;

            const dpr = window.devicePixelRatio || 1;

            // Clear
            ctx.fillStyle = baseColor;
            ctx.fillRect(0, 0, width, height);

            // Deep Gradient
            const grad = ctx.createRadialGradient(width / 2, height / 2, 0, width / 2, height / 2, width);
            grad.addColorStop(0, '#0a192f'); // Deep Midnight Navy (Center)
            grad.addColorStop(1, '#020b12'); // Dark Black-Blue (Outer)
            ctx.fillStyle = grad;
            ctx.fillRect(0, 0, width, height);

            // Particles Rendering
            particles.forEach(p => {
                const effectiveZ = p.z;
                const parallaxFactor = 1000 / (1000 + effectiveZ);
                const effectiveX = p.x + camX * parallaxFactor * 0.5; // Slower parallax for background
                const effectiveY = p.y + camY * parallaxFactor * 0.5;

                const projected = project(effectiveX, effectiveY, effectiveZ, width, height);

                // Fade distant particles
                const alpha = Math.max(0, 1 - (effectiveZ + 500) / 1500) * p.opacity;

                ctx.fillStyle = p.color;
                ctx.globalAlpha = alpha;
                ctx.beginPath();
                ctx.arc(projected.x, projected.y, projected.scale * p.size, 0, Math.PI * 2);
                ctx.fill();
                ctx.globalAlpha = 1.0;
            });

            // Physics Loop
            for (let i = 0; i < shapes.length; i++) {
                const s = shapes[i];

                // Move
                s.x += s.vx;
                s.y += s.vy;
                s.z += s.vz;

                // Boundary Bounce
                if (s.x < -width) s.vx = Math.abs(s.vx);
                if (s.x > width) s.vx = -Math.abs(s.vx);
                if (s.y < -height) s.vy = Math.abs(s.vy);
                if (s.y > height) s.vy = -Math.abs(s.vy);
                if (s.z < -400) s.vz = Math.abs(s.vz);
                if (s.z > 800) s.vz = -Math.abs(s.vz);

                // Rotation
                s.rx += s.rsx;
                s.ry += s.rsy;
                s.rz += s.rsz;

                // Check Collisions
                for (let j = i + 1; j < shapes.length; j++) {
                    resolveCollision(s, shapes[j]);
                }
            }

            shapes.sort((a, b) => b.z - a.z);

            shapes.forEach(c => {
                const effectiveZ = c.z;
                const parallaxFactor = 1000 / (1000 + effectiveZ);
                const effectiveX = c.x + camX * parallaxFactor;
                const effectiveY = c.y + camY * parallaxFactor;

                // Projection
                const projectedVerts = c.geo.verts.map(v => {
                    let r = v;
                    r = rotateX(r, c.rx);
                    r = rotateY(r, c.ry);
                    r = rotateZ(r, c.rz);
                    return project(effectiveX + r.x * c.size, effectiveY + r.y * c.size, effectiveZ + r.z * c.size, width, height);
                });

                // Opacity (Depth Fade)
                // Nearer = clearer, Far = faded. Max 0.3 opacity for subtle background look (reduced from 1.0)
                let alpha = Math.max(0, 1 - (effectiveZ + 400) / 1200) * 0.3;

                ctx.strokeStyle = `rgba(79, 209, 197, ${alpha})`; // using RGB for #4fd1c5
                ctx.lineWidth = 1.5;
                ctx.lineCap = 'round';

                // Neon Glow - Reduced intensity
                ctx.shadowBlur = 5; // Reduced from 15
                ctx.shadowColor = `rgba(79, 209, 197, ${alpha * 0.6})`;

                // Glassy Fill - Subtle
                ctx.fillStyle = `rgba(79, 209, 197, ${alpha * 0.1})`; // Very faint tint

                ctx.beginPath();
                c.geo.edges.forEach(edge => {
                    const v1 = projectedVerts[edge[0]];
                    const v2 = projectedVerts[edge[1]];
                    ctx.moveTo(v1.x, v1.y);
                    ctx.lineTo(v2.x, v2.y);
                });
                ctx.fill(); // Fill the shape
                ctx.stroke();

                // Reset shadow for next operations
                ctx.shadowBlur = 0;
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        const handleMouseMove = (e) => {
            const rect = containerRef.current.getBoundingClientRect();
            targetMouseX = e.clientX - rect.left;
            targetMouseY = e.clientY - rect.top;
        };

        const setupCanvas = () => {
            if (!containerRef.current) return;
            width = containerRef.current.clientWidth;
            height = containerRef.current.clientHeight;
            const dpr = window.devicePixelRatio || 1;

            canvasRef.current.width = width * dpr;
            canvasRef.current.height = height * dpr;
            canvasRef.current.style.width = `100%`;
            canvasRef.current.style.height = `100%`;

            const ctx = canvasRef.current.getContext('2d');
            ctx.scale(dpr, dpr);

            initShapes();
            initParticles();
        };

        setupCanvas();
        animate();

        window.addEventListener('resize', setupCanvas);
        containerRef.current.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('resize', setupCanvas);
            if (containerRef.current) containerRef.current.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div ref={containerRef} className="absolute inset-0 z-0 overflow-hidden bg-[#020b12]">
            <canvas ref={canvasRef} className="block w-full h-full" />
        </div>
    );
};

export default GeometricBackground;




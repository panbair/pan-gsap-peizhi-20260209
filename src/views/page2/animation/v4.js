export const v4={


    // V4 炫酷特效
    neonGlitch: {
        type: 'timeline',
        animations: [
            { opacity: 0, x: -30, filter: 'blur(5px) hue-rotate(0deg)', duration: 0 },
            { opacity: 1, x: 30, filter: 'blur(3px) hue-rotate(120deg)', duration: 0.05, ease: 'none' },
            { opacity: 0.8, x: -20, filter: 'blur(8px) hue-rotate(240deg)', duration: 0.05, ease: 'none' },
            { opacity: 1, x: 20, filter: 'blur(2px) hue-rotate(360deg)', duration: 0.05, ease: 'none' },
            { opacity: 1, x: 0, filter: 'blur(0px) hue-rotate(0deg)', duration: 0.1, ease: 'power2.out' }
        ]
    },
    particleBurst: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 0, rotation: 0, duration: 0 },
            { opacity: 1, scale: 1.8, rotation: 180, duration: 0.2, ease: 'back.out(2)' },
            { scale: 0.9, rotation: 360, duration: 0.15, ease: 'power2.in' },
            { scale: 1, rotation: 0, duration: 0.15, ease: 'elastic.out(1, 0.5)' }
        ]
    },
    electricShock: {
        type: 'timeline',
        animations: [
            { opacity: 0, x: -50, skewX: -20, duration: 0 },
            { opacity: 1, x: 50, skewX: 20, duration: 0.08, ease: 'none' },
            { opacity: 0.7, x: -40, skewX: -15, duration: 0.08, ease: 'none' },
            { opacity: 1, x: 40, skewX: 15, duration: 0.08, ease: 'none' },
            { opacity: 1, x: 0, skewX: 0, duration: 0.15, ease: 'elastic.out(1, 0.3)' }
        ]
    },
    liquidMorph: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 0.3, borderRadius: '50%', rotation: 0, duration: 0 },
            { opacity: 0.5, scale: 1.2, borderRadius: '30%', rotation: 90, duration: 0.3, ease: 'power1.inOut' },
            { opacity: 1, scale: 0.8, borderRadius: '10%', rotation: 180, duration: 0.25, ease: 'power1.inOut' },
            { opacity: 1, scale: 1, borderRadius: '20px', rotation: 0, duration: 0.2, ease: 'elastic.out(1, 0.5)' }
        ]
    },
    cyberpunkRise: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 0.2, skewX: -30, skewY: -20, filter: 'blur(30px) hue-rotate(0deg)', duration: 0 },
            { opacity: 0.4, scale: 0.6, skewX: 20, skewY: 15, filter: 'blur(20px) hue-rotate(45deg)', duration: 0.15, ease: 'power2.out' },
            { opacity: 0.7, scale: 1.4, skewX: -15, skewY: -10, filter: 'blur(10px) hue-rotate(90deg)', duration: 0.12, ease: 'power2.in' },
            { opacity: 0.5, scale: 0.9, skewX: 10, skewY: 8, filter: 'blur(15px) hue-rotate(135deg)', duration: 0.1, ease: 'power2.out' },
            { opacity: 0.9, scale: 1.1, skewX: -5, skewY: -4, filter: 'blur(8px) hue-rotate(180deg)', duration: 0.08, ease: 'power2.in' },
            { opacity: 1, scale: 1, skewX: 0, skewY: 0, filter: 'blur(0px) hue-rotate(225deg)', duration: 0.08, ease: 'elastic.out(1, 0.4)' }
        ]
    },
    galaxySpiral: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 0, rotation: 0, x: -200, y: -200, duration: 0 },
            { opacity: 0.2, scale: 0.3, rotation: 90, x: -150, y: -150, duration: 0.15, ease: 'power2.out' },
            { opacity: 0.5, scale: 0.6, rotation: 180, x: -100, y: -100, duration: 0.12, ease: 'power2.in' },
            { opacity: 0.7, scale: 1, rotation: 270, x: -50, y: -50, duration: 0.1, ease: 'power2.out' },
            { opacity: 0.9, scale: 1.3, rotation: 360, x: 0, y: 0, duration: 0.08, ease: 'power2.in' },
            { opacity: 1, scale: 1, rotation: 450, duration: 0.08, ease: 'elastic.out(1, 0.3)' }
        ]
    },
    digitalDisintegrate: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 1, skewX: 0, filter: 'blur(0px) hue-rotate(0deg)', duration: 0 },
            { opacity: 1, skewX: 5, filter: 'blur(2px) hue-rotate(45deg)', duration: 0.08, ease: 'none' },
            { opacity: 0.8, skewX: -5, filter: 'blur(5px) hue-rotate(90deg)', duration: 0.08, ease: 'none' },
            { opacity: 1, skewX: 8, filter: 'blur(3px) hue-rotate(135deg)', duration: 0.06, ease: 'none' },
            { opacity: 0.6, skewX: -8, filter: 'blur(8px) hue-rotate(180deg)', duration: 0.06, ease: 'none' },
            { opacity: 1, scale: 0.9, skewX: 0, filter: 'blur(4px) hue-rotate(225deg)', duration: 0.05, ease: 'none' },
            { opacity: 0.5, scale: 0.8, filter: 'blur(10px) hue-rotate(270deg)', duration: 0.05, ease: 'none' },
            { opacity: 1, scale: 1, skewX: 0, filter: 'blur(0px) hue-rotate(315deg)', duration: 0.05, ease: 'elastic.out(1, 0.4)' }
        ]
    },
    retroVaporwave: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 0.2, rotationX: 0, skewY: -30, filter: 'blur(20px) hue-rotate(0deg) saturate(0.5)', duration: 0 },
            { opacity: 0.4, scale: 0.6, rotationX: 15, skewY: 20, filter: 'blur(15px) hue-rotate(60deg) saturate(1)', duration: 0.18, ease: 'power2.out' },
            { opacity: 0.7, scale: 1.3, rotationX: 30, skewY: -15, filter: 'blur(10px) hue-rotate(120deg) saturate(1.5)', duration: 0.15, ease: 'power2.in' },
            { opacity: 0.5, scale: 0.9, rotationX: 45, skewY: 10, filter: 'blur(12px) hue-rotate(180deg) saturate(1.2)', duration: 0.12, ease: 'power2.out' },
            { opacity: 0.8, scale: 1.1, rotationX: 60, skewY: -8, filter: 'blur(8px) hue-rotate(240deg) saturate(1.8)', duration: 0.1, ease: 'power2.in' },
            { opacity: 1, scale: 1, rotationX: 45, skewY: 0, filter: 'blur(0px) hue-rotate(300deg) saturate(1)', duration: 0.1, ease: 'elastic.out(1, 0.3)' }
        ]
    },
    matrixRain: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 0, y: -300, filter: 'blur(30px) hue-rotate(120deg)', duration: 0 },
            { opacity: 0.3, scale: 0.4, y: -200, filter: 'blur(25px) hue-rotate(110deg)', duration: 0.1, ease: 'power2.out' },
            { opacity: 0.5, scale: 0.7, y: -100, filter: 'blur(20px) hue-rotate(100deg)', duration: 0.1, ease: 'power2.in' },
            { opacity: 0.7, scale: 0.9, y: -50, filter: 'blur(15px) hue-rotate(90deg)', duration: 0.08, ease: 'power2.out' },
            { opacity: 0.9, scale: 1.1, y: 0, filter: 'blur(10px) hue-rotate(80deg)', duration: 0.08, ease: 'power2.in' },
            { opacity: 1, scale: 1, y: 0, filter: 'blur(0px) hue-rotate(70deg)', duration: 0.08, ease: 'elastic.out(1, 0.4)' }
        ]
    },
    crystalPrism: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 0.2, rotationX: 0, rotationY: 0, filter: 'blur(25px)', duration: 0 },
            { opacity: 0.3, scale: 0.5, rotationX: 30, rotationY: 45, filter: 'blur(18px)', duration: 0.18, ease: 'power2.out' },
            { opacity: 0.6, scale: 1.3, rotationX: 60, rotationY: 90, filter: 'blur(12px)', duration: 0.15, ease: 'power2.in' },
            { opacity: 0.4, scale: 0.8, rotationX: 90, rotationY: 135, filter: 'blur(15px)', duration: 0.12, ease: 'power2.out' },
            { opacity: 0.8, scale: 1.1, rotationX: 120, rotationY: 180, filter: 'blur(8px)', duration: 0.1, ease: 'power2.in' },
            { opacity: 1, scale: 1, rotationX: 150, rotationY: 225, filter: 'blur(0px)', duration: 0.1, ease: 'elastic.out(1, 0.3)' }
        ]
    },
    voidCollapse: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 2.5, rotation: 0, filter: 'blur(40px)', duration: 0 },
            { opacity: 0.2, scale: 2, rotation: 45, filter: 'blur(35px)', duration: 0.12, ease: 'power2.in' },
            { opacity: 0.4, scale: 1.5, rotation: 90, filter: 'blur(28px)', duration: 0.1, ease: 'power2.out' },
            { opacity: 0.6, scale: 1.1, rotation: 135, filter: 'blur(20px)', duration: 0.08, ease: 'power2.in' },
            { opacity: 0.8, scale: 0.8, rotation: 180, filter: 'blur(12px)', duration: 0.08, ease: 'power2.out' },
            { opacity: 1, scale: 0.6, rotation: 225, filter: 'blur(5px)', duration: 0.06, ease: 'power2.in' },
            { opacity: 1, scale: 1, rotation: 270, duration: 0.06, ease: 'elastic.out(1, 0.4)' }
        ]
    },
    plasmaFlow: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 0.3, filter: 'blur(35px) hue-rotate(0deg) brightness(0.3)', duration: 0 },
            { opacity: 0.3, scale: 0.6, filter: 'blur(28px) hue-rotate(45deg) brightness(0.6)', duration: 0.2, ease: 'power2.out' },
            { opacity: 0.6, scale: 1.4, filter: 'blur(18px) hue-rotate(90deg) brightness(1.5)', duration: 0.15, ease: 'power2.in' },
            { opacity: 0.4, scale: 0.8, filter: 'blur(25px) hue-rotate(135deg) brightness(0.9)', duration: 0.12, ease: 'power2.out' },
            { opacity: 0.8, scale: 1.2, filter: 'blur(12px) hue-rotate(180deg) brightness(1.8)', duration: 0.1, ease: 'power2.in' },
            { opacity: 1, scale: 1, filter: 'blur(0px) hue-rotate(225deg) brightness(1)', duration: 0.1, ease: 'elastic.out(1, 0.4)' }
        ]
    },
    holographicScan: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 0.5, rotationX: 0, filter: 'blur(20px) brightness(0.4)', duration: 0 },
            { opacity: 0.3, scale: 0.7, rotationX: 30, filter: 'blur(15px) brightness(0.7)', duration: 0.2, ease: 'power2.out' },
            { opacity: 0.6, scale: 1.1, rotationX: 60, filter: 'blur(10px) brightness(1.2)', duration: 0.15, ease: 'power2.in' },
            { opacity: 0.4, scale: 0.8, rotationX: 90, filter: 'blur(12px) brightness(0.8)', duration: 0.12, ease: 'power2.out' },
            { opacity: 0.8, scale: 1.05, rotationX: 120, filter: 'blur(8px) brightness(1)', duration: 0.1, ease: 'power2.in' },
            { opacity: 1, scale: 1, rotationX: 90, filter: 'blur(0px) brightness(1)', duration: 0.1, ease: 'elastic.out(1, 0.3)' }
        ]
    },
    quantumSuperposition: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 0.2, rotation: 0, filter: 'blur(30px) hue-rotate(0deg)', duration: 0 },
            { opacity: 0.4, scale: 0.6, rotation: 60, filter: 'blur(22px) hue-rotate(72deg)', duration: 0.15, ease: 'power2.out' },
            { opacity: 0.6, scale: 1.3, rotation: 120, filter: 'blur(15px) hue-rotate(144deg)', duration: 0.12, ease: 'power2.in' },
            { opacity: 0.8, scale: 0.9, rotation: 180, filter: 'blur(18px) hue-rotate(216deg)', duration: 0.1, ease: 'power2.out' },
            { opacity: 1, scale: 1.1, rotation: 240, filter: 'blur(10px) hue-rotate(288deg)', duration: 0.1, ease: 'power2.in' },
            { opacity: 1, scale: 1, rotation: 300, filter: 'blur(0px) hue-rotate(360deg)', duration: 0.1, ease: 'elastic.out(1, 0.3)' }
        ]
    },
    neonPulse: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 0.3, filter: 'blur(25px) hue-rotate(0deg) brightness(0.5)', duration: 0 },
            { opacity: 0.5, scale: 1.5, filter: 'blur(15px) hue-rotate(60deg) brightness(2)', duration: 0.18, ease: 'power2.out' },
            { opacity: 0.3, scale: 0.8, filter: 'blur(20px) hue-rotate(120deg) brightness(0.8)', duration: 0.12, ease: 'power2.in' },
            { opacity: 0.8, scale: 1.3, filter: 'blur(10px) hue-rotate(180deg) brightness(1.8)', duration: 0.1, ease: 'power2.out' },
            { opacity: 0.5, scale: 0.9, filter: 'blur(15px) hue-rotate(240deg) brightness(1.2)', duration: 0.08, ease: 'power2.in' },
            { opacity: 1, scale: 1.1, filter: 'blur(5px) hue-rotate(300deg) brightness(1.5)', duration: 0.08, ease: 'power2.out' },
            { opacity: 1, scale: 1, filter: 'blur(0px) hue-rotate(360deg) brightness(1)', duration: 0.08, ease: 'elastic.out(1, 0.3)' }
        ]
    },
    dimensionalRift: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 0.1, rotationX: 0, rotationY: 0, x: -150, y: 0, z: -800, filter: 'blur(40px)', duration: 0 },
            { opacity: 0.3, scale: 0.5, rotationX: 60, rotationY: 60, x: -80, y: 30, z: -500, filter: 'blur(30px)', duration: 0.18, ease: 'power2.out' },
            { opacity: 0.6, scale: 1.2, rotationX: 120, rotationY: 120, x: -30, y: 60, z: -200, filter: 'blur(20px)', duration: 0.15, ease: 'power2.in' },
            { opacity: 0.4, scale: 0.7, rotationX: 180, rotationY: 180, x: 20, y: 30, z: -100, filter: 'blur(25px)', duration: 0.12, ease: 'power2.out' },
            { opacity: 0.8, scale: 1.1, rotationX: 240, rotationY: 240, x: 40, y: 0, z: -50, filter: 'blur(12px)', duration: 0.1, ease: 'power2.in' },
            { opacity: 1, scale: 1, rotationX: 300, rotationY: 300, x: 0, y: 0, z: 0, filter: 'blur(0px)', duration: 0.1, ease: 'elastic.out(1, 0.4)' }
        ]
    },
    etherealMaterialize: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 0.1, filter: 'blur(50px) brightness(0.2)', duration: 0 },
            { opacity: 0.2, scale: 0.4, filter: 'blur(40px) brightness(0.5)', duration: 0.2, ease: 'power2.out' },
            { opacity: 0.4, scale: 0.7, filter: 'blur(30px) brightness(0.8)', duration: 0.15, ease: 'power2.in' },
            { opacity: 0.6, scale: 1, filter: 'blur(20px) brightness(1.2)', duration: 0.12, ease: 'power2.out' },
            { opacity: 0.8, scale: 1.2, filter: 'blur(10px) brightness(1.5)', duration: 0.1, ease: 'power2.in' },
            { opacity: 1, scale: 1, filter: 'blur(0px) brightness(1)', duration: 0.1, ease: 'elastic.out(1, 0.3)' }
        ]
    },
    radioactiveGlow: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 0.3, filter: 'blur(35px) brightness(0.3)', duration: 0 },
            { opacity: 0.3, scale: 0.6, filter: 'blur(25px) brightness(0.8)', duration: 0.2, ease: 'power2.out' },
            { opacity: 0.6, scale: 1.4, filter: 'blur(15px) brightness(2)', duration: 0.15, ease: 'power2.in' },
            { opacity: 0.4, scale: 0.8, filter: 'blur(20px) brightness(1.2)', duration: 0.12, ease: 'power2.out' },
            { opacity: 0.8, scale: 1.2, filter: 'blur(10px) brightness(1.8)', duration: 0.1, ease: 'power2.in' },
            { opacity: 1, scale: 1, filter: 'blur(5px) brightness(1.5)', duration: 0.1, ease: 'power2.out' },
            { opacity: 1, scale: 1, filter: 'blur(0px) brightness(1)', duration: 0.1, ease: 'elastic.out(1, 0.3)' }
        ]
    },
}

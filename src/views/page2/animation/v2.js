export const v2={

    // V2 高级特效
    hologram: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 0.5, filter: 'blur(10px) hue-rotate(90deg)', duration: 0 },
            { opacity: 0.8, scale: 1.1, filter: 'blur(2px) hue-rotate(180deg)', duration: 0.3, ease: 'power2.out' },
            { opacity: 1, scale: 1, filter: 'blur(0px) hue-rotate(0deg)', duration: 0.2, ease: 'power2.in' }
        ]
    },
    vortexIn: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 0, rotation: -720, duration: 0 },
            { opacity: 1, scale: 1, rotation: 0, duration: 1, ease: 'elastic.out(1, 0.5)' }
        ]
    },
    sineWave: {
        type: 'timeline',
        animations: [
            { opacity: 0, y: 50, x: -30, duration: 0 },
            { opacity: 0.5, y: -50, x: 30, duration: 0.3, ease: 'power1.inOut' },
            { opacity: 1, y: 0, x: 0, duration: 0.3, ease: 'power1.inOut' }
        ]
    },
    origami: {
        type: 'timeline',
        animations: [
            { opacity: 0, rotationX: 90, rotationY: 90, scale: 0.5, duration: 0 },
            { opacity: 0.5, rotationX: 45, rotationY: 45, scale: 0.8, duration: 0.4, ease: 'power2.out' },
            { opacity: 1, rotationX: 0, rotationY: 0, scale: 1, duration: 0.3, ease: 'back.out(1.7)' }
        ]
    },
    orbitIn: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 0, rotation: 0, x: 200, y: 0, duration: 0 },
            { opacity: 0.5, scale: 0.5, rotation: 180, x: 100, y: -100, duration: 0.4, ease: 'power1.in' },
            { opacity: 1, scale: 1, rotation: 360, x: 0, y: 0, duration: 0.4, ease: 'power1.out' }
        ]
    },
    kaleidoscope: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 0, rotation: 0, duration: 0 },
            { opacity: 0.3, scale: 0.5, rotation: 90, duration: 0.15, ease: 'power2.out' },
            { opacity: 0.6, scale: 1.2, rotation: 180, duration: 0.15, ease: 'power2.in' },
            { opacity: 0.4, scale: 0.8, rotation: 270, duration: 0.1, ease: 'power2.out' },
            { opacity: 0.8, scale: 1.1, rotation: 360, duration: 0.1, ease: 'power2.in' },
            { opacity: 1, scale: 1, rotation: 450, duration: 0.1, ease: 'elastic.out(1, 0.3)' }
        ]
    },
    nebulaExplosion: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 0, filter: 'blur(50px) hue-rotate(0deg)', duration: 0 },
            { opacity: 0.4, scale: 0.5, filter: 'blur(30px) hue-rotate(60deg)', duration: 0.2, ease: 'power2.out' },
            { opacity: 0.8, scale: 1.5, filter: 'blur(15px) hue-rotate(120deg)', duration: 0.15, ease: 'power2.in' },
            { opacity: 1, scale: 0.9, filter: 'blur(8px) hue-rotate(180deg)', duration: 0.1, ease: 'power2.out' },
            { opacity: 1, scale: 1, filter: 'blur(0px) hue-rotate(240deg)', duration: 0.1, ease: 'elastic.out(1, 0.4)' }
        ]
    },
    transformer: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 0, skewX: -20, skewY: -20, duration: 0 },
            { opacity: 0.3, scale: 0.5, skewX: 20, skewY: 20, duration: 0.2, ease: 'power2.out' },
            { opacity: 0.6, scale: 1.3, skewX: -10, skewY: -10, duration: 0.15, ease: 'power2.in' },
            { opacity: 0.9, scale: 0.9, skewX: 5, skewY: 5, duration: 0.1, ease: 'power2.out' },
            { opacity: 1, scale: 1, skewX: 0, skewY: 0, duration: 0.1, ease: 'elastic.out(1, 0.3)' }
        ]
    },
    tidalWave: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 0.3, y: 100, skewX: 0, duration: 0 },
            { opacity: 0.4, scale: 0.6, y: 50, skewX: -15, duration: 0.2, ease: 'power2.out' },
            { opacity: 0.7, scale: 1.2, y: -30, skewX: 15, duration: 0.15, ease: 'power2.in' },
            { opacity: 0.9, scale: 0.9, y: 15, skewX: -8, duration: 0.1, ease: 'power2.out' },
            { opacity: 1, scale: 1, y: 0, skewX: 0, duration: 0.1, ease: 'elastic.out(1, 0.4)' }
        ]
    },
    magicTransform: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 0.2, rotation: 0, filter: 'blur(20px) hue-rotate(0deg)', duration: 0 },
            { opacity: 0.3, scale: 0.5, rotation: 120, filter: 'blur(15px) hue-rotate(90deg)', duration: 0.2, ease: 'power2.out' },
            { opacity: 0.6, scale: 1.3, rotation: 240, filter: 'blur(10px) hue-rotate(180deg)', duration: 0.15, ease: 'power2.in' },
            { opacity: 0.8, scale: 0.8, rotation: 300, filter: 'blur(8px) hue-rotate(270deg)', duration: 0.1, ease: 'power2.out' },
            { opacity: 1, scale: 1, rotation: 360, filter: 'blur(0px) hue-rotate(360deg)', duration: 0.1, ease: 'elastic.out(1, 0.3)' }
        ]
    },
    dnaHelix: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 0, rotationY: 0, x: -50, duration: 0 },
            { opacity: 0.3, scale: 0.5, rotationY: 60, x: -30, duration: 0.12, ease: 'power2.out' },
            { opacity: 0.5, scale: 0.8, rotationY: 120, x: -10, duration: 0.12, ease: 'power2.in' },
            { opacity: 0.7, scale: 1.1, rotationY: 180, x: 10, duration: 0.1, ease: 'power2.out' },
            { opacity: 0.9, scale: 0.9, rotationY: 240, x: 30, duration: 0.1, ease: 'power2.in' },
            { opacity: 1, scale: 1, rotationY: 300, x: 0, duration: 0.1, ease: 'elastic.out(1, 0.4)' }
        ]
    },
    quantumLeap: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 0.1, rotation: 0, z: -1000, filter: 'blur(30px)', duration: 0 },
            { opacity: 0.4, scale: 0.6, rotation: 90, z: -500, filter: 'blur(20px)', duration: 0.15, ease: 'power2.out' },
            { opacity: 0.7, scale: 1.4, rotation: 180, z: 100, filter: 'blur(10px)', duration: 0.12, ease: 'power2.in' },
            { opacity: 0.9, scale: 0.9, rotation: 270, z: -50, filter: 'blur(5px)', duration: 0.08, ease: 'power2.out' },
            { opacity: 1, scale: 1, rotation: 360, z: 0, filter: 'blur(0px)', duration: 0.08, ease: 'elastic.out(1, 0.3)' }
        ]
    },
    flameBurst: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 0.2, skewX: 0, filter: 'blur(20px) hue-rotate(0deg)', duration: 0 },
            { opacity: 0.5, scale: 0.8, skewX: -20, filter: 'blur(15px) hue-rotate(30deg)', duration: 0.15, ease: 'power2.out' },
            { opacity: 0.8, scale: 1.5, skewX: 15, filter: 'blur(10px) hue-rotate(60deg)', duration: 0.12, ease: 'power2.in' },
            { opacity: 0.6, scale: 0.9, skewX: -10, filter: 'blur(12px) hue-rotate(90deg)', duration: 0.1, ease: 'power2.out' },
            { opacity: 1, scale: 1, skewX: 0, filter: 'blur(0px) hue-rotate(0deg)', duration: 0.1, ease: 'elastic.out(1, 0.3)' }
        ]
    },
    aurora: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 0.5, filter: 'blur(25px) hue-rotate(0deg) saturate(0.5)', duration: 0 },
            { opacity: 0.3, scale: 0.8, filter: 'blur(20px) hue-rotate(45deg) saturate(1)', duration: 0.2, ease: 'power2.out' },
            { opacity: 0.6, scale: 1.3, filter: 'blur(15px) hue-rotate(90deg) saturate(1.5)', duration: 0.15, ease: 'power2.in' },
            { opacity: 0.4, scale: 0.9, filter: 'blur(18px) hue-rotate(135deg) saturate(1.2)', duration: 0.1, ease: 'power2.out' },
            { opacity: 0.8, scale: 1.2, filter: 'blur(10px) hue-rotate(180deg) saturate(1.8)', duration: 0.08, ease: 'power2.in' },
            { opacity: 1, scale: 1, filter: 'blur(0px) hue-rotate(0deg) saturate(1)', duration: 0.08, ease: 'elastic.out(1, 0.4)' }
        ]
    },
    bullseye: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 3, rotation: 0, duration: 0 },
            { opacity: 0.4, scale: 2, rotation: 90, duration: 0.15, ease: 'power2.in' },
            { opacity: 0.7, scale: 1.2, rotation: 180, duration: 0.12, ease: 'power2.out' },
            { opacity: 0.9, scale: 0.9, rotation: 270, duration: 0.1, ease: 'power2.in' },
            { opacity: 1, scale: 1, rotation: 360, duration: 0.1, ease: 'elastic.out(1, 0.3)' }
        ]
    },
    crystalRefraction: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 0.2, rotationX: 0, rotationY: 0, filter: 'blur(15px)', duration: 0 },
            { opacity: 0.4, scale: 0.6, rotationX: 45, rotationY: 45, filter: 'blur(10px)', duration: 0.18, ease: 'power2.out' },
            { opacity: 0.7, scale: 1.3, rotationX: 90, rotationY: 90, filter: 'blur(8px)', duration: 0.15, ease: 'power2.in' },
            { opacity: 0.9, scale: 0.9, rotationX: 135, rotationY: 135, filter: 'blur(5px)', duration: 0.1, ease: 'power2.out' },
            { opacity: 1, scale: 1, rotationX: 180, rotationY: 180, filter: 'blur(0px)', duration: 0.1, ease: 'elastic.out(1, 0.3)' }
        ]
    },
    blackHole: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 3, rotation: 0, filter: 'blur(40px)', duration: 0 },
            { opacity: 0.2, scale: 2, rotation: 90, filter: 'blur(30px)', duration: 0.2, ease: 'power2.in' },
            { opacity: 0.4, scale: 1.3, rotation: 180, filter: 'blur(20px)', duration: 0.15, ease: 'power2.out' },
            { opacity: 0.6, scale: 0.8, rotation: 270, filter: 'blur(15px)', duration: 0.12, ease: 'power2.in' },
            { opacity: 0.8, scale: 1.1, rotation: 360, filter: 'blur(8px)', duration: 0.1, ease: 'power2.out' },
            { opacity: 1, scale: 1, rotation: 450, filter: 'blur(0px)', duration: 0.1, ease: 'elastic.out(1, 0.3)' }
        ]
    },
    impressionist: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 0.5, filter: 'blur(20px) hue-rotate(0deg)', duration: 0 },
            { opacity: 0.3, scale: 0.8, filter: 'blur(15px) hue-rotate(60deg)', duration: 0.2, ease: 'power2.out' },
            { opacity: 0.6, scale: 1.2, filter: 'blur(10px) hue-rotate(120deg)', duration: 0.15, ease: 'power2.in' },
            { opacity: 0.4, scale: 0.9, filter: 'blur(12px) hue-rotate(180deg)', duration: 0.1, ease: 'power2.out' },
            { opacity: 0.8, scale: 1.1, filter: 'blur(8px) hue-rotate(240deg)', duration: 0.1, ease: 'power2.in' },
            { opacity: 1, scale: 1, filter: 'blur(0px) hue-rotate(300deg)', duration: 0.1, ease: 'elastic.out(1, 0.3)' }
        ]
    },
    panorama: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 0.3, rotationY: -90, duration: 0 },
            { opacity: 0.4, scale: 0.7, rotationY: -45, duration: 0.25, ease: 'power2.out' },
            { opacity: 0.7, scale: 1.2, rotationY: 0, duration: 0.2, ease: 'power2.in' },
            { opacity: 0.9, scale: 0.9, rotationY: 45, duration: 0.15, ease: 'power2.out' },
            { opacity: 1, scale: 1, rotationY: 90, duration: 0.15, ease: 'elastic.out(1, 0.3)' }
        ]
    },
    fractalExpand: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 0, rotation: 0, duration: 0 },
            { opacity: 0.25, scale: 0.5, rotation: 72, duration: 0.1, ease: 'power2.out' },
            { opacity: 0.5, scale: 1, rotation: 144, duration: 0.1, ease: 'power2.in' },
            { opacity: 0.75, scale: 1.3, rotation: 216, duration: 0.08, ease: 'power2.out' },
            { opacity: 1, scale: 0.9, rotation: 288, duration: 0.08, ease: 'power2.in' },
            { scale: 1, rotation: 360, duration: 0.08, ease: 'elastic.out(1, 0.3)' }
        ]
    },
    butterflyEffect: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 0.1, rotation: 0, skewX: 0, skewY: 0, duration: 0 },
            { opacity: 0.3, scale: 0.5, rotation: 45, skewX: 20, skewY: -10, duration: 0.2, ease: 'power2.out' },
            { opacity: 0.6, scale: 1.3, rotation: 90, skewX: -15, skewY: 15, duration: 0.15, ease: 'power2.in' },
            { opacity: 0.4, scale: 0.8, rotation: 135, skewX: 10, skewY: -8, duration: 0.1, ease: 'power2.out' },
            { opacity: 0.8, scale: 1.1, rotation: 180, skewX: -5, skewY: 5, duration: 0.1, ease: 'power2.in' },
            { opacity: 1, scale: 1, rotation: 225, skewX: 0, skewY: 0, duration: 0.1, ease: 'elastic.out(1, 0.4)' }
        ]
    },
    timeWarp: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 0.2, filter: 'blur(30px) hue-rotate(0deg)', duration: 0 },
            { opacity: 0.3, scale: 1.5, filter: 'blur(10px) hue-rotate(120deg)', duration: 0.15, ease: 'power2.out' },
            { opacity: 0.7, scale: 0.6, filter: 'blur(25px) hue-rotate(240deg)', duration: 0.12, ease: 'power2.in' },
            { opacity: 0.5, scale: 1.3, filter: 'blur(8px) hue-rotate(360deg)', duration: 0.1, ease: 'power2.out' },
            { opacity: 0.9, scale: 0.9, filter: 'blur(15px) hue-rotate(480deg)', duration: 0.08, ease: 'power2.in' },
            { opacity: 1, scale: 1, filter: 'blur(0px) hue-rotate(0deg)', duration: 0.08, ease: 'elastic.out(1, 0.3)' }
        ]
    },
    supernova: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 0.01, filter: 'blur(100px)', duration: 0 },
            { opacity: 0.3, scale: 0.2, filter: 'blur(50px)', duration: 0.1, ease: 'power2.out' },
            { opacity: 0.6, scale: 0.8, filter: 'blur(25px)', duration: 0.08, ease: 'power2.in' },
            { opacity: 0.9, scale: 2, filter: 'blur(10px)', duration: 0.06, ease: 'power2.out' },
            { opacity: 0.7, scale: 1.2, filter: 'blur(15px)', duration: 0.05, ease: 'power2.in' },
            { opacity: 1, scale: 1, filter: 'blur(0px)', duration: 0.05, ease: 'elastic.out(1, 0.4)' }
        ]
    },
    parallax: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 0.8, z: -500, duration: 0 },
            { opacity: 0.4, scale: 0.9, z: -300, duration: 0.2, ease: 'power2.out' },
            { opacity: 0.7, scale: 1.1, z: -100, duration: 0.15, ease: 'power2.in' },
            { opacity: 0.9, scale: 1.05, z: 100, duration: 0.12, ease: 'power2.out' },
            { opacity: 1, scale: 1, z: 0, duration: 0.12, ease: 'elastic.out(1, 0.3)' }
        ]
    },
    omniTransform: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 0.2, rotationX: 0, rotationY: 0, rotationZ: 0, duration: 0 },
            { opacity: 0.3, scale: 0.6, rotationX: 60, rotationY: 60, rotationZ: 60, duration: 0.15, ease: 'power2.out' },
            { opacity: 0.6, scale: 1.3, rotationX: 120, rotationY: 120, rotationZ: 120, duration: 0.12, ease: 'power2.in' },
            { opacity: 0.4, scale: 0.8, rotationX: 180, rotationY: 180, rotationZ: 180, duration: 0.1, ease: 'power2.out' },
            { opacity: 0.8, scale: 1.1, rotationX: 240, rotationY: 240, rotationZ: 240, duration: 0.1, ease: 'power2.in' },
            { opacity: 1, scale: 1, rotationX: 360, rotationY: 360, rotationZ: 360, duration: 0.1, ease: 'elastic.out(1, 0.4)' }
        ]
    },
    turbo: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 0.1, x: -300, skewX: -30, duration: 0 },
            { opacity: 0.4, scale: 0.7, x: -150, skewX: 20, duration: 0.15, ease: 'power2.out' },
            { opacity: 0.8, scale: 1.5, x: 50, skewX: -10, duration: 0.1, ease: 'power2.in' },
            { opacity: 0.6, scale: 0.9, x: -30, skewX: 5, duration: 0.08, ease: 'power2.out' },
            { opacity: 1, scale: 1, x: 0, skewX: 0, duration: 0.08, ease: 'elastic.out(1, 0.5)' }
        ]
    },
    abstractArt: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 0, rotation: 0, filter: 'blur(30px) hue-rotate(0deg)', duration: 0 },
            { opacity: 0.3, scale: 0.8, rotation: 60, filter: 'blur(20px) hue-rotate(80deg)', duration: 0.18, ease: 'power2.out' },
            { opacity: 0.6, scale: 1.4, rotation: 120, filter: 'blur(12px) hue-rotate(160deg)', duration: 0.15, ease: 'power2.in' },
            { opacity: 0.4, scale: 0.7, rotation: 180, filter: 'blur(18px) hue-rotate(240deg)', duration: 0.12, ease: 'power2.out' },
            { opacity: 0.8, scale: 1.2, rotation: 240, filter: 'blur(8px) hue-rotate(320deg)', duration: 0.1, ease: 'power2.in' },
            { opacity: 1, scale: 1, rotation: 300, filter: 'blur(0px) hue-rotate(0deg)', duration: 0.1, ease: 'elastic.out(1, 0.3)' }
        ]
    },
    energyField: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 0.3, filter: 'blur(25px) brightness(0.5)', duration: 0 },
            { opacity: 0.4, scale: 0.7, filter: 'blur(18px) brightness(1.5)', duration: 0.2, ease: 'power2.out' },
            { opacity: 0.7, scale: 1.4, filter: 'blur(10px) brightness(2.5)', duration: 0.15, ease: 'power2.in' },
            { opacity: 0.5, scale: 0.8, filter: 'blur(15px) brightness(1.2)', duration: 0.12, ease: 'power2.out' },
            { opacity: 0.9, scale: 1.1, filter: 'blur(8px) brightness(1.8)', duration: 0.1, ease: 'power2.in' },
            { opacity: 1, scale: 1, filter: 'blur(0px) brightness(1)', duration: 0.1, ease: 'elastic.out(1, 0.4)' }
        ]
    },
}

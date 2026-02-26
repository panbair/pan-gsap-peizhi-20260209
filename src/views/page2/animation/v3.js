export const v3={

    // V3 前沿特效
    wormhole: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 0.2, rotationX: 0, rotationY: 0, filter: 'blur(40px)', duration: 0 },
            { opacity: 0.4, scale: 0.6, rotationX: 90, rotationY: 90, filter: 'blur(20px)', duration: 0.25, ease: 'power2.out' },
            { opacity: 0.8, scale: 1.2, rotationX: 180, rotationY: 180, filter: 'blur(8px)', duration: 0.2, ease: 'power2.in' },
            { opacity: 1, scale: 1, rotationX: 360, rotationY: 360, filter: 'blur(0px)', duration: 0.2, ease: 'power2.out' }
        ]
    },
    hologramPro: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 0.2, filter: 'blur(20px) brightness(0.5) hue-rotate(0deg)', duration: 0 },
            { opacity: 0.5, scale: 0.8, filter: 'blur(10px) brightness(1) hue-rotate(90deg)', duration: 0.3, ease: 'power2.out' },
            { opacity: 1, scale: 1.1, filter: 'blur(5px) brightness(1.5) hue-rotate(180deg)', duration: 0.2, ease: 'power2.in' },
            { opacity: 1, scale: 1, filter: 'blur(0px) brightness(1) hue-rotate(0deg)', duration: 0.2, ease: 'power2.out' }
        ]
    },
    quantumEntanglement: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 0, rotation: 0, filter: 'blur(30px)', duration: 0 },
            { opacity: 0.4, scale: 0.5, rotation: 180, filter: 'blur(15px)', duration: 0.2, ease: 'power2.out' },
            { opacity: 1, scale: 1.2, rotation: 360, filter: 'blur(5px)', duration: 0.15, ease: 'power2.in' },
            { opacity: 1, scale: 1, duration: 0.15, ease: 'elastic.out(1, 0.3)' }
        ]
    },
    neuralNetwork: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 0.3, rotation: 0, filter: 'blur(20px)', duration: 0 },
            { opacity: 0.3, scale: 0.6, rotation: 90, filter: 'blur(15px)', duration: 0.15, ease: 'power2.out' },
            { opacity: 0.6, scale: 0.9, rotation: 180, filter: 'blur(10px)', duration: 0.15, ease: 'power2.in' },
            { opacity: 1, scale: 1.1, rotation: 270, filter: 'blur(5px)', duration: 0.1, ease: 'power2.out' },
            { scale: 1, duration: 0.1, ease: 'power2.in' }
        ]
    },
    metaverse: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 0.2, rotationX: 0, rotationY: 0, filter: 'blur(40px)', duration: 0 },
            { opacity: 0.4, scale: 0.6, rotationX: 90, rotationY: 90, filter: 'blur(20px)', duration: 0.25, ease: 'power2.out' },
            { opacity: 0.8, scale: 1.2, rotationX: 180, rotationY: 180, filter: 'blur(8px)', duration: 0.2, ease: 'power2.in' },
            { opacity: 1, scale: 1, rotationX: 360, rotationY: 360, filter: 'blur(0px)', duration: 0.2, ease: 'power2.out' }
        ]
    },
    generativeArt: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 0.2, rotation: 0, filter: 'blur(35px) hue-rotate(0deg) saturate(0)', duration: 0 },
            { opacity: 0.4, scale: 0.6, rotation: 72, filter: 'blur(25px) hue-rotate(72deg) saturate(0.5)', duration: 0.15, ease: 'power2.out' },
            { opacity: 0.7, scale: 1.2, rotation: 144, filter: 'blur(15px) hue-rotate(144deg) saturate(1)', duration: 0.12, ease: 'power2.in' },
            { opacity: 0.5, scale: 0.8, rotation: 216, filter: 'blur(20px) hue-rotate(216deg) saturate(0.7)', duration: 0.1, ease: 'power2.out' },
            { opacity: 0.9, scale: 1.1, rotation: 288, filter: 'blur(8px) hue-rotate(288deg) saturate(1.3)', duration: 0.08, ease: 'power2.in' },
            { opacity: 1, scale: 1, rotation: 360, filter: 'blur(0px) hue-rotate(360deg) saturate(1)', duration: 0.08, ease: 'elastic.out(1, 0.4)' }
        ]
    },
    vrImmersive: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 0.3, rotationX: 0, rotationY: 0, z: -3000, filter: 'blur(60px) brightness(0.3)', duration: 0 },
            { opacity: 0.3, scale: 0.6, rotationX: 30, rotationY: 45, z: -2000, filter: 'blur(45px) brightness(0.6)', duration: 0.2, ease: 'power2.out' },
            { opacity: 0.6, scale: 1.4, rotationX: 60, rotationY: 90, z: -1000, filter: 'blur(30px) brightness(1.2)', duration: 0.15, ease: 'power2.in' },
            { opacity: 0.4, scale: 0.7, rotationX: 90, rotationY: 135, z: -400, filter: 'blur(20px) brightness(0.8)', duration: 0.12, ease: 'power2.out' },
            { opacity: 0.8, scale: 1.2, rotationX: 60, rotationY: 90, z: -100, filter: 'blur(10px) brightness(1.1)', duration: 0.1, ease: 'power2.in' },
            { opacity: 1, scale: 1, rotationX: 0, rotationY: 0, z: 0, filter: 'blur(0px) brightness(1)', duration: 0.1, ease: 'elastic.out(1, 0.3)' }
        ]
    },
    warpDrive: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 0.01, z: -10000, filter: 'blur(200px) brightness(0.05)', duration: 0 },
            { opacity: 0.1, scale: 0.02, z: -8000, filter: 'blur(150px) brightness(0.1)', duration: 0.03, ease: 'none' },
            { opacity: 0.2, scale: 0.04, z: -6000, filter: 'blur(120px) brightness(0.15)', duration: 0.03, ease: 'none' },
            { opacity: 0.3, scale: 0.08, z: -4000, filter: 'blur(90px) brightness(0.2)', duration: 0.03, ease: 'none' },
            { opacity: 0.5, scale: 0.15, z: -2500, filter: 'blur(60px) brightness(0.4)', duration: 0.04, ease: 'none' },
            { opacity: 0.7, scale: 0.3, z: -1000, filter: 'blur(30px) brightness(0.8)', duration: 0.05, ease: 'none' },
            { opacity: 1, scale: 2, z: 0, filter: 'blur(5px) brightness(2)', duration: 0.1, ease: 'power2.out' },
            { scale: 1, duration: 0.2, ease: 'elastic.out(1, 0.5)' }
        ]
    },
    deepfake: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 1, rotation: 0, filter: 'blur(0px) brightness(1)', duration: 0 },
            { opacity: 1, scale: 1.02, filter: 'blur(1px) brightness(1.1)', duration: 0.03, ease: 'none' },
            { scale: 0.98, filter: 'blur(2px) brightness(0.9)', duration: 0.03, ease: 'none' },
            { scale: 1.01, filter: 'blur(1px) brightness(1.05)', duration: 0.03, ease: 'none' },
            { scale: 0.99, filter: 'blur(2px) brightness(0.95)', duration: 0.03, ease: 'none' },
            { scale: 1.005, filter: 'blur(1px) brightness(1.02)', duration: 0.03, ease: 'none' },
            { scale: 0.995, filter: 'blur(1.5px) brightness(0.98)', duration: 0.03, ease: 'none' },
            { scale: 1, filter: 'blur(0px) brightness(1)', duration: 0.15, ease: 'power2.out' }
        ]
    },
}

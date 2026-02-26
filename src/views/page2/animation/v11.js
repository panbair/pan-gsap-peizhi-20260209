export const v11={



    // V11 爆炸破坏特效 - 16个震撼动画
    nuclearExplosion: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 0.1, filter: 'blur(80px) brightness(10)', duration: 0 },
            { opacity: 1, scale: 3, filter: 'blur(40px) brightness(8) hue-rotate(20deg)', duration: 0.15, ease: 'power2.out' },
            { opacity: 0.6, scale: 4.5, filter: 'blur(60px) brightness(6) hue-rotate(40deg)', duration: 0.1, ease: 'power2.in' },
            { opacity: 0.9, scale: 2.5, filter: 'blur(20px) brightness(9) hue-rotate(10deg)', duration: 0.12, ease: 'power2.out' },
            { opacity: 0.5, scale: 5, filter: 'blur(50px) brightness(5) hue-rotate(60deg)', duration: 0.08, ease: 'power2.in' },
            { opacity: 1, scale: 1.8, filter: 'blur(10px) brightness(7) hue-rotate(5deg)', duration: 0.1, ease: 'power2.out' },
            { opacity: 0.7, scale: 3.5, filter: 'blur(30px) brightness(4) hue-rotate(80deg)', duration: 0.07, ease: 'power2.in' },
            { opacity: 1, scale: 1.2, filter: 'blur(5px) brightness(6) hue-rotate(0deg)', duration: 0.08, ease: 'power2.out' },
            { opacity: 0.9, scale: 2, filter: 'blur(8px) brightness(3) hue-rotate(15deg)', duration: 0.06, ease: 'power2.in' },
            { opacity: 1, scale: 1, filter: 'blur(0px) brightness(1) hue-rotate(0deg)', duration: 0.14, ease: 'elastic.out(1, 0.3)' }
        ]
    },

    glassShatter: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 1, rotate: 0, filter: 'blur(0px)', duration: 0 },
            { opacity: 1, scale: 1.1, rotate: 5, filter: 'blur(2px)', duration: 0.08, ease: 'power1.out' },
            { opacity: 0.9, scale: 1.3, rotate: -8, filter: 'blur(5px)', duration: 0.06, ease: 'power1.in' },
            { opacity: 1, scale: 1.15, rotate: 12, filter: 'blur(3px)', duration: 0.07, ease: 'power1.out' },
            { opacity: 0.8, scale: 1.6, rotate: -15, filter: 'blur(8px)', duration: 0.05, ease: 'power1.in' },
            { opacity: 1, scale: 1.2, rotate: 8, filter: 'blur(4px)', duration: 0.06, ease: 'power1.out' },
            { opacity: 0.85, scale: 1.4, rotate: -10, filter: 'blur(6px)', duration: 0.05, ease: 'power1.in' },
            { opacity: 1, scale: 1.05, rotate: 5, filter: 'blur(2px)', duration: 0.06, ease: 'power1.out' },
            { opacity: 0.95, scale: 1.1, rotate: -3, filter: 'blur(1px)', duration: 0.04, ease: 'power1.in' },
            { opacity: 1, scale: 1, rotate: 0, filter: 'blur(0px)', duration: 0.15, ease: 'elastic.out(1, 0.5)' }
        ]
    },

    crystalExplosion: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 0.2, skewX: 0, skewY: 0, filter: 'blur(50px) brightness(3)', duration: 0 },
            { opacity: 1, scale: 2, skewX: 10, skewY: 5, filter: 'blur(20px) brightness(5)', duration: 0.12, ease: 'power2.out' },
            { opacity: 0.6, scale: 2.5, skewX: -15, skewY: -8, filter: 'blur(40px) brightness(2)', duration: 0.08, ease: 'power2.in' },
            { opacity: 1, scale: 1.5, skewX: 8, skewY: 4, filter: 'blur(10px) brightness(6)', duration: 0.1, ease: 'power2.out' },
            { opacity: 0.7, scale: 2, skewX: -12, skewY: -6, filter: 'blur(25px) brightness(3)', duration: 0.07, ease: 'power2.in' },
            { opacity: 1, scale: 1.2, skewX: 5, skewY: 2, filter: 'blur(5px) brightness(5)', duration: 0.08, ease: 'power2.out' },
            { opacity: 0.85, scale: 1.4, skewX: -6, skewY: -3, filter: 'blur(12px) brightness(3.5)', duration: 0.06, ease: 'power2.in' },
            { opacity: 1, scale: 1.05, skewX: 2, skewY: 1, filter: 'blur(2px) brightness(4)', duration: 0.07, ease: 'power2.out' },
            { opacity: 0.95, scale: 1.1, skewX: -1, skewY: -0.5, filter: 'blur(1px) brightness(3)', duration: 0.05, ease: 'power2.in' },
            { opacity: 1, scale: 1, skewX: 0, skewY: 0, filter: 'blur(0px) brightness(1)', duration: 0.12, ease: 'elastic.out(1, 0.4)' }
        ]
    },

    pixelBurst: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 0.1, filter: 'blur(30px) contrast(3)', duration: 0 },
            { opacity: 1, scale: 1.5, filter: 'blur(10px) contrast(2.5)', duration: 0.1, ease: 'power1.out' },
            { opacity: 0.5, scale: 2, filter: 'blur(20px) contrast(3.5)', duration: 0.08, ease: 'power1.in' },
            { opacity: 1, scale: 1.2, filter: 'blur(5px) contrast(2)', duration: 0.09, ease: 'power1.out' },
            { opacity: 0.6, scale: 1.8, filter: 'blur(15px) contrast(4)', duration: 0.07, ease: 'power1.in' },
            { opacity: 1, scale: 1.1, filter: 'blur(3px) contrast(1.8)', duration: 0.08, ease: 'power1.out' },
            { opacity: 0.7, scale: 1.4, filter: 'blur(8px) contrast(2.5)', duration: 0.06, ease: 'power1.in' },
            { opacity: 1, scale: 1.05, filter: 'blur(2px) contrast(1.5)', duration: 0.07, ease: 'power1.out' },
            { opacity: 0.9, scale: 1.1, filter: 'blur(1px) contrast(1.2)', duration: 0.05, ease: 'power1.in' },
            { opacity: 1, scale: 1, filter: 'blur(0px) contrast(1)', duration: 0.2, ease: 'elastic.out(1, 0.6)' }
        ]
    },

    fragmentShred: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 1, rotate: 0, filter: 'blur(0px)', duration: 0 },
            { opacity: 1, scale: 1.2, rotate: 45, filter: 'blur(3px) brightness(1.5)', duration: 0.1, ease: 'power2.out' },
            { opacity: 0.7, scale: 1.5, rotate: -30, filter: 'blur(8px) brightness(0.8)', duration: 0.08, ease: 'power2.in' },
            { opacity: 1, scale: 1.1, rotate: 60, filter: 'blur(4px) brightness(1.3)', duration: 0.09, ease: 'power2.out' },
            { opacity: 0.6, scale: 1.8, rotate: -45, filter: 'blur(12px) brightness(0.6)', duration: 0.07, ease: 'power2.in' },
            { opacity: 1, scale: 1.05, rotate: 30, filter: 'blur(2px) brightness(1.2)', duration: 0.08, ease: 'power2.out' },
            { opacity: 0.8, scale: 1.3, rotate: -20, filter: 'blur(6px) brightness(0.9)', duration: 0.06, ease: 'power2.in' },
            { opacity: 1, scale: 1.02, rotate: 10, filter: 'blur(1px) brightness(1.1)', duration: 0.07, ease: 'power2.out' },
            { opacity: 0.95, scale: 1.05, rotate: -5, filter: 'blur(0.5px) brightness(1.05)', duration: 0.05, ease: 'power2.in' },
            { opacity: 1, scale: 1, rotate: 0, filter: 'blur(0px) brightness(1)', duration: 0.12, ease: 'elastic.out(1, 0.5)' }
        ]
    },

    plasmaDetonation: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 0.3, filter: 'blur(70px) brightness(8) hue-rotate(180deg)', duration: 0 },
            { opacity: 1, scale: 2.5, filter: 'blur(30px) brightness(6) hue-rotate(200deg)', duration: 0.12, ease: 'power2.out' },
            { opacity: 0.5, scale: 4, filter: 'blur(50px) brightness(4) hue-rotate(220deg)', duration: 0.1, ease: 'power2.in' },
            { opacity: 1, scale: 1.8, filter: 'blur(15px) brightness(7) hue-rotate(190deg)', duration: 0.11, ease: 'power2.out' },
            { opacity: 0.6, scale: 3, filter: 'blur(35px) brightness(5) hue-rotate(210deg)', duration: 0.08, ease: 'power2.in' },
            { opacity: 1, scale: 1.3, filter: 'blur(8px) brightness(6.5) hue-rotate(185deg)', duration: 0.09, ease: 'power2.out' },
            { opacity: 0.75, scale: 2, filter: 'blur(20px) brightness(4.5) hue-rotate(195deg)', duration: 0.07, ease: 'power2.in' },
            { opacity: 1, scale: 1.08, filter: 'blur(3px) brightness(5.5) hue-rotate(187deg)', duration: 0.08, ease: 'power2.out' },
            { opacity: 0.9, scale: 1.15, filter: 'blur(5px) brightness(2) hue-rotate(192deg)', duration: 0.06, ease: 'power2.in' },
            { opacity: 1, scale: 1, filter: 'blur(0px) brightness(1) hue-rotate(0deg)', duration: 0.18, ease: 'elastic.out(1, 0.4)' }
        ]
    },

    energyShockwave: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 0.1, filter: 'blur(60px) brightness(5) hue-rotate(60deg)', duration: 0 },
            { opacity: 1, scale: 3, filter: 'blur(25px) brightness(4) hue-rotate(80deg)', duration: 0.15, ease: 'power3.out' },
            { opacity: 0.6, scale: 5, filter: 'blur(40px) brightness(3) hue-rotate(100deg)', duration: 0.12, ease: 'power3.in' },
            { opacity: 1, scale: 2, filter: 'blur(10px) brightness(4.5) hue-rotate(70deg)', duration: 0.13, ease: 'power3.out' },
            { opacity: 0.7, scale: 4, filter: 'blur(25px) brightness(2.5) hue-rotate(90deg)', duration: 0.1, ease: 'power3.in' },
            { opacity: 1, scale: 1.4, filter: 'blur(5px) brightness(4) hue-rotate(75deg)', duration: 0.11, ease: 'power3.out' },
            { opacity: 0.8, scale: 2.5, filter: 'blur(12px) brightness(3) hue-rotate(85deg)', duration: 0.08, ease: 'power3.in' },
            { opacity: 1, scale: 1.1, filter: 'blur(2px) brightness(3.5) hue-rotate(77deg)', duration: 0.09, ease: 'power3.out' },
            { opacity: 0.92, scale: 1.2, filter: 'blur(3px) brightness(2) hue-rotate(82deg)', duration: 0.07, ease: 'power3.in' },
            { opacity: 1, scale: 1, filter: 'blur(0px) brightness(1) hue-rotate(0deg)', duration: 0.15, ease: 'elastic.out(1, 0.5)' }
        ]
    },

    matterCollapse: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 2, filter: 'blur(50px) brightness(3)', duration: 0 },
            { opacity: 1, scale: 1.5, filter: 'blur(30px) brightness(5)', duration: 0.12, ease: 'power2.out' },
            { opacity: 0.4, scale: 0.8, filter: 'blur(40px) brightness(2)', duration: 0.1, ease: 'power2.in' },
            { opacity: 1, scale: 2.2, filter: 'blur(20px) brightness(6)', duration: 0.11, ease: 'power2.out' },
            { opacity: 0.5, scale: 0.6, filter: 'blur(35px) brightness(1.5)', duration: 0.09, ease: 'power2.in' },
            { opacity: 1, scale: 1.8, filter: 'blur(10px) brightness(5.5)', duration: 0.1, ease: 'power2.out' },
            { opacity: 0.6, scale: 0.9, filter: 'blur(20px) brightness(2.5)', duration: 0.08, ease: 'power2.in' },
            { opacity: 1, scale: 1.3, filter: 'blur(5px) brightness(4.5)', duration: 0.09, ease: 'power2.out' },
            { opacity: 0.85, scale: 0.95, filter: 'blur(8px) brightness(3)', duration: 0.07, ease: 'power2.in' },
            { opacity: 1, scale: 1, filter: 'blur(0px) brightness(1)', duration: 0.2, ease: 'elastic.out(1, 0.6)' }
        ]
    },

    stellarSupernova: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 0.05, filter: 'blur(90px) brightness(15) hue-rotate(300deg)', duration: 0 },
            { opacity: 1, scale: 4, filter: 'blur(40px) brightness(12) hue-rotate(320deg)', duration: 0.2, ease: 'power4.out' },
            { opacity: 0.5, scale: 6, filter: 'blur(60px) brightness(8) hue-rotate(340deg)', duration: 0.15, ease: 'power4.in' },
            { opacity: 1, scale: 2.5, filter: 'blur(15px) brightness(14) hue-rotate(310deg)', duration: 0.18, ease: 'power4.out' },
            { opacity: 0.6, scale: 5, filter: 'blur(35px) brightness(9) hue-rotate(330deg)', duration: 0.12, ease: 'power4.in' },
            { opacity: 1, scale: 1.8, filter: 'blur(8px) brightness(13) hue-rotate(305deg)', duration: 0.15, ease: 'power4.out' },
            { opacity: 0.7, scale: 3, filter: 'blur(20px) brightness(10) hue-rotate(315deg)', duration: 0.1, ease: 'power4.in' },
            { opacity: 1, scale: 1.2, filter: 'blur(3px) brightness(12) hue-rotate(302deg)', duration: 0.12, ease: 'power4.out' },
            { opacity: 0.85, scale: 1.5, filter: 'blur(6px) brightness(8) hue-rotate(312deg)', duration: 0.08, ease: 'power4.in' },
            { opacity: 1, scale: 1, filter: 'blur(0px) brightness(1) hue-rotate(0deg)', duration: 0.25, ease: 'elastic.out(1, 0.5)' }
        ]
    },

    disintegration: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 1, filter: 'blur(0px)', duration: 0 },
            { opacity: 1, scale: 1.1, filter: 'blur(2px) hue-rotate(0deg)', duration: 0.08, ease: 'power1.out' },
            { opacity: 0.7, scale: 1.2, filter: 'blur(5px) hue-rotate(45deg)', duration: 0.06, ease: 'power1.in' },
            { opacity: 1, scale: 1.15, filter: 'blur(3px) hue-rotate(90deg)', duration: 0.07, ease: 'power1.out' },
            { opacity: 0.6, scale: 1.3, filter: 'blur(8px) hue-rotate(135deg)', duration: 0.05, ease: 'power1.in' },
            { opacity: 1, scale: 1.2, filter: 'blur(4px) hue-rotate(180deg)', duration: 0.06, ease: 'power1.out' },
            { opacity: 0.75, scale: 1.25, filter: 'blur(6px) hue-rotate(225deg)', duration: 0.05, ease: 'power1.in' },
            { opacity: 1, scale: 1.08, filter: 'blur(2px) hue-rotate(270deg)', duration: 0.06, ease: 'power1.out' },
            { opacity: 0.9, scale: 1.1, filter: 'blur(1px) hue-rotate(315deg)', duration: 0.04, ease: 'power1.in' },
            { opacity: 1, scale: 1, filter: 'blur(0px) hue-rotate(0deg)', duration: 0.15, ease: 'elastic.out(1, 0.5)' }
        ]
    },

    chainReaction: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 0.5, filter: 'blur(20px)', duration: 0 },
            { opacity: 1, scale: 1.2, filter: 'blur(5px) brightness(1.5)', duration: 0.1, ease: 'power2.out' },
            { opacity: 0.6, scale: 0.8, filter: 'blur(15px) brightness(0.8)', duration: 0.08, ease: 'power2.in' },
            { opacity: 1, scale: 1.3, filter: 'blur(3px) brightness(1.8)', duration: 0.09, ease: 'power2.out' },
            { opacity: 0.65, scale: 0.9, filter: 'blur(12px) brightness(0.9)', duration: 0.07, ease: 'power2.in' },
            { opacity: 1, scale: 1.15, filter: 'blur(2px) brightness(1.5)', duration: 0.08, ease: 'power2.out' },
            { opacity: 0.7, scale: 0.95, filter: 'blur(8px) brightness(1)', duration: 0.06, ease: 'power2.in' },
            { opacity: 1, scale: 1.08, filter: 'blur(1px) brightness(1.3)', duration: 0.07, ease: 'power2.out' },
            { opacity: 0.88, scale: 1.02, filter: 'blur(0.5px) brightness(1.1)', duration: 0.05, ease: 'power2.in' },
            { opacity: 1, scale: 1, filter: 'blur(0px) brightness(1)', duration: 0.18, ease: 'elastic.out(1, 0.6)' }
        ]
    },

    shockwaveImpact: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 0.3, filter: 'blur(50px) brightness(4)', duration: 0 },
            { opacity: 1, scale: 2.8, filter: 'blur(20px) brightness(6)', duration: 0.18, ease: 'power3.out' },
            { opacity: 0.5, scale: 3.5, filter: 'blur(40px) brightness(3)', duration: 0.14, ease: 'power3.in' },
            { opacity: 1, scale: 1.8, filter: 'blur(8px) brightness(7)', duration: 0.16, ease: 'power3.out' },
            { opacity: 0.6, scale: 3, filter: 'blur(25px) brightness(2.5)', duration: 0.12, ease: 'power3.in' },
            { opacity: 1, scale: 1.3, filter: 'blur(4px) brightness(6.5)', duration: 0.14, ease: 'power3.out' },
            { opacity: 0.7, scale: 2.2, filter: 'blur(12px) brightness(3.5)', duration: 0.1, ease: 'power3.in' },
            { opacity: 1, scale: 1.1, filter: 'blur(2px) brightness(5.5)', duration: 0.12, ease: 'power3.out' },
            { opacity: 0.9, scale: 1.2, filter: 'blur(3px) brightness(2)', duration: 0.08, ease: 'power3.in' },
            { opacity: 1, scale: 1, filter: 'blur(0px) brightness(1)', duration: 0.2, ease: 'elastic.out(1, 0.5)' }
        ]
    },

    debrisScatter: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 1, rotate: 0, filter: 'blur(0px)', duration: 0 },
            { opacity: 1, scale: 1.3, rotate: 20, filter: 'blur(4px) brightness(1.3)', duration: 0.1, ease: 'power2.out' },
            { opacity: 0.7, scale: 1.6, rotate: -25, filter: 'blur(10px) brightness(0.9)', duration: 0.08, ease: 'power2.in' },
            { opacity: 1, scale: 1.2, rotate: 35, filter: 'blur(5px) brightness(1.4)', duration: 0.09, ease: 'power2.out' },
            { opacity: 0.65, scale: 1.8, rotate: -40, filter: 'blur(15px) brightness(0.8)', duration: 0.07, ease: 'power2.in' },
            { opacity: 1, scale: 1.1, rotate: 15, filter: 'blur(3px) brightness(1.3)', duration: 0.08, ease: 'power2.out' },
            { opacity: 0.75, scale: 1.4, rotate: -20, filter: 'blur(8px) brightness(0.95)', duration: 0.06, ease: 'power2.in' },
            { opacity: 1, scale: 1.03, rotate: 8, filter: 'blur(1px) brightness(1.2)', duration: 0.07, ease: 'power2.out' },
            { opacity: 0.92, scale: 1.08, rotate: -5, filter: 'blur(0.5px) brightness(1.1)', duration: 0.05, ease: 'power2.in' },
            { opacity: 1, scale: 1, rotate: 0, filter: 'blur(0px) brightness(1)', duration: 0.15, ease: 'elastic.out(1, 0.5)' }
        ]
    },

    plasmaBlast: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 0.2, filter: 'blur(60px) brightness(7) hue-rotate(120deg)', duration: 0 },
            { opacity: 1, scale: 2.2, filter: 'blur(25px) brightness(6) hue-rotate(140deg)', duration: 0.14, ease: 'power3.out' },
            { opacity: 0.55, scale: 3.5, filter: 'blur(45px) brightness(4) hue-rotate(160deg)', duration: 0.11, ease: 'power3.in' },
            { opacity: 1, scale: 1.6, filter: 'blur(12px) brightness(6.5) hue-rotate(130deg)', duration: 0.13, ease: 'power3.out' },
            { opacity: 0.65, scale: 2.8, filter: 'blur(30px) brightness(3.5) hue-rotate(150deg)', duration: 0.09, ease: 'power3.in' },
            { opacity: 1, scale: 1.2, filter: 'blur(6px) brightness(6) hue-rotate(125deg)', duration: 0.11, ease: 'power3.out' },
            { opacity: 0.7, scale: 1.8, filter: 'blur(18px) brightness(4) hue-rotate(145deg)', duration: 0.08, ease: 'power3.in' },
            { opacity: 1, scale: 1.05, filter: 'blur(2px) brightness(5.5) hue-rotate(128deg)', duration: 0.1, ease: 'power3.out' },
            { opacity: 0.88, scale: 1.15, filter: 'blur(4px) brightness(2.5) hue-rotate(138deg)', duration: 0.07, ease: 'power3.in' },
            { opacity: 1, scale: 1, filter: 'blur(0px) brightness(1) hue-rotate(0deg)', duration: 0.18, ease: 'elastic.out(1, 0.4)' }
        ]
    },

    quantumExplosion: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 0.1, filter: 'blur(70px) brightness(9) hue-rotate(240deg) saturate(2)', duration: 0 },
            { opacity: 1, scale: 2.8, filter: 'blur(30px) brightness(7) hue-rotate(260deg) saturate(2.5)', duration: 0.16, ease: 'power4.out' },
            { opacity: 0.45, scale: 4.5, filter: 'blur(50px) brightness(5) hue-rotate(280deg) saturate(3)', duration: 0.12, ease: 'power4.in' },
            { opacity: 1, scale: 1.9, filter: 'blur(15px) brightness(8) hue-rotate(250deg) saturate(2.2)', duration: 0.14, ease: 'power4.out' },
            { opacity: 0.55, scale: 3.5, filter: 'blur(35px) brightness(4) hue-rotate(270deg) saturate(2.8)', duration: 0.1, ease: 'power4.in' },
            { opacity: 1, scale: 1.4, filter: 'blur(8px) brightness(7.5) hue-rotate(245deg) saturate(2.3)', duration: 0.12, ease: 'power4.out' },
            { opacity: 0.65, scale: 2.2, filter: 'blur(20px) brightness(4.5) hue-rotate(265deg) saturate(2.6)', duration: 0.09, ease: 'power4.in' },
            { opacity: 1, scale: 1.08, filter: 'blur(3px) brightness(7) hue-rotate(248deg) saturate(2.4)', duration: 0.1, ease: 'power4.out' },
            { opacity: 0.85, scale: 1.18, filter: 'blur(5px) brightness(3) hue-rotate(258deg) saturate(2.5)', duration: 0.07, ease: 'power4.in' },
            { opacity: 1, scale: 1, filter: 'blur(0px) brightness(1) hue-rotate(0deg) saturate(1)', duration: 0.22, ease: 'elastic.out(1, 0.5)' }
        ]
    },

    antiMatterBlast: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 0.3, filter: 'blur(80px) brightness(12) invert(0.5)', duration: 0 },
            { opacity: 1, scale: 3, filter: 'blur(35px) brightness(10) invert(0.4)', duration: 0.18, ease: 'power4.out' },
            { opacity: 0.4, scale: 5, filter: 'blur(60px) brightness(6) invert(0.6)', duration: 0.14, ease: 'power4.in' },
            { opacity: 1, scale: 2.2, filter: 'blur(18px) brightness(11) invert(0.35)', duration: 0.16, ease: 'power4.out' },
            { opacity: 0.5, scale: 4.5, filter: 'blur(45px) brightness(5) invert(0.55)', duration: 0.12, ease: 'power4.in' },
            { opacity: 1, scale: 1.5, filter: 'blur(8px) brightness(10.5) invert(0.38)', duration: 0.14, ease: 'power4.out' },
            { opacity: 0.6, scale: 3, filter: 'blur(25px) brightness(4.5) invert(0.52)', duration: 0.1, ease: 'power4.in' },
            { opacity: 1, scale: 1.1, filter: 'blur(3px) brightness(9.5) invert(0.4)', duration: 0.12, ease: 'power4.out' },
            { opacity: 0.85, scale: 1.2, filter: 'blur(5px) brightness(3) invert(0.48)', duration: 0.08, ease: 'power4.in' },
            { opacity: 1, scale: 1, filter: 'blur(0px) brightness(1) invert(0)', duration: 0.25, ease: 'elastic.out(1, 0.5)' }
        ]
    }
}

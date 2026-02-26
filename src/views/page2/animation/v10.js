export const v10={

    // V10 超视觉系列 - 20个高级动画
    // 像素故障 - 经典glitch效果
    pixelGlitch: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 1, x: 0, filter: 'blur(20px) contrast(2) hue-rotate(0deg)', duration: 0 },
            { opacity: 1, scale: 1.05, x: -10, filter: 'blur(5px) contrast(3) hue-rotate(90deg)', duration: 0.03, ease: 'power1.inOut' },
            { opacity: 0.8, scale: 0.95, x: 15, filter: 'blur(8px) contrast(1.5) hue-rotate(180deg)', duration: 0.02, ease: 'power1.inOut' },
            { opacity: 1, scale: 1.08, x: -8, filter: 'blur(3px) contrast(2.5) hue-rotate(270deg)', duration: 0.03, ease: 'power1.inOut' },
            { opacity: 0.6, scale: 0.92, x: 12, filter: 'blur(10px) contrast(1.8) hue-rotate(360deg)', duration: 0.02, ease: 'power1.inOut' },
            { opacity: 1, scale: 1.03, x: -5, filter: 'blur(2px) contrast(2.2) hue-rotate(45deg)', duration: 0.03, ease: 'power1.inOut' },
            { opacity: 0.9, scale: 0.98, x: 6, filter: 'blur(6px) contrast(2) hue-rotate(90deg)', duration: 0.02, ease: 'power1.inOut' },
            { opacity: 1, scale: 1.01, x: -3, filter: 'blur(1px) contrast(2.1) hue-rotate(0deg)', duration: 0.03, ease: 'power1.inOut' },
            { opacity: 0.95, scale: 0.995, x: 2, filter: 'blur(3px) contrast(2.05)', duration: 0.02, ease: 'power1.inOut' },
            { opacity: 1, scale: 1, x: 0, filter: 'blur(0px) contrast(1)', duration: 0.05, ease: 'power2.out' }
        ]
    },

    // 色差分裂 - RGB分离效果
    chromaticAberration: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 0.8, filter: 'blur(30px) hue-rotate(0deg) saturate(0)', duration: 0 },
            { opacity: 0.6, scale: 1.1, filter: 'blur(15px) hue-rotate(30deg) saturate(0.5)', duration: 0.08, ease: 'power2.out' },
            { opacity: 0.3, scale: 0.9, filter: 'blur(25px) hue-rotate(60deg) saturate(0.3)', duration: 0.06, ease: 'power2.in' },
            { opacity: 0.8, scale: 1.2, filter: 'blur(8px) hue-rotate(90deg) saturate(0.8)', duration: 0.07, ease: 'power2.out' },
            { opacity: 0.5, scale: 0.95, filter: 'blur(18px) hue-rotate(120deg) saturate(0.5)', duration: 0.05, ease: 'power2.in' },
            { opacity: 0.9, scale: 1.05, filter: 'blur(4px) hue-rotate(150deg) saturate(0.9)', duration: 0.06, ease: 'power2.out' },
            { opacity: 0.7, scale: 0.98, filter: 'blur(10px) hue-rotate(180deg) saturate(0.7)', duration: 0.05, ease: 'power2.in' },
            { opacity: 1, scale: 1.02, filter: 'blur(2px) hue-rotate(210deg) saturate(1)', duration: 0.04, ease: 'power2.out' },
            { opacity: 0.9, scale: 1, filter: 'blur(5px) hue-rotate(240deg) saturate(0.95)', duration: 0.04, ease: 'power2.in' },
            { opacity: 1, scale: 1, filter: 'blur(0px) hue-rotate(0deg) saturate(1)', duration: 0.08, ease: 'elastic.out(1, 0.5)' }
        ]
    },

    // 数字噪点 - 随机噪声效果
    digitalNoise: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 0.5, filter: 'blur(40px) contrast(3) grayscale(1)', duration: 0 },
            { opacity: 0.7, scale: 1.3, filter: 'blur(20px) contrast(2) grayscale(0.7)', duration: 0.05, ease: 'power1.inOut' },
            { opacity: 0.4, scale: 0.8, filter: 'blur(35px) contrast(2.5) grayscale(0.9)', duration: 0.04, ease: 'power1.inOut' },
            { opacity: 0.8, scale: 1.2, filter: 'blur(12px) contrast(1.8) grayscale(0.6)', duration: 0.05, ease: 'power1.inOut' },
            { opacity: 0.5, scale: 0.9, filter: 'blur(28px) contrast(2.2) grayscale(0.8)', duration: 0.04, ease: 'power1.inOut' },
            { opacity: 0.9, scale: 1.1, filter: 'blur(6px) contrast(1.5) grayscale(0.5)', duration: 0.05, ease: 'power1.inOut' },
            { opacity: 0.6, scale: 0.95, filter: 'blur(15px) contrast(1.9) grayscale(0.7)', duration: 0.04, ease: 'power1.inOut' },
            { opacity: 0.95, scale: 1.03, filter: 'blur(3px) contrast(1.4) grayscale(0.4)', duration: 0.05, ease: 'power1.inOut' },
            { opacity: 0.85, scale: 1.01, filter: 'blur(8px) contrast(1.6) grayscale(0.55)', duration: 0.04, ease: 'power1.inOut' },
            { opacity: 1, scale: 1, filter: 'blur(0px) contrast(1) grayscale(0)', duration: 0.1, ease: 'power2.out' }
        ]
    },

    // 扫描线扭曲 - CRT显示器效果
    scanlineDistort: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 0.1, y: 0, filter: 'blur(50px) brightness(2) contrast(1.5)', duration: 0 },
            { opacity: 0.5, scale: 0.6, y: -100, filter: 'blur(25px) brightness(2.5) contrast(2)', duration: 0.12, ease: 'power2.out' },
            { opacity: 0.3, scale: 0.4, y: 50, filter: 'blur(40px) brightness(1.5) contrast(1.8)', duration: 0.08, ease: 'power2.in' },
            { opacity: 0.7, scale: 0.8, y: -50, filter: 'blur(15px) brightness(3) contrast(2.2)', duration: 0.1, ease: 'power2.out' },
            { opacity: 0.4, scale: 0.6, y: 30, filter: 'blur(30px) brightness(2) contrast(1.9)', duration: 0.07, ease: 'power2.in' },
            { opacity: 0.9, scale: 0.95, y: -20, filter: 'blur(8px) brightness(2.8) contrast(2.1)', duration: 0.08, ease: 'power2.out' },
            { opacity: 0.55, scale: 0.85, y: 15, filter: 'blur(20px) brightness(2.3) contrast(2)', duration: 0.06, ease: 'power2.in' },
            { opacity: 0.95, scale: 1.02, y: -8, filter: 'blur(3px) brightness(2.6) contrast(2.05)', duration: 0.07, ease: 'power2.out' },
            { opacity: 0.8, scale: 0.98, y: 5, filter: 'blur(10px) brightness(2.4) contrast(2.02)', duration: 0.05, ease: 'power2.in' },
            { opacity: 1, scale: 1, y: 0, filter: 'blur(0px) brightness(1) contrast(1)', duration: 0.12, ease: 'elastic.out(1, 0.45)' }
        ]
    },

    // 信号干扰 - 无线干扰效果
    signalInterference: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 1, x: 0, skewX: 0, filter: 'blur(30px) brightness(3) hue-rotate(0deg)', duration: 0 },
            { opacity: 0.8, scale: 1.1, x: -20, skewX: -15, filter: 'blur(15px) brightness(2.5) hue-rotate(45deg)', duration: 0.04, ease: 'power1.inOut' },
            { opacity: 0.4, scale: 0.9, x: 25, skewX: 20, filter: 'blur(25px) brightness(1.8) hue-rotate(90deg)', duration: 0.03, ease: 'power1.inOut' },
            { opacity: 0.9, scale: 1.08, x: -12, skewX: -10, filter: 'blur(10px) brightness(2.8) hue-rotate(135deg)', duration: 0.04, ease: 'power1.inOut' },
            { opacity: 0.5, scale: 0.92, x: 18, skewX: 15, filter: 'blur(18px) brightness(2) hue-rotate(180deg)', duration: 0.03, ease: 'power1.inOut' },
            { opacity: 0.95, scale: 1.04, x: -8, skewX: -6, filter: 'blur(5px) brightness(2.6) hue-rotate(225deg)', duration: 0.04, ease: 'power1.inOut' },
            { opacity: 0.6, scale: 0.97, x: 10, skewX: 8, filter: 'blur(12px) brightness(2.3) hue-rotate(270deg)', duration: 0.03, ease: 'power1.inOut' },
            { opacity: 1, scale: 1.02, x: -4, skewX: -3, filter: 'blur(2px) brightness(2.5) hue-rotate(315deg)', duration: 0.04, ease: 'power1.inOut' },
            { opacity: 0.9, scale: 1.01, x: 2, skewX: 2, filter: 'blur(6px) brightness(2.4) hue-rotate(0deg)', duration: 0.03, ease: 'power1.inOut' },
            { opacity: 1, scale: 1, x: 0, skewX: 0, filter: 'blur(0px) brightness(1)', duration: 0.08, ease: 'power2.out' }
        ]
    },

    // 数据损坏 - 文件损坏效果
    dataCorruption: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 1, rotateX: 0, rotateY: 0, filter: 'blur(60px) brightness(4) contrast(2)', duration: 0 },
            { opacity: 0.5, scale: 1.2, rotateX: 45, rotateY: 30, filter: 'blur(25px) brightness(3) contrast(2.5)', duration: 0.1, ease: 'power3.out' },
            { opacity: 0.2, scale: 0.8, rotateX: -30, rotateY: -45, filter: 'blur(50px) brightness(1.5) contrast(3)', duration: 0.08, ease: 'power3.in' },
            { opacity: 0.7, scale: 1.15, rotateX: 20, rotateY: 25, filter: 'blur(12px) brightness(3.5) contrast(2.2)', duration: 0.09, ease: 'power3.out' },
            { opacity: 0.35, scale: 0.85, rotateX: -15, rotateY: -20, filter: 'blur(35px) brightness(2) contrast(2.8)', duration: 0.07, ease: 'power3.in' },
            { opacity: 0.85, scale: 1.08, rotateX: 10, rotateY: 12, filter: 'blur(6px) brightness(3.8) contrast(2.1)', duration: 0.08, ease: 'power3.out' },
            { opacity: 0.5, scale: 0.95, rotateX: -8, rotateY: -10, filter: 'blur(18px) brightness(2.5) contrast(2.5)', duration: 0.06, ease: 'power3.in' },
            { opacity: 0.95, scale: 1.03, rotateX: 4, rotateY: 5, filter: 'blur(3px) brightness(3.6) contrast(2.05)', duration: 0.07, ease: 'power3.out' },
            { opacity: 0.8, scale: 1.01, rotateX: -2, rotateY: -2, filter: 'blur(8px) brightness(3) contrast(2.02)', duration: 0.05, ease: 'power3.in' },
            { opacity: 1, scale: 1, rotateX: 0, rotateY: 0, filter: 'blur(0px) brightness(1) contrast(1)', duration: 0.1, ease: 'elastic.out(1, 0.4)' }
        ]
    },

    // 赛博故障 - 未来感glitch
    cyberGlitch: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 0.3, x: 0, y: 0, filter: 'blur(50px) brightness(5) saturate(0)', duration: 0 },
            { opacity: 0.7, scale: 1.4, x: -30, y: 20, filter: 'blur(20px) brightness(3) saturate(0.8)', duration: 0.05, ease: 'power1.inOut' },
            { opacity: 0.3, scale: 0.7, x: 35, y: -25, filter: 'blur(40px) brightness(2) saturate(0.4)', duration: 0.04, ease: 'power1.inOut' },
            { opacity: 0.9, scale: 1.25, x: -20, y: 15, filter: 'blur(10px) brightness(4) saturate(1.2)', duration: 0.05, ease: 'power1.inOut' },
            { opacity: 0.4, scale: 0.8, x: 25, y: -18, filter: 'blur(25px) brightness(2.5) saturate(0.6)', duration: 0.04, ease: 'power1.inOut' },
            { opacity: 0.95, scale: 1.12, x: -12, y: 10, filter: 'blur(5px) brightness(4.5) saturate(1.4)', duration: 0.05, ease: 'power1.inOut' },
            { opacity: 0.55, scale: 0.9, x: 15, y: -8, filter: 'blur(15px) brightness(3) saturate(0.9)', duration: 0.04, ease: 'power1.inOut' },
            { opacity: 0.98, scale: 1.05, x: -6, y: 5, filter: 'blur(2px) brightness(4.2) saturate(1.3)', duration: 0.05, ease: 'power1.inOut' },
            { opacity: 0.88, scale: 1.02, x: 4, y: -3, filter: 'blur(8px) brightness(3.5) saturate(1.1)', duration: 0.04, ease: 'power1.inOut' },
            { opacity: 1, scale: 1, x: 0, y: 0, filter: 'blur(0px) brightness(1) saturate(1)', duration: 0.1, ease: 'elastic.out(1, 0.5)' }
        ]
    },

    // 静态雪花 - 电视雪花效果
    staticSnow: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 1, filter: 'blur(70px) contrast(3) grayscale(1)', duration: 0 },
            { opacity: 0.6, scale: 1.05, filter: 'blur(40px) contrast(2.5) grayscale(0.8)', duration: 0.06, ease: 'power1.inOut' },
            { opacity: 0.3, scale: 0.98, filter: 'blur(55px) contrast(2.8) grayscale(0.9)', duration: 0.05, ease: 'power1.inOut' },
            { opacity: 0.7, scale: 1.08, filter: 'blur(25px) contrast(2.2) grayscale(0.6)', duration: 0.06, ease: 'power1.inOut' },
            { opacity: 0.4, scale: 0.95, filter: 'blur(45px) contrast(2.5) grayscale(0.8)', duration: 0.05, ease: 'power1.inOut' },
            { opacity: 0.85, scale: 1.04, filter: 'blur(15px) contrast(2) grayscale(0.5)', duration: 0.06, ease: 'power1.inOut' },
            { opacity: 0.5, scale: 0.99, filter: 'blur(30px) contrast(2.3) grayscale(0.7)', duration: 0.05, ease: 'power1.inOut' },
            { opacity: 0.95, scale: 1.02, filter: 'blur(8px) contrast(1.8) grayscale(0.4)', duration: 0.06, ease: 'power1.inOut' },
            { opacity: 0.8, scale: 1.01, filter: 'blur(18px) contrast(2.1) grayscale(0.55)', duration: 0.05, ease: 'power1.inOut' },
            { opacity: 1, scale: 1, filter: 'blur(0px) contrast(1) grayscale(0)', duration: 0.12, ease: 'power2.out' }
        ]
    },

    // 像素排序 - 艺术像素效果
    pixelSort: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 0.2, filter: 'blur(60px) brightness(3) contrast(2) hue-rotate(0deg)', duration: 0 },
            { opacity: 0.5, scale: 1.5, filter: 'blur(30px) brightness(2.5) contrast(2.5) hue-rotate(60deg)', duration: 0.15, ease: 'power2.out' },
            { opacity: 0.25, scale: 0.5, filter: 'blur(50px) brightness(1.8) contrast(1.8) hue-rotate(120deg)', duration: 0.12, ease: 'power2.in' },
            { opacity: 0.7, scale: 1.3, filter: 'blur(15px) brightness(3) contrast(2.2) hue-rotate(180deg)', duration: 0.13, ease: 'power2.out' },
            { opacity: 0.35, scale: 0.7, filter: 'blur(35px) brightness(2) contrast(2) hue-rotate(240deg)', duration: 0.1, ease: 'power2.in' },
            { opacity: 0.85, scale: 1.15, filter: 'blur(8px) brightness(3.5) contrast(2.1) hue-rotate(300deg)', duration: 0.11, ease: 'power2.out' },
            { opacity: 0.5, scale: 0.9, filter: 'blur(20px) brightness(2.5) contrast(2.05) hue-rotate(360deg)', duration: 0.09, ease: 'power2.in' },
            { opacity: 0.95, scale: 1.05, filter: 'blur(4px) brightness(3.2) contrast(2.02) hue-rotate(420deg)', duration: 0.1, ease: 'power2.out' },
            { opacity: 0.75, scale: 0.98, filter: 'blur(10px) brightness(2.8) contrast(2.01) hue-rotate(390deg)', duration: 0.08, ease: 'power2.in' },
            { opacity: 1, scale: 1, filter: 'blur(0px) brightness(1) contrast(1) hue-rotate(0deg)', duration: 0.15, ease: 'elastic.out(1, 0.45)' }
        ]
    },

    // 比特腐烂 - 数字衰减效果
    bitRot: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 1, filter: 'blur(80px) brightness(4) contrast(3) invert(0)', duration: 0 },
            { opacity: 0.4, scale: 1.1, filter: 'blur(40px) brightness(3) contrast(2.5) invert(0.2)', duration: 0.2, ease: 'power1.out' },
            { opacity: 0.6, scale: 0.95, filter: 'blur(60px) brightness(2) contrast(2.8) invert(0.4)', duration: 0.15, ease: 'power1.in' },
            { opacity: 0.3, scale: 1.08, filter: 'blur(30px) brightness(3.5) contrast(2.2) invert(0.6)', duration: 0.18, ease: 'power1.out' },
            { opacity: 0.7, scale: 0.9, filter: 'blur(50px) brightness(1.8) contrast(2.6) invert(0.8)', duration: 0.12, ease: 'power1.in' },
            { opacity: 0.5, scale: 1.04, filter: 'blur(20px) brightness(3.8) contrast(2) invert(0.5)', duration: 0.15, ease: 'power1.out' },
            { opacity: 0.8, scale: 0.97, filter: 'blur(40px) brightness(2.2) contrast(2.4) invert(0.3)', duration: 0.1, ease: 'power1.in' },
            { opacity: 0.6, scale: 1.02, filter: 'blur(10px) brightness(3.2) contrast(2.1) invert(0.15)', duration: 0.12, ease: 'power1.out' },
            { opacity: 0.9, scale: 1.01, filter: 'blur(25px) brightness(2.5) contrast(2.05) invert(0.08)', duration: 0.1, ease: 'power1.in' },
            { opacity: 1, scale: 1, filter: 'blur(0px) brightness(1) contrast(1) invert(0)', duration: 0.15, ease: 'power2.out' }
        ]
    },

    // 波形失真 - 音频波形效果
    waveDistortion: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 0.5, skewX: 0, filter: 'blur(50px) brightness(3)', duration: 0 },
            { opacity: 0.7, scale: 1.2, skewX: 25, filter: 'blur(20px) brightness(2.5)', duration: 0.1, ease: 'power2.out' },
            { opacity: 0.35, scale: 0.8, skewX: -20, filter: 'blur(40px) brightness(1.8)', duration: 0.08, ease: 'power2.in' },
            { opacity: 0.8, scale: 1.15, skewX: 18, filter: 'blur(10px) brightness(2.8)', duration: 0.09, ease: 'power2.out' },
            { opacity: 0.45, scale: 0.85, skewX: -15, filter: 'blur(25px) brightness(2)', duration: 0.07, ease: 'power2.in' },
            { opacity: 0.9, scale: 1.08, skewX: 12, filter: 'blur(5px) brightness(3.2)', duration: 0.08, ease: 'power2.out' },
            { opacity: 0.55, scale: 0.92, skewX: -10, filter: 'blur(15px) brightness(2.4)', duration: 0.06, ease: 'power2.in' },
            { opacity: 0.95, scale: 1.03, skewX: 8, filter: 'blur(3px) brightness(2.9)', duration: 0.07, ease: 'power2.out' },
            { opacity: 0.8, scale: 0.99, skewX: -5, filter: 'blur(8px) brightness(2.6)', duration: 0.05, ease: 'power2.in' },
            { opacity: 1, scale: 1, skewX: 0, filter: 'blur(0px) brightness(1)', duration: 0.12, ease: 'elastic.out(1, 0.4)' }
        ]
    },

    // 碎片爆炸 - 粒子爆炸效果
    fragmentExplosion: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 0.1, filter: 'blur(100px) brightness(5)', duration: 0 },
            { opacity: 0.9, scale: 2.5, filter: 'blur(20px) brightness(4)', duration: 0.08, ease: 'power4.out' },
            { opacity: 0.4, scale: 0.3, filter: 'blur(80px) brightness(2)', duration: 0.06, ease: 'power4.in' },
            { opacity: 1, scale: 1.8, filter: 'blur(10px) brightness(4.5)', duration: 0.07, ease: 'power4.out' },
            { opacity: 0.5, scale: 0.5, filter: 'blur(60px) brightness(2.5)', duration: 0.05, ease: 'power4.in' },
            { opacity: 0.95, scale: 1.3, filter: 'blur(5px) brightness(4.8)', duration: 0.06, ease: 'power4.out' },
            { opacity: 0.6, scale: 0.7, filter: 'blur(40px) brightness(3)', duration: 0.04, ease: 'power4.in' },
            { opacity: 1, scale: 1.1, filter: 'blur(2px) brightness(4.6)', duration: 0.05, ease: 'power4.out' },
            { opacity: 0.8, scale: 0.9, filter: 'blur(15px) brightness(3.5)', duration: 0.04, ease: 'power4.in' },
            { opacity: 1, scale: 1, filter: 'blur(0px) brightness(1)', duration: 0.1, ease: 'elastic.out(1, 0.5)' }
        ]
    },

    // 粒子群集 - 粒子聚集效果
    particleSwarm: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 0.1, filter: 'blur(60px) brightness(4) saturate(0)', duration: 0 },
            { opacity: 0.8, scale: 1.5, filter: 'blur(25px) brightness(3) saturate(0.5)', duration: 0.2, ease: 'power3.out' },
            { opacity: 0.3, scale: 0.6, filter: 'blur(50px) brightness(2) saturate(0.25)', duration: 0.15, ease: 'power3.in' },
            { opacity: 0.85, scale: 1.3, filter: 'blur(12px) brightness(3.5) saturate(0.75)', duration: 0.18, ease: 'power3.out' },
            { opacity: 0.4, scale: 0.75, filter: 'blur(35px) brightness(2.3) saturate(0.4)', duration: 0.13, ease: 'power3.in' },
            { opacity: 0.95, scale: 1.15, filter: 'blur(6px) brightness(4) saturate(0.9)', duration: 0.15, ease: 'power3.out' },
            { opacity: 0.5, scale: 0.9, filter: 'blur(20px) brightness(2.8) saturate(0.6)', duration: 0.11, ease: 'power3.in' },
            { opacity: 0.98, scale: 1.05, filter: 'blur(3px) brightness(3.8) saturate(0.95)', duration: 0.13, ease: 'power3.out' },
            { opacity: 0.75, scale: 0.98, filter: 'blur(10px) brightness(3.2) saturate(0.8)', duration: 0.1, ease: 'power3.in' },
            { opacity: 1, scale: 1, filter: 'blur(0px) brightness(1) saturate(1)', duration: 0.15, ease: 'elastic.out(1, 0.45)' }
        ]
    },

    // 数字消融 - 像素消融效果
    digitalDissolve: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 1, filter: 'blur(0px) contrast(1)', duration: 0 },
            { opacity: 0.9, scale: 1.02, filter: 'blur(5px) contrast(1.5)', duration: 0.05, ease: 'power1.out' },
            { opacity: 0.8, scale: 1.05, filter: 'blur(10px) contrast(2)', duration: 0.05, ease: 'power1.out' },
            { opacity: 0.7, scale: 1.08, filter: 'blur(15px) contrast(2.5)', duration: 0.05, ease: 'power1.out' },
            { opacity: 0.6, scale: 1.1, filter: 'blur(20px) contrast(3)', duration: 0.05, ease: 'power1.out' },
            { opacity: 0.8, scale: 1.05, filter: 'blur(12px) contrast(2.2)', duration: 0.08, ease: 'power1.in' },
            { opacity: 0.9, scale: 1.03, filter: 'blur(8px) contrast(1.8)', duration: 0.06, ease: 'power1.in' },
            { opacity: 0.95, scale: 1.02, filter: 'blur(4px) contrast(1.5)', duration: 0.05, ease: 'power1.in' },
            { opacity: 0.98, scale: 1.01, filter: 'blur(2px) contrast(1.2)', duration: 0.04, ease: 'power1.in' },
            { opacity: 1, scale: 1, filter: 'blur(0px) contrast(1)', duration: 0.1, ease: 'power2.out' }
        ]
    },

    // 全息闪烁 - 不稳定全息效果
    hologramFlicker: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 0.8, filter: 'blur(40px) brightness(3) hue-rotate(180deg)', duration: 0 },
            { opacity: 0.9, scale: 1.1, filter: 'blur(8px) brightness(2.5) hue-rotate(90deg)', duration: 0.02, ease: 'power1.inOut' },
            { opacity: 0.5, scale: 0.95, filter: 'blur(25px) brightness(3.5) hue-rotate(270deg)', duration: 0.015, ease: 'power1.inOut' },
            { opacity: 1, scale: 1.05, filter: 'blur(4px) brightness(2) hue-rotate(45deg)', duration: 0.02, ease: 'power1.inOut' },
            { opacity: 0.6, scale: 0.98, filter: 'blur(15px) brightness(3) hue-rotate(135deg)', duration: 0.015, ease: 'power1.inOut' },
            { opacity: 0.95, scale: 1.03, filter: 'blur(3px) brightness(2.3) hue-rotate(225deg)', duration: 0.02, ease: 'power1.inOut' },
            { opacity: 0.7, scale: 1.01, filter: 'blur(8px) brightness(2.8) hue-rotate(315deg)', duration: 0.015, ease: 'power1.inOut' },
            { opacity: 1, scale: 1.02, filter: 'blur(2px) brightness(2.1) hue-rotate(0deg)', duration: 0.02, ease: 'power1.inOut' },
            { opacity: 0.85, scale: 1.01, filter: 'blur(5px) brightness(2.4) hue-rotate(180deg)', duration: 0.015, ease: 'power1.inOut' },
            { opacity: 1, scale: 1, filter: 'blur(0px) brightness(1) hue-rotate(0deg)', duration: 0.08, ease: 'power2.out' }
        ]
    },

    // 信号衰变 - 信号逐渐衰弱
    signalDecay: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 0.5, filter: 'blur(30px) brightness(2)', duration: 0 },
            { opacity: 0.95, scale: 1.1, filter: 'blur(5px) brightness(2.5)', duration: 0.1, ease: 'power2.out' },
            { opacity: 0.85, scale: 1.05, filter: 'blur(10px) brightness(2.3)', duration: 0.08, ease: 'power1.in' },
            { opacity: 0.9, scale: 1.08, filter: 'blur(8px) brightness(2.4)', duration: 0.09, ease: 'power2.out' },
            { opacity: 0.75, scale: 1.02, filter: 'blur(15px) brightness(2.1)', duration: 0.07, ease: 'power1.in' },
            { opacity: 0.88, scale: 1.04, filter: 'blur(12px) brightness(2.2)', duration: 0.08, ease: 'power2.out' },
            { opacity: 0.8, scale: 1.01, filter: 'blur(18px) brightness(2)', duration: 0.06, ease: 'power1.in' },
            { opacity: 0.92, scale: 1.02, filter: 'blur(10px) brightness(2.15)', duration: 0.07, ease: 'power2.out' },
            { opacity: 0.85, scale: 1, filter: 'blur(14px) brightness(2.05)', duration: 0.05, ease: 'power1.in' },
            { opacity: 1, scale: 1, filter: 'blur(0px) brightness(1)', duration: 0.12, ease: 'elastic.out(1, 0.4)' }
        ]
    },

    // 像素变形 - 动态像素变换
    pixelMorph: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 0.2, filter: 'blur(50px) brightness(3) contrast(2)', duration: 0 },
            { opacity: 0.7, scale: 1.6, filter: 'blur(20px) brightness(2.5) contrast(2.5)', duration: 0.12, ease: 'power3.out' },
            { opacity: 0.35, scale: 0.6, filter: 'blur(40px) brightness(1.8) contrast(3)', duration: 0.1, ease: 'power3.in' },
            { opacity: 0.85, scale: 1.4, filter: 'blur(10px) brightness(3) contrast(2.2)', duration: 0.11, ease: 'power3.out' },
            { opacity: 0.45, scale: 0.75, filter: 'blur(30px) brightness(2) contrast(2.8)', duration: 0.09, ease: 'power3.in' },
            { opacity: 0.92, scale: 1.2, filter: 'blur(5px) brightness(3.5) contrast(2)', duration: 0.1, ease: 'power3.out' },
            { opacity: 0.55, scale: 0.85, filter: 'blur(18px) brightness(2.3) contrast(2.5)', duration: 0.08, ease: 'power3.in' },
            { opacity: 0.96, scale: 1.08, filter: 'blur(3px) brightness(3.2) contrast(2.1)', duration: 0.09, ease: 'power3.out' },
            { opacity: 0.75, scale: 0.95, filter: 'blur(10px) brightness(2.6) contrast(2.3)', duration: 0.07, ease: 'power3.in' },
            { opacity: 1, scale: 1, filter: 'blur(0px) brightness(1) contrast(1)', duration: 0.15, ease: 'elastic.out(1, 0.5)' }
        ]
    },

    // 赛博脉冲 - 能量脉冲效果
    cyberPulse: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 0.1, filter: 'blur(80px) brightness(5) hue-rotate(0deg)', duration: 0 },
            { opacity: 0.8, scale: 1.8, filter: 'blur(25px) brightness(4) hue-rotate(60deg)', duration: 0.06, ease: 'power4.out' },
            { opacity: 0.3, scale: 0.4, filter: 'blur(60px) brightness(2) hue-rotate(120deg)', duration: 0.04, ease: 'power4.in' },
            { opacity: 0.9, scale: 1.5, filter: 'blur(12px) brightness(4.5) hue-rotate(180deg)', duration: 0.05, ease: 'power4.out' },
            { opacity: 0.4, scale: 0.6, filter: 'blur(45px) brightness(2.5) hue-rotate(240deg)', duration: 0.04, ease: 'power4.in' },
            { opacity: 0.95, scale: 1.3, filter: 'blur(6px) brightness(4.8) hue-rotate(300deg)', duration: 0.05, ease: 'power4.out' },
            { opacity: 0.5, scale: 0.8, filter: 'blur(30px) brightness(3) hue-rotate(360deg)', duration: 0.04, ease: 'power4.in' },
            { opacity: 0.98, scale: 1.1, filter: 'blur(3px) brightness(4.6) hue-rotate(420deg)', duration: 0.05, ease: 'power4.out' },
            { opacity: 0.75, scale: 0.95, filter: 'blur(15px) brightness(3.5) hue-rotate(390deg)', duration: 0.04, ease: 'power4.in' },
            { opacity: 1, scale: 1, filter: 'blur(0px) brightness(1) hue-rotate(0deg)', duration: 0.12, ease: 'elastic.out(1, 0.5)' }
        ]
    },

    // 数字碎片 - 数字分解效果
    digitalFragment: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 1, filter: 'blur(100px) brightness(5) contrast(3)', duration: 0 },
            { opacity: 0.6, scale: 0.5, filter: 'blur(50px) brightness(4) contrast(2.5)', duration: 0.15, ease: 'power4.out' },
            { opacity: 0.3, scale: 1.5, filter: 'blur(80px) brightness(2) contrast(3.5)', duration: 0.12, ease: 'power4.in' },
            { opacity: 0.8, scale: 0.7, filter: 'blur(30px) brightness(4.5) contrast(2)', duration: 0.13, ease: 'power4.out' },
            { opacity: 0.4, scale: 1.3, filter: 'blur(60px) brightness(2.5) contrast(3)', duration: 0.1, ease: 'power4.in' },
            { opacity: 0.9, scale: 0.85, filter: 'blur(15px) brightness(4.8) contrast(1.8)', duration: 0.11, ease: 'power4.out' },
            { opacity: 0.5, scale: 1.15, filter: 'blur(40px) brightness(3) contrast(2.8)', duration: 0.09, ease: 'power4.in' },
            { opacity: 0.95, scale: 0.95, filter: 'blur(8px) brightness(4.6) contrast(2)', duration: 0.1, ease: 'power4.out' },
            { opacity: 0.7, scale: 1.05, filter: 'blur(25px) brightness(3.5) contrast(2.4)', duration: 0.08, ease: 'power4.in' },
            { opacity: 1, scale: 1, filter: 'blur(0px) brightness(1) contrast(1)', duration: 0.15, ease: 'elastic.out(1, 0.4)' }
        ]
    },

    // 矩阵代码 - 黑客帝国代码效果
    matrixCode: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 0.1, filter: 'blur(60px) brightness(5) hue-rotate(120deg) saturate(2)', duration: 0 },
            { opacity: 0.7, scale: 1.4, filter: 'blur(25px) brightness(4) hue-rotate(100deg) saturate(2.5)', duration: 0.18, ease: 'power2.out' },
            { opacity: 0.35, scale: 0.6, filter: 'blur(50px) brightness(2) hue-rotate(140deg) saturate(1.5)', duration: 0.14, ease: 'power2.in' },
            { opacity: 0.85, scale: 1.25, filter: 'blur(12px) brightness(4.5) hue-rotate(110deg) saturate(2.8)', duration: 0.16, ease: 'power2.out' },
            { opacity: 0.45, scale: 0.75, filter: 'blur(35px) brightness(2.5) hue-rotate(130deg) saturate(2)', duration: 0.12, ease: 'power2.in' },
            { opacity: 0.92, scale: 1.12, filter: 'blur(6px) brightness(4.8) hue-rotate(105deg) saturate(2.6)', duration: 0.14, ease: 'power2.out' },
            { opacity: 0.55, scale: 0.9, filter: 'blur(20px) brightness(3) hue-rotate(115deg) saturate(2.3)', duration: 0.11, ease: 'power2.in' },
            { opacity: 0.96, scale: 1.05, filter: 'blur(3px) brightness(4.6) hue-rotate(108deg) saturate(2.5)', duration: 0.13, ease: 'power2.out' },
            { opacity: 0.8, scale: 1.02, filter: 'blur(10px) brightness(3.5) hue-rotate(112deg) saturate(2.4)', duration: 0.1, ease: 'power2.in' },
            { opacity: 1, scale: 1, filter: 'blur(0px) brightness(1) hue-rotate(0deg) saturate(1)', duration: 0.18, ease: 'elastic.out(1, 0.5)' }
        ]
    },
}

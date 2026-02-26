export const v9={


    // V9 时空幻境系列
    // 时间膨胀 - 时间扭曲效果
    timeDilation: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 0.1, rotation: 0, skewX: 0, skewY: 0, filter: 'blur(60px) brightness(3) hue-rotate(0deg)', duration: 0 },
            { opacity: 0.3, scale: 0.5, rotation: 180, skewX: 15, skewY: 15, filter: 'blur(25px) brightness(2) hue-rotate(45deg)', duration: 0.3, ease: 'power2.out' },
            { opacity: 0.15, scale: 0.3, rotation: 360, skewX: 25, skewY: -20, filter: 'blur(40px) brightness(1.5) hue-rotate(90deg)', duration: 0.2, ease: 'power2.in' },
            { opacity: 0.6, scale: 1.4, rotation: 540, skewX: 10, skewY: 10, filter: 'blur(10px) brightness(2.2) hue-rotate(135deg)', duration: 0.16, ease: 'power2.out' },
            { opacity: 0.35, scale: 0.8, rotation: 720, skewX: -5, skewY: -5, filter: 'blur(20px) brightness(1.8) hue-rotate(180deg)', duration: 0.12, ease: 'power2.in' },
            { opacity: 0.85, scale: 1.2, rotation: 810, skewX: 3, skewY: 3, filter: 'blur(5px) brightness(2.1) hue-rotate(225deg)', duration: 0.1, ease: 'power2.out' },
            { opacity: 0.55, scale: 0.95, filter: 'blur(8px) brightness(2) hue-rotate(270deg)', duration: 0.08, ease: 'power2.in' },
            { opacity: 1, scale: 1, rotation: 1080, skewX: 0, skewY: 0, filter: 'blur(0px) brightness(1) hue-rotate(0deg)', duration: 0.15, ease: 'elastic.out(1, 0.5)' }
        ]
    },

    // 空间折叠 - 维度折叠效果
    spatialFold: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 0, rotateX: 0, rotateY: 0, translateZ: 0, filter: 'blur(50px) brightness(3)', duration: 0 },
            { opacity: 0.4, scale: 0.3, rotateX: 180, rotateY: 0, translateZ: -200, filter: 'blur(20px) brightness(2.5)', duration: 0.18, ease: 'power4.out' },
            { opacity: 0.2, scale: 0.8, rotateX: 180, rotateY: 90, translateZ: 100, filter: 'blur(35px) brightness(1.8)', duration: 0.14, ease: 'power4.in' },
            { opacity: 0.7, scale: 0.5, rotateX: 360, rotateY: 90, translateZ: -150, filter: 'blur(10px) brightness(2.2)', duration: 0.12, ease: 'power4.out' },
            { opacity: 0.35, scale: 1.3, rotateX: 360, rotateY: 180, translateZ: 80, filter: 'blur(18px) brightness(1.9)', duration: 0.1, ease: 'power4.in' },
            { opacity: 0.9, scale: 0.7, rotateX: 540, rotateY: 180, translateZ: -100, filter: 'blur(5px) brightness(2.1)', duration: 0.08, ease: 'power4.out' },
            { opacity: 0.6, scale: 1.1, rotateX: 540, rotateY: 270, filter: 'blur(8px) brightness(2)', duration: 0.06, ease: 'power4.in' },
            { opacity: 1, scale: 1, rotateX: 720, rotateY: 360, translateZ: 0, filter: 'blur(0px) brightness(1)', duration: 0.14, ease: 'elastic.out(1, 0.4)' }
        ]
    },

    // 量子叠加 - 多态叠加
    quantumSuperposition: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 0, rotation: 0, filter: 'blur(40px) brightness(2) saturate(0)', duration: 0 },
            { opacity: 0.5, scale: 1.5, rotation: 45, filter: 'blur(15px) brightness(3) saturate(0.5)', duration: 0.12, ease: 'power2.out' },
            { opacity: 0.25, scale: 0.6, rotation: 90, filter: 'blur(30px) brightness(2) saturate(0.3)', duration: 0.1, ease: 'power2.in' },
            { opacity: 0.7, scale: 1.3, rotation: 135, filter: 'blur(8px) brightness(2.5) saturate(0.7)', duration: 0.08, ease: 'power2.out' },
            { opacity: 0.35, scale: 0.85, rotation: 180, filter: 'blur(18px) brightness(2.2) saturate(0.5)', duration: 0.07, ease: 'power2.in' },
            { opacity: 0.9, scale: 1.15, rotation: 225, filter: 'blur(4px) brightness(2.3) saturate(0.8)', duration: 0.06, ease: 'power2.out' },
            { opacity: 0.6, scale: 0.98, rotation: 270, filter: 'blur(10px) brightness(2.25) saturate(0.6)', duration: 0.05, ease: 'power2.in' },
            { opacity: 1, scale: 1, rotation: 360, filter: 'blur(0px) brightness(1) saturate(1)', duration: 0.12, ease: 'elastic.out(1, 0.5)' }
        ]
    },

    // 时间回响 - 回声效果
    temporalEcho: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 0, x: 0, filter: 'blur(30px) brightness(2)', duration: 0 },
            { opacity: 0.8, scale: 1, x: -30, filter: 'blur(5px) brightness(2.5)', duration: 0.1, ease: 'power2.out' },
            { opacity: 0, scale: 1, x: -30, filter: 'blur(30px) brightness(1)', duration: 0.08, ease: 'power2.in' },
            { opacity: 0.7, scale: 1, x: 30, filter: 'blur(5px) brightness(2.3)', duration: 0.08, ease: 'power2.out' },
            { opacity: 0, scale: 1, x: 30, filter: 'blur(30px) brightness(1)', duration: 0.06, ease: 'power2.in' },
            { opacity: 0.6, scale: 1, x: -15, filter: 'blur(5px) brightness(2.2)', duration: 0.06, ease: 'power2.out' },
            { opacity: 0, scale: 1, x: -15, filter: 'blur(30px) brightness(1)', duration: 0.05, ease: 'power2.in' },
            { opacity: 1, scale: 1, x: 0, filter: 'blur(0px) brightness(1)', duration: 0.12, ease: 'elastic.out(1, 0.5)' }
        ]
    },

    // 维度破碎 - 破碎重组
    dimensionalFracture: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 0, rotation: 0, skewX: 0, skewY: 0, filter: 'blur(50px) contrast(3)', duration: 0 },
            { opacity: 1, scale: 1.5, rotation: 30, skewX: 20, skewY: -15, filter: 'blur(0px) contrast(1.5)', duration: 0.08, ease: 'power4.out' },
            { opacity: 0.3, scale: 0.5, rotation: -20, skewX: -25, skewY: 30, filter: 'blur(40px) contrast(2.5)', duration: 0.06, ease: 'power4.in' },
            { opacity: 1, scale: 1.3, rotation: 15, skewX: 12, skewY: -8, filter: 'blur(0px) contrast(1.3)', duration: 0.05, ease: 'power4.out' },
            { opacity: 0.4, scale: 0.7, rotation: -10, skewX: -15, skewY: 20, filter: 'blur(35px) contrast(2.2)', duration: 0.04, ease: 'power4.in' },
            { opacity: 1, scale: 1.15, rotation: 8, skewX: 7, skewY: -5, filter: 'blur(0px) contrast(1.2)', duration: 0.04, ease: 'power4.out' },
            { opacity: 0.5, scale: 0.9, filter: 'blur(25px) contrast(2)', duration: 0.03, ease: 'power4.in' },
            { opacity: 1, scale: 1, rotation: 0, skewX: 0, skewY: 0, filter: 'blur(0px) contrast(1)', duration: 0.1, ease: 'elastic.out(1, 0.4)' }
        ]
    },

    // 虚空构建 - 从虚空中构建
    voidConstruct: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 0, borderRadius: '50%', filter: 'blur(60px) brightness(0) invert(1)', duration: 0 },
            { opacity: 0.6, scale: 2.5, borderRadius: '50%', filter: 'blur(15px) brightness(3) invert(0.5)', duration: 0.25, ease: 'power3.out' },
            { opacity: 0.3, scale: 0.8, borderRadius: '50%', filter: 'blur(35px) brightness(1) invert(1)', duration: 0.2, ease: 'power3.in' },
            { opacity: 0.8, scale: 1.8, borderRadius: '30%', filter: 'blur(8px) brightness(2.5) invert(0.3)', duration: 0.16, ease: 'power3.out' },
            { opacity: 0.4, scale: 0.9, borderRadius: '40%', filter: 'blur(20px) brightness(1.5) invert(0.7)', duration: 0.13, ease: 'power3.in' },
            { opacity: 0.9, scale: 1.3, borderRadius: '25%', filter: 'blur(4px) brightness(2.2) invert(0.2)', duration: 0.1, ease: 'power3.out' },
            { opacity: 0.6, scale: 0.95, filter: 'blur(10px) brightness(1.8) invert(0.4)', duration: 0.08, ease: 'power3.in' },
            { opacity: 1, scale: 1, borderRadius: '20px', filter: 'blur(0px) brightness(1) invert(0)', duration: 0.14, ease: 'elastic.out(1, 0.45)' }
        ]
    },

    // 以太显化 - 能量显化
    aetherManifest: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 0.1, filter: 'blur(70px) brightness(4) saturate(0)', duration: 0 },
            { opacity: 0.7, scale: 2, filter: 'blur(20px) brightness(3) saturate(0.5)', duration: 0.22, ease: 'power2.out' },
            { opacity: 0.35, scale: 0.5, filter: 'blur(45px) brightness(2) saturate(0.25)', duration: 0.18, ease: 'power2.in' },
            { opacity: 0.85, scale: 1.6, filter: 'blur(8px) brightness(2.8) saturate(0.7)', duration: 0.14, ease: 'power2.out' },
            { opacity: 0.45, scale: 0.85, filter: 'blur(25px) brightness(2.3) saturate(0.4)', duration: 0.11, ease: 'power2.in' },
            { opacity: 0.95, scale: 1.25, filter: 'blur(4px) brightness(2.6) saturate(0.8)', duration: 0.09, ease: 'power2.out' },
            { opacity: 0.65, scale: 0.98, filter: 'blur(12px) brightness(2.5) saturate(0.6)', duration: 0.07, ease: 'power2.in' },
            { opacity: 1, scale: 1, filter: 'blur(0px) brightness(1) saturate(1)', duration: 0.15, ease: 'elastic.out(1, 0.5)' }
        ]
    },

    // 混沌理论 - 随机混沌
    chaosTheory: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 0, x: 0, y: 0, rotation: 0, skewX: 0, skewY: 0, filter: 'blur(50px)', duration: 0 },
            { opacity: 0.8, scale: 1.3, x: -50, y: 30, rotation: 45, skewX: 15, skewY: -10, filter: 'blur(10px)', duration: 0.1, ease: 'power3.out' },
            { opacity: 0.3, scale: 0.6, x: 40, y: -35, rotation: -30, skewX: -20, skewY: 25, filter: 'blur(35px)', duration: 0.08, ease: 'power3.in' },
            { opacity: 0.7, scale: 1.4, x: -25, y: 20, rotation: 20, skewX: 12, skewY: -8, filter: 'blur(8px)', duration: 0.07, ease: 'power3.out' },
            { opacity: 0.4, scale: 0.75, x: 18, y: -15, rotation: -15, skewX: -10, skewY: 15, filter: 'blur(22px)', duration: 0.06, ease: 'power3.in' },
            { opacity: 0.9, scale: 1.2, x: -10, y: 8, rotation: 10, skewX: 6, skewY: -5, filter: 'blur(5px)', duration: 0.05, ease: 'power3.out' },
            { opacity: 0.55, scale: 0.95, x: 5, y: -4, filter: 'blur(12px)', duration: 0.04, ease: 'power3.in' },
            { opacity: 1, scale: 1, x: 0, y: 0, rotation: 0, skewX: 0, skewY: 0, filter: 'blur(0px)', duration: 0.1, ease: 'elastic.out(1, 0.45)' }
        ]
    },

    // 熵增衰变 - 熵值变化
    entropicDecay: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 1.5, filter: 'blur(0px) brightness(1) contrast(1) saturate(1)', duration: 0 },
            { opacity: 0.9, scale: 1.3, filter: 'blur(5px) brightness(1.2) contrast(1.1) saturate(0.9)', duration: 0.15, ease: 'power1.out' },
            { opacity: 0.8, scale: 1.2, filter: 'blur(10px) brightness(1.3) contrast(1.2) saturate(0.8)', duration: 0.12, ease: 'power1.out' },
            { opacity: 0.7, scale: 1.1, filter: 'blur(15px) brightness(1.4) contrast(1.3) saturate(0.7)', duration: 0.1, ease: 'power1.out' },
            { opacity: 0.6, scale: 1.05, filter: 'blur(20px) brightness(1.5) contrast(1.4) saturate(0.6)', duration: 0.08, ease: 'power1.out' },
            { opacity: 0.8, scale: 1.08, filter: 'blur(12px) brightness(1.3) contrast(1.3) saturate(0.8)', duration: 0.12, ease: 'power1.in' },
            { opacity: 0.9, scale: 1.02, filter: 'blur(6px) brightness(1.2) contrast(1.1) saturate(0.9)', duration: 0.08, ease: 'power1.in' },
            { opacity: 1, scale: 1, filter: 'blur(0px) brightness(1) contrast(1) saturate(1)', duration: 0.15, ease: 'power2.out' }
        ]
    },

    // 弦理论 - 震动频率
    stringTheory: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 0.1, skewX: 0, skewY: 0, filter: 'blur(60px) brightness(2)', duration: 0 },
            { opacity: 0.5, scale: 1.5, skewX: 30, skewY: 20, filter: 'blur(15px) brightness(2.5)', duration: 0.1, ease: 'elastic.out(1, 0.3)' },
            { opacity: 0.25, scale: 0.7, skewX: -25, skewY: -18, filter: 'blur(30px) brightness(2)', duration: 0.08, ease: 'elastic.in(1, 0.3)' },
            { opacity: 0.75, scale: 1.3, skewX: 20, skewY: 15, filter: 'blur(8px) brightness(2.3)', duration: 0.07, ease: 'elastic.out(1, 0.35)' },
            { opacity: 0.35, scale: 0.85, skewX: -15, skewY: -12, filter: 'blur(20px) brightness(2.2)', duration: 0.06, ease: 'elastic.in(1, 0.35)' },
            { opacity: 0.9, scale: 1.15, skewX: 10, skewY: 8, filter: 'blur(5px) brightness(2.4)', duration: 0.05, ease: 'elastic.out(1, 0.4)' },
            { opacity: 0.55, scale: 0.98, filter: 'blur(12px) brightness(2.3)', duration: 0.04, ease: 'elastic.in(1, 0.4)' },
            { opacity: 1, scale: 1, skewX: 0, skewY: 0, filter: 'blur(0px) brightness(1)', duration: 0.12, ease: 'elastic.out(1, 0.5)' }
        ]
    },

    // 多元宇宙 - 多重显现
    multiverse: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 0, rotation: 0, filter: 'blur(50px) brightness(2) hue-rotate(0deg)', duration: 0 },
            { opacity: 0.6, scale: 1.2, rotation: 120, filter: 'blur(15px) brightness(2.5) hue-rotate(60deg)', duration: 0.1, ease: 'power2.out' },
            { opacity: 0, scale: 1, rotation: 120, filter: 'blur(50px) brightness(1) hue-rotate(60deg)', duration: 0.05, ease: 'power2.in' },
            { opacity: 0.7, scale: 1.3, rotation: 240, filter: 'blur(12px) brightness(2.6) hue-rotate(120deg)', duration: 0.08, ease: 'power2.out' },
            { opacity: 0, scale: 1, rotation: 240, filter: 'blur(50px) brightness(1) hue-rotate(120deg)', duration: 0.04, ease: 'power2.in' },
            { opacity: 0.8, scale: 1.15, rotation: 360, filter: 'blur(8px) brightness(2.7) hue-rotate(180deg)', duration: 0.07, ease: 'power2.out' },
            { opacity: 0, scale: 1, rotation: 360, filter: 'blur(50px) brightness(1) hue-rotate(180deg)', duration: 0.04, ease: 'power2.in' },
            { opacity: 1, scale: 1, rotation: 0, filter: 'blur(0px) brightness(1) hue-rotate(0deg)', duration: 0.12, ease: 'elastic.out(1, 0.5)' }
        ]
    },

    // 平行世界 - 双重显现
    parallelWorld: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 0, x: 0, filter: 'blur(40px) brightness(2) invert(0)', duration: 0 },
            { opacity: 0.8, scale: 1.2, x: -40, filter: 'blur(8px) brightness(2.3) invert(0.3)', duration: 0.12, ease: 'power2.out' },
            { opacity: 0.3, scale: 0.6, x: -40, filter: 'blur(25px) brightness(1.5) invert(0.7)', duration: 0.08, ease: 'power2.in' },
            { opacity: 0.9, scale: 1.3, x: 40, filter: 'blur(6px) brightness(2.5) invert(0.2)', duration: 0.1, ease: 'power2.out' },
            { opacity: 0.4, scale: 0.7, x: 40, filter: 'blur(20px) brightness(1.8) invert(0.6)', duration: 0.07, ease: 'power2.in' },
            { opacity: 0.95, scale: 1.1, x: -15, filter: 'blur(4px) brightness(2.6) invert(0.1)', duration: 0.06, ease: 'power2.out' },
            { opacity: 0.5, scale: 0.9, x: -15, filter: 'blur(15px) brightness(2.2) invert(0.5)', duration: 0.05, ease: 'power2.in' },
            { opacity: 1, scale: 1, x: 0, filter: 'blur(0px) brightness(1) invert(0)', duration: 0.12, ease: 'elastic.out(1, 0.5)' }
        ]
    },

    // 时间线分叉 - 分叉效果
    timelineSplit: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 1, x: 0, skewX: 0, filter: 'blur(30px) brightness(1.5)', duration: 0 },
            { opacity: 0.7, scale: 1.1, x: 0, skewX: 0, filter: 'blur(5px) brightness(2)', duration: 0.08, ease: 'power2.out' },
            { opacity: 1, scale: 1, x: 0, skewX: 0, filter: 'blur(0px) brightness(2.5)', duration: 0.05, ease: 'power2.out' },
            { opacity: 0.8, scale: 0.95, x: -20, skewX: 10, filter: 'blur(10px) brightness(2.2)', duration: 0.07, ease: 'power2.in' },
            { opacity: 0.9, scale: 1.05, x: 20, skewX: -10, filter: 'blur(8px) brightness(2.4)', duration: 0.07, ease: 'power2.in' },
            { opacity: 0.7, scale: 0.98, x: -10, skewX: 5, filter: 'blur(12px) brightness(2.3)', duration: 0.06, ease: 'power2.out' },
            { opacity: 1, scale: 1.02, x: 10, skewX: -5, filter: 'blur(10px) brightness(2.5)', duration: 0.06, ease: 'power2.out' },
            { opacity: 1, scale: 1, x: 0, skewX: 0, filter: 'blur(0px) brightness(1)', duration: 0.1, ease: 'elastic.out(1, 0.5)' }
        ]
    },

    // 现实扭曲 - 扭曲变形
    realityWarp: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 0.2, rotateX: 0, rotateY: 0, filter: 'blur(50px) brightness(2) contrast(1.5)', duration: 0 },
            { opacity: 0.6, scale: 1.5, rotateX: 30, rotateY: 45, filter: 'blur(15px) brightness(2.8) contrast(0.8)', duration: 0.18, ease: 'power3.out' },
            { opacity: 0.3, scale: 0.7, rotateX: -20, rotateY: -30, filter: 'blur(35px) brightness(1.8) contrast(2)', duration: 0.14, ease: 'power3.in' },
            { opacity: 0.8, scale: 1.3, rotateX: 15, rotateY: 22, filter: 'blur(8px) brightness(2.6) contrast(0.9)', duration: 0.12, ease: 'power3.out' },
            { opacity: 0.4, scale: 0.85, rotateX: -10, rotateY: -15, filter: 'blur(22px) brightness(2.2) contrast(1.8)', duration: 0.1, ease: 'power3.in' },
            { opacity: 0.9, scale: 1.15, rotateX: 5, rotateY: 7, filter: 'blur(4px) brightness(2.5) contrast(0.95)', duration: 0.08, ease: 'power3.out' },
            { opacity: 0.6, scale: 0.98, filter: 'blur(10px) brightness(2.4) contrast(1.5)', duration: 0.06, ease: 'power3.in' },
            { opacity: 1, scale: 1, rotateX: 0, rotateY: 0, filter: 'blur(0px) brightness(1) contrast(1)', duration: 0.14, ease: 'elastic.out(1, 0.45)' }
        ]
    },

    // 幻象破除 - 真相揭露
    illusionBreak: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 1.2, filter: 'blur(0px) brightness(1) hue-rotate(0deg) saturate(0.5)', duration: 0 },
            { opacity: 0.8, scale: 1.15, filter: 'blur(3px) brightness(1.5) hue-rotate(45deg) saturate(0.8)', duration: 0.12, ease: 'power1.out' },
            { opacity: 0.6, scale: 1.1, filter: 'blur(6px) brightness(2) hue-rotate(90deg) saturate(1.2)', duration: 0.1, ease: 'power1.out' },
            { opacity: 0.4, scale: 1.05, filter: 'blur(10px) brightness(2.5) hue-rotate(135deg) saturate(1.5)', duration: 0.08, ease: 'power1.out' },
            { opacity: 0.6, scale: 1.08, filter: 'blur(15px) brightness(2.8) hue-rotate(180deg) saturate(1.8)', duration: 0.12, ease: 'power1.in' },
            { opacity: 0.8, scale: 1.04, filter: 'blur(8px) brightness(2.3) hue-rotate(225deg) saturate(1.3)', duration: 0.1, ease: 'power1.in' },
            { opacity: 0.9, scale: 1.02, filter: 'blur(4px) brightness(1.8) hue-rotate(270deg) saturate(0.9)', duration: 0.08, ease: 'power1.in' },
            { opacity: 1, scale: 1, filter: 'blur(0px) brightness(1) hue-rotate(0deg) saturate(1)', duration: 0.12, ease: 'power2.out' }
        ]
    },

    // 梦境投影 - 梦幻效果
    dreamscape: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 0.5, filter: 'blur(60px) brightness(1.5) saturate(0.5)', duration: 0 },
            { opacity: 0.7, scale: 1.4, filter: 'blur(20px) brightness(2) saturate(0.8)', duration: 0.2, ease: 'sine.out' },
            { opacity: 0.4, scale: 0.8, filter: 'blur(40px) brightness(1.7) saturate(0.6)', duration: 0.15, ease: 'sine.in' },
            { opacity: 0.8, scale: 1.2, filter: 'blur(12px) brightness(2.2) saturate(1)', duration: 0.12, ease: 'sine.out' },
            { opacity: 0.5, scale: 0.95, filter: 'blur(25px) brightness(1.9) saturate(0.7)', duration: 0.1, ease: 'sine.in' },
            { opacity: 0.9, scale: 1.1, filter: 'blur(6px) brightness(2.4) saturate(1.2)', duration: 0.08, ease: 'sine.out' },
            { opacity: 0.65, scale: 1.02, filter: 'blur(15px) brightness(2.1) saturate(0.9)', duration: 0.06, ease: 'sine.in' },
            { opacity: 1, scale: 1, filter: 'blur(0px) brightness(1) saturate(1)', duration: 0.15, ease: 'elastic.out(1, 0.4)' }
        ]
    },

    // 意识上传 - 数字化转化
    consciousness: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 1, filter: 'blur(0px) brightness(1) contrast(1) saturate(1)', duration: 0 },
            { opacity: 0.9, scale: 1.05, filter: 'blur(2px) brightness(1.2) contrast(1.1) saturate(1.1)', duration: 0.1, ease: 'power2.out' },
            { opacity: 0.7, scale: 1.1, filter: 'blur(4px) brightness(1.4) contrast(1.3) saturate(0.8)', duration: 0.08, ease: 'power2.out' },
            { opacity: 0.5, scale: 1.15, filter: 'blur(8px) brightness(1.6) contrast(1.5) saturate(0.6)', duration: 0.07, ease: 'power2.out' },
            { opacity: 0.7, scale: 1.12, filter: 'blur(6px) brightness(1.8) contrast(1.4) saturate(0.8)', duration: 0.1, ease: 'power2.in' },
            { opacity: 0.85, scale: 1.08, filter: 'blur(4px) brightness(2) contrast(1.2) saturate(1)', duration: 0.08, ease: 'power2.in' },
            { opacity: 0.95, scale: 1.04, filter: 'blur(2px) brightness(1.5) contrast(1.1) saturate(1.1)', duration: 0.06, ease: 'power2.in' },
            { opacity: 1, scale: 1, filter: 'blur(0px) brightness(1) contrast(1) saturate(1)', duration: 0.1, ease: 'elastic.out(1, 0.5)' }
        ]
    },

    // 记忆痕迹 - 残影效果
    memoryTrace: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 0.9, x: 0, filter: 'blur(40px) brightness(1) opacity(0.5)', duration: 0 },
            { opacity: 1, scale: 1, x: 0, filter: 'blur(0px) brightness(1.5)', duration: 0.08, ease: 'power2.out' },
            { opacity: 0.5, scale: 1, x: -15, filter: 'blur(15px) brightness(1.2)', duration: 0.06, ease: 'power2.out' },
            { opacity: 0.3, scale: 1, x: -15, filter: 'blur(25px) brightness(1)', duration: 0.05, ease: 'power2.in' },
            { opacity: 0.6, scale: 1, x: 12, filter: 'blur(10px) brightness(1.3)', duration: 0.05, ease: 'power2.out' },
            { opacity: 0.35, scale: 1, x: 12, filter: 'blur(20px) brightness(1.1)', duration: 0.04, ease: 'power2.in' },
            { opacity: 0.8, scale: 1, x: -8, filter: 'blur(6px) brightness(1.4)', duration: 0.04, ease: 'power2.out' },
            { opacity: 1, scale: 1, x: 0, filter: 'blur(0px) brightness(1)', duration: 0.1, ease: 'elastic.out(1, 0.5)' }
        ]
    },

    // 灵魂碎片 - 碎裂重组
    soulFragment: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 0, rotateX: 0, rotateY: 0, translateZ: 0, filter: 'blur(60px) brightness(3)', duration: 0 },
            { opacity: 0.6, scale: 0.4, rotateX: 45, rotateY: 60, translateZ: -100, filter: 'blur(25px) brightness(2.5)', duration: 0.15, ease: 'power4.out' },
            { opacity: 0.3, scale: 0.8, rotateX: -30, rotateY: -45, translateZ: 80, filter: 'blur(40px) brightness(1.8)', duration: 0.12, ease: 'power4.in' },
            { opacity: 0.7, scale: 0.6, rotateX: 20, rotateY: 30, translateZ: -120, filter: 'blur(12px) brightness(2.2)', duration: 0.1, ease: 'power4.out' },
            { opacity: 0.35, scale: 1.2, rotateX: -15, rotateY: -22, translateZ: 60, filter: 'blur(22px) brightness(1.9)', duration: 0.08, ease: 'power4.in' },
            { opacity: 0.85, scale: 0.8, rotateX: 10, rotateY: 15, translateZ: -80, filter: 'blur(6px) brightness(2.1)', duration: 0.07, ease: 'power4.out' },
            { opacity: 0.5, scale: 1.1, filter: 'blur(10px) brightness(2)', duration: 0.06, ease: 'power4.in' },
            { opacity: 1, scale: 1, rotateX: 0, rotateY: 0, translateZ: 0, filter: 'blur(0px) brightness(1)', duration: 0.12, ease: 'elastic.out(1, 0.4)' }
        ]
    },

    // 超越 - 升华效果
    transcendence: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 0.1, y: 50, filter: 'blur(70px) brightness(4) hue-rotate(0deg) saturate(0)', duration: 0 },
            { opacity: 0.6, scale: 0.5, y: 30, filter: 'blur(30px) brightness(3) hue-rotate(60deg) saturate(0.5)', duration: 0.2, ease: 'power2.out' },
            { opacity: 0.3, scale: 1.2, y: 10, filter: 'blur(15px) brightness(2) hue-rotate(120deg) saturate(1)', duration: 0.15, ease: 'power2.in' },
            { opacity: 0.75, scale: 0.8, y: -10, filter: 'blur(8px) brightness(2.5) hue-rotate(180deg) saturate(1.2)', duration: 0.12, ease: 'power2.out' },
            { opacity: 0.4, scale: 1.1, y: -25, filter: 'blur(18px) brightness(2.2) hue-rotate(240deg) saturate(1)', duration: 0.1, ease: 'power2.in' },
            { opacity: 0.9, scale: 0.9, y: -35, filter: 'blur(4px) brightness(2.8) hue-rotate(300deg) saturate(1.3)', duration: 0.08, ease: 'power2.out' },
            { opacity: 0.6, scale: 1.02, y: -40, filter: 'blur(10px) brightness(2.5) hue-rotate(330deg) saturate(1.1)', duration: 0.06, ease: 'power2.in' },
            { opacity: 1, scale: 1, y: 0, filter: 'blur(0px) brightness(1) hue-rotate(0deg) saturate(1)', duration: 0.15, ease: 'elastic.out(1, 0.5)' }
        ]
    },
}

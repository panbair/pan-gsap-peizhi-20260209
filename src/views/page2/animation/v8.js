export const v8={

    // V8 量子维度系列

    // 量子实体化 - 从量子态到实体的渐进过程
    quantumMaterialize: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 0, rotation: 0, filter: 'blur(50px) brightness(3) hue-rotate(0deg)', duration: 0 },
            { opacity: 0.2, scale: 0.3, rotation: 45, filter: 'blur(30px) brightness(2.5) hue-rotate(45deg)', duration: 0.2, ease: 'power2.out' },
            { opacity: 0.4, scale: 0.6, rotation: -30, filter: 'blur(20px) brightness(2) hue-rotate(90deg)', duration: 0.15, ease: 'power2.in' },
            { opacity: 0.65, scale: 0.85, rotation: 20, filter: 'blur(12px) brightness(1.8) hue-rotate(135deg)', duration: 0.12, ease: 'power2.out' },
            { opacity: 0.85, scale: 1.1, rotation: -10, filter: 'blur(6px) brightness(1.5) hue-rotate(180deg)', duration: 0.1, ease: 'power2.in' },
            { opacity: 1, scale: 0.98, rotation: 5, filter: 'blur(3px) brightness(1.2) hue-rotate(220deg)', duration: 0.08, ease: 'power2.out' },
            { scale: 1.02, rotation: -2, filter: 'blur(1px) brightness(1.1) hue-rotate(250deg)', duration: 0.06, ease: 'power2.in' },
            { scale: 1, rotation: 0, filter: 'blur(0px) brightness(1) hue-rotate(0deg)', duration: 0.15, ease: 'elastic.out(1, 0.4)' }
        ]
    },

    // 维度相位 - 多维度交错显现
    dimensionalPhase: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 2, rotationX: 90, rotationY: 90, z: -500, filter: 'blur(40px)', duration: 0 },
            { opacity: 0.25, scale: 1.5, rotationX: 45, rotationY: 45, z: -250, filter: 'blur(25px)', duration: 0.18, ease: 'power2.out' },
            { opacity: 0.5, scale: 1.2, rotationX: 0, rotationY: 0, z: 0, filter: 'blur(15px)', duration: 0.15, ease: 'power2.in' },
            { opacity: 0.75, scale: 0.9, rotationX: -20, rotationY: -20, z: 100, filter: 'blur(8px)', duration: 0.12, ease: 'power2.out' },
            { opacity: 0.9, scale: 1.05, rotationX: 10, rotationY: 10, z: -50, filter: 'blur(4px)', duration: 0.1, ease: 'power2.in' },
            { opacity: 1, scale: 0.98, rotationX: -5, rotationY: -5, z: 25, filter: 'blur(2px)', duration: 0.08, ease: 'power2.out' },
            { rotationX: 2, rotationY: 2, z: -12, filter: 'blur(1px)', duration: 0.06, ease: 'power2.in' },
            { rotationX: 0, rotationY: 0, z: 0, filter: 'blur(0px)', duration: 0.12, ease: 'elastic.out(1, 0.3)' }
        ]
    },

    // 神经脉冲 - 模拟神经元信号传递
    neuroPulse: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 0.2, filter: 'blur(30px) brightness(2)', duration: 0 },
            { opacity: 1, scale: 1.5, filter: 'blur(5px) brightness(1.5)', duration: 0.1, ease: 'power4.out' },
            { opacity: 0.3, scale: 0.7, filter: 'blur(20px) brightness(0.8)', duration: 0.15, ease: 'power2.in' },
            { opacity: 1, scale: 1.3, filter: 'blur(3px) brightness(1.3)', duration: 0.08, ease: 'power4.out' },
            { opacity: 0.5, scale: 0.85, filter: 'blur(10px) brightness(0.9)', duration: 0.12, ease: 'power2.in' },
            { opacity: 1, scale: 1.15, filter: 'blur(2px) brightness(1.2)', duration: 0.06, ease: 'power4.out' },
            { opacity: 0.7, scale: 0.95, filter: 'blur(5px) brightness(1)', duration: 0.08, ease: 'power2.in' },
            { opacity: 1, scale: 1, filter: 'blur(0px) brightness(1)', duration: 0.1, ease: 'elastic.out(1, 0.5)' }
        ]
    },

    // 全息材质 - 全息投影的材质变化
    hologramMaterial: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 1.5, filter: 'blur(20px) brightness(2) saturate(0.5)', duration: 0 },
            { opacity: 0.4, scale: 1.2, filter: 'blur(12px) brightness(1.8) saturate(1)', duration: 0.2, ease: 'power2.out' },
            { opacity: 0.7, scale: 0.9, filter: 'blur(6px) brightness(1.5) saturate(1.5)', duration: 0.15, ease: 'power2.in' },
            { opacity: 0.9, scale: 1.05, filter: 'blur(3px) brightness(1.3) saturate(2)', duration: 0.1, ease: 'power2.out' },
            { opacity: 0.6, scale: 0.98, filter: 'blur(8px) brightness(1.6) saturate(1.2)', duration: 0.08, ease: 'power2.in' },
            { opacity: 1, scale: 1.02, filter: 'blur(2px) brightness(1.2) saturate(1.8)', duration: 0.06, ease: 'power2.out' },
            { filter: 'blur(1px) brightness(1) saturate(1.5)', duration: 0.05, ease: 'power2.in' },
            { filter: 'blur(0px) brightness(1) saturate(1)', duration: 0.15, ease: 'elastic.out(1, 0.4)' }
        ]
    },

    // 时间通量 - 时间扭曲效果
    temporalFlux: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 0.5, rotation: 0, x: 0, filter: 'blur(30px)', duration: 0 },
            { opacity: 0.5, scale: 1.2, rotation: 180, x: 100, filter: 'blur(15px)', duration: 0.25, ease: 'power3.inOut' },
            { opacity: 0.2, scale: 0.6, rotation: 360, x: -80, filter: 'blur(25px)', duration: 0.2, ease: 'power3.inOut' },
            { opacity: 0.8, scale: 1.3, rotation: 540, x: 60, filter: 'blur(8px)', duration: 0.15, ease: 'power3.inOut' },
            { opacity: 0.4, scale: 0.8, rotation: 720, x: -40, filter: 'blur(12px)', duration: 0.12, ease: 'power3.inOut' },
            { opacity: 1, scale: 1.1, rotation: 810, x: 20, filter: 'blur(4px)', duration: 0.1, ease: 'power3.inOut' },
            { scale: 0.95, rotation: 870, x: -10, filter: 'blur(2px)', duration: 0.08, ease: 'power3.inOut' },
            { scale: 1, rotation: 900, x: 0, filter: 'blur(0px)', duration: 0.12, ease: 'elastic.out(1, 0.3)' }
        ]
    },

    // 能量级联 - 能量波动传递
    energyCascade: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 0, filter: 'blur(50px) brightness(3)', duration: 0 },
            { opacity: 1, scale: 2, filter: 'blur(20px) brightness(2)', duration: 0.15, ease: 'power4.out' },
            { opacity: 0.6, scale: 0.5, filter: 'blur(35px) brightness(1.5)', duration: 0.12, ease: 'power4.in' },
            { opacity: 1, scale: 1.5, filter: 'blur(10px) brightness(1.8)', duration: 0.1, ease: 'power4.out' },
            { opacity: 0.7, scale: 0.8, filter: 'blur(18px) brightness(1.3)', duration: 0.08, ease: 'power4.in' },
            { opacity: 1, scale: 1.2, filter: 'blur(5px) brightness(1.5)', duration: 0.06, ease: 'power4.out' },
            { opacity: 0.85, scale: 0.95, filter: 'blur(8px) brightness(1.2)', duration: 0.05, ease: 'power4.in' },
            { opacity: 1, scale: 1, filter: 'blur(0px) brightness(1)', duration: 0.1, ease: 'elastic.out(1, 0.4)' }
        ]
    },

    // 形态本质 - 物质形态的本质变化
    morphEssence: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 0.3, borderRadius: '50%', rotation: 0, filter: 'blur(40px)', duration: 0 },
            { opacity: 0.4, scale: 0.6, borderRadius: '50%', rotation: 120, filter: 'blur(25px)', duration: 0.2, ease: 'power2.out' },
            { opacity: 0.7, scale: 1.2, borderRadius: '30%', rotation: 240, filter: 'blur(12px)', duration: 0.15, ease: 'power2.in' },
            { opacity: 0.9, scale: 0.85, borderRadius: '10%', rotation: 360, filter: 'blur(6px)', duration: 0.12, ease: 'power2.out' },
            { opacity: 0.6, scale: 1.1, borderRadius: '40%', rotation: 420, filter: 'blur(8px)', duration: 0.1, ease: 'power2.in' },
            { opacity: 1, scale: 0.95, borderRadius: '20%', rotation: 450, filter: 'blur(3px)', duration: 0.08, ease: 'power2.out' },
            { borderRadius: '25%', rotation: 465, filter: 'blur(1px)', duration: 0.06, ease: 'power2.in' },
            { borderRadius: '20px', rotation: 0, filter: 'blur(0px)', duration: 0.12, ease: 'elastic.out(1, 0.5)' }
        ]
    },

    // 共振场域 - 共振波扩散
    resonanceField: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 0, filter: 'blur(30px)', duration: 0 },
            { opacity: 1, scale: 1.8, filter: 'blur(5px)', duration: 0.12, ease: 'power2.out' },
            { opacity: 0.3, scale: 0.5, filter: 'blur(20px)', duration: 0.1, ease: 'power2.in' },
            { opacity: 1, scale: 1.4, filter: 'blur(3px)', duration: 0.08, ease: 'power2.out' },
            { opacity: 0.5, scale: 0.75, filter: 'blur(12px)', duration: 0.07, ease: 'power2.in' },
            { opacity: 1, scale: 1.2, filter: 'blur(2px)', duration: 0.06, ease: 'power2.out' },
            { opacity: 0.7, scale: 0.9, filter: 'blur(6px)', duration: 0.05, ease: 'power2.in' },
            { opacity: 1, scale: 1, filter: 'blur(0px)', duration: 0.1, ease: 'elastic.out(1, 0.6)' }
        ]
    },

    // 量子纠缠 - 双向纠缠动画
    quantumEntangle: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 0, rotation: 0, x: 0, filter: 'blur(40px)', duration: 0 },
            { opacity: 1, scale: 1.5, rotation: 180, x: 80, filter: 'blur(10px)', duration: 0.2, ease: 'power2.out' },
            { opacity: 0.4, scale: 0.6, rotation: 360, x: -60, filter: 'blur(25px)', duration: 0.15, ease: 'power2.in' },
            { opacity: 1, scale: 1.3, rotation: 540, x: 40, filter: 'blur(5px)', duration: 0.12, ease: 'power2.out' },
            { opacity: 0.5, scale: 0.85, rotation: 630, x: -25, filter: 'blur(12px)', duration: 0.1, ease: 'power2.in' },
            { opacity: 1, scale: 1.15, rotation: 720, x: 15, filter: 'blur(3px)', duration: 0.08, ease: 'power2.out' },
            { opacity: 0.7, scale: 0.95, rotation: 765, x: -8, filter: 'blur(5px)', duration: 0.06, ease: 'power2.in' },
            { opacity: 1, scale: 1, rotation: 0, x: 0, filter: 'blur(0px)', duration: 0.12, ease: 'elastic.out(1, 0.4)' }
        ]
    },

    // 维度跃迁 - 跨维度穿越
    dimensionShift: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 0.2, rotationX: 180, rotationY: 180, z: -800, filter: 'blur(60px)', duration: 0 },
            { opacity: 0.5, scale: 0.8, rotationX: 90, rotationY: 90, z: -400, filter: 'blur(30px)', duration: 0.22, ease: 'power3.out' },
            { opacity: 0.2, scale: 1.4, rotationX: 45, rotationY: 45, z: -200, filter: 'blur(45px)', duration: 0.18, ease: 'power3.in' },
            { opacity: 0.8, scale: 0.7, rotationX: 22, rotationY: 22, z: 100, filter: 'blur(15px)', duration: 0.15, ease: 'power3.out' },
            { opacity: 0.4, scale: 1.2, rotationX: 11, rotationY: 11, z: -50, filter: 'blur(22px)', duration: 0.12, ease: 'power3.in' },
            { opacity: 0.9, scale: 0.9, rotationX: 5, rotationY: 5, z: 25, filter: 'blur(8px)', duration: 0.1, ease: 'power3.out' },
            { opacity: 0.6, scale: 1.05, rotationX: 2, rotationY: 2, z: -12, filter: 'blur(12px)', duration: 0.08, ease: 'power3.in' },
            { opacity: 1, scale: 1, rotationX: 0, rotationY: 0, z: 0, filter: 'blur(0px)', duration: 0.14, ease: 'elastic.out(1, 0.35)' }
        ]
    },

    // 等离子核心 - 等离子能量核心
    plasmaCore: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 0, filter: 'blur(80px) brightness(5) saturate(2)', duration: 0 },
            { opacity: 1, scale: 2.5, filter: 'blur(20px) brightness(3) saturate(3)', duration: 0.18, ease: 'power4.out' },
            { opacity: 0.3, scale: 0.5, filter: 'blur(50px) brightness(2) saturate(1.5)', duration: 0.15, ease: 'power4.in' },
            { opacity: 1, scale: 1.8, filter: 'blur(10px) brightness(2.5) saturate(2.5)', duration: 0.12, ease: 'power4.out' },
            { opacity: 0.5, scale: 0.7, filter: 'blur(30px) brightness(1.8) saturate(1.8)', duration: 0.1, ease: 'power4.in' },
            { opacity: 1, scale: 1.4, filter: 'blur(5px) brightness(2.2) saturate(2.2)', duration: 0.08, ease: 'power4.out' },
            { opacity: 0.7, scale: 0.85, filter: 'blur(15px) brightness(2) saturate(2)', duration: 0.06, ease: 'power4.in' },
            { opacity: 1, scale: 1, filter: 'blur(0px) brightness(1) saturate(1)', duration: 0.12, ease: 'elastic.out(1, 0.45)' }
        ]
    },

    // 引力波 - 引力波纹扩散
    gravityWave: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 0.1, rotation: 0, filter: 'blur(50px)', duration: 0 },
            { opacity: 1, scale: 2, rotation: 90, filter: 'blur(8px)', duration: 0.2, ease: 'power2.out' },
            { opacity: 0.4, scale: 0.6, rotation: 180, filter: 'blur(30px)', duration: 0.15, ease: 'power2.in' },
            { opacity: 1, scale: 1.5, rotation: 270, filter: 'blur(4px)', duration: 0.12, ease: 'power2.out' },
            { opacity: 0.5, scale: 0.8, rotation: 315, filter: 'blur(15px)', duration: 0.1, ease: 'power2.in' },
            { opacity: 1, scale: 1.2, rotation: 337, filter: 'blur(2px)', duration: 0.08, ease: 'power2.out' },
            { opacity: 0.7, scale: 0.95, rotation: 348, filter: 'blur(5px)', duration: 0.06, ease: 'power2.in' },
            { opacity: 1, scale: 1, rotation: 0, filter: 'blur(0px)', duration: 0.12, ease: 'elastic.out(1, 0.5)' }
        ]
    },

    // 星尘构成 - 星尘粒子凝聚
    stardustForm: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 0, filter: 'blur(60px) brightness(2)', duration: 0 },
            { opacity: 0.6, scale: 0.8, filter: 'blur(20px) brightness(1.8)', duration: 0.2, ease: 'power2.out' },
            { opacity: 0.3, scale: 0.4, filter: 'blur(40px) brightness(1.5)', duration: 0.15, ease: 'power2.in' },
            { opacity: 0.8, scale: 1.2, filter: 'blur(10px) brightness(1.6)', duration: 0.12, ease: 'power2.out' },
            { opacity: 0.5, scale: 0.7, filter: 'blur(25px) brightness(1.4)', duration: 0.1, ease: 'power2.in' },
            { opacity: 0.9, scale: 1.1, filter: 'blur(5px) brightness(1.5)', duration: 0.08, ease: 'power2.out' },
            { opacity: 0.7, scale: 0.95, filter: 'blur(12px) brightness(1.45)', duration: 0.06, ease: 'power2.in' },
            { opacity: 1, scale: 1, filter: 'blur(0px) brightness(1)', duration: 0.14, ease: 'elastic.out(1, 0.4)' }
        ]
    },

    // 霓虹通量 - 霓虹光流动
    neonFlux: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 0.3, filter: 'blur(30px) brightness(3) hue-rotate(0deg)', duration: 0 },
            { opacity: 1, scale: 1.5, filter: 'blur(8px) brightness(2.5) hue-rotate(60deg)', duration: 0.18, ease: 'power2.out' },
            { opacity: 0.4, scale: 0.7, filter: 'blur(20px) brightness(2) hue-rotate(120deg)', duration: 0.14, ease: 'power2.in' },
            { opacity: 1, scale: 1.3, filter: 'blur(4px) brightness(2.2) hue-rotate(180deg)', duration: 0.12, ease: 'power2.out' },
            { opacity: 0.5, scale: 0.85, filter: 'blur(12px) brightness(2) hue-rotate(240deg)', duration: 0.1, ease: 'power2.in' },
            { opacity: 1, scale: 1.15, filter: 'blur(2px) brightness(2.1) hue-rotate(300deg)', duration: 0.08, ease: 'power2.out' },
            { opacity: 0.8, scale: 0.98, filter: 'blur(5px) brightness(2.05) hue-rotate(330deg)', duration: 0.06, ease: 'power2.in' },
            { opacity: 1, scale: 1, filter: 'blur(0px) brightness(1) hue-rotate(0deg)', duration: 0.12, ease: 'elastic.out(1, 0.45)' }
        ]
    },

    // 晶体矩阵 - 晶体矩阵展开
    crystalMatrix: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 0, rotation: 0, skewX: 0, skewY: 0, filter: 'blur(50px)', duration: 0 },
            { opacity: 0.3, scale: 0.5, rotation: 45, skewX: 15, skewY: -15, filter: 'blur(25px)', duration: 0.15, ease: 'power2.out' },
            { opacity: 0.6, scale: 1.2, rotation: -30, skewX: -10, skewY: 10, filter: 'blur(12px)', duration: 0.12, ease: 'power2.in' },
            { opacity: 0.85, scale: 0.8, rotation: 20, skewX: 5, skewY: -5, filter: 'blur(6px)', duration: 0.1, ease: 'power2.out' },
            { opacity: 0.5, scale: 1.1, rotation: -10, skewX: -2.5, skewY: 2.5, filter: 'blur(8px)', duration: 0.08, ease: 'power2.in' },
            { opacity: 0.9, scale: 0.95, rotation: 5, skewX: 1.25, skewY: -1.25, filter: 'blur(3px)', duration: 0.06, ease: 'power2.out' },
            { opacity: 0.75, scale: 1.02, rotation: -2, skewX: -0.63, skewY: 0.63, filter: 'blur(4px)', duration: 0.05, ease: 'power2.in' },
            { opacity: 1, scale: 1, rotation: 0, skewX: 0, skewY: 0, filter: 'blur(0px)', duration: 0.12, ease: 'elastic.out(1, 0.5)' }
        ]
    },

    // 虚空传送门 - 虚空传送门开启
    voidPortal: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 0, borderRadius: '50%', filter: 'blur(80px) brightness(5)', duration: 0 },
            { opacity: 0.4, scale: 3, borderRadius: '50%', filter: 'blur(30px) brightness(3)', duration: 0.2, ease: 'power4.out' },
            { opacity: 0.2, scale: 0.5, borderRadius: '50%', filter: 'blur(50px) brightness(2)', duration: 0.15, ease: 'power4.in' },
            { opacity: 0.7, scale: 1.5, borderRadius: '30%', filter: 'blur(15px) brightness(2.5)', duration: 0.12, ease: 'power4.out' },
            { opacity: 0.3, scale: 0.8, borderRadius: '40%', filter: 'blur(25px) brightness(1.8)', duration: 0.1, ease: 'power4.in' },
            { opacity: 0.9, scale: 1.2, borderRadius: '25%', filter: 'blur(8px) brightness(2.2)', duration: 0.08, ease: 'power4.out' },
            { opacity: 0.6, scale: 0.95, borderRadius: '28%', filter: 'blur(12px) brightness(2)', duration: 0.06, ease: 'power4.in' },
            { opacity: 1, scale: 1, borderRadius: '20px', filter: 'blur(0px) brightness(1)', duration: 0.14, ease: 'elastic.out(1, 0.4)' }
        ]
    },

    // 激光构建 - 激光线框构建
    laserConstruct: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 0, filter: 'blur(40px) brightness(4)', duration: 0 },
            { opacity: 1, scale: 1.3, filter: 'blur(0px) brightness(2)', duration: 0.1, ease: 'power4.out' },
            { opacity: 0.2, scale: 0.6, filter: 'blur(30px) brightness(1.5)', duration: 0.08, ease: 'power4.in' },
            { opacity: 1, scale: 1.2, filter: 'blur(0px) brightness(1.8)', duration: 0.06, ease: 'power4.out' },
            { opacity: 0.3, scale: 0.8, filter: 'blur(20px) brightness(1.6)', duration: 0.05, ease: 'power4.in' },
            { opacity: 1, scale: 1.1, filter: 'blur(0px) brightness(1.7)', duration: 0.04, ease: 'power4.out' },
            { opacity: 0.5, scale: 0.9, filter: 'blur(10px) brightness(1.65)', duration: 0.04, ease: 'power4.in' },
            { opacity: 1, scale: 1, filter: 'blur(0px) brightness(1)', duration: 0.1, ease: 'elastic.out(1, 0.5)' }
        ]
    },

    // 空气动力学 - 流体动力学运动
    aeroDynamic: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 0.3, y: -200, rotation: 0, skewX: 0, filter: 'blur(20px)', duration: 0 },
            { opacity: 0.4, scale: 0.7, y: -80, rotation: 15, skewX: 5, filter: 'blur(12px)', duration: 0.2, ease: 'power2.out' },
            { opacity: 0.7, scale: 1.2, y: 50, rotation: -10, skewX: -3, filter: 'blur(6px)', duration: 0.15, ease: 'power2.in' },
            { opacity: 0.9, scale: 0.85, y: -30, rotation: 6, skewX: 2, filter: 'blur(3px)', duration: 0.12, ease: 'power2.out' },
            { opacity: 0.6, scale: 1.1, y: 15, rotation: -3, skewX: -1, filter: 'blur(5px)', duration: 0.1, ease: 'power2.in' },
            { opacity: 1, scale: 0.95, y: -8, rotation: 1.5, skewX: 0.5, filter: 'blur(2px)', duration: 0.08, ease: 'power2.out' },
            { y: 4, rotation: -0.75, skewX: -0.25, filter: 'blur(1px)', duration: 0.06, ease: 'power2.in' },
            { y: 0, rotation: 0, skewX: 0, filter: 'blur(0px)', duration: 0.12, ease: 'elastic.out(1, 0.45)' }
        ]
    },

    // 液态铬 - 液态金属流动
    liquidChrome: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 0.2, borderRadius: '50%', filter: 'blur(50px) brightness(2)', duration: 0 },
            { opacity: 0.5, scale: 1.8, borderRadius: '50%', filter: 'blur(15px) brightness(1.8)', duration: 0.22, ease: 'power3.out' },
            { opacity: 0.3, scale: 0.6, borderRadius: '50%', filter: 'blur(35px) brightness(1.5)', duration: 0.18, ease: 'power3.in' },
            { opacity: 0.8, scale: 1.4, borderRadius: '30%', filter: 'blur(8px) brightness(1.6)', duration: 0.15, ease: 'power3.out' },
            { opacity: 0.4, scale: 0.8, borderRadius: '40%', filter: 'blur(18px) brightness(1.4)', duration: 0.12, ease: 'power3.in' },
            { opacity: 0.9, scale: 1.2, borderRadius: '25%', filter: 'blur(4px) brightness(1.5)', duration: 0.1, ease: 'power3.out' },
            { opacity: 0.6, scale: 0.95, borderRadius: '28%', filter: 'blur(8px) brightness(1.45)', duration: 0.08, ease: 'power3.in' },
            { opacity: 1, scale: 1, borderRadius: '20px', filter: 'blur(0px) brightness(1)', duration: 0.14, ease: 'elastic.out(1, 0.4)' }
        ]
    },

    // 棱镜光谱 - 彩虹光谱折射
    prismSpectrum: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 0, rotation: 0, filter: 'blur(40px) brightness(2) hue-rotate(0deg)', duration: 0 },
            { opacity: 0.4, scale: 1.5, rotation: 60, filter: 'blur(10px) brightness(2.5) hue-rotate(60deg)', duration: 0.18, ease: 'power2.out' },
            { opacity: 0.2, scale: 0.5, rotation: 120, filter: 'blur(25px) brightness(1.8) hue-rotate(120deg)', duration: 0.14, ease: 'power2.in' },
            { opacity: 0.7, scale: 1.3, rotation: 180, filter: 'blur(5px) brightness(2.2) hue-rotate(180deg)', duration: 0.12, ease: 'power2.out' },
            { opacity: 0.35, scale: 0.8, rotation: 240, filter: 'blur(15px) brightness(1.9) hue-rotate(240deg)', duration: 0.1, ease: 'power2.in' },
            { opacity: 0.9, scale: 1.15, rotation: 300, filter: 'blur(3px) brightness(2.1) hue-rotate(300deg)', duration: 0.08, ease: 'power2.out' },
            { opacity: 0.6, scale: 0.98, filter: 'blur(6px) brightness(2) hue-rotate(330deg)', duration: 0.06, ease: 'power2.in' },
            { opacity: 1, scale: 1, rotation: 360, filter: 'blur(0px) brightness(1) hue-rotate(0deg)', duration: 0.12, ease: 'elastic.out(1, 0.45)' }
        ]
    },
}

export const v6={

    // V6 光影特效系列 - 专业视觉特效师创作
    // 阳光穿透效果 - 模拟阳光穿透云层
    sunRayPenetration: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 0.5, filter: 'blur(80px) brightness(0.2) contrast(0.5)', duration: 0 },
            { opacity: 0.3, scale: 0.7, filter: 'blur(60px) brightness(0.8) contrast(1)', duration: 0.4, ease: 'power2.out' },
            { opacity: 0.6, scale: 0.9, filter: 'blur(40px) brightness(1.5) contrast(1.3)', duration: 0.3, ease: 'power2.in' },
            { opacity: 0.8, scale: 1.1, filter: 'blur(25px) brightness(2) contrast(1.5)', duration: 0.2, ease: 'power2.out' },
            { opacity: 1, scale: 1, filter: 'blur(0px) brightness(1) contrast(1)', duration: 0.15, ease: 'power2.in' }
        ]
    },

    // 暮光散射 - 黄金时刻的散射效果
    twilightScatter: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 0.3, filter: 'blur(60px) brightness(0.1) hue-rotate(30deg) saturate(0.3)', duration: 0 },
            { opacity: 0.2, scale: 0.5, filter: 'blur(50px) brightness(0.4) hue-rotate(20deg) saturate(0.6)', duration: 0.3, ease: 'power2.out' },
            { opacity: 0.5, scale: 0.8, filter: 'blur(35px) brightness(0.9) hue-rotate(15deg) saturate(0.9)', duration: 0.25, ease: 'power2.in' },
            { opacity: 0.7, scale: 1.2, filter: 'blur(20px) brightness(1.4) hue-rotate(10deg) saturate(1.2)', duration: 0.2, ease: 'power2.out' },
            { opacity: 0.9, scale: 0.9, filter: 'blur(12px) brightness(1.8) hue-rotate(5deg) saturate(1.5)', duration: 0.15, ease: 'power2.in' },
            { opacity: 1, scale: 1, filter: 'blur(0px) brightness(1) hue-rotate(0deg) saturate(1)', duration: 0.15, ease: 'elastic.out(1, 0.4)' }
        ]
    },

    // 荧光脉冲 - 类似霓虹灯管的呼吸效果
    neonPulsar: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 0.8, filter: 'blur(30px) brightness(0.3) hue-rotate(180deg)', duration: 0 },
            { opacity: 0.4, scale: 1, filter: 'blur(20px) brightness(1.5) hue-rotate(200deg)', duration: 0.25, ease: 'power2.out' },
            { opacity: 0.2, scale: 0.9, filter: 'blur(35px) brightness(0.6) hue-rotate(190deg)', duration: 0.15, ease: 'power2.in' },
            { opacity: 0.7, scale: 1.1, filter: 'blur(15px) brightness(2.5) hue-rotate(210deg)', duration: 0.12, ease: 'power2.out' },
            { opacity: 0.4, scale: 0.95, filter: 'blur(25px) brightness(1) hue-rotate(200deg)', duration: 0.1, ease: 'power2.in' },
            { opacity: 0.9, scale: 1.05, filter: 'blur(10px) brightness(3) hue-rotate(220deg)', duration: 0.08, ease: 'power2.out' },
            { opacity: 1, scale: 1, filter: 'blur(5px) brightness(2.5) hue-rotate(200deg)', duration: 0.08, ease: 'elastic.out(1, 0.3)' },
            { opacity: 1, scale: 1, filter: 'blur(0px) brightness(1) hue-rotate(0deg)', duration: 0.2, ease: 'power2.in' }
        ]
    },

    // 激光扫射 - 激光束扫过屏幕
    laserSweep: {
        type: 'timeline',
        animations: [
            { opacity: 0, x: -1000, skewX: -45, filter: 'blur(20px) brightness(3) hue-rotate(120deg)', duration: 0 },
            { opacity: 1, x: -200, skewX: -45, filter: 'blur(15px) brightness(3.5) hue-rotate(130deg)', duration: 0.1, ease: 'none' },
            { opacity: 0.8, x: 300, skewX: -45, filter: 'blur(12px) brightness(3) hue-rotate(140deg)', duration: 0.08, ease: 'none' },
            { opacity: 1, x: 800, skewX: -45, filter: 'blur(18px) brightness(3.8) hue-rotate(130deg)', duration: 0.06, ease: 'none' },
            { opacity: 0, x: 1000, skewX: -45, filter: 'blur(20px) brightness(0) hue-rotate(0deg)', duration: 0.04, ease: 'none' },
            { opacity: 1, x: 0, skewX: 0, filter: 'blur(0px) brightness(1) hue-rotate(0deg)', duration: 0.15, ease: 'elastic.out(1, 0.5)' }
        ]
    },

    // 光晕辉光 - 柔和的光晕扩散
    haloGlow: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 0.5, filter: 'blur(50px) brightness(0.5)', duration: 0 },
            { opacity: 0.4, scale: 1.5, filter: 'blur(40px) brightness(1.2)', duration: 0.5, ease: 'power2.out' },
            { opacity: 0.7, scale: 1.8, filter: 'blur(30px) brightness(1.5)', duration: 0.3, ease: 'power2.in' },
            { opacity: 0.9, scale: 1.6, filter: 'blur(20px) brightness(1.8)', duration: 0.2, ease: 'power2.out' },
            { opacity: 1, scale: 1.4, filter: 'blur(10px) brightness(2)', duration: 0.15, ease: 'power2.in' },
            { opacity: 1, scale: 1, filter: 'blur(0px) brightness(1)', duration: 0.2, ease: 'elastic.out(1, 0.4)' }
        ]
    },

    // 镜面反射 - 模拟光线反射
    mirrorReflection: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 1, scaleY: 0, filter: 'blur(20px) brightness(0.5)', duration: 0 },
            { opacity: 0.3, scaleY: 0.3, filter: 'blur(15px) brightness(0.8)', duration: 0.2, ease: 'power2.out' },
            { opacity: 0.6, scaleY: 0.6, filter: 'blur(10px) brightness(1.2)', duration: 0.15, ease: 'power2.in' },
            { opacity: 0.8, scaleY: 0.8, filter: 'blur(8px) brightness(1.5)', duration: 0.1, ease: 'power2.out' },
            { opacity: 1, scaleY: 1, filter: 'blur(5px) brightness(1.8)', duration: 0.08, ease: 'power2.in' },
            { opacity: 1, scaleY: 1, filter: 'blur(0px) brightness(1)', duration: 0.15, ease: 'elastic.out(1, 0.3)' }
        ]
    },

    // 玻璃折射 - 玻璃质感的折射效果
    glassRefraction: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 0.8, filter: 'blur(30px) brightness(0.4) hue-rotate(20deg)', duration: 0 },
            { opacity: 0.3, scale: 0.9, filter: 'blur(25px) brightness(0.7) hue-rotate(15deg)', duration: 0.25, ease: 'power2.out' },
            { opacity: 0.6, scale: 1.1, filter: 'blur(18px) brightness(1.1) hue-rotate(10deg)', duration: 0.2, ease: 'power2.in' },
            { opacity: 0.8, scale: 0.95, filter: 'blur(12px) brightness(1.4) hue-rotate(5deg)', duration: 0.15, ease: 'power2.out' },
            { opacity: 1, scale: 1.05, filter: 'blur(6px) brightness(1.7) hue-rotate(2deg)', duration: 0.1, ease: 'power2.in' },
            { opacity: 1, scale: 1, filter: 'blur(0px) brightness(1) hue-rotate(0deg)', duration: 0.15, ease: 'elastic.out(1, 0.4)' }
        ]
    },

    // 火焰光辉 - 火焰闪烁的光效
    fireGlimmer: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 0.6, filter: 'blur(40px) brightness(0.2) hue-rotate(0deg)', duration: 0 },
            { opacity: 0.4, scale: 0.8, filter: 'blur(30px) brightness(1.5) hue-rotate(15deg)', duration: 0.15, ease: 'power2.out' },
            { opacity: 0.2, scale: 0.7, filter: 'blur(35px) brightness(0.8) hue-rotate(10deg)', duration: 0.1, ease: 'power2.in' },
            { opacity: 0.7, scale: 1.1, filter: 'blur(20px) brightness(2.5) hue-rotate(25deg)', duration: 0.08, ease: 'power2.out' },
            { opacity: 0.5, scale: 0.9, filter: 'blur(25px) brightness(1.2) hue-rotate(20deg)', duration: 0.06, ease: 'power2.in' },
            { opacity: 0.9, scale: 1.05, filter: 'blur(15px) brightness(2.8) hue-rotate(30deg)', duration: 0.05, ease: 'power2.out' },
            { opacity: 1, scale: 1, filter: 'blur(8px) brightness(2.5) hue-rotate(20deg)', duration: 0.05, ease: 'elastic.out(1, 0.3)' },
            { opacity: 1, scale: 1, filter: 'blur(0px) brightness(1) hue-rotate(0deg)', duration: 0.15, ease: 'power2.in' }
        ]
    },

    // 极光流光 - 北极光般的流动光效
    auroraFlow: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 0.5, filter: 'blur(50px) brightness(0.3) hue-rotate(0deg) saturate(0.5)', duration: 0 },
            { opacity: 0.3, scale: 0.7, filter: 'blur(40px) brightness(0.6) hue-rotate(30deg) saturate(1)', duration: 0.3, ease: 'power2.out' },
            { opacity: 0.5, scale: 0.9, filter: 'blur(30px) brightness(0.9) hue-rotate(60deg) saturate(1.5)', duration: 0.2, ease: 'power2.in' },
            { opacity: 0.7, scale: 1.1, filter: 'blur(20px) brightness(1.2) hue-rotate(90deg) saturate(1.8)', duration: 0.15, ease: 'power2.out' },
            { opacity: 0.6, scale: 0.95, filter: 'blur(25px) brightness(1) hue-rotate(120deg) saturate(1.6)', duration: 0.12, ease: 'power2.in' },
            { opacity: 0.9, scale: 1.05, filter: 'blur(15px) brightness(1.5) hue-rotate(150deg) saturate(2)', duration: 0.1, ease: 'power2.out' },
            { opacity: 1, scale: 1, filter: 'blur(5px) brightness(1.2) hue-rotate(180deg) saturate(1.5)', duration: 0.1, ease: 'elastic.out(1, 0.4)' },
            { opacity: 1, scale: 1, filter: 'blur(0px) brightness(1) hue-rotate(0deg) saturate(1)', duration: 0.2, ease: 'power2.in' }
        ]
    },

    // 星尘闪烁 - 星光闪烁效果
    stardustTwinkle: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 0.3, filter: 'blur(30px) brightness(0.1)', duration: 0 },
            { opacity: 0.4, scale: 0.6, filter: 'blur(25px) brightness(0.5)', duration: 0.2, ease: 'power2.out' },
            { opacity: 0.2, scale: 0.5, filter: 'blur(28px) brightness(0.3)', duration: 0.08, ease: 'power2.in' },
            { opacity: 0.7, scale: 0.9, filter: 'blur(18px) brightness(1.2)', duration: 0.06, ease: 'power2.out' },
            { opacity: 0.5, scale: 0.8, filter: 'blur(22px) brightness(0.8)', duration: 0.05, ease: 'power2.in' },
            { opacity: 0.9, scale: 1.1, filter: 'blur(12px) brightness(1.8)', duration: 0.04, ease: 'power2.out' },
            { opacity: 0.6, scale: 0.95, filter: 'blur(15px) brightness(1.2)', duration: 0.04, ease: 'power2.in' },
            { opacity: 1, scale: 1, filter: 'blur(8px) brightness(1.5)', duration: 0.04, ease: 'power2.out' },
            { opacity: 1, scale: 1, filter: 'blur(0px) brightness(1)', duration: 0.15, ease: 'elastic.out(1, 0.3)' }
        ]
    },

    // 光波涟漪 - 水面光波扩散
    lightWaveRipple: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 0.1, filter: 'blur(40px) brightness(0.2)', duration: 0 },
            { opacity: 0.3, scale: 0.5, filter: 'blur(35px) brightness(0.5)', duration: 0.25, ease: 'power2.out' },
            { opacity: 0.5, scale: 1, filter: 'blur(25px) brightness(0.8)', duration: 0.2, ease: 'power2.in' },
            { opacity: 0.7, scale: 1.5, filter: 'blur(18px) brightness(1.1)', duration: 0.15, ease: 'power2.out' },
            { opacity: 0.6, scale: 1.2, filter: 'blur(22px) brightness(0.9)', duration: 0.12, ease: 'power2.in' },
            { opacity: 0.9, scale: 1.3, filter: 'blur(12px) brightness(1.4)', duration: 0.1, ease: 'power2.out' },
            { opacity: 1, scale: 1, filter: 'blur(0px) brightness(1)', duration: 0.15, ease: 'elastic.out(1, 0.4)' }
        ]
    },

    // 彩虹折射 - 棱镜彩虹效果
    prismRainbow: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 0.4, filter: 'blur(60px) brightness(0.1) hue-rotate(0deg) saturate(0)', duration: 0 },
            { opacity: 0.2, scale: 0.6, filter: 'blur(50px) brightness(0.3) hue-rotate(60deg) saturate(0.5)', duration: 0.3, ease: 'power2.out' },
            { opacity: 0.5, scale: 0.9, filter: 'blur(35px) brightness(0.6) hue-rotate(120deg) saturate(1)', duration: 0.2, ease: 'power2.in' },
            { opacity: 0.7, scale: 1.2, filter: 'blur(20px) brightness(0.9) hue-rotate(180deg) saturate(1.5)', duration: 0.15, ease: 'power2.out' },
            { opacity: 0.5, scale: 1.05, filter: 'blur(25px) brightness(0.7) hue-rotate(240deg) saturate(1.2)', duration: 0.12, ease: 'power2.in' },
            { opacity: 0.9, scale: 1.1, filter: 'blur(12px) brightness(1.2) hue-rotate(300deg) saturate(1.8)', duration: 0.1, ease: 'power2.out' },
            { opacity: 1, scale: 1, filter: 'blur(5px) brightness(1) hue-rotate(360deg) saturate(1)', duration: 0.15, ease: 'elastic.out(1, 0.4)' },
            { opacity: 1, scale: 1, filter: 'blur(0px) brightness(1) hue-rotate(0deg) saturate(1)', duration: 0.2, ease: 'power2.in' }
        ]
    },

    // 魔法光辉 - 魔法般的光芒
    magicAura: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 0.2, filter: 'blur(70px) brightness(0) hue-rotate(180deg)', duration: 0 },
            { opacity: 0.3, scale: 0.5, filter: 'blur(55px) brightness(0.5) hue-rotate(150deg)', duration: 0.35, ease: 'power2.out' },
            { opacity: 0.6, scale: 0.8, filter: 'blur(40px) brightness(1) hue-rotate(120deg)', duration: 0.25, ease: 'power2.in' },
            { opacity: 0.8, scale: 1.2, filter: 'blur(25px) brightness(1.5) hue-rotate(90deg)', duration: 0.18, ease: 'power2.out' },
            { opacity: 0.7, scale: 1.05, filter: 'blur(30px) brightness(1.2) hue-rotate(100deg)', duration: 0.15, ease: 'power2.in' },
            { opacity: 0.9, scale: 1.15, filter: 'blur(15px) brightness(1.8) hue-rotate(80deg)', duration: 0.12, ease: 'power2.out' },
            { opacity: 1, scale: 1, filter: 'blur(0px) brightness(1) hue-rotate(0deg)', duration: 0.2, ease: 'elastic.out(1, 0.5)' }
        ]
    },

    // 闪光爆发 - 强烈的光效爆发
    flashBurst: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 0.01, filter: 'blur(100px) brightness(0)', duration: 0 },
            { opacity: 0.1, scale: 0.1, filter: 'blur(80px) brightness(0.5)', duration: 0.05, ease: 'power2.out' },
            { opacity: 0.3, scale: 0.3, filter: 'blur(60px) brightness(1)', duration: 0.04, ease: 'power2.out' },
            { opacity: 0.8, scale: 1.5, filter: 'blur(30px) brightness(3)', duration: 0.03, ease: 'power2.out' },
            { opacity: 1, scale: 2.5, filter: 'blur(10px) brightness(5)', duration: 0.02, ease: 'elastic.out(2, 0.8)' },
            { opacity: 0.9, scale: 1.8, filter: 'blur(15px) brightness(2.5)', duration: 0.05, ease: 'power2.in' },
            { opacity: 1, scale: 1.2, filter: 'blur(8px) brightness(1.8)', duration: 0.04, ease: 'power2.out' },
            { opacity: 1, scale: 1, filter: 'blur(0px) brightness(1)', duration: 0.15, ease: 'power2.in' }
        ]
    },

    // 光晕扩散 - 柔和的光晕渐变
    glowDiffusion: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 0.3, filter: 'blur(40px) brightness(0.3)', duration: 0 },
            { opacity: 0.2, scale: 0.6, filter: 'blur(35px) brightness(0.5)', duration: 0.4, ease: 'power2.out' },
            { opacity: 0.4, scale: 0.9, filter: 'blur(28px) brightness(0.7)', duration: 0.3, ease: 'power2.in' },
            { opacity: 0.6, scale: 1.2, filter: 'blur(20px) brightness(0.9)', duration: 0.2, ease: 'power2.out' },
            { opacity: 0.8, scale: 1.4, filter: 'blur(12px) brightness(1.1)', duration: 0.15, ease: 'power2.in' },
            { opacity: 0.9, scale: 1.2, filter: 'blur(8px) brightness(1.3)', duration: 0.1, ease: 'power2.out' },
            { opacity: 1, scale: 1, filter: 'blur(0px) brightness(1)', duration: 0.15, ease: 'elastic.out(1, 0.4)' }
        ]
    },

    // 霓虹流光 - 霓虹灯流动效果
    neonFlow: {
        type: 'timeline',
        animations: [
            { opacity: 0, x: -200, skewX: -30, filter: 'blur(25px) brightness(0.5) hue-rotate(200deg)', duration: 0 },
            { opacity: 0.4, x: -50, skewX: -20, filter: 'blur(20px) brightness(1.5) hue-rotate(220deg)', duration: 0.15, ease: 'power2.out' },
            { opacity: 0.2, x: 30, skewX: -15, filter: 'blur(30px) brightness(0.8) hue-rotate(210deg)', duration: 0.08, ease: 'power2.in' },
            { opacity: 0.7, x: 80, skewX: -10, filter: 'blur(15px) brightness(2.5) hue-rotate(230deg)', duration: 0.06, ease: 'power2.out' },
            { opacity: 0.5, x: 40, skewX: -12, filter: 'blur(20px) brightness(1.2) hue-rotate(220deg)', duration: 0.05, ease: 'power2.in' },
            { opacity: 0.9, x: 0, skewX: 0, filter: 'blur(8px) brightness(3) hue-rotate(240deg)', duration: 0.05, ease: 'elastic.out(1, 0.3)' },
            { opacity: 1, scale: 1, filter: 'blur(0px) brightness(1) hue-rotate(0deg)', duration: 0.15, ease: 'power2.in' }
        ]
    },
}

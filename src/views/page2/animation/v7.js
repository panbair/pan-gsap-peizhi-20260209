export const v7={


    // V7 超越极限系列 - 融合Anime.js理念与GSAP性能
    // 核心特性: 复杂交错(stagger)、弹簧物理(spring)、精细keyframe控制

    // 弹簧物理进场 - Anime.js风格弹簧效果
    springEntrance: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 0, y: 200, rotation: -90, duration: 0 },
            { opacity: 0.5, scale: 0.3, y: 100, rotation: -45, duration: 0.15, ease: 'power2.out' },
            { opacity: 0.8, scale: 0.7, y: 30, rotation: 15, duration: 0.12, ease: 'power2.in' },
            { opacity: 0.95, scale: 1.1, y: -15, rotation: -8, duration: 0.1, ease: 'power2.out' },
            { opacity: 1, scale: 0.97, y: 5, rotation: 3, duration: 0.08, ease: 'power2.in' },
            { scale: 1.02, y: -2, rotation: -1, duration: 0.06, ease: 'power2.out' },
            { scale: 1, y: 0, rotation: 0, duration: 0.1, ease: 'elastic.out(1, 0.5)' }
        ]
    },

    // 交错波浪 - 经典stagger效果的模拟
    staggerWave: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 0.5, y: 50, rotation: -30, skewX: -15, duration: 0 },
            { opacity: 0.3, scale: 0.7, y: 20, rotation: -15, skewX: -7, duration: 0.2, ease: 'power2.out' },
            { opacity: 0.6, scale: 0.9, y: -10, rotation: 8, skewX: 4, duration: 0.15, ease: 'power2.in' },
            { opacity: 0.8, scale: 1.15, y: 15, rotation: -5, skewX: -2, duration: 0.12, ease: 'power2.out' },
            { opacity: 0.95, scale: 0.95, y: -5, rotation: 3, skewX: 1, duration: 0.1, ease: 'power2.in' },
            { opacity: 1, scale: 1.05, y: 2, rotation: -1, skewX: 0, duration: 0.08, ease: 'power2.out' },
            { scale: 1, y: 0, rotation: 0, skewX: 0, duration: 0.12, ease: 'elastic.out(1, 0.4)' }
        ]
    },

    // 3D弹性折叠 - 空间变换+弹性效果
    elastic3DFold: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 0.2, rotationX: -180, rotationY: 0, rotationZ: 0, z: -1000, duration: 0 },
            { opacity: 0.3, scale: 0.5, rotationX: -90, rotationY: 60, rotationZ: 30, z: -500, duration: 0.25, ease: 'power2.out' },
            { opacity: 0.6, scale: 0.9, rotationX: 30, rotationY: -30, rotationZ: 15, z: -200, duration: 0.2, ease: 'power2.in' },
            { opacity: 0.85, scale: 1.2, rotationX: -15, rotationY: 15, rotationZ: -8, z: 100, duration: 0.15, ease: 'power2.out' },
            { opacity: 0.95, scale: 0.92, rotationX: 8, rotationY: -8, rotationZ: 4, z: -50, duration: 0.12, ease: 'power2.in' },
            { scale: 1.06, rotationX: -4, rotationY: 4, rotationZ: -2, z: 25, duration: 0.1, ease: 'power2.out' },
            { scale: 0.98, rotationX: 2, rotationY: -2, rotationZ: 1, z: -12, duration: 0.08, ease: 'power2.in' },
            { scale: 1, rotationX: 0, rotationY: 0, rotationZ: 0, z: 0, duration: 0.15, ease: 'elastic.out(1, 0.5)' }
        ]
    },

    // 弹性形变路径 - 复杂的弹性形变
    elasticDeform: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 0.3, scaleX: 2, scaleY: 0.3, skewX: 45, skewY: -30, rotation: 0, duration: 0 },
            { opacity: 0.35, scale: 0.6, scaleX: 1.5, scaleY: 0.6, skewX: 30, skewY: -20, rotation: 45, duration: 0.18, ease: 'power2.out' },
            { opacity: 0.6, scale: 0.9, scaleX: 0.8, scaleY: 1.3, skewX: -20, skewY: 15, rotation: -30, duration: 0.15, ease: 'power2.in' },
            { opacity: 0.8, scale: 1.15, scaleX: 1.2, scaleY: 0.85, skewX: 10, skewY: -8, rotation: 20, duration: 0.12, ease: 'power2.out' },
            { opacity: 0.92, scale: 0.93, scaleX: 0.95, scaleY: 1.1, skewX: -5, skewY: 4, rotation: -10, duration: 0.1, ease: 'power2.in' },
            { scale: 1.05, scaleX: 1.03, scaleY: 0.98, skewX: 3, skewY: -2, rotation: 5, duration: 0.08, ease: 'power2.out' },
            { scale: 0.98, scaleX: 0.99, scaleY: 1.01, skewX: -1.5, skewY: 1, rotation: -2.5, duration: 0.06, ease: 'power2.in' },
            { scale: 1.02, scaleX: 1.01, scaleY: 0.99, skewX: 0.8, skewY: -0.5, rotation: 1.2, duration: 0.05, ease: 'power2.out' },
            { scale: 1, scaleX: 1, scaleY: 1, skewX: 0, skewY: 0, rotation: 0, duration: 0.12, ease: 'elastic.out(1, 0.6)' }
        ]
    },

    // 弹簧脉冲 - 呼吸式弹性脉冲
    springPulse: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 0, filter: 'blur(30px) brightness(0)', duration: 0 },
            { opacity: 0.4, scale: 0.6, filter: 'blur(20px) brightness(1.5)', duration: 0.2, ease: 'power2.out' },
            { opacity: 0.8, scale: 1.3, filter: 'blur(8px) brightness(2.5)', duration: 0.15, ease: 'power2.in' },
            { opacity: 0.95, scale: 0.85, filter: 'blur(12px) brightness(1.8)', duration: 0.12, ease: 'power2.out' },
            { opacity: 1, scale: 1.1, filter: 'blur(5px) brightness(2)', duration: 0.1, ease: 'power2.in' },
            { scale: 0.97, filter: 'blur(8px) brightness(1.6)', duration: 0.08, ease: 'power2.out' },
            { scale: 1.03, filter: 'blur(3px) brightness(1.9)', duration: 0.06, ease: 'power2.in' },
            { scale: 0.99, filter: 'blur(5px) brightness(1.7)', duration: 0.05, ease: 'power2.out' },
            { scale: 1.01, filter: 'blur(2px) brightness(1.8)', duration: 0.04, ease: 'power2.in' },
            { scale: 1, filter: 'blur(0px) brightness(1)', duration: 0.1, ease: 'elastic.out(1, 0.7)' }
        ]
    },

    // 弹性螺旋 - 螺旋式弹性进场
    elasticSpiral: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 0, rotation: 0, x: 0, y: 0, z: -500, duration: 0 },
            { opacity: 0.25, scale: 0.4, rotation: 180, x: 50, y: -50, z: -300, duration: 0.2, ease: 'power2.out' },
            { opacity: 0.55, scale: 0.8, rotation: 360, x: -40, y: 40, z: -100, duration: 0.15, ease: 'power2.in' },
            { opacity: 0.8, scale: 1.2, rotation: 540, x: 30, y: -30, z: 100, duration: 0.12, ease: 'power2.out' },
            { opacity: 0.92, scale: 0.9, rotation: 630, x: -20, y: 20, z: -50, duration: 0.1, ease: 'power2.in' },
            { scale: 1.08, rotation: 675, x: 12, y: -12, z: 25, duration: 0.08, ease: 'power2.out' },
            { scale: 0.97, rotation: 693, x: -8, y: 8, z: -12, duration: 0.06, ease: 'power2.in' },
            { scale: 1.02, rotation: 702, x: 5, y: -5, z: 6, duration: 0.05, ease: 'power2.out' },
            { scale: 0.99, rotation: 707, x: -3, y: 3, z: -3, duration: 0.04, ease: 'power2.in' },
            { scale: 1, rotation: 720, x: 0, y: 0, z: 0, duration: 0.12, ease: 'elastic.out(1, 0.5)' }
        ]
    },

    // 弹性翻转 - 3D翻转+弹性
    elasticFlip: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 0.3, rotationY: -180, rotationX: 45, z: -800, duration: 0 },
            { opacity: 0.35, scale: 0.6, rotationY: -90, rotationX: 22, z: -400, duration: 0.25, ease: 'power2.out' },
            { opacity: 0.7, scale: 0.95, rotationY: 45, rotationX: -11, z: -100, duration: 0.2, ease: 'power2.in' },
            { opacity: 0.88, scale: 1.15, rotationY: -22, rotationX: 6, z: 150, duration: 0.15, ease: 'power2.out' },
            { opacity: 0.95, scale: 0.92, rotationY: 11, rotationX: -3, z: -75, duration: 0.12, ease: 'power2.in' },
            { scale: 1.06, rotationY: -6, rotationX: 1.5, z: 38, duration: 0.1, ease: 'power2.out' },
            { scale: 0.98, rotationY: 3, rotationX: -0.75, z: -19, duration: 0.08, ease: 'power2.in' },
            { scale: 1.02, rotationY: -1.5, rotationX: 0.38, z: 10, duration: 0.06, ease: 'power2.out' },
            { scale: 1, rotationY: 0, rotationX: 0, z: 0, duration: 0.1, ease: 'elastic.out(1, 0.5)' }
        ]
    },

    // 弹性摆动 - 摆钟式弹性
    elasticPendulum: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 0.4, rotation: -60, x: 150, y: 200, duration: 0 },
            { opacity: 0.3, scale: 0.6, rotation: -30, x: 75, y: 150, duration: 0.2, ease: 'power2.out' },
            { opacity: 0.6, scale: 0.9, rotation: 15, x: -38, y: 75, duration: 0.15, ease: 'power2.in' },
            { opacity: 0.85, scale: 1.15, rotation: -8, x: 19, y: -38, duration: 0.12, ease: 'power2.out' },
            { opacity: 0.93, scale: 0.95, rotation: 4, x: -10, y: 19, duration: 0.1, ease: 'power2.in' },
            { scale: 1.05, rotation: -2, x: 5, y: -10, duration: 0.08, ease: 'power2.out' },
            { scale: 0.98, rotation: 1, x: -2.5, y: 5, duration: 0.06, ease: 'power2.in' },
            { scale: 1.02, rotation: -0.5, x: 1.25, y: -2.5, duration: 0.05, ease: 'power2.out' },
            { scale: 1, rotation: 0, x: 0, y: 0, duration: 0.1, ease: 'elastic.out(1, 0.5)' }
        ]
    },

    // 弹性缩放 - 纯缩放弹性
    elasticScale: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 0, duration: 0 },
            { opacity: 0.4, scale: 0.5, duration: 0.18, ease: 'power2.out' },
            { opacity: 0.75, scale: 1.25, duration: 0.14, ease: 'power2.in' },
            { opacity: 0.92, scale: 0.88, duration: 0.11, ease: 'power2.out' },
            { scale: 1.08, duration: 0.09, ease: 'power2.in' },
            { scale: 0.97, duration: 0.07, ease: 'power2.out' },
            { scale: 1.02, duration: 0.06, ease: 'power2.in' },
            { scale: 0.99, duration: 0.05, ease: 'power2.out' },
            { scale: 1.01, duration: 0.04, ease: 'power2.in' },
            { scale: 1, duration: 0.1, ease: 'elastic.out(1, 0.5)' }
        ]
    },

    // 弹性旋转 - 纯旋转弹性
    elasticRotate: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 0.5, rotation: -180, duration: 0 },
            { opacity: 0.35, scale: 0.7, rotation: -90, duration: 0.2, ease: 'power2.out' },
            { opacity: 0.65, scale: 1.1, rotation: 45, duration: 0.15, ease: 'power2.in' },
            { opacity: 0.88, scale: 0.92, rotation: -22, duration: 0.12, ease: 'power2.out' },
            { scale: 1.05, rotation: 11, duration: 0.1, ease: 'power2.in' },
            { scale: 0.97, rotation: -5.5, duration: 0.08, ease: 'power2.out' },
            { scale: 1.02, rotation: 2.75, duration: 0.06, ease: 'power2.in' },
            { scale: 0.99, rotation: -1.38, duration: 0.05, ease: 'power2.out' },
            { scale: 1.01, rotation: 0.69, duration: 0.04, ease: 'power2.in' },
            { scale: 1, rotation: 0, duration: 0.1, ease: 'elastic.out(1, 0.5)' }
        ]
    },

    // 弹性弹跳 - 模拟小球弹跳
    elasticBounce: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 0.4, y: -300, duration: 0 },
            { opacity: 0.5, scale: 0.6, y: -150, duration: 0.2, ease: 'power2.out' },
            { opacity: 0.8, scale: 0.85, y: 80, duration: 0.18, ease: 'power2.in' },
            { opacity: 0.92, scale: 1.1, y: -40, duration: 0.14, ease: 'power2.out' },
            { scale: 0.95, y: 20, duration: 0.11, ease: 'power2.in' },
            { scale: 1.04, y: -10, duration: 0.09, ease: 'power2.out' },
            { scale: 0.98, y: 5, duration: 0.07, ease: 'power2.in' },
            { scale: 1.01, y: -2.5, duration: 0.06, ease: 'power2.out' },
            { scale: 0.99, y: 1.25, duration: 0.05, ease: 'power2.in' },
            { scale: 1, y: 0, duration: 0.12, ease: 'elastic.out(1, 0.5)' }
        ]
    },

    // 弹性滑入 - 滑动+弹性
    elasticSlide: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 0.3, x: -400, skewX: -20, duration: 0 },
            { opacity: 0.35, scale: 0.55, x: -200, skewX: -10, duration: 0.22, ease: 'power2.out' },
            { opacity: 0.65, scale: 1.1, x: 80, skewX: 4, duration: 0.16, ease: 'power2.in' },
            { opacity: 0.88, scale: 0.92, x: -32, skewX: -2, duration: 0.13, ease: 'power2.out' },
            { scale: 1.06, x: 16, skewX: 1, duration: 0.1, ease: 'power2.in' },
            { scale: 0.97, x: -8, skewX: -0.5, duration: 0.08, ease: 'power2.out' },
            { scale: 1.02, x: 4, skewX: 0.25, duration: 0.06, ease: 'power2.in' },
            { scale: 0.99, x: -2, skewX: -0.125, duration: 0.05, ease: 'power2.out' },
            { scale: 1, x: 0, skewX: 0, duration: 0.12, ease: 'elastic.out(1, 0.5)' }
        ]
    },

    // 弹性膨胀 - 膨胀效果
    elasticExpand: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 0, filter: 'blur(50px) brightness(0)', duration: 0 },
            { opacity: 0.3, scale: 0.5, filter: 'blur(35px) brightness(1.2)', duration: 0.18, ease: 'power2.out' },
            { opacity: 0.7, scale: 1.4, filter: 'blur(15px) brightness(2.5)', duration: 0.14, ease: 'power2.in' },
            { opacity: 0.9, scale: 0.85, filter: 'blur(20px) brightness(1.8)', duration: 0.11, ease: 'power2.out' },
            { scale: 1.15, filter: 'blur(8px) brightness(2.2)', duration: 0.09, ease: 'power2.in' },
            { scale: 0.94, filter: 'blur(12px) brightness(1.9)', duration: 0.07, ease: 'power2.out' },
            { scale: 1.05, filter: 'blur(5px) brightness(2.1)', duration: 0.06, ease: 'power2.in' },
            { scale: 0.98, filter: 'blur(7px) brightness(2)', duration: 0.05, ease: 'power2.out' },
            { scale: 1, filter: 'blur(0px) brightness(1)', duration: 0.12, ease: 'elastic.out(1, 0.6)' }
        ]
    },

    // 弹性收缩 - 收缩效果
    elasticContract: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 2, filter: 'blur(60px) brightness(0.5)', duration: 0 },
            { opacity: 0.35, scale: 1.5, filter: 'blur(40px) brightness(1)', duration: 0.2, ease: 'power2.out' },
            { opacity: 0.65, scale: 0.7, filter: 'blur(20px) brightness(2)', duration: 0.15, ease: 'power2.in' },
            { opacity: 0.88, scale: 1.1, filter: 'blur(12px) brightness(1.8)', duration: 0.12, ease: 'power2.out' },
            { scale: 0.92, filter: 'blur(18px) brightness(2.2)', duration: 0.1, ease: 'power2.in' },
            { scale: 1.06, filter: 'blur(10px) brightness(1.9)', duration: 0.08, ease: 'power2.out' },
            { scale: 0.97, filter: 'blur(14px) brightness(2.1)', duration: 0.06, ease: 'power2.in' },
            { scale: 1.02, filter: 'blur(6px) brightness(2)', duration: 0.05, ease: 'power2.out' },
            { scale: 1, filter: 'blur(0px) brightness(1)', duration: 0.12, ease: 'elastic.out(1, 0.6)' }
        ]
    },

    // 弹性变形 - 菱形变形
    elasticMorph: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 0.4, rotation: 0, scaleX: 2, scaleY: 0.3, skewX: 30, skewY: -30, duration: 0 },
            { opacity: 0.35, scale: 0.6, rotation: 30, scaleX: 1.5, scaleY: 0.5, skewX: 20, skewY: -20, duration: 0.18, ease: 'power2.out' },
            { opacity: 0.65, scale: 1.1, rotation: -15, scaleX: 0.8, scaleY: 1.4, skewX: -10, skewY: 10, duration: 0.14, ease: 'power2.in' },
            { opacity: 0.88, scale: 0.95, rotation: 8, scaleX: 1.1, scaleY: 0.9, skewX: 5, skewY: -5, duration: 0.11, ease: 'power2.out' },
            { scale: 1.05, rotation: -4, scaleX: 0.97, scaleY: 1.05, skewX: -2.5, skewY: 2.5, duration: 0.09, ease: 'power2.in' },
            { scale: 0.98, rotation: 2, scaleX: 1.02, scaleY: 0.98, skewX: 1.25, skewY: -1.25, duration: 0.07, ease: 'power2.out' },
            { scale: 1.01, rotation: -1, scaleX: 0.99, scaleY: 1.01, skewX: -0.63, skewY: 0.63, duration: 0.06, ease: 'power2.in' },
            { scale: 1, rotation: 0, scaleX: 1, scaleY: 1, skewX: 0, skewY: 0, duration: 0.12, ease: 'elastic.out(1, 0.6)' }
        ]
    },

    // 弹性震动 - 震动入场
    elasticShake: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 0.5, x: 0, y: 0, duration: 0 },
            { opacity: 0.4, scale: 0.7, x: -60, y: 0, duration: 0.12, ease: 'power2.out' },
            { opacity: 0.7, scale: 0.9, x: 45, y: -30, duration: 0.09, ease: 'power2.in' },
            { opacity: 0.88, scale: 1.1, x: -30, y: 20, duration: 0.07, ease: 'power2.out' },
            { scale: 0.95, x: 18, y: -12, duration: 0.06, ease: 'power2.in' },
            { scale: 1.04, x: -10, y: 6, duration: 0.05, ease: 'power2.out' },
            { scale: 0.98, x: 6, y: -3, duration: 0.04, ease: 'power2.in' },
            { scale: 1.01, x: -3, y: 2, duration: 0.03, ease: 'power2.out' },
            { scale: 0.99, x: 1.5, y: -1, duration: 0.03, ease: 'power2.in' },
            { scale: 1, x: 0, y: 0, duration: 0.1, ease: 'elastic.out(1, 0.5)' }
        ]
    },

    // 弹性飞入 - 飞入效果
    elasticFlyIn: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 0.2, x: -600, y: -300, rotation: -45, duration: 0 },
            { opacity: 0.3, scale: 0.5, x: -300, y: -150, rotation: -22, duration: 0.22, ease: 'power2.out' },
            { opacity: 0.6, scale: 1.15, x: 120, y: 60, rotation: 11, duration: 0.16, ease: 'power2.in' },
            { opacity: 0.85, scale: 0.9, x: -48, y: -24, rotation: -5.5, duration: 0.13, ease: 'power2.out' },
            { scale: 1.07, x: 24, y: 12, rotation: 2.75, duration: 0.1, ease: 'power2.in' },
            { scale: 0.96, x: -12, y: -6, rotation: -1.38, duration: 0.08, ease: 'power2.out' },
            { scale: 1.02, x: 6, y: 3, rotation: 0.69, duration: 0.06, ease: 'power2.in' },
            { scale: 0.99, x: -3, y: -1.5, rotation: -0.35, duration: 0.05, ease: 'power2.out' },
            { scale: 1, x: 0, y: 0, rotation: 0, duration: 0.12, ease: 'elastic.out(1, 0.5)' }
        ]
    },

    // 弹性拉出 - 拉出效果
    elasticPullOut: {
        type: 'timeline',
        animations: [
            { opacity: 0, scale: 0.3, scaleX: 3, scaleY: 0.1, rotation: 0, duration: 0 },
            { opacity: 0.35, scale: 0.55, scaleX: 2, scaleY: 0.4, rotation: 15, duration: 0.18, ease: 'power2.out' },
            { opacity: 0.65, scale: 1.15, scaleX: 0.8, scaleY: 1.3, rotation: -8, duration: 0.14, ease: 'power2.in' },
            { opacity: 0.88, scale: 0.92, scaleX: 1.1, scaleY: 0.92, rotation: 4, duration: 0.11, ease: 'power2.out' },
            { scale: 1.06, scaleX: 0.97, scaleY: 1.05, rotation: -2, duration: 0.09, ease: 'power2.in' },
            { scale: 0.97, scaleX: 1.02, scaleY: 0.98, rotation: 1, duration: 0.07, ease: 'power2.out' },
            { scale: 1.02, scaleX: 0.99, scaleY: 1.01, rotation: -0.5, duration: 0.06, ease: 'power2.in' },
            { scale: 0.99, scaleX: 1.01, scaleY: 0.99, rotation: 0.25, duration: 0.05, ease: 'power2.out' },
            { scale: 1, scaleX: 1, scaleY: 1, rotation: 0, duration: 0.12, ease: 'elastic.out(1, 0.5)' }
        ]
    },

}

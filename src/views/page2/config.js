export const config = {
  // V1 基础动画
  fadeIn: {
    type: 'fromTo',
    animations: [
      { opacity: 0 },
      { opacity: 1, duration: 0.8, ease: 'power2.out' }
    ]
  },
  fadeOut: {
    type: 'fromTo',
    animations: [
      { opacity: 1 },
      { opacity: 0, duration: 0.8, ease: 'power2.out' }
    ]
  },
  fadeInDown: {
    type: 'fromTo',
    animations: [
      { opacity: 0, y: -100 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
    ]
  },
  fadeOutDown: {
    type: 'fromTo',
    animations: [
      { opacity: 1 },
      { opacity: 0, y: 100, duration: 0.8, ease: 'power2.out' }
    ]
  },
  fadeInUp: {
    type: 'fromTo',
    animations: [
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
    ]
  },
  fadeOutUp: {
    type: 'fromTo',
    animations: [
      { opacity: 1 },
      { opacity: 0, y: -100, duration: 0.8, ease: 'power2.out' }
    ]
  },
  fadeInLeft: {
    type: 'fromTo',
    animations: [
      { opacity: 0, x: -100 },
      { opacity: 1, x: 0, duration: 0.8, ease: 'power2.out' }
    ]
  },
  fadeOutLeft: {
    type: 'fromTo',
    animations: [
      { opacity: 1 },
      { opacity: 0, x: -100, duration: 0.8, ease: 'power2.out' }
    ]
  },
  fadeInRight: {
    type: 'fromTo',
    animations: [
      { opacity: 0, x: 100 },
      { opacity: 1, x: 0, duration: 0.8, ease: 'power2.out' }
    ]
  },
  fadeOutRight: {
    type: 'fromTo',
    animations: [
      { opacity: 1 },
      { opacity: 0, x: 100, duration: 0.8, ease: 'power2.out' }
    ]
  },
  scaleIn: {
    type: 'fromTo',
    animations: [
      { opacity: 0, scale: 0.3 },
      { opacity: 1, scale: 1, duration: 0.8, ease: 'power2.out' }
    ]
  },
  scaleOut: {
    type: 'fromTo',
    animations: [
      { opacity: 1, scale: 1 },
      { opacity: 0, scale: 0.3, duration: 0.8, ease: 'power2.in' }
    ]
  },
  rotateIn: {
    type: 'fromTo',
    animations: [
      { opacity: 0, rotation: -180, scale: 0 },
      { opacity: 1, rotation: 0, scale: 1, duration: 0.8, ease: 'back.out(1.7)' }
    ]
  },
  rotateOut: {
    type: 'fromTo',
    animations: [
      { opacity: 1, rotation: 0, scale: 1 },
      { opacity: 0, rotation: 180, scale: 0, duration: 0.8, ease: 'power2.in' }
    ]
  },
  bounceIn: {
    type: 'fromTo',
    animations: [
      { opacity: 0, scale: 0.3 },
      { opacity: 1, scale: 1.05, duration: 0.5, ease: 'elastic.out(1, 0.5)' },
      { scale: 1, duration: 0.2, ease: 'power2.out' }
    ]
  },
  bounceOut: {
    type: 'fromTo',
    animations: [
      { opacity: 1, scale: 1 },
      { opacity: 0, scale: 0.3, duration: 0.5, ease: 'back.in(1.7)' }
    ]
  },
  flash: {
    type: 'fromTo',
    animations: [
      { opacity: 1 },
      { opacity: 0, duration: 0.15, ease: 'none' },
      { opacity: 1, duration: 0.15, ease: 'none' },
      { opacity: 0, duration: 0.15, ease: 'none' },
      { opacity: 1, duration: 0.15, ease: 'none' }
    ]
  },
  shake: {
    type: 'fromTo',
    animations: [
      { x: 0 },
      { x: -10, duration: 0.1, ease: 'none' },
      { x: 10, duration: 0.1, ease: 'none' },
      { x: -10, duration: 0.1, ease: 'none' },
      { x: 10, duration: 0.1, ease: 'none' },
      { x: -10, duration: 0.1, ease: 'none' },
      { x: 10, duration: 0.1, ease: 'none' },
      { x: 0, duration: 0.1, ease: 'none' }
    ]
  },
  pulse: {
    type: 'fromTo',
    animations: [
      { scale: 1 },
      { scale: 1.05, duration: 0.4, ease: 'power2.out' },
      { scale: 1, duration: 0.4, ease: 'power2.in' }
    ]
  },

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

  // V5 极限冲击特效
  vortexMaelstrom: {
    type: 'timeline',
    animations: [
      { opacity: 0, scale: 0.1, rotation: 0, x: 0, y: 0, z: -3000, filter: 'blur(50px) brightness(0.1)', duration: 0 },
      { opacity: 0.5, scale: 0.8, rotation: 360, x: 80, y: 80, z: -1500, filter: 'blur(30px) brightness(0.6)', duration: 0.25, ease: 'power2.out' },
      { scale: 0.5, rotation: 720, x: -120, y: -120, z: -500, filter: 'blur(40px) brightness(0.4)', duration: 0.2, ease: 'power2.in' },
      { scale: 1.5, rotation: 1080, x: 60, y: 60, z: 500, filter: 'blur(15px) brightness(2)', duration: 0.18, ease: 'power2.out' },
      { scale: 0.7, rotation: 1440, x: -90, y: -90, z: -200, filter: 'blur(25px) brightness(0.8)', duration: 0.15, ease: 'power2.in' },
      { scale: 1.3, rotation: 1800, x: 45, y: 45, z: 300, filter: 'blur(10px) brightness(1.5)', duration: 0.12, ease: 'power2.out' },
      { scale: 0.85, rotation: 1980, x: -60, y: -60, z: -100, filter: 'blur(20px) brightness(0.9)', duration: 0.1, ease: 'power2.in' },
      { scale: 1.1, rotation: 2160, x: 30, y: 30, z: 150, filter: 'blur(5px) brightness(1.3)', duration: 0.08, ease: 'power2.out' },
      { scale: 0.95, rotation: 2268, x: -40, y: -40, z: -50, filter: 'blur(12px) brightness(1.1)', duration: 0.06, ease: 'power2.in' },
      { scale: 1.03, rotation: 2376, x: 20, y: 20, z: 80, filter: 'blur(3px) brightness(1.2)', duration: 0.05, ease: 'power2.out' },
      { scale: 1, rotation: 2520, x: 0, y: 0, z: 0, filter: 'blur(0px) brightness(1)', duration: 0.05, ease: 'power2.in' }
    ]
  },
  hyperspaceJump: {
    type: 'timeline',
    animations: [
      { opacity: 0, scale: 0.2, rotationX: 0, rotationY: 0, z: -5000, filter: 'blur(80px) brightness(0.05)', duration: 0 },
      { opacity: 1, scale: 0.5, rotationX: 180, rotationY: 180, z: -2500, filter: 'blur(50px) brightness(0.5)', duration: 0.15, ease: 'power2.out' },
      { scale: 0.3, rotationX: 360, rotationY: -360, z: -1000, filter: 'blur(40px) brightness(0.3)', duration: 0.1, ease: 'power2.in' },
      { scale: 3, rotationX: 540, rotationY: 540, z: 1500, filter: 'blur(20px) brightness(3)', duration: 0.08, ease: 'power2.out' },
      { scale: 0.6, rotationX: 720, rotationY: -720, z: 300, filter: 'blur(30px) brightness(0.7)', duration: 0.06, ease: 'power2.in' },
      { scale: 2, rotationX: 900, rotationY: 900, z: 800, filter: 'blur(15px) brightness(2.5)', duration: 0.05, ease: 'power2.out' },
      { scale: 0.8, rotationX: 1080, rotationY: -1080, z: 150, filter: 'blur(25px) brightness(0.9)', duration: 0.04, ease: 'power2.in' },
      { scale: 1.5, rotationX: 1260, rotationY: 1260, z: 400, filter: 'blur(10px) brightness(2)', duration: 0.04, ease: 'power2.out' },
      { scale: 0.9, rotationX: 1440, rotationY: -1440, z: 80, filter: 'blur(20px) brightness(1.1)', duration: 0.03, ease: 'power2.in' },
      { scale: 1.2, rotationX: 1620, rotationY: 1620, z: 200, filter: 'blur(5px) brightness(1.5)', duration: 0.03, ease: 'power2.out' },
      { scale: 1, rotationX: 1800, rotationY: -1800, z: 0, filter: 'blur(0px) brightness(1)', duration: 0.05, ease: 'power2.in' }
    ]
  },
  supernovaCore: {
    type: 'timeline',
    animations: [
      { opacity: 0, scale: 0.05, filter: 'blur(0px) brightness(0.5)', boxShadow: '0 0 0 currentColor', duration: 0 },
      { opacity: 1, scale: 0.3, filter: 'blur(2px) brightness(2)', boxShadow: '0 0 30px #ffffff, 0 0 60px #ffff00', duration: 0.08, ease: 'power2.out' },
      { scale: 0.6, filter: 'blur(5px) brightness(3)', boxShadow: '0 0 60px #ffffff, 0 0 120px #ff8800, 0 0 180px #ff0000', duration: 0.06, ease: 'power2.in' },
      { scale: 1.5, filter: 'blur(10px) brightness(4)', boxShadow: '0 0 100px #ffffff, 0 0 200px #ffff00, 0 0 300px #ff8800, 0 0 400px #ff0000', duration: 0.05, ease: 'power2.out' },
      { scale: 0.8, filter: 'blur(20px) brightness(2)', boxShadow: '0 0 80px #ff8800, 0 0 160px #ff0000', duration: 0.04, ease: 'power2.in' },
      { scale: 1.2, filter: 'blur(8px) brightness(3.5)', boxShadow: '0 0 120px #ffffff, 0 0 240px #ffff00, 0 0 360px #ff8800', duration: 0.04, ease: 'power2.out' },
      { scale: 0.9, filter: 'blur(15px) brightness(2.5)', boxShadow: '0 0 100px #ffff00, 0 0 200px #ff8800', duration: 0.03, ease: 'power2.in' },
      { scale: 1.1, filter: 'blur(4px) brightness(3)', boxShadow: '0 0 80px #ffffff, 0 0 160px #ffff00', duration: 0.03, ease: 'power2.out' },
      { scale: 1, filter: 'blur(0px) brightness(1)', boxShadow: '0 0 50px rgba(102, 126, 234, 0.5)', duration: 0.03, ease: 'power2.in' }
    ]
  },
  dimensionCascade: {
    type: 'timeline',
    animations: [
      { opacity: 0, scale: 0.5, rotation: 0, z: -2000, filter: 'blur(40px) brightness(0.2)', duration: 0 },
      { opacity: 0.3, scale: 0.8, rotation: 180, z: -1500, filter: 'blur(30px) brightness(0.5)', duration: 0.15, ease: 'power2.out' },
      { scale: 0.6, rotation: 360, z: -1000, filter: 'blur(35px) brightness(0.4)', duration: 0.12, ease: 'power2.in' },
      { scale: 1.2, rotation: 540, z: -500, filter: 'blur(20px) brightness(0.8)', duration: 0.1, ease: 'power2.out' },
      { scale: 0.7, rotation: 720, z: -300, filter: 'blur(28px) brightness(0.6)', duration: 0.08, ease: 'power2.in' },
      { scale: 1.1, rotation: 900, z: -150, filter: 'blur(15px) brightness(0.9)', duration: 0.06, ease: 'power2.out' },
      { scale: 0.85, rotation: 1080, z: -80, filter: 'blur(22px) brightness(0.7)', duration: 0.05, ease: 'power2.in' },
      { scale: 1.05, rotation: 1260, z: -40, filter: 'blur(10px) brightness(0.95)', duration: 0.04, ease: 'power2.out' },
      { scale: 0.95, rotation: 1440, z: -20, filter: 'blur(18px) brightness(0.85)', duration: 0.03, ease: 'power2.in' },
      { scale: 1.02, rotation: 1620, z: -10, filter: 'blur(5px) brightness(1.05)', duration: 0.03, ease: 'power2.out' },
      { scale: 1, rotation: 1800, z: 0, filter: 'blur(0px) brightness(1)', duration: 0.03, ease: 'power2.in' }
    ]
  },
  quantumTunnel: {
    type: 'timeline',
    animations: [
      { opacity: 0, scale: 0.01, rotation: 0, z: -10000, filter: 'blur(150px) brightness(0.02)', duration: 0 },
      { opacity: 0.2, scale: 0.05, rotation: 180, z: -8000, filter: 'blur(120px) brightness(0.1)', duration: 0.08, ease: 'power2.out' },
      { opacity: 0.4, scale: 0.1, rotation: 360, z: -6000, filter: 'blur(90px) brightness(0.2)', duration: 0.06, ease: 'power2.in' },
      { opacity: 0.6, scale: 0.2, rotation: 540, z: -4000, filter: 'blur(70px) brightness(0.4)', duration: 0.05, ease: 'power2.out' },
      { opacity: 0.8, scale: 0.4, rotation: 720, z: -2500, filter: 'blur(50px) brightness(0.7)', duration: 0.04, ease: 'power2.in' },
      { opacity: 1, scale: 2, rotation: 900, z: 0, filter: 'blur(10px) brightness(2)', duration: 0.12, ease: 'elastic.out(1, 0.5)' }
    ]
  },
  orbitalStrike: {
    type: 'timeline',
    animations: [
      { opacity: 0, scale: 0.1, rotation: 0, x: -500, y: -500, z: -1000, filter: 'blur(50px) brightness(0.2)', duration: 0 },
      { opacity: 0.5, scale: 0.5, rotation: 360, x: 200, y: 200, z: -500, filter: 'blur(30px) brightness(1)', duration: 0.2, ease: 'power2.out' },
      { scale: 0.3, rotation: 720, x: -150, y: -150, z: -200, filter: 'blur(40px) brightness(0.6)', duration: 0.15, ease: 'power2.in' },
      { scale: 1.8, rotation: 1080, x: 100, y: 100, z: 0, filter: 'blur(5px) brightness(3)', duration: 0.12, ease: 'power2.out' },
      { scale: 0.7, rotation: 1440, x: -80, y: -80, z: -100, filter: 'blur(20px) brightness(0.8)', duration: 0.1, ease: 'power2.in' },
      { scale: 1.3, rotation: 1800, x: 50, y: 50, z: 50, filter: 'blur(8px) brightness(2)', duration: 0.08, ease: 'power2.out' },
      { scale: 1, rotation: 2160, x: 0, y: 0, z: 0, filter: 'blur(0px) brightness(1)', duration: 0.08, ease: 'elastic.out(1, 0.4)' }
    ]
  },
  plasmaStorm: {
    type: 'timeline',
    animations: [
      { opacity: 0, scale: 0.2, rotation: 0, filter: 'blur(40px) hue-rotate(0deg) brightness(0.3)', duration: 0 },
      { opacity: 0.4, scale: 0.6, rotation: 90, filter: 'blur(30px) hue-rotate(60deg) brightness(0.7)', duration: 0.12, ease: 'power2.out' },
      { opacity: 0.7, scale: 1.4, rotation: 180, filter: 'blur(15px) hue-rotate(120deg) brightness(2)', duration: 0.1, ease: 'power2.in' },
      { opacity: 0.5, scale: 0.8, rotation: 270, filter: 'blur(25px) hue-rotate(180deg) brightness(0.9)', duration: 0.08, ease: 'power2.out' },
      { opacity: 0.9, scale: 1.3, rotation: 360, filter: 'blur(10px) hue-rotate(240deg) brightness(1.8)', duration: 0.06, ease: 'power2.in' },
      { opacity: 0.7, scale: 0.9, rotation: 450, filter: 'blur(18px) hue-rotate(300deg) brightness(1.1)', duration: 0.05, ease: 'power2.out' },
      { opacity: 1, scale: 1.1, rotation: 540, filter: 'blur(5px) hue-rotate(360deg) brightness(1.5)', duration: 0.04, ease: 'power2.in' },
      { opacity: 1, scale: 1, rotation: 630, filter: 'blur(0px) hue-rotate(0deg) brightness(1)', duration: 0.04, ease: 'elastic.out(1, 0.3)' }
    ]
  },
  gravityCollapse: {
    type: 'timeline',
    animations: [
      { opacity: 0, scale: 3, rotation: 0, z: 2000, filter: 'blur(80px) brightness(0.1)', duration: 0 },
      { opacity: 0.3, scale: 2, rotation: 90, z: 1500, filter: 'blur(60px) brightness(0.3)', duration: 0.1, ease: 'power2.in' },
      { opacity: 0.6, scale: 1.2, rotation: 180, z: 800, filter: 'blur(40px) brightness(0.6)', duration: 0.08, ease: 'power2.out' },
      { opacity: 0.4, scale: 0.7, rotation: 270, z: 300, filter: 'blur(20px) brightness(1.5)', duration: 0.06, ease: 'power2.in' },
      { opacity: 0.9, scale: 1.5, rotation: 360, z: -100, filter: 'blur(10px) brightness(2.5)', duration: 0.05, ease: 'power2.out' },
      { opacity: 1, scale: 1.1, rotation: 450, z: 0, filter: 'blur(3px) brightness(1.3)', duration: 0.04, ease: 'elastic.out(1, 0.4)' }
    ]
  },
  fusionReaction: {
    type: 'timeline',
    animations: [
      { opacity: 0, scale: 0.01, filter: 'blur(100px) brightness(0)', duration: 0 },
      { opacity: 0.2, scale: 0.1, filter: 'blur(80px) brightness(0.5)', duration: 0.08, ease: 'power2.out' },
      { opacity: 0.5, scale: 0.3, filter: 'blur(60px) brightness(1.5)', duration: 0.06, ease: 'power2.in' },
      { opacity: 0.8, scale: 2, filter: 'blur(30px) brightness(4)', duration: 0.05, ease: 'power2.out' },
      { opacity: 0.6, scale: 0.8, filter: 'blur(40px) brightness(1.2)', duration: 0.04, ease: 'power2.in' },
      { opacity: 1, scale: 1.3, filter: 'blur(15px) brightness(2.5)', duration: 0.04, ease: 'power2.out' },
      { opacity: 1, scale: 1, filter: 'blur(0px) brightness(1)', duration: 0.04, ease: 'elastic.out(1, 0.5)' }
    ]
  },
  chronalShift: {
    type: 'timeline',
    animations: [
      { opacity: 0, scale: 0.5, rotation: 0, filter: 'blur(30px) hue-rotate(0deg) contrast(0.5) saturate(0)', duration: 0 },
      { opacity: 0.3, scale: 0.7, rotation: 60, filter: 'blur(25px) hue-rotate(72deg) contrast(0.8) saturate(1.5)', duration: 0.1, ease: 'power2.out' },
      { opacity: 0.6, scale: 0.9, rotation: 120, filter: 'blur(20px) hue-rotate(144deg) contrast(1.2) saturate(2)', duration: 0.08, ease: 'power2.in' },
      { opacity: 0.4, scale: 0.6, rotation: 180, filter: 'blur(25px) hue-rotate(216deg) contrast(0.9) saturate(1.2)', duration: 0.06, ease: 'power2.out' },
      { opacity: 0.8, scale: 1.2, rotation: 240, filter: 'blur(15px) hue-rotate(288deg) contrast(1.5) saturate(2.5)', duration: 0.05, ease: 'power2.in' },
      { opacity: 1, scale: 1, rotation: 360, filter: 'blur(0px) hue-rotate(0deg) contrast(1) saturate(1)', duration: 0.08, ease: 'elastic.out(1, 0.3)' }
    ]
  },
  cosmicRebirth: {
    type: 'timeline',
    animations: [
      { opacity: 0, scale: 0, rotation: 0, filter: 'blur(100px) brightness(0) hue-rotate(0deg)', duration: 0 },
      { opacity: 0.3, scale: 0.3, rotation: 90, filter: 'blur(80px) brightness(0.3) hue-rotate(45deg)', duration: 0.12, ease: 'power2.out' },
      { opacity: 0.5, scale: 0.6, rotation: 180, filter: 'blur(60px) brightness(0.6) hue-rotate(90deg)', duration: 0.1, ease: 'power2.in' },
      { opacity: 0.7, scale: 0.9, rotation: 270, filter: 'blur(40px) brightness(1.2) hue-rotate(135deg)', duration: 0.08, ease: 'power2.out' },
      { opacity: 0.4, scale: 0.5, rotation: 360, filter: 'blur(50px) brightness(0.8) hue-rotate(180deg)', duration: 0.06, ease: 'power2.in' },
      { opacity: 0.9, scale: 1.4, rotation: 450, filter: 'blur(20px) brightness(2) hue-rotate(225deg)', duration: 0.05, ease: 'power2.out' },
      { opacity: 0.6, scale: 0.8, rotation: 540, filter: 'blur(30px) brightness(1) hue-rotate(270deg)', duration: 0.04, ease: 'power2.in' },
      { opacity: 1, scale: 1.2, rotation: 630, filter: 'blur(10px) brightness(1.8) hue-rotate(315deg)', duration: 0.04, ease: 'power2.out' },
      { opacity: 0.95, scale: 0.9, rotation: 675, filter: 'blur(15px) brightness(1.3) hue-rotate(360deg)', duration: 0.03, ease: 'power2.in' },
      { opacity: 1, scale: 1.05, rotation: 697, filter: 'blur(5px) brightness(1.5) hue-rotate(390deg)', duration: 0.03, ease: 'power2.out' },
      { opacity: 1, scale: 1, rotation: 720, filter: 'blur(0px) brightness(1) hue-rotate(0deg)', duration: 0.05, ease: 'power2.in' }
    ]
  },
  antimatterAnnihilation: {
    type: 'timeline',
    animations: [
      { opacity: 1, scale: 1, filter: 'blur(0px) brightness(1)', duration: 0 },
      { opacity: 0.8, scale: 0.95, filter: 'blur(2px) brightness(1.5)', duration: 0.03, ease: 'none' },
      { opacity: 1, scale: 1.1, filter: 'blur(1px) brightness(2)', duration: 0.02, ease: 'none' },
      { opacity: 0.7, scale: 0.9, filter: 'blur(5px) brightness(3)', duration: 0.025, ease: 'none' },
      { opacity: 1, scale: 1.2, filter: 'blur(2px) brightness(4)', duration: 0.02, ease: 'none' },
      { opacity: 0.5, scale: 0.85, filter: 'blur(10px) brightness(5)', duration: 0.025, ease: 'none' },
      { opacity: 1, scale: 1.5, filter: 'blur(3px) brightness(6)', duration: 0.02, ease: 'none' },
      { opacity: 0.3, scale: 0.7, filter: 'blur(20px) brightness(8)', duration: 0.03, ease: 'none' },
      { opacity: 1, scale: 2, filter: 'blur(5px) brightness(10)', duration: 0.02, ease: 'none' },
      { opacity: 0.1, scale: 0.5, filter: 'blur(50px) brightness(15)', duration: 0.05, ease: 'none' },
      { opacity: 1, scale: 1, filter: 'blur(0px) brightness(1)', duration: 0.2, ease: 'elastic.out(1, 0.5)' }
    ]
  },
  warpSpeed: {
    type: 'timeline',
    animations: [
      { opacity: 0, scale: 0.01, z: -5000, filter: 'blur(100px)', duration: 0 },
      { opacity: 0.2, scale: 0.05, z: -4000, filter: 'blur(80px)', duration: 0.05, ease: 'none' },
      { opacity: 0.4, scale: 0.1, z: -3000, filter: 'blur(60px)', duration: 0.05, ease: 'none' },
      { opacity: 0.6, scale: 0.2, z: -2000, filter: 'blur(40px)', duration: 0.05, ease: 'none' },
      { opacity: 0.8, scale: 0.4, z: -1000, filter: 'blur(20px)', duration: 0.05, ease: 'none' },
      { opacity: 1, scale: 3, z: 0, filter: 'blur(5px)', duration: 0.08, ease: 'power2.out' },
      { scale: 1, duration: 0.15, ease: 'elastic.out(1, 0.5)' }
    ]
  },
  blackholeSingularity: {
    type: 'timeline',
    animations: [
      { opacity: 0, scale: 3, rotation: 0, z: 2000, filter: 'blur(100px) brightness(0.1)', duration: 0 },
      { opacity: 0.2, scale: 2.5, rotation: 45, z: 1500, filter: 'blur(80px) brightness(0.2)', duration: 0.08, ease: 'power2.in' },
      { opacity: 0.4, scale: 2, rotation: 90, z: 1000, filter: 'blur(60px) brightness(0.3)', duration: 0.07, ease: 'power2.out' },
      { opacity: 0.6, scale: 1.5, rotation: 135, z: 600, filter: 'blur(40px) brightness(0.5)', duration: 0.06, ease: 'power2.in' },
      { opacity: 0.8, scale: 1.2, rotation: 180, z: 300, filter: 'blur(20px) brightness(0.8)', duration: 0.05, ease: 'power2.out' },
      { opacity: 1, scale: 0.8, rotation: 225, z: 100, filter: 'blur(10px) brightness(1.2)', duration: 0.04, ease: 'power2.in' },
      { opacity: 1, scale: 0.5, rotation: 270, z: 0, filter: 'blur(5px) brightness(1.5)', duration: 0.03, ease: 'power2.out' },
      { scale: 0.1, rotation: 360, filter: 'blur(0px) brightness(3)', duration: 0.05, ease: 'power2.in' },
      { opacity: 1, scale: 1, rotation: 450, filter: 'blur(0px) brightness(1)', duration: 0.15, ease: 'elastic.out(1, 0.4)' }
    ]
  },
  stellarGenesis: {
    type: 'timeline',
    animations: [
      { opacity: 0, scale: 0.01, filter: 'blur(200px) brightness(0)', boxShadow: '0 0 0 currentColor', duration: 0 },
      { opacity: 0.2, scale: 0.05, filter: 'blur(150px) brightness(0.3)', boxShadow: '0 0 50px #ff0000', duration: 0.1, ease: 'power2.out' },
      { opacity: 0.5, scale: 0.15, filter: 'blur(100px) brightness(0.7)', boxShadow: '0 0 100px #ff6600, 0 0 200px #ff0000', duration: 0.08, ease: 'power2.in' },
      { opacity: 0.8, scale: 0.4, filter: 'blur(60px) brightness(1.5)', boxShadow: '0 0 150px #ffff00, 0 0 300px #ff6600, 0 0 450px #ff0000', duration: 0.06, ease: 'power2.out' },
      { opacity: 1, scale: 1.5, filter: 'blur(20px) brightness(3)', boxShadow: '0 0 200px #ffffff, 0 0 400px #ffff00, 0 0 600px #ff6600, 0 0 800px #ff0000', duration: 0.05, ease: 'elastic.out(1, 0.5)' }
    ]
  },
  dimensionalCollapse: {
    type: 'timeline',
    animations: [
      { opacity: 0, scale: 0.1, rotationX: 0, rotationY: 0, rotationZ: 0, x: 0, y: 0, z: -15000, filter: 'blur(200px) brightness(0.05) contrast(0.3) hue-rotate(0deg) saturate(0)', duration: 0 },
      { opacity: 0.1, scale: 0.2, rotationX: 60, rotationY: 60, rotationZ: 30, x: 80, y: -80, z: -12000, filter: 'blur(160px) brightness(0.15) contrast(0.5) hue-rotate(45deg) saturate(0.3)', duration: 0.1, ease: 'power2.out' },
      { opacity: 0.25, scale: 0.35, rotationX: 120, rotationY: 120, rotationZ: 60, x: -120, y: 120, z: -9000, filter: 'blur(120px) brightness(0.3) contrast(0.7) hue-rotate(90deg) saturate(0.5)', duration: 0.08, ease: 'power2.in' },
      { opacity: 0.4, scale: 0.5, rotationX: 180, rotationY: 180, rotationZ: 90, x: 100, y: -100, z: -6000, filter: 'blur(90px) brightness(0.5) contrast(0.9) hue-rotate(135deg) saturate(0.7)', duration: 0.07, ease: 'power2.out' },
      { opacity: 0.6, scale: 0.7, rotationX: 240, rotationY: 240, rotationZ: 120, x: -80, y: 80, z: -3500, filter: 'blur(60px) brightness(0.7) contrast(1.1) hue-rotate(180deg) saturate(0.9)', duration: 0.06, ease: 'power2.in' },
      { opacity: 0.8, scale: 1.2, rotationX: 300, rotationY: 300, rotationZ: 150, x: 60, y: -60, z: -1500, filter: 'blur(35px) brightness(0.9) contrast(1.3) hue-rotate(225deg) saturate(1.1)', duration: 0.05, ease: 'power2.out' },
      { opacity: 0.95, scale: 0.85, rotationX: 360, rotationY: 360, rotationZ: 180, x: -40, y: 40, z: -500, filter: 'blur(20px) brightness(1.1) contrast(0.9) hue-rotate(270deg) saturate(0.8)', duration: 0.04, ease: 'power2.in' },
      { opacity: 1, scale: 1.4, rotationX: 420, rotationY: 420, rotationZ: 210, x: 30, y: -30, z: -200, filter: 'blur(10px) brightness(1.5) contrast(1.2) hue-rotate(315deg) saturate(1.3)', duration: 0.04, ease: 'power2.out' },
      { opacity: 0.9, scale: 0.9, rotationX: 390, rotationY: 390, rotationZ: 195, x: -20, y: 20, z: -80, filter: 'blur(15px) brightness(1.2) contrast(1) hue-rotate(340deg) saturate(1.1)', duration: 0.03, ease: 'power2.in' },
      { opacity: 1, scale: 1.15, rotationX: 405, rotationY: 405, rotationZ: 202, x: 15, y: -15, z: -30, filter: 'blur(5px) brightness(1.3) contrast(1.1) hue-rotate(355deg) saturate(1.2)', duration: 0.03, ease: 'power2.out' },
      { opacity: 1, scale: 1.05, rotationX: 397, rotationY: 397, rotationZ: 198, x: -8, y: 8, z: -10, filter: 'blur(3px) brightness(1.15) contrast(1.05) hue-rotate(360deg) saturate(1.1)', duration: 0.025, ease: 'power2.in' },
      { opacity: 1, scale: 1.02, rotationX: 401, rotationY: 401, rotationZ: 200, x: 5, y: -5, z: 5, filter: 'blur(1px) brightness(1.08) contrast(1.02) hue-rotate(365deg) saturate(1.05)', duration: 0.025, ease: 'power2.out' },
      { opacity: 1, scale: 1, rotationX: 399, rotationY: 399, rotationZ: 199, x: 0, y: 0, z: 0, filter: 'blur(0px) brightness(1) contrast(1) hue-rotate(0deg) saturate(1)', duration: 0.1, ease: 'elastic.out(1, 0.3)' }
    ]
  },
  hyperDimensional: {
    type: 'timeline',
    animations: [
      { opacity: 0, scale: 0.2, rotationX: 0, rotationY: 0, rotationZ: 0, x: 0, y: 0, z: -8000, filter: 'blur(100px) brightness(0.05) hue-rotate(0deg)', duration: 0 },
      { opacity: 0.3, scale: 0.5, rotationX: 180, rotationY: 180, rotationZ: 180, x: 100, y: 100, z: -5000, filter: 'blur(70px) brightness(0.3) hue-rotate(60deg)', duration: 0.12, ease: 'power2.out' },
      { opacity: 0.5, scale: 0.3, rotationX: 360, rotationY: -360, rotationZ: 360, x: -150, y: -150, z: -3000, filter: 'blur(90px) brightness(0.2) hue-rotate(120deg)', duration: 0.1, ease: 'power2.in' },
      { opacity: 0.8, scale: 1.5, rotationX: 540, rotationY: 540, rotationZ: 540, x: 80, y: 80, z: -1000, filter: 'blur(40px) brightness(1.5) hue-rotate(180deg)', duration: 0.08, ease: 'power2.out' },
      { opacity: 0.6, scale: 0.7, rotationX: 720, rotationY: -720, rotationZ: 720, x: -120, y: -120, z: -500, filter: 'blur(60px) brightness(0.8) hue-rotate(240deg)', duration: 0.06, ease: 'power2.in' },
      { opacity: 0.9, scale: 1.8, rotationX: 900, rotationY: 900, rotationZ: 900, x: 60, y: 60, z: -200, filter: 'blur(20px) brightness(2) hue-rotate(300deg)', duration: 0.05, ease: 'power2.out' },
      { opacity: 1, scale: 1.2, rotationX: 1080, rotationY: -1080, rotationZ: 1080, x: -40, y: -40, z: -50, filter: 'blur(10px) brightness(1.3) hue-rotate(360deg)', duration: 0.04, ease: 'power2.in' },
      { opacity: 1, scale: 1.05, rotationX: 1260, rotationY: 1260, rotationZ: 1260, x: 30, y: 30, z: 25, filter: 'blur(5px) brightness(1.2) hue-rotate(420deg)', duration: 0.04, ease: 'power2.out' },
      { opacity: 1, scale: 0.95, rotationX: 1440, rotationY: -1440, rotationZ: 1440, x: -20, y: -20, z: 15, filter: 'blur(3px) brightness(1.1) hue-rotate(480deg)', duration: 0.03, ease: 'power2.in' },
      { opacity: 1, scale: 1, rotationX: 1620, rotationY: 1620, rotationZ: 1620, x: 0, y: 0, z: 0, filter: 'blur(0px) brightness(1) hue-rotate(540deg)', duration: 0.05, ease: 'elastic.out(1, 0.3)' }
    ]
  },
  
  // VISVISE AI驱动动画 - 四大核心模块
  // 模块1: 智能骨骼绑定 - AI驱动的骨骼自然变换
  aiSkeletonBinding: {
    type: 'timeline',
    animations: [
      { opacity: 0, scale: 0.2, rotationX: 0, rotationY: 0, skewX: 0, skewY: 0, transformOrigin: '50% 50%', duration: 0 },
      { opacity: 0.3, scale: 0.4, rotationX: 15, rotationY: 15, skewX: 5, skewY: 3, filter: 'blur(20px)', duration: 0.08, ease: 'power2.out' },
      { opacity: 0.6, scale: 0.7, rotationX: 30, rotationY: -15, skewX: -3, skewY: 5, filter: 'blur(10px)', duration: 0.06, ease: 'power2.in' },
      { opacity: 0.8, scale: 1.1, rotationX: -10, rotationY: 25, skewX: 8, skewY: -2, filter: 'blur(5px)', duration: 0.05, ease: 'power2.out' },
      { opacity: 0.95, scale: 0.9, rotationX: 20, rotationY: -10, skewX: -4, skewY: 6, filter: 'blur(3px)', duration: 0.04, ease: 'power2.in' },
      { opacity: 1, scale: 1.05, rotationX: -5, rotationY: 8, skewX: 2, skewY: -3, filter: 'blur(1px)', duration: 0.04, ease: 'power2.out' },
      { opacity: 1, scale: 1, rotationX: 0, rotationY: 0, skewX: 0, skewY: 0, filter: 'blur(0px)', duration: 0.12, ease: 'elastic.out(1, 0.4)' }
    ]
  },
  
  // 模块2: 智能蒙皮 - AI驱动的蒙皮自然拉伸
  aiSkinning: {
    type: 'timeline',
    animations: [
      { opacity: 0, scale: 0.1, scaleX: 0.5, scaleY: 2, borderRadius: '50%', filter: 'blur(30px) brightness(0.3)', duration: 0 },
      { opacity: 0.25, scale: 0.3, scaleX: 1.5, scaleY: 1.2, borderRadius: '60%', filter: 'blur(20px) brightness(0.6)', duration: 0.1, ease: 'power2.out' },
      { opacity: 0.5, scale: 0.5, scaleX: 0.8, scaleY: 1.5, borderRadius: '40%', filter: 'blur(12px) brightness(0.9)', duration: 0.08, ease: 'power2.in' },
      { opacity: 0.7, scale: 0.8, scaleX: 1.3, scaleY: 0.9, borderRadius: '50%', filter: 'blur(6px) brightness(1.3)', duration: 0.06, ease: 'power2.out' },
      { opacity: 0.85, scale: 1.1, scaleX: 0.9, scaleY: 1.2, borderRadius: '45%', filter: 'blur(3px) brightness(1.6)', duration: 0.05, ease: 'power2.in' },
      { opacity: 1, scale: 0.95, scaleX: 1.05, scaleY: 0.95, borderRadius: '48%', filter: 'blur(1px) brightness(1.2)', duration: 0.04, ease: 'power2.out' },
      { opacity: 1, scale: 1, scaleX: 1, scaleY: 1, borderRadius: '20px', filter: 'blur(0px) brightness(1)', duration: 0.15, ease: 'elastic.out(1, 0.5)' }
    ]
  },
  
  // 模块3: 动画生成 - AI生成式的复杂运动轨迹
  aiAnimationGen: {
    type: 'timeline',
    animations: [
      { opacity: 0, scale: 0.01, x: -500, y: 300, rotation: 0, z: -3000, filter: 'blur(100px) brightness(0)', duration: 0 },
      { opacity: 0.2, scale: 0.1, x: -200, y: -200, rotation: 72, z: -2000, filter: 'blur(70px) brightness(0.3) hue-rotate(45deg)', duration: 0.08, ease: 'power2.out' },
      { opacity: 0.4, scale: 0.25, x: 300, y: 100, rotation: 144, z: -1000, filter: 'blur(45px) brightness(0.6) hue-rotate(90deg)', duration: 0.06, ease: 'power2.in' },
      { opacity: 0.6, scale: 0.5, x: -150, y: -150, rotation: 216, z: -500, filter: 'blur(25px) brightness(1) hue-rotate(135deg)', duration: 0.05, ease: 'power2.out' },
      { opacity: 0.75, scale: 0.8, x: 200, y: 50, rotation: 288, z: -200, filter: 'blur(12px) brightness(1.5) hue-rotate(180deg)', duration: 0.04, ease: 'power2.in' },
      { opacity: 0.9, scale: 1.1, x: -80, y: -40, rotation: 360, z: -80, filter: 'blur(5px) brightness(2) hue-rotate(225deg)', duration: 0.04, ease: 'power2.out' },
      { opacity: 1, scale: 0.9, x: 40, y: 20, rotation: 432, z: -30, filter: 'blur(2px) brightness(1.6) hue-rotate(270deg)', duration: 0.03, ease: 'power2.in' },
      { opacity: 1, scale: 1.05, x: -20, y: -10, rotation: 504, z: -10, filter: 'blur(1px) brightness(1.3) hue-rotate(315deg)', duration: 0.03, ease: 'power2.out' },
      { opacity: 1, scale: 1, x: 0, y: 0, rotation: 540, z: 0, filter: 'blur(0px) brightness(1) hue-rotate(360deg)', duration: 0.12, ease: 'elastic.out(1, 0.4)' }
    ]
  },
  
  // 模块4: 智能插帧 - AI平滑插值的流畅过渡
  aiInterpolation: {
    type: 'timeline',
    animations: [
      { opacity: 0, scale: 0.5, rotationX: 45, rotationY: 45, filter: 'blur(40px)', duration: 0 },
      { opacity: 0.15, scale: 0.55, rotationX: 46, rotationY: 46, filter: 'blur(35px)', duration: 0.04, ease: 'none' },
      { opacity: 0.3, scale: 0.6, rotationX: 47, rotationY: 47, filter: 'blur(30px)', duration: 0.04, ease: 'none' },
      { opacity: 0.45, scale: 0.65, rotationX: 48, rotationY: 48, filter: 'blur(25px)', duration: 0.04, ease: 'none' },
      { opacity: 0.6, scale: 0.7, rotationX: 49, rotationY: 49, filter: 'blur(20px)', duration: 0.04, ease: 'none' },
      { opacity: 0.75, scale: 0.75, rotationX: 50, rotationY: 50, filter: 'blur(15px)', duration: 0.04, ease: 'none' },
      { opacity: 0.9, scale: 0.8, rotationX: 51, rotationY: 51, filter: 'blur(10px)', duration: 0.04, ease: 'none' },
      { opacity: 1, scale: 0.85, rotationX: 52, rotationY: 52, filter: 'blur(5px)', duration: 0.04, ease: 'none' },
      { opacity: 1, scale: 0.9, rotationX: 53, rotationY: 53, filter: 'blur(3px)', duration: 0.04, ease: 'none' },
      { opacity: 1, scale: 0.95, rotationX: 54, rotationY: 54, filter: 'blur(1px)', duration: 0.04, ease: 'none' },
      { opacity: 1, scale: 1, rotationX: 0, rotationY: 0, filter: 'blur(0px)', duration: 0.2, ease: 'power2.out' }
    ]
  },
  
  // 综合应用: VISVISE全流程 - 四大模块融合应用
  visvisePipeline: {
    type: 'timeline',
    animations: [
      // 阶段1: 智能骨骼绑定 - 元素从无到有，骨骼结构形成
      { opacity: 0, scale: 0.01, rotationX: 0, rotationY: 0, rotationZ: 0, skewX: 0, skewY: 0, x: 0, y: 0, z: -8000, filter: 'blur(150px) brightness(0) contrast(0.2) hue-rotate(0deg)', duration: 0 },
      { opacity: 0.1, scale: 0.1, rotationX: 15, rotationY: 15, rotationZ: 15, skewX: 3, skewY: 2, x: 20, y: -20, z: -6000, filter: 'blur(120px) brightness(0.2) contrast(0.4) hue-rotate(36deg)', duration: 0.08, ease: 'power2.out' },
      { opacity: 0.25, scale: 0.2, rotationX: 30, rotationY: -15, rotationZ: 30, skewX: -2, skewY: 4, x: -30, y: 30, z: -4000, filter: 'blur(90px) brightness(0.4) contrast(0.6) hue-rotate(72deg)', duration: 0.06, ease: 'power2.in' },
      { opacity: 0.4, scale: 0.35, rotationX: -10, rotationY: 25, rotationZ: -15, skewX: 5, skewY: -3, x: 40, y: -40, z: -2500, filter: 'blur(60px) brightness(0.6) contrast(0.8) hue-rotate(108deg)', duration: 0.05, ease: 'power2.out' },
      { opacity: 0.55, scale: 0.5, rotationX: 20, rotationY: -10, rotationZ: 20, skewX: -3, skewY: 5, x: -25, y: 25, z: -1500, filter: 'blur(40px) brightness(0.8) contrast(1) hue-rotate(144deg)', duration: 0.04, ease: 'power2.in' },
      { opacity: 0.7, scale: 0.65, rotationX: -5, rotationY: 8, rotationZ: -5, skewX: 2, skewY: -2, x: 15, y: -15, z: -800, filter: 'blur(25px) brightness(1) contrast(1.2) hue-rotate(180deg)', duration: 0.04, ease: 'power2.out' },
      { opacity: 0.85, scale: 0.8, rotationX: 10, rotationY: -5, rotationZ: 10, skewX: -1, skewY: 3, x: -12, y: 12, z: -300, filter: 'blur(12px) brightness(1.2) contrast(1.4) hue-rotate(216deg)', duration: 0.03, ease: 'power2.in' },
      // 阶段2: 智能蒙皮 - 蒙皮拉伸变形
      { opacity: 0.95, scale: 0.9, scaleX: 1.3, scaleY: 0.8, rotationX: 0, rotationY: 0, rotationZ: 0, skewX: 0, skewY: 0, x: 8, y: -8, z: -100, filter: 'blur(6px) brightness(1.5) contrast(1.6) hue-rotate(252deg)', duration: 0.03, ease: 'power2.out' },
      { opacity: 1, scale: 1.1, scaleX: 0.8, scaleY: 1.4, x: -6, y: 6, z: -40, filter: 'blur(4px) brightness(1.8) contrast(1.8) hue-rotate(270deg)', duration: 0.025, ease: 'power2.in' },
      { opacity: 1, scale: 0.85, scaleX: 1.5, scaleY: 0.7, x: 5, y: -5, z: -15, filter: 'blur(3px) brightness(2) contrast(2) hue-rotate(288deg)', duration: 0.025, ease: 'power2.out' },
      { opacity: 1, scale: 1.2, scaleX: 0.75, scaleY: 1.5, x: -4, y: 4, z: -8, filter: 'blur(2px) brightness(2.2) contrast(2.2) hue-rotate(306deg)', duration: 0.02, ease: 'power2.in' },
      { opacity: 1, scale: 0.9, scaleX: 1.1, scaleY: 0.9, x: 3, y: -3, z: -3, filter: 'blur(1.5px) brightness(2.5) contrast(2.5) hue-rotate(324deg)', duration: 0.02, ease: 'power2.out' },
      // 阶段3: 动画生成 - AI生成复杂运动
      { opacity: 1, scale: 1.05, scaleX: 1, scaleY: 1, rotationX: 45, rotationY: 45, rotationZ: 45, x: -2, y: 2, z: 0, filter: 'blur(1px) brightness(2.8) contrast(2.8) hue-rotate(342deg)', duration: 0.02, ease: 'power2.in' },
      { opacity: 1, scale: 0.98, rotationX: 90, rotationY: 90, rotationZ: 90, x: 2, y: -2, z: 0, filter: 'blur(0.5px) brightness(3) contrast(3) hue-rotate(354deg)', duration: 0.02, ease: 'power2.out' },
      { opacity: 1, scale: 1.02, rotationX: 135, rotationY: 135, rotationZ: 135, x: -1.5, y: 1.5, z: 0, filter: 'blur(0.3px) brightness(3.2) contrast(3.2) hue-rotate(366deg)', duration: 0.015, ease: 'power2.in' },
      { opacity: 1, scale: 0.99, rotationX: 180, rotationY: 180, rotationZ: 180, x: 1, y: -1, z: 0, filter: 'blur(0.2px) brightness(3.5) contrast(3.5) hue-rotate(378deg)', duration: 0.015, ease: 'power2.out' },
      { opacity: 1, scale: 1.01, rotationX: 225, rotationY: 225, rotationZ: 225, x: -0.8, y: 0.8, z: 0, filter: 'blur(0.1px) brightness(3.8) contrast(3.8) hue-rotate(390deg)', duration: 0.01, ease: 'power2.in' },
      // 阶段4: 智能插帧 - AI平滑插值稳定
      { opacity: 1, scale: 0.998, rotationX: 268, rotationY: 268, rotationZ: 268, x: 0.5, y: -0.5, z: 0, filter: 'blur(0px) brightness(3.9) contrast(3.9) hue-rotate(396deg)', duration: 0.008, ease: 'none' },
      { opacity: 1, scale: 0.999, rotationX: 310, rotationY: 310, rotationZ: 310, x: 0.3, y: -0.3, z: 0, filter: 'blur(0px) brightness(3.95) contrast(3.95) hue-rotate(402deg)', duration: 0.008, ease: 'none' },
      { opacity: 1, scale: 1.001, rotationX: 352, rotationY: 352, rotationZ: 352, x: 0.15, y: -0.15, z: 0, filter: 'blur(0px) brightness(3.98) contrast(3.98) hue-rotate(408deg)', duration: 0.008, ease: 'none' },
      { opacity: 1, scale: 1.0005, rotationX: 394, rotationY: 394, rotationZ: 394, x: 0.08, y: -0.08, z: 0, filter: 'blur(0px) brightness(3.99) contrast(3.99) hue-rotate(414deg)', duration: 0.008, ease: 'none' },
      { opacity: 1, scale: 0.9995, rotationX: 436, rotationY: 436, rotationZ: 436, x: 0.04, y: -0.04, z: 0, filter: 'blur(0px) brightness(3.995) contrast(3.995) hue-rotate(420deg)', duration: 0.008, ease: 'none' },
      // 最终稳定: 完美着陆
      { opacity: 1, scale: 1.0002, rotationX: 478, rotationY: 478, rotationZ: 478, x: 0.02, y: -0.02, z: 0, filter: 'blur(0px) brightness(3.998) contrast(3.998) hue-rotate(426deg)', duration: 0.008, ease: 'none' },
      { opacity: 1, scale: 0.9998, rotationX: 520, rotationY: 520, rotationZ: 520, x: 0.01, y: -0.01, z: 0, filter: 'blur(0px) brightness(3.999) contrast(3.999) hue-rotate(432deg)', duration: 0.008, ease: 'none' },
      { opacity: 1, scale: 1, rotationX: 0, rotationY: 0, rotationZ: 0, x: 0, y: 0, z: 0, filter: 'blur(0px) brightness(1) contrast(1) hue-rotate(0deg)', duration: 0.25, ease: 'elastic.out(1, 0.3)' }
    ]
  },

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
  }
}

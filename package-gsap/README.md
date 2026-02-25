# @universal-animations/gsap

> Universal Animation Library - GSAP Edition
> 168+ professional GSAP timeline animations across 11 versions

[![NPM](https://img.shields.io/npm/v/@universal-animations/gsap)](https://www.npmjs.com/package/@universal-animations/gsap)
[![License](https://img.shields.io/npm/l/@universal-animations/gsap)](LICENSE)
[![Downloads](https://img.shields.io/npm/dw/@universal-animations/gsap)](https://www.npmjs.com/package/@universal-animations/gsap)

## 📦 Installation

```bash
npm install @universal-animations/gsap gsap
```

```bash
yarn add @universal-animations/gsap gsap
```

```bash
pnpm add @universal-animations/gsap gsap
```

## 🚀 Quick Start

```javascript
import gsap from 'gsap'
import { animations } from '@universal-animations/gsap'

// Apply an animation
const element = document.querySelector('.my-element')
const animation = animations.fadeIn

gsap.fromTo(
  element,
  animation.animations[0],
  animation.animations[1]
)
```

### React Example

```jsx
import { useEffect, useRef } from 'react'
import { animations } from '@universal-animations/gsap'
import gsap from 'gsap'

function FadeInComponent() {
  const ref = useRef(null)

  useEffect(() => {
    const animation = animations.fadeIn
    gsap.fromTo(
      ref.current,
      animation.animations[0],
      animation.animations[1]
    )
  }, [])

  return <div ref={ref}>Hello World</div>
}
```

### Vue Example

```vue
<template>
  <div ref="el">Hello World</div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { animations } from '@universal-animations/gsap'
import gsap from 'gsap'

const el = ref(null)

onMounted(() => {
  const animation = animations.fadeIn
  gsap.fromTo(
    el.value,
    animation.animations[0],
    animation.animations[1]
  )
})
</script>
```

## 📚 Animation Versions

### V1 Basic (19 animations)
- Fade effects, scale, rotate, bounce, flash, shake, pulse

### V2 Advanced (29 animations)
- Hologram, vortex, sine wave, origami, orbit, kaleidoscope, nebula, transformer, tidal wave, magic transform, DNA helix, quantum leap, flame burst, aurora, crystal refraction, black hole, impressionist, panorama, fractal expand, butterfly effect, time warp, supernova, parallax, omni transform, turbo, abstract art, energy field

### V3 Frontier (9 animations)
- Wormhole, hologram pro, quantum entanglement, neural network, metaverse, generative art, VR immersive, warp drive, deepfake

### V4 Cool Effects (20 animations)
- Rainbow explosion, neon glitch, particle burst, electric shock, liquid morph, cyberpunk rise, galaxy spiral, digital disintegrate, retro vaporwave, matrix rain, crystal prism, void collapse, plasma flow, holographic scan, quantum superposition, neon pulse, dimensional rift, ethereal materialize, radioactive glow

### V5 Extreme Impact (17 animations)
- Vortex maelstrom, hyperspace jump, supernova core, dimension cascade, quantum tunnel, orbital strike, plasma storm, gravity collapse, fusion reaction, chronal shift, cosmic rebirth, antimatter annihilation, warp speed, black hole singularity, stellar genesis, hyper dimensional, dimensional collapse

### VISVISE AI Pipeline (5 animations)
- AI skeleton binding, AI skinning, AI animation generation, AI interpolation, VISVISE full pipeline

### V6 Light Shadow (17 animations)
- Sun ray penetration, twilight scatter, neon pulsar, laser sweep, halo glow, mirror reflection, glass refraction, fire glimmer, aurora flow, stardust twinkle, light wave ripple, prism rainbow, magic aura, flash burst, glow diffusion, neon flow

### V7 Beyond Limits (18 animations)
- Spring entrance, stagger wave, 3D elastic fold, elastic deform, spring pulse, elastic spiral, elastic flip, elastic pendulum, elastic scale, elastic rotate, elastic bounce, elastic slide, elastic expand, elastic contract, elastic morph, elastic shake, elastic fly in, elastic pull out

### V8 Quantum Dimension (20 animations)
- Quantum materialize, dimensional phase, neuro pulse, hologram material, temporal flux, energy cascade, morph essence, resonance field, quantum entangle, dimension shift, plasma core, gravity wave, stardust form, neon flux, crystal matrix, void portal, laser construct, aero dynamic, liquid chrome, prism spectrum

### V9 Time-Space Illusion (20 animations)
- Time dilation, spatial fold, quantum superposition, temporal echo, dimensional fracture, void construct, ether manifest, chaos theory, entropic decay, string theory, multiverse, parallel world, timeline split, reality warp, illusion break, dreamscape, consciousness, memory trace, soul fragment, transcendence

### V10 Ultra-Visual Glitch (20 animations)
- Pixel glitch, chromatic aberration, digital noise, scanline distort, signal interference, data corruption, cyber glitch, static snow, pixel sort, bit rot, wave distortion, fragment explosion, particle swarm, digital dissolve, hologram flicker, signal decay, pixel morph, cyber pulse, digital fragment, matrix code

### V11 Explosion Destruction (16 animations)
- Nuclear explosion, glass shatter, crystal explosion, pixel burst, fragment shred, plasma detonation, energy shockwave, matter collapse, stellar supernova, disintegration, chain reaction, shockwave impact, debris scatter, plasma blast, quantum explosion, antimatter blast

## 🎨 Available Animations

```javascript
import { animations } from '@universal-animations/gsap'

// All animations are available with full configuration
console.log(Object.keys(animations))
// [
//   'fadeIn', 'fadeOut', 'fadeInDown', 'fadeOutDown', ... // V1
//   'hologram', 'vortexIn', 'sineWave', ... // V2
//   'wormhole', 'hologramPro', ... // V3
//   'rainbowExplosion', 'neonGlitch', ... // V4
//   'vortexMaelstrom', 'hyperspaceJump', ... // V5
//   'aiSkeletonBinding', 'aiSkinning', ... // AI Pipeline
//   'sunRayPenetration', 'twilightScatter', ... // V6
//   'springEntrance', 'staggerWave', ... // V7
//   'quantumMaterialize', 'dimensionalPhase', ... // V8
//   'timeDilation', 'spatialFold', ... // V9
//   'pixelGlitch', 'chromaticAberration', ... // V10
//   'nuclearExplosion', 'glassShatter', ... // V11
// ]
```

## 🔧 Animation Configuration

Each animation includes:

```javascript
{
  type: 'fromTo' | 'to' | 'from' | 'timeline',
  animations: [
    { opacity: 0 }, // from state
    { opacity: 1, duration: 0.8, ease: 'power2.out' } // to state
  ],
  stagger?: number, // for multiple elements
  delay?: number,
  repeat?: number,
  yoyo?: boolean
}
```

### Customization Example

```javascript
import { animations } from '@universal-animations/gsap'

// Clone and customize
const customAnimation = {
  ...animations.fadeIn,
  animations: [
    animations.fadeIn.animations[0],
    {
      ...animations.fadeIn.animations[1],
      duration: 2,
      ease: 'elastic.out(1, 0.3)'
    }
  ]
}

gsap.fromTo(element, customAnimation.animations[0], customAnimation.animations[1])
```

## 🎭 Stagger Animations

```javascript
import { animations } from '@universal-animations/gsap'

const elements = document.querySelectorAll('.item')
const animation = animations.staggerWave

gsap.fromTo(
  elements,
  animation.animations[0],
  {
    ...animation.animations[1],
    stagger: animation.stagger || 0.1
  }
)
```

## 🌐 Browser Support

Same as GSAP:
- All modern browsers (Chrome, Firefox, Safari, Edge)
- IE 11+ (with polyfills)

## 📊 Performance

All animations use GSAP's optimized timeline engine for:
- 60fps performance
- GPU-accelerated transforms
- Minimal reflows
- Efficient memory usage

## 🔗 Links

- [Online Demo](https://universal-animations.dev)
- [Documentation](https://docs.universal-animations.dev)
- [GSAP Documentation](https://gsap.com/docs/)
- [CSS Version](https://www.npmjs.com/package/@universal-animations/css)

## 📄 License

MIT License - Copyright (c) 2025 Universal Animation Library Contributors

## 🤝 Contributing

We welcome contributions! Please read our contributing guidelines first.

## ⭐ Support

If you like this project, please give us a star on GitHub!

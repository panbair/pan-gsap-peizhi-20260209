const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')

console.log('🚀 Building @universal-animations/gsap...')

const sourceConfig = path.resolve(__dirname, '../../src/views/page2/config.js')
const distDir = path.resolve(__dirname, '../dist')

console.log('📂 Source:', sourceConfig)
console.log('📂 Dist:', distDir)

// 检查源文件是否存在
if (!fs.existsSync(sourceConfig)) {
  console.error('❌ Error: Source config file not found:', sourceConfig)
  process.exit(1)
}

// 确保输出目录存在
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true })
}

// 读取配置文件
const configContent = fs.readFileSync(sourceConfig, 'utf8')

// 提取配置对象
const configMatch = configContent.match(/export const config = ({[\s\S]*?});/)

if (!configMatch) {
  console.error('❌ Error: Could not parse config file')
  process.exit(1)
}

// 创建导出文件
const indexJs = `/**
 * Universal Animation Library - GSAP Edition
 * 168+ professional GSAP timeline animations across 11 versions
 * Version: 2.0.0
 * License: MIT
 */

import gsap from 'gsap'

${configContent}

/**
 * Apply animation to element
 * @param {string} animationName - Name of the animation
 * @param {HTMLElement|HTMLElement[]|NodeList} target - Target element(s)
 * @param {Object} options - Additional GSAP options
 * @returns {gsap.core.Timeline|gsap.core.Tween}
 */
export function applyAnimation(animationName, target, options = {}) {
  const animation = config[animationName]

  if (!animation) {
    console.warn(\`Animation '\${animationName}' not found\`)
    return null
  }

  const targets = target instanceof NodeList || Array.isArray(target) ? target : [target]

  if (animation.type === 'timeline') {
    const timeline = gsap.timeline(options)

    if (animation.timelines) {
      animation.timelines.forEach((tl, index) => {
        tl.forEach((anim) => {
          const animTarget = anim.target || target
          timeline[anim.type || 'to'](animTarget, {
            ...anim,
            ...options
          })
        })
      })
    }

    return timeline
  }

  return gsap.fromTo(
    targets,
    animation.animations[0],
    {
      ...animation.animations[1],
      ...options
    }
  )
}

/**
 * Create stagger animation
 * @param {string} animationName - Name of the animation
 * @param {HTMLElement[]|NodeList} targets - Target elements
 * @param {number} staggerAmount - Stagger delay between elements
 * @param {Object} options - Additional GSAP options
 * @returns {gsap.core.Timeline}
 */
export function staggerAnimation(animationName, targets, staggerAmount = 0.1, options = {}) {
  const animation = config[animationName]

  if (!animation) {
    console.warn(\`Animation '\${animationName}' not found\`)
    return null
  }

  return gsap.fromTo(
    targets,
    animation.animations[0],
    {
      ...animation.animations[1],
      stagger: staggerAmount,
      ...options
    }
  )
}

/**
 * Get all available animation names
 * @returns {string[]}
 */
export function getAnimationNames() {
  return Object.keys(config)
}

/**
 * Get animation by version
 * @param {string} version - Version name (V1-V11)
 * @returns {Object}
 */
export function getAnimationsByVersion(version) {
  // Version mapping based on animationOptions.js
  const versionMap = {
    'V1': ['fadeIn', 'fadeOut', 'fadeInDown', 'fadeOutDown', 'fadeInUp', 'fadeOutUp', 'fadeInLeft', 'fadeOutLeft', 'fadeInRight', 'fadeOutRight', 'scaleIn', 'scaleOut', 'rotateIn', 'rotateOut', 'bounceIn', 'bounceOut', 'flash', 'shake', 'pulse'],
    'V2': ['hologram', 'vortexIn', 'sineWave', 'origami', 'orbitIn', 'kaleidoscope', 'nebulaExplosion', 'transformer', 'tidalWave', 'magicTransform', 'dnaHelix', 'quantumLeap', 'flameBurst', 'aurora', 'crystalRefraction', 'blackHole', 'impressionist', 'panorama', 'fractalExpand', 'butterflyEffect', 'timeWarp', 'supernova', 'parallax', 'omniTransform', 'turbo', 'abstractArt', 'energyField'],
    'V3': ['wormhole', 'hologramPro', 'quantumEntanglement', 'neuralNetwork', 'metaverse', 'generativeArt', 'vrImmersive', 'warpDrive', 'deepfake'],
    'V4': ['rainbowExplosion', 'neonGlitch', 'particleBurst', 'electricShock', 'liquidMorph', 'cyberpunkRise', 'galaxySpiral', 'digitalDisintegrate', 'retroVaporwave', 'matrixRain', 'crystalPrism', 'voidCollapse', 'plasmaFlow', 'holographicScan', 'quantumSuperposition', 'neonPulse', 'dimensionalRift', 'etherealMaterialize', 'radioactiveGlow'],
    'V5': ['vortexMaelstrom', 'hyperspaceJump', 'supernovaCore', 'dimensionCascade', 'quantumTunnel', 'orbitalStrike', 'plasmaStorm', 'gravityCollapse', 'fusionReaction', 'chronalShift', 'cosmicRebirth', 'antimatterAnnihilation', 'warpSpeed', 'blackholeSingularity', 'stellarGenesis', 'hyperDimensional', 'dimensionalCollapse'],
    'AI': ['aiSkeletonBinding', 'aiSkinning', 'aiAnimationGen', 'aiInterpolation', 'visvisePipeline'],
    'V6': ['sunRayPenetration', 'twilightScatter', 'neonPulsar', 'laserSweep', 'haloGlow', 'mirrorReflection', 'glassRefraction', 'fireGlimmer', 'auroraFlow', 'stardustTwinkle', 'lightWaveRipple', 'prismRainbow', 'magicAura', 'flashBurst', 'glowDiffusion', 'neonFlow'],
    'V7': ['springEntrance', 'staggerWave', 'elastic3DFold', 'elasticDeform', 'springPulse', 'elasticSpiral', 'elasticFlip', 'elasticPendulum', 'elasticScale', 'elasticRotate', 'elasticBounce', 'elasticSlide', 'elasticExpand', 'elasticContract', 'elasticMorph', 'elasticShake', 'elasticFlyIn', 'elasticPullOut'],
    'V8': ['quantumMaterialize', 'dimensionalPhase', 'neuroPulse', 'hologramMaterial', 'temporalFlux', 'energyCascade', 'morphEssence', 'resonanceField', 'quantumEntangle', 'dimensionShift', 'plasmaCore', 'gravityWave', 'stardustForm', 'neonFlux', 'crystalMatrix', 'voidPortal', 'laserConstruct', 'aeroDynamic', 'liquidChrome', 'prismSpectrum'],
    'V9': ['timeDilation', 'spatialFold', 'quantumSuperposition', 'temporalEcho', 'dimensionalFracture', 'voidConstruct', 'aetherManifest', 'chaosTheory', 'entropicDecay', 'stringTheory', 'multiverse', 'parallelWorld', 'timelineSplit', 'realityWarp', 'illusionBreak', 'dreamscape', 'consciousness', 'memoryTrace', 'soulFragment', 'transcendence'],
    'V10': ['pixelGlitch', 'chromaticAberration', 'digitalNoise', 'scanlineDistort', 'signalInterference', 'dataCorruption', 'cyberGlitch', 'staticSnow', 'pixelSort', 'bitRot', 'waveDistortion', 'fragmentExplosion', 'particleSwarm', 'digitalDissolve', 'hologramFlicker', 'signalDecay', 'pixelMorph', 'cyberPulse', 'digitalFragment', 'matrixCode'],
    'V11': ['nuclearExplosion', 'glassShatter', 'crystalExplosion', 'pixelBurst', 'fragmentShred', 'plasmaDetonation', 'energyShockwave', 'matterCollapse', 'stellarSupernova', 'disintegration', 'chainReaction', 'shockwaveImpact', 'debrisScatter', 'plasmaBlast', 'quantumExplosion', 'antiMatterBlast']
  }

  const names = versionMap[version] || []

  const result = {}
  names.forEach(name => {
    if (config[name]) {
      result[name] = config[name]
    }
  })

  return result
}

/**
 * Search animations by keyword
 * @param {string} keyword - Search keyword
 * @returns {Object}
 */
export function searchAnimations(keyword) {
  const result = {}
  const lowerKeyword = keyword.toLowerCase()

  Object.entries(config).forEach(([name, animation]) => {
    if (name.toLowerCase().includes(lowerKeyword)) {
      result[name] = animation
    }
  })

  return result
}

export { animations: config, gsap }
export default { animations: config, applyAnimation, staggerAnimation, getAnimationNames, getAnimationsByVersion, searchAnimations, gsap }
`

fs.writeFileSync(path.join(distDir, 'index.js'), indexJs)
console.log('✓ Created dist/index.js')

// Create ESM version
fs.writeFileSync(path.join(distDir, 'index.esm.js'), indexJs)
console.log('✓ Created dist/index.esm.js')

// Create TypeScript definitions
const typeDefs = `/**
 * Universal Animation Library - GSAP Edition
 * TypeScript Type Definitions
 * Version: 2.0.0
 */

import { gsap } from 'gsap'

export type AnimationType = 'fromTo' | 'to' | 'from' | 'timeline'

export interface AnimationConfig {
  type: AnimationType
  animations: gsap.TweenVars[]
  stagger?: number
  delay?: number
  repeat?: number
  yoyo?: boolean
  timelines?: TimelineAnimation[][]
}

export interface TimelineAnimation {
  type?: string
  target?: string | HTMLElement | HTMLElement[]
  [key: string]: any
}

export interface AnimationResult {
  animations: gsap.TweenVars[]
  stagger?: number
  delay?: number
  repeat?: number
  yoyo?: boolean
  timelines?: TimelineAnimation[][]
}

export interface Config {
  [animationName: string]: AnimationConfig
}

export declare const animations: Config

/**
 * Apply animation to element
 */
export declare function applyAnimation(
  animationName: string,
  target: HTMLElement | HTMLElement[] | NodeList,
  options?: gsap.TweenVars
): gsap.core.Timeline | gsap.core.Tween | null

/**
 * Create stagger animation
 */
export declare function staggerAnimation(
  animationName: string,
  targets: HTMLElement[] | NodeList,
  staggerAmount?: number,
  options?: gsap.TweenVars
): gsap.core.Timeline | null

/**
 * Get all available animation names
 */
export declare function getAnimationNames(): string[]

/**
 * Get animation by version
 */
export declare function getAnimationsByVersion(version: string): Config

/**
 * Search animations by keyword
 */
export declare function searchAnimations(keyword: string): Config

export declare const gsap: typeof gsap

export default {
  animations: Config,
  applyAnimation: typeof applyAnimation,
  staggerAnimation: typeof staggerAnimation,
  getAnimationNames: typeof getAnimationNames,
  getAnimationsByVersion: typeof getAnimationsByVersion,
  searchAnimations: typeof searchAnimations,
  gsap: typeof gsap
}
`

fs.writeFileSync(path.join(distDir, 'index.d.ts'), typeDefs)
console.log('✓ Created dist/index.d.ts')

console.log('\n✅ Build complete!')
console.log('\n📦 Output files:')
console.log('  - dist/index.js')
console.log('  - dist/index.esm.js')
console.log('  - dist/index.d.ts')

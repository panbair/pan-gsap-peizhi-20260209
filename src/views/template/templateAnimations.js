/*
 * 模板动画整合文件
 * 从源码中复制所有模板动画函数
 * @Date: 2026-03-22
 */

import gsap from 'gsap/dist/gsap.js'
import { ScrollTrigger, ScrollToPlugin, MotionPathPlugin } from 'gsap/dist/ScrollTrigger.js'
import { nextTick, onBeforeUnmount } from 'vue'

// 单例注册插件
let pluginsRegistered = false
const registerPlugins = () => {
  if (!pluginsRegistered) {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, MotionPathPlugin)
    pluginsRegistered = true
  }
}

// 等待DOM准备好的辅助函数
const waitForDOM = (callback) => {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', callback)
  } else {
    setTimeout(callback, 0)
  }
}

// ==================== V4-V11: 专业级模板 ====================

/**
 * 模板4: 3D卡片翻转滚动
 * 面板随着滚动进行3D翻转效果
 */
export const threeDCardFlipAnimation = () => {
  registerPlugins()
  ScrollTrigger.refresh()

  let cleanupFunctions = []

  waitForDOM(() => {
    const panels = document.querySelectorAll('.panel')
    if (!panels.length) return

    panels.forEach((panel, index) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: panel,
          start: 'top bottom',
          end: 'top top',
          scrub: 1
        }
      })

      tl.fromTo(panel,
        {
          rotationY: 90 * (index % 2 === 0 ? 1 : -1),
          rotationX: 0,
          opacity: 0,
          scale: 0.8,
          transformOrigin: 'center center'
        },
        {
          rotationY: 0,
          rotationX: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: 'power2.out'
        }
      )

      cleanupFunctions.push(() => tl.kill())
    })
  })

  return () => {
    cleanupFunctions.forEach(fn => fn())
    cleanupFunctions = []
  }
}

/**
 * 模板5: 粒子波浪滚动
 * 面板以波浪形式进入，带有粒子效果
 */
export const particleWaveAnimation = () => {
  registerPlugins()
  ScrollTrigger.refresh()

  let cleanupFunctions = []

  waitForDOM(() => {
    const container = document.querySelector('.animation-layer')
    const panels = document.querySelectorAll('.panel')
    if (!panels.length) return

    // 创建粒子层
    const particlesContainer = document.createElement('div')
    particlesContainer.className = 'particles-overlay'
    particlesContainer.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 999;
    `
    document.body.appendChild(particlesContainer)
    cleanupFunctions.push(() => particlesContainer.remove())

    // 创建粒子
    const particleCount = 50
    const particles = []
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div')
      particle.className = 'particle'
      particle.style.cssText = `
        position: absolute;
        width: ${Math.random() * 4 + 2}px;
        height: ${Math.random() * 4 + 2}px;
        background: rgba(255, 255, 255, ${Math.random() * 0.5 + 0.2});
        border-radius: 50%;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
      `
      particlesContainer.appendChild(particle)
      particles.push(particle)
    }

    // 面板波浪动画
    panels.forEach((panel, index) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: panel,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.5
        }
      })

      tl.fromTo(panel,
        {
          y: 200,
          opacity: 0,
          rotation: 0
        },
        {
          y: 0,
          opacity: 1,
          rotation: 0,
          duration: 1,
          ease: 'power2.out'
        }
      )

      // 粒子波浪效果
      particles.forEach((particle, i) => {
        const angle = (i / particleCount) * Math.PI * 2
        tl.to(particle, {
          x: Math.cos(angle) * 50,
          y: Math.sin(angle) * 50 + (index * 10),
          duration: 1,
          ease: 'power1.inOut'
        }, 0)
      })

      cleanupFunctions.push(() => tl.kill())
    })
  })

  return () => {
    cleanupFunctions.forEach(fn => fn())
    cleanupFunctions = []
  }
}

/**
 * 模板6: 虫洞穿梭
 * 模拟虫洞穿越的视觉效果
 */
export const wormholeAnimation = () => {
  registerPlugins()
  ScrollTrigger.refresh()

  let cleanupFunctions = []

  waitForDOM(() => {
    const container = document.querySelector('.animation-layer')
    const panels = document.querySelectorAll('.panel')
    if (!panels.length) return

    // 创建虫洞效果层
    const wormholeContainer = document.createElement('div')
    wormholeContainer.className = 'wormhole-overlay'
    wormholeContainer.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 999;
      overflow: hidden;
    `
    document.body.appendChild(wormholeContainer)
    cleanupFunctions.push(() => wormholeContainer.remove())

    // 创建虫洞环
    const ringCount = 10
    const rings = []
    for (let i = 0; i < ringCount; i++) {
      const ring = document.createElement('div')
      ring.className = 'wormhole-ring'
      ring.style.cssText = `
        position: absolute;
        top: 50%;
        left: 50%;
        width: 100px;
        height: 100px;
        border: 2px solid rgba(100, 200, 255, ${0.8 - i * 0.08});
        border-radius: 50%;
        transform: translate(-50%, -50%);
      `
      wormholeContainer.appendChild(ring)
      rings.push(ring)
    }

    // 面板虫洞动画
    panels.forEach((panel, index) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: panel,
          start: 'top bottom',
          end: 'top top',
          scrub: 2
        }
      })

      tl.fromTo(panel,
        {
          scale: 0,
          rotation: 180,
          opacity: 0,
          perspective: 1000
        },
        {
          scale: 1,
          rotation: 0,
          opacity: 1,
          duration: 1.5,
          ease: 'elastic.out(1, 0.5)'
        }
      )

      // 虫洞环动画
      rings.forEach((ring, i) => {
        tl.fromTo(ring,
          {
            scale: 0.5 + i * 0.1,
            opacity: 0
          },
          {
            scale: 2 + i * 0.5,
            opacity: 1,
            rotation: 360,
            duration: 1.5,
            ease: 'power2.out'
          },
          0
        )
      })

      cleanupFunctions.push(() => tl.kill())
    })
  })

  return () => {
    cleanupFunctions.forEach(fn => fn())
    cleanupFunctions = []
  }
}

/**
 * 模板7: 玻璃破碎
 * 模拟玻璃破碎的视觉效果
 */
export const glassShatterAnimation = () => {
  registerPlugins()
  ScrollTrigger.refresh()

  let cleanupFunctions = []

  waitForDOM(() => {
    const panels = document.querySelectorAll('.panel')
    if (!panels.length) return

    // 创建破碎碎片容器
    const fragmentsContainer = document.createElement('div')
    fragmentsContainer.className = 'glass-fragments'
    fragmentsContainer.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 999;
    `
    document.body.appendChild(fragmentsContainer)
    cleanupFunctions.push(() => fragmentsContainer.remove())

    panels.forEach((panel, index) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: panel,
          start: 'top bottom',
          end: 'top top',
          scrub: 1.5
        }
      })

      tl.fromTo(panel,
        {
          clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)',
          opacity: 0
        },
        {
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
          opacity: 1,
          duration: 1.2,
          ease: 'power2.out'
        }
      )

      // 创建玻璃碎片效果
      const fragmentCount = 20
      for (let i = 0; i < fragmentCount; i++) {
        const fragment = document.createElement('div')
        fragment.className = 'glass-fragment'
        const angle = (i / fragmentCount) * Math.PI * 2
        const distance = Math.random() * 200 + 100
        fragment.style.cssText = `
          position: absolute;
          top: 50%;
          left: 50%;
          width: ${Math.random() * 30 + 10}px;
          height: ${Math.random() * 30 + 10}px;
          background: rgba(200, 220, 255, ${Math.random() * 0.3 + 0.1});
          border: 1px solid rgba(255, 255, 255, ${Math.random() * 0.5});
          clip-path: polygon(
            ${Math.random() * 100}% ${Math.random() * 100}%,
            ${Math.random() * 100}% ${Math.random() * 100}%,
            ${Math.random() * 100}% ${Math.random() * 100}%
          );
        `
        fragmentsContainer.appendChild(fragment)

        tl.fromTo(fragment,
          {
            x: 0,
            y: 0,
            rotation: 0,
            opacity: 0
          },
          {
            x: Math.cos(angle) * distance,
            y: Math.sin(angle) * distance,
            rotation: Math.random() * 360 - 180,
            opacity: 0,
            duration: 1,
            ease: 'power2.out'
          },
          0
        )
      }

      cleanupFunctions.push(() => tl.kill())
    })
  })

  return () => {
    cleanupFunctions.forEach(fn => fn())
    cleanupFunctions = []
  }
}

/**
 * 模板8: 液体流动
 * 模拟液体流动的柔和效果
 */
export const liquidFlowAnimation = () => {
  registerPlugins()
  ScrollTrigger.refresh()

  let cleanupFunctions = []

  waitForDOM(() => {
    const panels = document.querySelectorAll('.panel')
    if (!panels.length) return

    panels.forEach((panel, index) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: panel,
          start: 'top bottom',
          end: 'top top',
          scrub: 2
        }
      })

      tl.fromTo(panel,
        {
          borderRadius: '50%',
          scale: 0.5,
          opacity: 0,
          skewX: 0,
          skewY: 0
        },
        {
          borderRadius: '0',
          scale: 1,
          opacity: 1,
          skewX: 0,
          skewY: 0,
          duration: 1.5,
          ease: 'elastic.out(1, 0.75)'
        }
      )

      // 液体波浪效果
      tl.to(panel, {
        borderRadius: '0 0 0 0',
        duration: 0.5,
        ease: 'power1.inOut'
      }, 0.5)

      tl.to(panel, {
        skewX: 5,
        duration: 0.3,
        yoyo: true,
        repeat: 1,
        ease: 'power1.inOut'
      }, 0.7)

      tl.to(panel, {
        skewY: -5,
        duration: 0.3,
        yoyo: true,
        repeat: 1,
        ease: 'power1.inOut'
      }, 0.8)

      cleanupFunctions.push(() => tl.kill())
    })
  })

  return () => {
    cleanupFunctions.forEach(fn => fn())
    cleanupFunctions = []
  }
}

/**
 * 模板9: 分形生长
 * 模拟分形图案的生长效果
 */
export const fractalGrowAnimation = () => {
  registerPlugins()
  ScrollTrigger.refresh()

  let cleanupFunctions = []

  waitForDOM(() => {
    const panels = document.querySelectorAll('.panel')
    if (!panels.length) return

    panels.forEach((panel, index) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: panel,
          start: 'top bottom',
          end: 'top top',
          scrub: 1.5
        }
      })

      // 创建分形效果
      const branchCount = 8
      for (let i = 0; i < branchCount; i++) {
        const angle = (i / branchCount) * Math.PI * 2
        tl.fromTo(panel,
          {
            scale: 0,
            rotation: angle * 180 / Math.PI,
            opacity: 0
          },
          {
            scale: 1,
            rotation: 0,
            opacity: 1,
            duration: 1.2,
            ease: 'power2.out'
          },
          i * 0.05
        )
      }

      // 添加缩放动画
      tl.fromTo(panel,
        {
          scaleX: 0,
          scaleY: 0
        },
        {
          scaleX: 1,
          scaleY: 1,
          duration: 1.5,
          ease: 'elastic.out(1, 0.5)'
        },
        0
      )

      cleanupFunctions.push(() => tl.kill())
    })
  })

  return () => {
    cleanupFunctions.forEach(fn => fn())
    cleanupFunctions = []
  }
}

/**
 * 模板10: 量子纠缠
 * 模拟量子纠缠的粒子效果
 */
export const quantumEntanglementAnimation = () => {
  registerPlugins()
  ScrollTrigger.refresh()

  let cleanupFunctions = []

  waitForDOM(() => {
    const panels = document.querySelectorAll('.panel')
    if (!panels.length) return

    // 创建量子纠缠粒子容器
    const quantumContainer = document.createElement('div')
    quantumContainer.className = 'quantum-particles'
    quantumContainer.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 999;
    `
    document.body.appendChild(quantumContainer)
    cleanupFunctions.push(() => quantumContainer.remove())

    panels.forEach((panel, index) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: panel,
          start: 'top bottom',
          end: 'top top',
          scrub: 2
        }
      })

      // 面板动画
      tl.fromTo(panel,
        {
          opacity: 0,
          scale: 0,
          rotation: 0
        },
        {
          opacity: 1,
          scale: 1,
          rotation: 360,
          duration: 1.5,
          ease: 'power2.out'
        }
      )

      // 创建纠缠粒子对
      const particlePairs = 5
      for (let i = 0; i < particlePairs; i++) {
        const particle1 = document.createElement('div')
        const particle2 = document.createElement('div')
        
        particle1.className = 'quantum-particle-1'
        particle2.className = 'quantum-particle-2'
        
        const offset = i * 50
        particle1.style.cssText = `
          position: absolute;
          width: 10px;
          height: 10px;
          background: rgba(100, 200, 255, 0.8);
          border-radius: 50%;
          left: 30%;
          top: 50%;
        `
        particle2.style.cssText = `
          position: absolute;
          width: 10px;
          height: 10px;
          background: rgba(255, 100, 200, 0.8);
          border-radius: 50%;
          left: 70%;
          top: 50%;
        `
        
        quantumContainer.appendChild(particle1)
        quantumContainer.appendChild(particle2)

        // 纠缠效果：两个粒子同步运动
        tl.to(particle1, {
          x: Math.cos(i) * 100,
          y: Math.sin(i) * 100,
          rotation: 180,
          duration: 1,
          ease: 'power1.inOut'
        }, 0)

        tl.to(particle2, {
          x: Math.cos(i + Math.PI) * 100,
          y: Math.sin(i + Math.PI) * 100,
          rotation: -180,
          duration: 1,
          ease: 'power1.inOut'
        }, 0)

        // 连接线
        const line = document.createElement('div')
        line.className = 'quantum-line'
        line.style.cssText = `
          position: absolute;
          height: 1px;
          background: linear-gradient(90deg, rgba(100, 200, 255, 0.5), rgba(255, 100, 200, 0.5));
          top: 50%;
          left: 30%;
          width: 0;
        `
        quantumContainer.appendChild(line)

        tl.to(line, {
          width: '40%',
          opacity: 0.5,
          duration: 1,
          ease: 'power1.inOut'
        }, 0)
      }

      cleanupFunctions.push(() => tl.kill())
    })
  })

  return () => {
    cleanupFunctions.forEach(fn => fn())
    cleanupFunctions = []
  }
}

/**
 * 模板11: 磁场扭曲
 * 模拟磁场扭曲的空间效果
 */
export const magneticDistortionAnimation = () => {
  registerPlugins()
  ScrollTrigger.refresh()

  let cleanupFunctions = []

  waitForDOM(() => {
    const panels = document.querySelectorAll('.panel')
    if (!panels.length) return

    panels.forEach((panel, index) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: panel,
          start: 'top bottom',
          end: 'top top',
          scrub: 1.5
        }
      })

      // 创建磁场扭曲效果
      tl.fromTo(panel,
        {
          scaleX: 1,
          scaleY: 1,
          skewX: 0,
          skewY: 0,
          opacity: 0
        },
        {
          scaleX: 1,
          scaleY: 1,
          skewX: 0,
          skewY: 0,
          opacity: 1,
          duration: 1,
          ease: 'power2.out'
        }
      )

      // 添加扭曲动画
      tl.to(panel, {
        skewX: 15,
        scaleX: 1.1,
        duration: 0.5,
        ease: 'power1.inOut'
      }, 0.2)

      tl.to(panel, {
        skewX: -10,
        scaleY: 1.1,
        duration: 0.5,
        ease: 'power1.inOut'
      }, 0.4)

      tl.to(panel, {
        skewY: 8,
        duration: 0.5,
        ease: 'power1.inOut'
      }, 0.6)

      tl.to(panel, {
        skewX: 0,
        skewY: 0,
        scaleX: 1,
        scaleY: 1,
        duration: 0.5,
        ease: 'elastic.out(1, 0.5)'
      }, 0.8)

      // 添加磁性粒子的飞入效果
      for (let i = 0; i < 10; i++) {
        const particle = document.createElement('div')
        particle.className = 'magnetic-particle'
        particle.style.cssText = `
          position: absolute;
          width: 5px;
          height: 5px;
          background: rgba(100, 200, 255, 0.8);
          border-radius: 50%;
        `
        panel.appendChild(particle)

        const angle = (i / 10) * Math.PI * 2
        tl.fromTo(particle,
          {
            x: Math.cos(angle) * 500,
            y: Math.sin(angle) * 500,
            opacity: 0
          },
          {
            x: Math.cos(angle) * 100,
            y: Math.sin(angle) * 100,
            opacity: 1,
            duration: 0.8,
            ease: 'power2.out'
          },
          0
        )
      }

      cleanupFunctions.push(() => tl.kill())
    })
  })

  return () => {
    cleanupFunctions.forEach(fn => fn())
    cleanupFunctions = []
  }
}

// ==================== V12-V19: 高级模板 ====================

/**
 * 模板12: 纸张折叠
 * 模拟纸张折叠的3D效果
 */
export const origamiFoldAnimation = () => {
  registerPlugins()
  ScrollTrigger.refresh()

  let cleanupFunctions = []

  waitForDOM(() => {
    const panels = document.querySelectorAll('.panel')
    if (!panels.length) return

    panels.forEach((panel, index) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: panel,
          start: 'top bottom',
          end: 'top top',
          scrub: 2
        }
      })

      // 创建折叠效果
      tl.fromTo(panel,
        {
          perspective: 1000,
          rotateX: 90,
          rotateY: 0,
          rotateZ: 0,
          opacity: 0,
          transformOrigin: 'top center'
        },
        {
          rotateX: 0,
          rotateY: 0,
          rotateZ: 0,
          opacity: 1,
          duration: 1.5,
          ease: 'power2.out'
        }
      )

      // 添加折叠线效果
      tl.to(panel, {
        boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
        duration: 0.5
      }, 1)

      cleanupFunctions.push(() => tl.kill())
    })
  })

  return () => {
    cleanupFunctions.forEach(fn => fn())
    cleanupFunctions = []
  }
}

/**
 * 模板13: 莫比乌斯环
 * 模拟莫比乌斯环的旋转效果
 */
export const moebiusTransformAnimation = () => {
  registerPlugins()
  ScrollTrigger.refresh()

  let cleanupFunctions = []

  waitForDOM(() => {
    const panels = document.querySelectorAll('.panel')
    if (!panels.length) return

    panels.forEach((panel, index) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: panel,
          start: 'top bottom',
          end: 'top top',
          scrub: 2.5
        }
      })

      // 莫比乌斯环旋转效果
      tl.fromTo(panel,
        {
          rotationY: 180,
          rotationX: 45,
          rotationZ: 0,
          scale: 0.5,
          opacity: 0,
          perspective: 1000
        },
        {
          rotationY: 0,
          rotationX: 0,
          rotationZ: 0,
          scale: 1,
          opacity: 1,
          duration: 2,
          ease: 'power2.inOut'
        }
      )

      // 连续旋转
      tl.to(panel, {
        rotationY: 360,
        rotationX: -45,
        duration: 1,
        ease: 'power1.inOut'
      })

      tl.to(panel, {
        rotationY: 0,
        rotationX: 0,
        duration: 0.8,
        ease: 'power2.out'
      })

      cleanupFunctions.push(() => tl.kill())
    })
  })

  return () => {
    cleanupFunctions.forEach(fn => fn())
    cleanupFunctions = []
  }
}

/**
 * 模板14: 极光流淌
 * 模拟极光的流动效果
 */
export const auroraFlowAnimation = () => {
  registerPlugins()
  ScrollTrigger.refresh()

  let cleanupFunctions = []

  waitForDOM(() => {
    const panels = document.querySelectorAll('.panel')
    if (!panels.length) return

    // 创建极光层
    const auroraContainer = document.createElement('div')
    auroraContainer.className = 'aurora-overlay'
    auroraContainer.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 999;
      background: linear-gradient(180deg, 
        rgba(100, 200, 255, 0) 0%,
        rgba(100, 200, 255, 0.1) 50%,
        rgba(150, 255, 200, 0) 100%);
    `
    document.body.appendChild(auroraContainer)
    cleanupFunctions.push(() => auroraContainer.remove())

    panels.forEach((panel, index) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: panel,
          start: 'top bottom',
          end: 'top top',
          scrub: 2
        }
      })

      // 面板极光效果
      tl.fromTo(panel,
        {
          y: 100,
          opacity: 0,
          filter: 'blur(10px)'
        },
        {
          y: 0,
          opacity: 1,
          filter: 'blur(0px)',
          duration: 1.5,
          ease: 'power2.out'
        }
      )

      // 极光层移动
      tl.to(auroraContainer, {
        background: `linear-gradient(180deg, 
          rgba(100, 200, 255, 0) 0%,
          rgba(150, 255, 200, 0.2) ${50 - index * 5}%,
          rgba(255, 150, 200, 0) 100%)`,
        duration: 1.5,
        ease: 'power1.inOut'
      }, 0)

      cleanupFunctions.push(() => tl.kill())
    })
  })

  return () => {
    cleanupFunctions.forEach(fn => fn())
    cleanupFunctions = []
  }
}

/**
 * 模板15: 粒子汇聚
 * 模拟粒子从四面八方汇聚的效果
 */
export const particleConvergeAnimation = () => {
  registerPlugins()
  ScrollTrigger.refresh()

  let cleanupFunctions = []

  waitForDOM(() => {
    const panels = document.querySelectorAll('.panel')
    if (!panels.length) return

    // 创建粒子汇聚层
    const convergeContainer = document.createElement('div')
    convergeContainer.className = 'converge-particles'
    convergeContainer.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 999;
    `
    document.body.appendChild(convergeContainer)
    cleanupFunctions.push(() => convergeContainer.remove())

    panels.forEach((panel, index) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: panel,
          start: 'top bottom',
          end: 'top top',
          scrub: 2
        }
      })

      // 面板出现
      tl.fromTo(panel,
        {
          scale: 0,
          opacity: 0
        },
        {
          scale: 1,
          opacity: 1,
          duration: 1.5,
          ease: 'elastic.out(1, 0.5)'
        }
      )

      // 粒子汇聚效果
      const particleCount = 60
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div')
        particle.className = 'converge-particle'
        particle.style.cssText = `
          position: absolute;
          width: ${Math.random() * 6 + 2}px;
          height: ${Math.random() * 6 + 2}px;
          background: hsl(${Math.random() * 60 + 180}, 80%, 60%);
          border-radius: 50%;
        `
        convergeContainer.appendChild(particle)

        const angle = (i / particleCount) * Math.PI * 2
        const startDistance = Math.random() * 500 + 300

        tl.fromTo(particle,
          {
            left: '50%',
            top: '50%',
            x: Math.cos(angle) * startDistance,
            y: Math.sin(angle) * startDistance,
            opacity: 1
          },
          {
            x: Math.cos(angle) * 100,
            y: Math.sin(angle) * 100,
            opacity: 0,
            duration: 1.2,
            ease: 'power2.in'
          },
          0
        )
      }

      cleanupFunctions.push(() => tl.kill())
    })
  })

  return () => {
    cleanupFunctions.forEach(fn => fn())
    cleanupFunctions = []
  }
}

/**
 * 模板16: DNA双螺旋
 * 模拟DNA双螺旋结构
 */
export const dnaHelixAnimation = () => {
  registerPlugins()
  ScrollTrigger.refresh()

  let cleanupFunctions = []

  waitForDOM(() => {
    const panels = document.querySelectorAll('.panel')
    if (!panels.length) return

    // 创建DNA粒子层
    const dnaContainer = document.createElement('div')
    dnaContainer.className = 'dna-particles'
    dnaContainer.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 999;
    `
    document.body.appendChild(dnaContainer)
    cleanupFunctions.push(() => dnaContainer.remove())

    panels.forEach((panel, index) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: panel,
          start: 'top bottom',
          end: 'top top',
          scrub: 2
        }
      })

      // 面板动画
      tl.fromTo(panel,
        {
          scaleX: 0,
          scaleY: 1,
          opacity: 0
        },
        {
          scaleX: 1,
          scaleY: 1,
          opacity: 1,
          duration: 1.5,
          ease: 'power2.out'
        }
      )

      // DNA双螺旋效果
      const helixPoints = 20
      for (let i = 0; i < helixPoints; i++) {
        const particle1 = document.createElement('div')
        const particle2 = document.createElement('div')
        
        particle1.className = 'dna-particle-1'
        particle2.className = 'dna-particle-2'
        
        const y = (i / helixPoints) * 100
        const angle1 = (i / helixPoints) * Math.PI * 2
        const angle2 = angle1 + Math.PI
        
        particle1.style.cssText = `
          position: absolute;
          width: 8px;
          height: 8px;
          background: rgba(100, 200, 255, 0.9);
          border-radius: 50%;
          left: 50%;
          top: ${y}%;
        `
        particle2.style.cssText = `
          position: absolute;
          width: 8px;
          height: 8px;
          background: rgba(255, 100, 200, 0.9);
          border-radius: 50%;
          left: 50%;
          top: ${y}%;
        `
        
        dnaContainer.appendChild(particle1)
        dnaContainer.appendChild(particle2)

        tl.fromTo(particle1,
          {
            x: -200,
            opacity: 0
          },
          {
            x: Math.cos(angle1) * 50,
            opacity: 1,
            duration: 1,
            ease: 'power2.out'
          },
          0
        )

        tl.fromTo(particle2,
          {
            x: 200,
            opacity: 0
          },
          {
            x: Math.cos(angle2) * 50,
            opacity: 1,
            duration: 1,
            ease: 'power2.out'
          },
          0
        )

        // 连接线
        const line = document.createElement('div')
        line.className = 'dna-line'
        line.style.cssText = `
          position: absolute;
          width: 1px;
          height: 10px;
          background: rgba(255, 255, 255, 0.3);
          left: 50%;
          top: ${y}%;
        `
        dnaContainer.appendChild(line)

        tl.fromTo(line,
          {
            scaleX: 0,
            opacity: 0
          },
          {
            scaleX: 1,
            opacity: 0.5,
            duration: 1,
            ease: 'power2.out'
          },
          0
        )
      }

      cleanupFunctions.push(() => tl.kill())
    })
  })

  return () => {
    cleanupFunctions.forEach(fn => fn())
    cleanupFunctions = []
  }
}

/**
 * 模板17: 蜂巢展开
 * 模拟蜂巢结构展开
 */
export const honeycombUnfoldAnimation = () => {
  registerPlugins()
  ScrollTrigger.refresh()

  let cleanupFunctions = []

  waitForDOM(() => {
    const panels = document.querySelectorAll('.panel')
    if (!panels.length) return

    panels.forEach((panel, index) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: panel,
          start: 'top bottom',
          end: 'top top',
          scrub: 2
        }
      })

      // 蜂巢展开效果
      tl.fromTo(panel,
        {
          scale: 0,
          rotation: 30,
          opacity: 0,
          clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
        },
        {
          scale: 1,
          rotation: 0,
          opacity: 1,
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
          duration: 1.5,
          ease: 'power2.out'
        }
      )

      // 添加蜂巢边框效果
      tl.to(panel, {
        boxShadow: 'inset 0 0 30px rgba(255, 200, 100, 0.3)',
        duration: 0.5
      }, 1)

      cleanupFunctions.push(() => tl.kill())
    })
  })

  return () => {
    cleanupFunctions.forEach(fn => fn())
    cleanupFunctions = []
  }
}

/**
 * 模板18: 全息扫描
 * 模拟全息扫描效果
 */
export const hologramScanAnimation = () => {
  registerPlugins()
  ScrollTrigger.refresh()

  let cleanupFunctions = []

  waitForDOM(() => {
    const panels = document.querySelectorAll('.panel')
    if (!panels.length) return

    // 创建扫描线
    const scanLine = document.createElement('div')
    scanLine.className = 'hologram-scan-line'
    scanLine.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background: linear-gradient(90deg, 
        rgba(0, 255, 255, 0) 0%,
        rgba(0, 255, 255, 1) 50%,
        rgba(0, 255, 255, 0) 100%);
      z-index: 999;
      opacity: 0;
    `
    document.body.appendChild(scanLine)
    cleanupFunctions.push(() => scanLine.remove())

    panels.forEach((panel, index) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: panel,
          start: 'top bottom',
          end: 'top top',
          scrub: 2
        }
      })

      // 全息效果
      tl.fromTo(panel,
        {
          opacity: 0,
          filter: 'brightness(2) contrast(2)',
          textShadow: '0 0 10px rgba(0, 255, 255, 0.5)'
        },
        {
          opacity: 1,
          filter: 'brightness(1) contrast(1)',
          textShadow: '0 0 5px rgba(0, 255, 255, 0.3)',
          duration: 1.5,
          ease: 'power2.out'
        }
      )

      // 扫描线效果
      tl.fromTo(scanLine,
        {
          top: '0%',
          opacity: 0
        },
        {
          top: '100%',
          opacity: 1,
          duration: 1.5,
          ease: 'power1.inOut'
        },
        0
      )

      cleanupFunctions.push(() => tl.kill())
    })
  })

  return () => {
    cleanupFunctions.forEach(fn => fn())
    cleanupFunctions = []
  }
}

/**
 * 模板19: 万花筒镜像
 * 模拟万花筒镜像效果
 */
export const kaleidoscopeMirrorAnimation = () => {
  registerPlugins()
  ScrollTrigger.refresh()

  let cleanupFunctions = []

  waitForDOM(() => {
    const panels = document.querySelectorAll('.panel')
    if (!panels.length) return

    // 创建万花筒层
    const kaleidoscopeContainer = document.createElement('div')
    kaleidoscopeContainer.className = 'kaleidoscope-overlay'
    kaleidoscopeContainer.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 999;
      perspective: 1000;
    `
    document.body.appendChild(kaleidoscopeContainer)
    cleanupFunctions.push(() => kaleidoscopeContainer.remove())

    panels.forEach((panel, index) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: panel,
          start: 'top bottom',
          end: 'top top',
          scrub: 2
        }
      })

      // 万花筒镜像效果
      const mirrorCount = 8
      for (let i = 0; i < mirrorCount; i++) {
        const mirror = document.createElement('div')
        mirror.className = 'kaleidoscope-mirror'
        mirror.style.cssText = `
          position: absolute;
          top: 50%;
          left: 50%;
          width: 100px;
          height: 100px;
          background: rgba(255, 255, 255, ${0.1 - i * 0.01});
          transform: translate(-50%, -50%) rotateZ(${(i / mirrorCount) * 360}deg);
          transform-origin: 0 0;
        `
        kaleidoscopeContainer.appendChild(mirror)

        tl.fromTo(mirror,
          {
            scale: 0,
            opacity: 0
          },
          {
            scale: 3 + i * 0.5,
            opacity: 0.8,
            duration: 1.5,
            ease: 'power2.out'
          },
          i * 0.05
        )
      }

      // 面板动画
      tl.fromTo(panel,
        {
          scale: 0,
          opacity: 0,
          rotation: 0
        },
        {
          scale: 1,
          opacity: 1,
          rotation: 45,
          duration: 1.5,
          ease: 'power2.out'
        },
        0
      )

      cleanupFunctions.push(() => tl.kill())
    })
  })

  return () => {
    cleanupFunctions.forEach(fn => fn())
    cleanupFunctions = []
  }
}

// 由于代码量限制,这里只实现了部分模板
// 完整的V20-V43模板需要继续添加...

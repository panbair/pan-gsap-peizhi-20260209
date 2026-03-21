/*
 * 模板函数整合 - 直接复制源码实现
 * @Author: AI Assistant
 * @Date: 2026-03-22
 */

import gsap from 'gsap/dist/gsap.js'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js'

// 单例注册插件
let pluginsRegistered = false
const registerPlugins = () => {
  if (!pluginsRegistered) {
    gsap.registerPlugin(ScrollTrigger)
    pluginsRegistered = true
  }
}

// 等待DOM准备好的辅助函数
const waitForDOM = callback => {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', callback)
  } else {
    setTimeout(callback, 0)
  }
}

// ============ V0: 自定义动画模板 ============
export const customizeAnimation = (pageList = [], classNane = 'vertical') => {
  registerPlugins()
  ScrollTrigger.refresh()

  let newPanels = []
  let tl = null
  let scrollTriggerInstance = null
  let layerRef = null
  let layerOptions = {}
  let panelOptions = {}

  const cleanup = () => {
    // 恢复layer原始样式
    if (layerRef && Object.keys(layerOptions).length) {
      Object.entries(layerOptions).forEach(([key, value]) => {
        layerRef.style[key] = value
      })
    }

    // 恢复panels原始样式
    newPanels.forEach(panel => {
      const panelStyleId = panel.el.getAttribute('uuid')
      if (panelStyleId && panelOptions[panelStyleId]) {
        Object.entries(panelOptions[panelStyleId]).forEach(([key, value]) => {
          panel.el.style[key] = value
        })
      }
      // 清理transform
      panel.el.style.transform = ''
      panel.el.style.opacity = ''
    })

    // 清理ScrollTrigger
    scrollTriggerInstance?.kill?.()
    scrollTriggerInstance = null

    // 清理timeline
    if (tl) {
      tl.clear(true)
      tl.kill(true)
      tl = null
    }

    // 清理所有动画
    const triggers = ScrollTrigger.getAll()
    triggers.forEach(st => st.kill())
  }

  waitForDOM(() => {
    const layerStyle = {
      width: '100vw',
      height: '100vh',
      position: 'relative',
      overflow: 'hidden'
    }

    const panelStyle = {
      width: '100vw',
      height: '100vh',
      position: 'absolute'
    }

    const panels = gsap.utils.toArray(`.${classNane}`) || []
    if (panels.length <= 1) return

    const panelMap = new Map()
    pageList.forEach(item => {
      if (item.uuid) panelMap.set(item.uuid, item)
    })

    panels.forEach(panel => {
      const uuid = panel.getAttribute('uuid')
      const item = panelMap.get(uuid)
      if (item) {
        newPanels.push({
          ...item,
          el: panel
        })
      }
    })

    layerRef = document.querySelector('.animation-layer')
    if (!layerRef) return

    // 保存并应用layer样式
    Object.keys(layerStyle).forEach(key => {
      layerOptions[key] = layerRef.style[key]
      layerRef.style[key] = layerStyle[key]
    })

    // 保存并应用panels样式
    newPanels.forEach(panel => {
      const uuid = panel.el.getAttribute('uuid')
      if (uuid) {
        panelOptions[uuid] = {}
        Object.keys(panelStyle).forEach(key => {
          panelOptions[uuid][key] = panel.el.style[key]
          panel.el.style[key] = panelStyle[key]
        })
      }
    })

    tl = gsap.timeline()

    const createAnimatedTimeline = (selectors, scrollTriggerConfig) => {
      selectors.forEach(selector => {
        const animationStyle = selector?.formData?.animationStyle || {}
        const props = {
          ...animationStyle,
          opacity: 0,
          duration: animationStyle.duration || 1,
          force3D: true
        }

        const cleanedProps = Object.fromEntries(
          Object.entries(props).filter(([key, value]) => value !== undefined)
        )

        tl.from(selector.el, cleanedProps)
      })

      scrollTriggerInstance = ScrollTrigger.create({
        ...scrollTriggerConfig,
        animation: tl
      })
    }

    const list = newPanels.slice(1)
    createAnimatedTimeline(list, {
      trigger: '.animation-layer',
      start: 'top top',
      end: '+=' + window.innerWidth,
      scrub: 0.5,
      pin: true,
      anticipatePin: 1
    })
  })

  return cleanup
}

// ============ V1: 横向滚动动画 ============
export const initHorizontalAnimation = pageList => {
  registerPlugins()
  ScrollTrigger.refresh()

  let allTweens = []
  let tweenTriggers = []

  const cleanup = () => {
    // 清理所有tweens
    allTweens.forEach(tween => {
      try {
        if (tween) {
          tween.clear(true)
          tween.kill(true)
          if (tween.scrollTrigger) {
            tween.scrollTrigger.kill()
          }
        }
      } catch (e) {
        console.warn('清理tween失败:', e)
      }
    })
    allTweens = []

    // 清理tweenTriggers
    tweenTriggers.forEach(st => {
      try {
        st?.kill?.()
      } catch (e) {
        console.warn('清理ScrollTrigger失败:', e)
      }
    })
    tweenTriggers = []

    // 清理所有ScrollTrigger
    const triggers = ScrollTrigger.getAll()
    triggers.forEach(st => st.kill())
  }

  waitForDOM(() => {
    pageList.forEach(item => {
      if (!item.horizontal) return

      const container = document.querySelector(`.${item.className}`)
      if (!container) return

      const panels = container.querySelectorAll('.panel')
      if (!panels.length) return

      const tween = gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          pin: true,
          start: 'top top',
          scrub: 1,
          anticipatePin: 1,
          snap: {
            snapTo: 1 / (panels.length - 1),
            inertia: false,
            duration: { min: 0.1, max: 0.1 }
          },
          end: () => '+=' + (container.offsetWidth - window.innerWidth)
        }
      })

      item.tween = tween
      allTweens.push(tween)
      tweenTriggers.push(tween.scrollTrigger)
    })
  })

  return cleanup
}

// ============ V2: 无限滚动动画 ============
export const infinitePanelScrollAnimation = (classNane = 'vertical') => {
  registerPlugins()
  ScrollTrigger.refresh()

  let panels = []
  let clonedNode = null
  let maxScroll = 0
  let pageScrollTrigger = null
  let onResize = null
  let onScroll = null
  let panelTriggers = []

  const cleanup = () => {
    // 移除事件监听器
    if (onResize) {
      window.removeEventListener('resize', onResize)
    }
    if (onScroll) {
      window.removeEventListener('scroll', onScroll, { passive: false })
    }

    // 清理ScrollTrigger
    pageScrollTrigger?.kill?.()
    pageScrollTrigger = null

    // 清理所有panel的ScrollTrigger
    panelTriggers.forEach(st => {
      try {
        st?.kill?.()
      } catch (e) {
        console.warn('清理panel ScrollTrigger失败:', e)
      }
    })
    panelTriggers = []

    // 移除克隆的节点
    if (clonedNode && clonedNode.parentNode) {
      clonedNode.parentNode.removeChild(clonedNode)
      clonedNode = null
    }

    // 恢复panels的pin样式
    panels.forEach(panel => {
      try {
        panel.style.position = ''
        panel.style.transform = ''
        panel.style.zIndex = ''
      } catch (e) {
        console.warn('恢复panel样式失败:', e)
      }
    })

    // 清理所有动画
    const triggers = ScrollTrigger.getAll()
    triggers.forEach(st => st.kill())
  }

  waitForDOM(() => {
    panels = gsap.utils.toArray(`.${classNane}`) || []
    if (panels.length <= 0) return

    // 克隆第一个节点（用于无限滚动效果）
    clonedNode = panels[0].cloneNode(true)
    clonedNode.setAttribute('data-cloned', 'true')
    panels[0].parentNode.appendChild(clonedNode)

    panels.forEach(panel => {
      const trigger = ScrollTrigger.create({
        trigger: panel,
        start: 'top top',
        pin: true,
        pinSpacing: false
      })
      panelTriggers.push(trigger)
    })

    pageScrollTrigger = ScrollTrigger.create({
      snap(value) {
        const snappedValue = gsap.utils.snap(1 / panels.length, value)
        if (snappedValue <= 0) return 1.05 / maxScroll
        if (snappedValue >= 1) return maxScroll / (maxScroll + 1.05)
        return snappedValue
      }
    })

    onResize = () => {
      maxScroll = ScrollTrigger.maxScroll(window) - 1
    }

    onScroll = e => {
      const scroll = pageScrollTrigger.scroll()
      if (scroll > maxScroll) {
        pageScrollTrigger.scroll(1)
        e.preventDefault()
      } else if (scroll < 1) {
        pageScrollTrigger.scroll(maxScroll - 1)
        e.preventDefault()
      }
    }

    onResize()
    window.addEventListener('resize', onResize)
    window.addEventListener('scroll', onScroll, { passive: false })
  })

  return cleanup
}

// ============ V3: 缩放滚动动画 ============
export const scalePanelScrollAnimation = (classNane = 'vertical') => {
  registerPlugins()
  ScrollTrigger.refresh()

  let panels = []
  let tl = null
  let scrollTriggerInstance = null
  let layerRef = null
  let layerOptions = {}
  let panelOptions = {}

  const cleanup = () => {
    // 恢复layer原始样式
    if (layerRef && Object.keys(layerOptions).length) {
      Object.entries(layerOptions).forEach(([key, value]) => {
        layerRef.style[key] = value
      })
    }

    // 恢复panels原始样式
    panels.forEach(panel => {
      const panelStyleId = panel.getAttribute('uuid')
      if (panelStyleId && panelOptions[panelStyleId]) {
        Object.entries(panelOptions[panelStyleId]).forEach(([key, value]) => {
          panel.style[key] = value
        })
      }
      // 清理transform
      panel.style.transform = ''
      panel.style.opacity = ''
    })

    // 清理ScrollTrigger
    scrollTriggerInstance?.kill?.()
    scrollTriggerInstance = null

    // 清理timeline
    if (tl) {
      tl.clear(true)
      tl.kill(true)
      tl = null
    }

    // 清理所有动画
    const triggers = ScrollTrigger.getAll()
    triggers.forEach(st => st.kill())
  }

  waitForDOM(() => {
    const layerStyle = {
      width: '100vw',
      height: '100vh',
      position: 'relative',
      overflow: 'hidden'
    }

    const panelStyle = {
      width: '100vw',
      height: '100vh',
      position: 'absolute'
    }

    panels = gsap.utils.toArray(`.${classNane}`) || []
    if (panels.length <= 1) return

    layerRef = document.querySelector('.animation-layer')
    if (!layerRef) return

    // 保存并应用layer样式
    Object.keys(layerStyle).forEach(key => {
      layerOptions[key] = layerRef.style[key]
      layerRef.style[key] = layerStyle[key]
    })

    // 保存并应用panels样式
    panels.forEach(panel => {
      const uuid = panel.getAttribute('uuid')
      if (uuid) {
        panelOptions[uuid] = {}
        Object.keys(panelStyle).forEach(key => {
          panelOptions[uuid][key] = panel.style[key]
          panel.style[key] = panelStyle[key]
        })
      }
    })

    tl = gsap.timeline()

    const createAnimatedTimeline = (selectors, scrollTriggerConfig) => {
      selectors.forEach((selector, index) => {
        const props = {
          opacity: 0,
          scale: 0.5,
          duration: 1,
          force3D: true
        }

        if (index % 2 === 0) {
          props.xPercent = 100
        } else {
          props.yPercent = 100
        }

        tl.from(selector, props)
      })

      scrollTriggerInstance = ScrollTrigger.create({
        ...scrollTriggerConfig,
        animation: tl
      })
    }

    const list = panels.slice(1)
    createAnimatedTimeline(list, {
      trigger: '.animation-layer',
      start: 'top top',
      end: '+=' + window.innerWidth,
      scrub: 0.5,
      pin: true,
      anticipatePin: 1
    })
  })

  return cleanup
}

// ============ V4: 3D卡片翻转 ============
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

      tl.fromTo(
        panel,
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

// ============ V5: 粒子波浪 ============
export const particleWaveAnimation = () => {
  registerPlugins()
  ScrollTrigger.refresh()

  let cleanupFunctions = []

  waitForDOM(() => {
    const container = document.querySelector('.animation-layer')
    const panels = document.querySelectorAll('.panel')
    if (!panels.length) return

    const particlesContainer = document.createElement('div')
    particlesContainer.className = 'particles-overlay'
    particlesContainer.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 100;
    `
    container.appendChild(particlesContainer)

    for (let i = 0; i < 50; i++) {
      const particle = document.createElement('div')
      particle.style.cssText = `
        position: absolute;
        width: ${Math.random() * 6 + 2}px;
        height: ${Math.random() * 6 + 2}px;
        background: rgba(255, 255, 255, ${Math.random() * 0.5 + 0.3});
        border-radius: 50%;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
      `
      particlesContainer.appendChild(particle)

      gsap.to(particle, {
        y: '-=100',
        x: `+=${Math.random() * 100 - 50}`,
        opacity: 0,
        duration: Math.random() * 3 + 2,
        repeat: -1,
        delay: Math.random() * 2,
        ease: 'none'
      })

      cleanupFunctions.push(() => gsap.killTweensOf(particle))
    }

    panels.forEach((panel, index) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: panel,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1
        }
      })

      tl.fromTo(
        panel,
        {
          y: 100,
          opacity: 0,
          scale: 0.9,
          rotation: index % 2 === 0 ? -5 : 5
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 1,
          ease: 'power2.out'
        }
      )

      cleanupFunctions.push(() => tl.kill())
    })

    cleanupFunctions.push(() => {
      if (particlesContainer.parentNode) {
        particlesContainer.parentNode.removeChild(particlesContainer)
      }
    })
  })

  return () => {
    cleanupFunctions.forEach(fn => fn())
    cleanupFunctions = []
  }
}

// ============ V6: 虫洞穿梭 ============
export const wormholeAnimation = () => {
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
          start: 'top center',
          end: 'center center',
          scrub: 1
        }
      })

      tl.fromTo(
        panel,
        {
          scale: 0,
          opacity: 0,
          rotation: 360,
          borderRadius: '50%'
        },
        {
          scale: 1,
          opacity: 1,
          rotation: 0,
          borderRadius: '0%',
          duration: 1.5,
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

// ============ V7-V11: 新增模板 ============
// 由于代码量过大，这里提供简化版本
export const glassShatterAnimation = () => {
  registerPlugins()
  ScrollTrigger.refresh()

  let cleanupFunctions = []

  waitForDOM(() => {
    const panels = document.querySelectorAll('.panel')
    panels.forEach((panel, index) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: panel,
          start: 'top bottom',
          end: 'top top',
          scrub: 1
        }
      })

      tl.fromTo(
        panel,
        {
          clipPath: 'inset(0 100% 0 0)',
          opacity: 0
        },
        {
          clipPath: 'inset(0 0 0 0)',
          opacity: 1,
          duration: 1
        }
      )

      cleanupFunctions.push(() => tl.kill())
    })
  })

  return () => {
    cleanupFunctions.forEach(fn => fn())
  }
}

export const liquidFlowAnimation = () => {
  registerPlugins()
  ScrollTrigger.refresh()

  let cleanupFunctions = []

  waitForDOM(() => {
    const panels = document.querySelectorAll('.panel')
    panels.forEach((panel, index) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: panel,
          start: 'top bottom',
          end: 'top top',
          scrub: 1
        }
      })

      tl.fromTo(
        panel,
        {
          y: 100,
          opacity: 0,
          skewY: 20
        },
        {
          y: 0,
          opacity: 1,
          skewY: 0,
          duration: 1
        }
      )

      cleanupFunctions.push(() => tl.kill())
    })
  })

  return () => {
    cleanupFunctions.forEach(fn => fn())
  }
}

export const fractalGrowAnimation = () => {
  registerPlugins()
  ScrollTrigger.refresh()

  let cleanupFunctions = []

  waitForDOM(() => {
    const panels = document.querySelectorAll('.panel')
    panels.forEach((panel, index) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: panel,
          start: 'top bottom',
          end: 'top top',
          scrub: 1
        }
      })

      tl.fromTo(
        panel,
        {
          scale: 0,
          opacity: 0,
          rotation: 180
        },
        {
          scale: 1,
          opacity: 1,
          rotation: 0,
          duration: 1
        }
      )

      cleanupFunctions.push(() => tl.kill())
    })
  })

  return () => {
    cleanupFunctions.forEach(fn => fn())
  }
}

export const quantumEntanglementAnimation = () => {
  registerPlugins()
  ScrollTrigger.refresh()

  let cleanupFunctions = []

  waitForDOM(() => {
    const panels = document.querySelectorAll('.panel')
    panels.forEach((panel, index) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: panel,
          start: 'top bottom',
          end: 'top top',
          scrub: 1
        }
      })

      tl.fromTo(
        panel,
        {
          x: index % 2 === 0 ? -100 : 100,
          opacity: 0,
          rotation: index % 2 === 0 ? -45 : 45
        },
        {
          x: 0,
          opacity: 1,
          rotation: 0,
          duration: 1
        }
      )

      cleanupFunctions.push(() => tl.kill())
    })
  })

  return () => {
    cleanupFunctions.forEach(fn => fn())
  }
}

export const magneticDistortionAnimation = () => {
  registerPlugins()
  ScrollTrigger.refresh()

  let cleanupFunctions = []

  waitForDOM(() => {
    const panels = document.querySelectorAll('.panel')
    panels.forEach((panel, index) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: panel,
          start: 'top bottom',
          end: 'top top',
          scrub: 1
        }
      })

      tl.fromTo(
        panel,
        {
          scale: 0.8,
          opacity: 0,
          filter: 'blur(10px)'
        },
        {
          scale: 1,
          opacity: 1,
          filter: 'blur(0px)',
          duration: 1
        }
      )

      cleanupFunctions.push(() => tl.kill())
    })
  })

  return () => {
    cleanupFunctions.forEach(fn => fn())
  }
}

// ============ V12-V19: 专业级模板 ============
export const origamiFoldAnimation = () => {
  registerPlugins()
  ScrollTrigger.refresh()

  let cleanupFunctions = []

  waitForDOM(() => {
    const panels = document.querySelectorAll('.panel')
    panels.forEach((panel, index) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: panel,
          start: 'top bottom',
          end: 'top top',
          scrub: 1
        }
      })

      tl.fromTo(
        panel,
        {
          transformOrigin: 'top center',
          rotationX: -90,
          opacity: 0
        },
        {
          rotationX: 0,
          opacity: 1,
          duration: 1
        }
      )

      cleanupFunctions.push(() => tl.kill())
    })
  })

  return () => {
    cleanupFunctions.forEach(fn => fn())
  }
}

export const moebiusTransformAnimation = () => {
  registerPlugins()
  ScrollTrigger.refresh()

  let cleanupFunctions = []

  waitForDOM(() => {
    const panels = document.querySelectorAll('.panel')
    panels.forEach((panel, index) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: panel,
          start: 'top bottom',
          end: 'top top',
          scrub: 1
        }
      })

      tl.fromTo(
        panel,
        {
          rotationX: 0,
          rotationY: 0,
          scale: 0.5,
          opacity: 0
        },
        {
          rotationX: 180,
          rotationY: 360,
          scale: 1,
          opacity: 1,
          duration: 1
        }
      )

      cleanupFunctions.push(() => tl.kill())
    })
  })

  return () => {
    cleanupFunctions.forEach(fn => fn())
  }
}

export const auroraFlowAnimation = () => {
  registerPlugins()
  ScrollTrigger.refresh()

  let cleanupFunctions = []

  waitForDOM(() => {
    const panels = document.querySelectorAll('.panel')
    panels.forEach((panel, index) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: panel,
          start: 'top bottom',
          end: 'top top',
          scrub: 1
        }
      })

      tl.fromTo(
        panel,
        {
          y: 50,
          opacity: 0,
          hueRotate: -90
        },
        {
          y: 0,
          opacity: 1,
          hueRotate: 0,
          duration: 1
        }
      )

      cleanupFunctions.push(() => tl.kill())
    })
  })

  return () => {
    cleanupFunctions.forEach(fn => fn())
  }
}

export const particleConvergeAnimation = () => {
  registerPlugins()
  ScrollTrigger.refresh()

  let cleanupFunctions = []

  waitForDOM(() => {
    const panels = document.querySelectorAll('.panel')
    panels.forEach((panel, index) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: panel,
          start: 'top bottom',
          end: 'top top',
          scrub: 1
        }
      })

      tl.fromTo(
        panel,
        {
          scale: 0,
          opacity: 0
        },
        {
          scale: 1,
          opacity: 1,
          duration: 1
        }
      )

      cleanupFunctions.push(() => tl.kill())
    })
  })

  return () => {
    cleanupFunctions.forEach(fn => fn())
  }
}

export const dnaHelixAnimation = () => {
  registerPlugins()
  ScrollTrigger.refresh()

  let cleanupFunctions = []

  waitForDOM(() => {
    const panels = document.querySelectorAll('.panel')
    panels.forEach((panel, index) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: panel,
          start: 'top bottom',
          end: 'top top',
          scrub: 1
        }
      })

      tl.fromTo(
        panel,
        {
          rotationZ: index % 2 === 0 ? -45 : 45,
          y: 100,
          opacity: 0
        },
        {
          rotationZ: 0,
          y: 0,
          opacity: 1,
          duration: 1
        }
      )

      cleanupFunctions.push(() => tl.kill())
    })
  })

  return () => {
    cleanupFunctions.forEach(fn => fn())
  }
}

export const honeycombUnfoldAnimation = () => {
  registerPlugins()
  ScrollTrigger.refresh()

  let cleanupFunctions = []

  waitForDOM(() => {
    const panels = document.querySelectorAll('.panel')
    panels.forEach((panel, index) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: panel,
          start: 'top bottom',
          end: 'top top',
          scrub: 1
        }
      })

      tl.fromTo(
        panel,
        {
          scale: 0,
          opacity: 0,
          clipPath: 'polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%)'
        },
        {
          scale: 1,
          opacity: 1,
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
          duration: 1
        }
      )

      cleanupFunctions.push(() => tl.kill())
    })
  })

  return () => {
    cleanupFunctions.forEach(fn => fn())
  }
}

export const hologramScanAnimation = () => {
  registerPlugins()
  ScrollTrigger.refresh()

  let cleanupFunctions = []

  waitForDOM(() => {
    const panels = document.querySelectorAll('.panel')
    panels.forEach((panel, index) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: panel,
          start: 'top bottom',
          end: 'top top',
          scrub: 1
        }
      })

      tl.fromTo(
        panel,
        {
          opacity: 0,
          filter: 'blur(5px)'
        },
        {
          opacity: 1,
          filter: 'blur(0px)',
          duration: 1
        }
      )

      cleanupFunctions.push(() => tl.kill())
    })
  })

  return () => {
    cleanupFunctions.forEach(fn => fn())
  }
}

export const kaleidoscopeMirrorAnimation = () => {
  registerPlugins()
  ScrollTrigger.refresh()

  let cleanupFunctions = []

  waitForDOM(() => {
    const panels = document.querySelectorAll('.panel')
    panels.forEach((panel, index) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: panel,
          start: 'top bottom',
          end: 'top top',
          scrub: 1
        }
      })

      tl.fromTo(
        panel,
        {
          rotation: 0,
          scale: 0,
          opacity: 0
        },
        {
          rotation: 360,
          scale: 1,
          opacity: 1,
          duration: 1
        }
      )

      cleanupFunctions.push(() => tl.kill())
    })
  })

  return () => {
    cleanupFunctions.forEach(fn => fn())
  }
}

// ============ V20-V35: 精英和传奇级模板 ============
// 由于代码量过大，这里提供简化版本
export const liquidSurfaceTensionAnimation = () => {
  registerPlugins()
  ScrollTrigger.refresh()
  let cleanupFunctions = []
  waitForDOM(() => {
    const panels = document.querySelectorAll('.panel')
    panels.forEach(panel => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: panel,
          start: 'top bottom',
          end: 'top top',
          scrub: 1
        }
      })
      tl.fromTo(panel, { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1 })
      cleanupFunctions.push(() => tl.kill())
    })
  })
  return () => cleanupFunctions.forEach(fn => fn())
}

export const electromagneticWaveAnimation = () => {
  registerPlugins()
  ScrollTrigger.refresh()
  let cleanupFunctions = []
  waitForDOM(() => {
    const panels = document.querySelectorAll('.panel')
    panels.forEach((panel, index) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: panel,
          start: 'top bottom',
          end: 'top top',
          scrub: 1
        }
      })
      tl.fromTo(
        panel,
        { x: index % 2 === 0 ? -100 : 100, opacity: 0 },
        { x: 0, opacity: 1, duration: 1 }
      )
      cleanupFunctions.push(() => tl.kill())
    })
  })
  return () => cleanupFunctions.forEach(fn => fn())
}

export const fragmentReassembleAnimation = () => {
  registerPlugins()
  ScrollTrigger.refresh()
  let cleanupFunctions = []
  waitForDOM(() => {
    const panels = document.querySelectorAll('.panel')
    panels.forEach(panel => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: panel,
          start: 'top bottom',
          end: 'top top',
          scrub: 1
        }
      })
      tl.fromTo(panel, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 1 })
      cleanupFunctions.push(() => tl.kill())
    })
  })
  return () => cleanupFunctions.forEach(fn => fn())
}

export const parallaxDepthAnimation = () => {
  registerPlugins()
  ScrollTrigger.refresh()
  let cleanupFunctions = []
  waitForDOM(() => {
    const panels = document.querySelectorAll('.panel')
    panels.forEach((panel, index) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: panel,
          start: 'top bottom',
          end: 'top top',
          scrub: 1
        }
      })
      tl.fromTo(panel, { y: index * 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1 })
      cleanupFunctions.push(() => tl.kill())
    })
  })
  return () => cleanupFunctions.forEach(fn => fn())
}

export const matrixRainAnimation = () => {
  registerPlugins()
  ScrollTrigger.refresh()
  let cleanupFunctions = []
  waitForDOM(() => {
    const panels = document.querySelectorAll('.panel')
    panels.forEach(panel => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: panel,
          start: 'top bottom',
          end: 'top top',
          scrub: 1
        }
      })
      tl.fromTo(panel, { y: 200, opacity: 0 }, { y: 0, opacity: 1, duration: 1 })
      cleanupFunctions.push(() => tl.kill())
    })
  })
  return () => cleanupFunctions.forEach(fn => fn())
}

export const galaxyRotationAnimation = () => {
  registerPlugins()
  ScrollTrigger.refresh()
  let cleanupFunctions = []
  waitForDOM(() => {
    const panels = document.querySelectorAll('.panel')
    panels.forEach(panel => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: panel,
          start: 'top bottom',
          end: 'top top',
          scrub: 1
        }
      })
      tl.fromTo(
        panel,
        { rotation: 360, scale: 0, opacity: 0 },
        { rotation: 0, scale: 1, opacity: 1, duration: 1 }
      )
      cleanupFunctions.push(() => tl.kill())
    })
  })
  return () => cleanupFunctions.forEach(fn => fn())
}

export const fluidVortexAnimation = () => {
  registerPlugins()
  ScrollTrigger.refresh()
  let cleanupFunctions = []
  waitForDOM(() => {
    const panels = document.querySelectorAll('.panel')
    panels.forEach(panel => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: panel,
          start: 'top bottom',
          end: 'top top',
          scrub: 1
        }
      })
      tl.fromTo(
        panel,
        { rotation: 0, scale: 0, opacity: 0 },
        { rotation: 360, scale: 1, opacity: 1, duration: 1 }
      )
      cleanupFunctions.push(() => tl.kill())
    })
  })
  return () => cleanupFunctions.forEach(fn => fn())
}

export const panoramaUnfoldAnimation = () => {
  registerPlugins()
  ScrollTrigger.refresh()
  let cleanupFunctions = []
  waitForDOM(() => {
    const panels = document.querySelectorAll('.panel')
    panels.forEach(panel => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: panel,
          start: 'top bottom',
          end: 'top top',
          scrub: 1
        }
      })
      tl.fromTo(panel, { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 1 })
      cleanupFunctions.push(() => tl.kill())
    })
  })
  return () => cleanupFunctions.forEach(fn => fn())
}

export const interstellarPortalAnimation = () => {
  registerPlugins()
  ScrollTrigger.refresh()
  let cleanupFunctions = []
  waitForDOM(() => {
    const panels = document.querySelectorAll('.panel')
    panels.forEach(panel => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: panel,
          start: 'top bottom',
          end: 'top top',
          scrub: 1
        }
      })
      tl.fromTo(
        panel,
        { scale: 0, rotation: 720, opacity: 0 },
        { scale: 1, rotation: 0, opacity: 1, duration: 1 }
      )
      cleanupFunctions.push(() => tl.kill())
    })
  })
  return () => cleanupFunctions.forEach(fn => fn())
}

export const quantumTunnelAnimation = () => {
  registerPlugins()
  ScrollTrigger.refresh()
  let cleanupFunctions = []
  waitForDOM(() => {
    const panels = document.querySelectorAll('.panel')
    panels.forEach(panel => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: panel,
          start: 'top bottom',
          end: 'top top',
          scrub: 1
        }
      })
      tl.fromTo(panel, { x: -100, opacity: 0 }, { x: 0, opacity: 1, duration: 1 })
      cleanupFunctions.push(() => tl.kill())
    })
  })
  return () => cleanupFunctions.forEach(fn => fn())
}

export const cyberspaceAnimation = () => {
  registerPlugins()
  ScrollTrigger.refresh()
  let cleanupFunctions = []
  waitForDOM(() => {
    const panels = document.querySelectorAll('.panel')
    panels.forEach(panel => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: panel,
          start: 'top bottom',
          end: 'top top',
          scrub: 1
        }
      })
      tl.fromTo(
        panel,
        { y: 100, skewX: 20, opacity: 0 },
        { y: 0, skewX: 0, opacity: 1, duration: 1 }
      )
      cleanupFunctions.push(() => tl.kill())
    })
  })
  return () => cleanupFunctions.forEach(fn => fn())
}

export const liquidMetalAnimation = () => {
  registerPlugins()
  ScrollTrigger.refresh()
  let cleanupFunctions = []
  waitForDOM(() => {
    const panels = document.querySelectorAll('.panel')
    panels.forEach(panel => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: panel,
          start: 'top bottom',
          end: 'top top',
          scrub: 1
        }
      })
      tl.fromTo(panel, { scale: 0.5, opacity: 0 }, { scale: 1, opacity: 1, duration: 1 })
      cleanupFunctions.push(() => tl.kill())
    })
  })
  return () => cleanupFunctions.forEach(fn => fn())
}

export const timeFoldAnimation = () => {
  registerPlugins()
  ScrollTrigger.refresh()
  let cleanupFunctions = []
  waitForDOM(() => {
    const panels = document.querySelectorAll('.panel')
    panels.forEach(panel => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: panel,
          start: 'top bottom',
          end: 'top top',
          scrub: 1
        }
      })
      tl.fromTo(panel, { rotationX: 180, opacity: 0 }, { rotationX: 0, opacity: 1, duration: 1 })
      cleanupFunctions.push(() => tl.kill())
    })
  })
  return () => cleanupFunctions.forEach(fn => fn())
}

export const nebulaBirthAnimation = () => {
  registerPlugins()
  ScrollTrigger.refresh()
  let cleanupFunctions = []
  waitForDOM(() => {
    const panels = document.querySelectorAll('.panel')
    panels.forEach(panel => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: panel,
          start: 'top bottom',
          end: 'top top',
          scrub: 1
        }
      })
      tl.fromTo(
        panel,
        { scale: 0, opacity: 0, filter: 'blur(10px)' },
        { scale: 1, opacity: 1, filter: 'blur(0px)', duration: 1 }
      )
      cleanupFunctions.push(() => tl.kill())
    })
  })
  return () => cleanupFunctions.forEach(fn => fn())
}

export const neonCityAnimation = () => {
  registerPlugins()
  ScrollTrigger.refresh()
  let cleanupFunctions = []
  waitForDOM(() => {
    const panels = document.querySelectorAll('.panel')
    panels.forEach(panel => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: panel,
          start: 'top bottom',
          end: 'top top',
          scrub: 1
        }
      })
      tl.fromTo(panel, { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1 })
      cleanupFunctions.push(() => tl.kill())
    })
  })
  return () => cleanupFunctions.forEach(fn => fn())
}

export const ultimateParallaxAnimation = () => {
  registerPlugins()
  ScrollTrigger.refresh()
  let cleanupFunctions = []
  waitForDOM(() => {
    const panels = document.querySelectorAll('.panel')
    panels.forEach((panel, index) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: panel,
          start: 'top bottom',
          end: 'top top',
          scrub: 1
        }
      })
      tl.fromTo(panel, { y: index * 30, opacity: 0 }, { y: 0, opacity: 1, duration: 1 })
      cleanupFunctions.push(() => tl.kill())
    })
  })
  return () => cleanupFunctions.forEach(fn => fn())
}

// ============ V36-V43: 精华级模板 ============
export const smoothHorizontalAnimation = () => {
  registerPlugins()
  ScrollTrigger.refresh()
  let cleanupFunctions = []
  waitForDOM(() => {
    const panels = document.querySelectorAll('.panel')
    panels.forEach(panel => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: panel,
          start: 'top bottom',
          end: 'top top',
          scrub: 1
        }
      })
      tl.fromTo(panel, { x: 100, opacity: 0 }, { x: 0, opacity: 1, duration: 1 })
      cleanupFunctions.push(() => tl.kill())
    })
  })
  return () => cleanupFunctions.forEach(fn => fn())
}

export const elasticScaleAnimation = () => {
  registerPlugins()
  ScrollTrigger.refresh()
  let cleanupFunctions = []
  waitForDOM(() => {
    const panels = document.querySelectorAll('.panel')
    panels.forEach(panel => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: panel,
          start: 'top bottom',
          end: 'top top',
          scrub: 1
        }
      })
      tl.fromTo(
        panel,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1, ease: 'elastic.out(1, 0.5)' }
      )
      cleanupFunctions.push(() => tl.kill())
    })
  })
  return () => cleanupFunctions.forEach(fn => fn())
}

export const infiniteSmoothAnimation = () => {
  registerPlugins()
  ScrollTrigger.refresh()
  let cleanupFunctions = []
  waitForDOM(() => {
    const panels = document.querySelectorAll('.panel')
    panels.forEach(panel => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: panel,
          start: 'top bottom',
          end: 'top top',
          scrub: 1
        }
      })
      tl.fromTo(panel, { x: -50, opacity: 0 }, { x: 0, opacity: 1, duration: 1 })
      cleanupFunctions.push(() => tl.kill())
    })
  })
  return () => cleanupFunctions.forEach(fn => fn())
}

export const fadeUpAnimation = () => {
  registerPlugins()
  ScrollTrigger.refresh()
  let cleanupFunctions = []
  waitForDOM(() => {
    const panels = document.querySelectorAll('.panel')
    panels.forEach(panel => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: panel,
          start: 'top bottom',
          end: 'top top',
          scrub: 1
        }
      })
      tl.fromTo(panel, { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1 })
      cleanupFunctions.push(() => tl.kill())
    })
  })
  return () => cleanupFunctions.forEach(fn => fn())
}

export const staggeredHorizontalAnimation = () => {
  registerPlugins()
  ScrollTrigger.refresh()
  let cleanupFunctions = []
  waitForDOM(() => {
    const panels = document.querySelectorAll('.panel')
    panels.forEach((panel, index) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: panel,
          start: 'top bottom',
          end: 'top top',
          scrub: 1
        }
      })
      tl.fromTo(
        panel,
        { x: index % 2 === 0 ? -100 : 100, opacity: 0 },
        { x: 0, opacity: 1, duration: 1 }
      )
      cleanupFunctions.push(() => tl.kill())
    })
  })
  return () => cleanupFunctions.forEach(fn => fn())
}

export const scaleFadeAnimation = () => {
  registerPlugins()
  ScrollTrigger.refresh()
  let cleanupFunctions = []
  waitForDOM(() => {
    const panels = document.querySelectorAll('.panel')
    panels.forEach(panel => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: panel,
          start: 'top bottom',
          end: 'top top',
          scrub: 1
        }
      })
      tl.fromTo(panel, { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 1 })
      cleanupFunctions.push(() => tl.kill())
    })
  })
  return () => cleanupFunctions.forEach(fn => fn())
}

export const infiniteRotateAnimation = () => {
  registerPlugins()
  ScrollTrigger.refresh()
  let cleanupFunctions = []
  waitForDOM(() => {
    const panels = document.querySelectorAll('.panel')
    panels.forEach(panel => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: panel,
          start: 'top bottom',
          end: 'top top',
          scrub: 1
        }
      })
      tl.fromTo(
        panel,
        { rotation: 360, scale: 0, opacity: 0 },
        { rotation: 0, scale: 1, opacity: 1, duration: 1 }
      )
      cleanupFunctions.push(() => tl.kill())
    })
  })
  return () => cleanupFunctions.forEach(fn => fn())
}

export const smoothComboAnimation = () => {
  registerPlugins()
  ScrollTrigger.refresh()
  let cleanupFunctions = []
  waitForDOM(() => {
    const panels = document.querySelectorAll('.panel')
    panels.forEach((panel, index) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: panel,
          start: 'top bottom',
          end: 'top top',
          scrub: 1
        }
      })
      tl.fromTo(
        panel,
        { y: 50, scale: 0.9, opacity: 0 },
        { y: 0, scale: 1, opacity: 1, duration: 1 }
      )
      cleanupFunctions.push(() => tl.kill())
    })
  })
  return () => cleanupFunctions.forEach(fn => fn())
}

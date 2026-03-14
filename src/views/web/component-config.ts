/**
 * 组件配置文件 - 用于虚拟滚动
 * 
 * 用途：
 * 1. 定义所有组件的分类
 * 2. 定义组件的导入路径
 * 3. 定义组件的优先级（加载顺序）
 */

export interface ComponentConfig {
  id: string
  name: string
  component: () => Promise<any>
  category: 'core' | '3d' | 'creative' | 'scroll' | 'card' | 'text' | 'image'
  priority: number // 优先级，数字越小越先加载
  description?: string
}

// 核心组件（始终加载）
export const coreComponents: ComponentConfig[] = [
  {
    id: 'card-3d-flip',
    name: 'Card3DFlipGallery',
    component: () => import('./components/Card3DFlipGallery.vue'),
    category: 'core',
    priority: 1,
    description: '3D翻转卡片画廊'
  },
  {
    id: 'timeline',
    name: 'Timeline',
    component: () => import('./components/Timeline.vue'),
    category: 'core',
    priority: 2,
    description: '时间线动画'
  },
  {
    id: 'text-typewriter',
    name: 'TextTypewriter',
    component: () => import('./components/TextTypewriter.vue'),
    category: 'core',
    priority: 3,
    description: '打字机效果'
  },
  {
    id: 'cube-3d',
    name: 'Cube3D',
    component: () => import('./components/Cube3D.vue'),
    category: 'core',
    priority: 4,
    description: '3D立方体'
  },
  {
    id: 'image-parallax',
    name: 'ImageParallax',
    component: () => import('./components/ImageParallax.vue'),
    category: 'core',
    priority: 5,
    description: '图片视差'
  }
]

// 3D动画组件
export const threeDComponents: ComponentConfig[] = [
  {
    id: 'scroll-3d-cube',
    name: 'Scroll3DCube',
    component: () => import('./components/Scroll3DCube.vue'),
    category: '3d',
    priority: 10,
    description: '滚动3D立方体'
  },
  {
    id: 'scroll-3d-tunnel',
    name: 'Scroll3DTunnel',
    component: () => import('./components/Scroll3DTunnel.vue'),
    category: '3d',
    priority: 11,
    description: '3D隧道效果'
  },
  {
    id: 'scroll-3d-gallery',
    name: 'Scroll3DGallery',
    component: () => import('./components/Scroll3DGallery.vue'),
    category: '3d',
    priority: 12,
    description: '3D画廊'
  }
  // 继续添加其他3D组件...
]

// 创意特效组件
export const creativeComponents: ComponentConfig[] = [
  {
    id: 'scroll-liquid-wave',
    name: 'ScrollLiquidWave',
    component: () => import('./components/ScrollLiquidWave.vue'),
    category: 'creative',
    priority: 20,
    description: '液体波浪'
  },
  {
    id: 'scroll-particle-explosion',
    name: 'ScrollParticleExplosion',
    component: () => import('./components/ScrollParticleExplosion.vue'),
    category: 'creative',
    priority: 21,
    description: '粒子爆炸'
  }
  // 继续添加其他创意组件...
]

// 滚动交互组件
export const scrollComponents: ComponentConfig[] = [
  {
    id: 'scroll-reveal',
    name: 'ScrollReveal',
    component: () => import('./components/ScrollReveal.vue'),
    category: 'scroll',
    priority: 30,
    description: '滚动揭示'
  },
  {
    id: 'scroll-parallax',
    name: 'ScrollParallax',
    component: () => import('./components/ScrollParallax.vue'),
    category: 'scroll',
    priority: 31,
    description: '滚动视差'
  }
  // 继续添加其他滚动组件...
]

// 卡片特效组件
export const cardComponents: ComponentConfig[] = [
  {
    id: 'accordion-cards',
    name: 'AccordionCards',
    component: () => import('./components/AccordionCards.vue'),
    category: 'card',
    priority: 38,
    description: '手风琴卡片'
  },
  {
    id: 'scroll-card-zoom',
    name: 'ScrollCardZoom',
    component: () => import('./components/ScrollCardZoom.vue'),
    category: 'card',
    priority: 40,
    description: '卡片缩放'
  },
  {
    id: 'scroll-card-rotate-3d',
    name: 'ScrollCardRotate3D',
    component: () => import('./components/ScrollCardRotate3D.vue'),
    category: 'card',
    priority: 41,
    description: '卡片3D旋转'
  }
  // 继续添加其他卡片组件...
]

// 文字特效组件
export const textComponents: ComponentConfig[] = [
  {
    id: 'scroll-text-flow',
    name: 'ScrollTextFlow',
    component: () => import('./components/ScrollTextFlow.vue'),
    category: 'text',
    priority: 50,
    description: '文字流动'
  },
  {
    id: 'scroll-text-shadow',
    name: 'ScrollTextShadow',
    component: () => import('./components/ScrollTextShadow.vue'),
    category: 'text',
    priority: 51,
    description: '文字阴影'
  }
  // 继续添加其他文字组件...
]

// 图片特效组件
export const imageComponents: ComponentConfig[] = [
  {
    id: 'scroll-image-clip',
    name: 'ScrollImageClip',
    component: () => import('./components/ScrollImageClip.vue'),
    category: 'image',
    priority: 60,
    description: '图片裁剪'
  },
  {
    id: 'scroll-image-blur',
    name: 'ScrollImageBlur',
    component: () => import('./components/ScrollImageBlur.vue'),
    category: 'image',
    priority: 61,
    description: '图片模糊'
  }
  // 继续添加其他图片组件...
]

// 合并所有组件
export const allComponents: ComponentConfig[] = [
  ...coreComponents,
  ...threeDComponents,
  ...creativeComponents,
  ...scrollComponents,
  ...cardComponents,
  ...textComponents,
  ...imageComponents
].sort((a, b) => a.priority - b.priority)

// 按分类获取组件
export const getComponentsByCategory = (category: string): ComponentConfig[] => {
  if (category === 'all') return allComponents
  return allComponents.filter(c => c.category === category)
}

// 统计分类数量
export const countCategory = (category: string): number => {
  if (category === 'all') return allComponents.length
  return allComponents.filter(c => c.category === category).length
}

// 搜索组件
export const searchComponents = (query: string): ComponentConfig[] => {
  const lowerQuery = query.toLowerCase()
  return allComponents.filter(c => 
    c.name.toLowerCase().includes(lowerQuery) ||
    c.description?.toLowerCase().includes(lowerQuery)
  )
}

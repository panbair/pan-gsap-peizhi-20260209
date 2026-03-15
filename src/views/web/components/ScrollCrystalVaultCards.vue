<template>
  <div class="scroll-crystal-vault-cards-229">
    <!-- 水晶洞穴背景 -->
    <div class="crystal-cave-229">
      <div class="crystal-bg-229"></div>
      <div class="light-rays-229">
        <div v-for="n in 6" :key="n" class="light-ray-229" :style="{
          left: `${(n - 1) * 20}%`,
          animationDelay: `${-n * 0.5}s`,
          animationDuration: `${3 + n * 0.5}s`
        }"></div>
      </div>
    </div>

    <!-- 浮动水晶 -->
    <div class="floating-crystals-229">
      <div v-for="n in 12" :key="n" class="floating-crystal-229" :style="{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${-Math.random() * 10}s`,
        animationDuration: `${8 + Math.random() * 8}s`,
        transform: `scale(${0.5 + Math.random() * 0.5})`
      }">
        <div class="crystal-shape-229" :style="{ borderColor: `hsl(${Math.random() * 360}, 70%, 70%)` }"></div>
      </div>
    </div>

    <!-- 光环系统 -->
    <div class="halo-system-229">
      <div v-for="n in 5" :key="n" class="halo-ring-229" :style="{
        animationDelay: `${-n * 0.3}s`,
        borderColor: `hsla(${n * 72}, 80%, 70%, ${0.2 + n * 0.05})`
      }"></div>
    </div>

    <!-- 主标题 -->
    <div class="vault-title-229">
      <div class="title-rings-229">
        <div class="title-ring-229 ring-1-229"></div>
        <div class="title-ring-229 ring-2-229"></div>
        <div class="title-ring-229 ring-3-229"></div>
      </div>
      <h2 class="title-text-229">
        <span class="title-main-229">CRYSTAL VAULT</span>
        <span class="title-sub-229">珍藏宝库</span>
      </h2>
    </div>

    <!-- 卡片容器 -->
    <div class="vault-container-229">
      <div v-for="(gem, index) in gems" :key="index" class="crystal-card-229">
        <!-- 卡片光效 -->
        <div class="card-aura-229" :style="{ 
          background: `radial-gradient(circle at center, ${gem.glowColor}30 0%, transparent 70%)`
        }"></div>

        <!-- 水晶边框 -->
        <div class="crystal-border-229" :style="{ borderColor: gem.color }">
          <div class="border-sparkle-229"></div>
        </div>

        <!-- 卡片内容 -->
        <div class="card-inner-229">
          <!-- 顶部装饰 -->
          <div class="card-top-229">
            <div class="crystal-badge-229">
              <span class="badge-text-229">{{ gem.badge }}</span>
              <div class="badge-glow-229" :style="{ background: gem.glowColor }"></div>
            </div>
            <div class="card-id-229" :style="{ color: gem.color }}">#{{ String(index + 1).padStart(3, '0') }}</div>
          </div>

          <!-- 水晶图标 -->
          <div class="gem-icon-229" :style="{ color: gem.color }">
            <div class="gem-crystal-229">
              <div class="crystal-face-229" :style="{ 
                background: `linear-gradient(135deg, ${gem.color}20, transparent)`
              }"></div>
              <div class="crystal-shine-229" :style="{ 
                background: `linear-gradient(45deg, transparent, ${gem.glowColor}80, transparent)`
              }"></div>
            </div>
            <span class="gem-emoji-229">{{ gem.icon }}</span>
          </div>

          <!-- 宝石名称 -->
          <h3 class="gem-name-229" :style="{ color: gem.color }">
            {{ gem.name }}
            <div class="name-glow-229" :style="{ background: gem.color }"></div>
          </h3>

          <!-- 宝石描述 -->
          <p class="gem-desc-229">{{ gem.desc }}</p>

          <!-- 属性条 -->
          <div class="gem-attributes-229">
            <div class="attribute-229">
              <span class="attr-label-229">纯净度</span>
              <div class="attr-bar-229">
                <div class="attr-fill-229" :style="{ 
                  width: `${gem.purity}%`,
                  background: `linear-gradient(90deg, ${gem.color}, ${gem.glowColor})`
                }"></div>
              </div>
              <span class="attr-value-229" :style="{ color: gem.color }">{{ gem.purity }}%</span>
            </div>
            <div class="attribute-229">
              <span class="attr-label-229">光芒度</span>
              <div class="attr-bar-229">
                <div class="attr-fill-229" :style="{ 
                  width: `${gem.brilliance}%`,
                  background: `linear-gradient(90deg, ${gem.color}, ${gem.glowColor})`
                }"></div>
              </div>
              <span class="attr-value-229" :style="{ color: gem.color }">{{ gem.brilliance }}%</span>
            </div>
            <div class="attribute-229">
              <span class="attr-label-229">稀有度</span>
              <div class="attr-bar-229">
                <div class="attr-fill-229" :style="{ 
                  width: `${gem.rarity}%`,
                  background: `linear-gradient(90deg, ${gem.color}, ${gem.glowColor})`
                }"></div>
              </div>
              <span class="attr-value-229" :style="{ color: gem.color }">{{ gem.rarity }}%</span>
            </div>
          </div>

          <!-- 底部按钮 -->
          <div class="card-action-229">
            <button class="inspect-btn-229" :style="{ 
              background: `linear-gradient(135deg, ${gem.color}20, ${gem.glowColor}20)`,
              borderColor: gem.color,
              color: gem.color
            }">
              <span>INSPECT</span>
              <div class="btn-glow-229" :style="{ background: gem.glowColor }"></div>
            </button>
          </div>
        </div>

        <!-- 悬停光效 -->
        <div class="hover-shimmer-229"></div>
      </div>
    </div>

    <!-- 底部装饰 -->
    <div class="vault-footer-229">
      <div class="footer-crystal-229">
        <div class="footer-crystal-shape-229"></div>
      </div>
      <span class="footer-text-229">宝库开启</span>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

let ctx = null

const gems = [
  {
    icon: '💎',
    name: 'DIAMOND STAR',
    desc: '璀璨星辰，永恒闪耀',
    badge: 'LEGENDARY',
    color: '#00d4ff',
    glowColor: '#00ffff',
    purity: 99,
    brilliance: 98,
    rarity: 95
  },
  {
    icon: '💜',
    name: 'AMETHYST DREAM',
    desc: '紫色梦境，神秘深邃',
    badge: 'EPIC',
    color: '#9b59b6',
    glowColor: '#a855f7',
    purity: 95,
    brilliance: 92,
    rarity: 90
  },
  {
    icon: '💚',
    name: 'EMERALD GLOW',
    desc: '翠绿光辉，生机盎然',
    badge: 'RARE',
    color: '#2ecc71',
    glowColor: '#34d399',
    purity: 92,
    brilliance: 89,
    rarity: 85
  },
  {
    icon: '💛',
    name: 'TOPAZ LIGHT',
    desc: '金色光芒，温暖明亮',
    badge: 'RARE',
    color: '#f1c40f',
    glowColor: '#fbbf24',
    purity: 89,
    brilliance: 86,
    rarity: 82
  },
  {
    icon: '❤️',
    name: 'RUBY HEART',
    desc: '红宝石心，激情燃烧',
    badge: 'LEGENDARY',
    color: '#e74c3c',
    glowColor: '#f87171',
    purity: 97,
    brilliance: 95,
    rarity: 93
  },
  {
    icon: '💙',
    name: 'SAPPHIRE ICE',
    desc: '蓝宝石冰，纯净无暇',
    badge: 'EPIC',
    color: '#3498db',
    glowColor: '#60a5fa',
    purity: 94,
    brilliance: 91,
    rarity: 88
  }
]

onMounted(() => {
  ctx = gsap.context(() => {
    // 标题入场
    gsap.from('.vault-title-229', {
      scrollTrigger: {
        trigger: '.vault-title-229',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      },
      y: -80,
      opacity: 0,
      duration: 1.2,
      ease: 'power3.out'
    })

    gsap.from('.title-ring-229', {
      scrollTrigger: {
        trigger: '.title-ring-229',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      },
      scale: 0,
      rotation: -180,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: 'elastic.out(1, 0.5)'
    })

    gsap.from('.title-text-229', {
      scrollTrigger: {
        trigger: '.title-text-229',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      },
      scale: 0.5,
      opacity: 0,
      duration: 1,
      ease: 'back.out(1.7)'
    })

    // 卡片入场
    gsap.from('.crystal-card-229', {
      scrollTrigger: {
        trigger: '.vault-container-229',
        start: 'top 70%',
        toggleActions: 'play none none reverse'
      },
      y: 120,
      scale: 0.9,
      opacity: 0,
      duration: 1.2,
      stagger: 0.2,
      ease: 'power3.out'
    })

    // 卡片内部动画
    const cards = gsap.utils.toArray('.crystal-card-229')
    cards.forEach((card, i) => {
      // 光环
      gsap.from(card.querySelector('.card-aura-229'), {
        scrollTrigger: {
          trigger: card,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        },
        scale: 0.5,
        opacity: 0,
        duration: 1,
        delay: i * 0.2,
        ease: 'power2.out'
      })

      // 顶部装饰
      gsap.from(card.querySelector('.card-top-229'), {
        scrollTrigger: {
          trigger: card,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        },
        y: -20,
        opacity: 0,
        duration: 0.8,
        delay: i * 0.2 + 0.1,
        ease: 'power2.out'
      })

      // 水晶图标
      gsap.from(card.querySelector('.gem-icon-229'), {
        scrollTrigger: {
          trigger: card,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        },
        scale: 0,
        rotation: -180,
        opacity: 0,
        duration: 1,
        delay: i * 0.2 + 0.2,
        ease: 'elastic.out(1, 0.5)'
      })

      // 水晶闪光
      gsap.to(card.querySelector('.crystal-shine-229'), {
        scrollTrigger: {
          trigger: card,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        },
        rotation: 360,
        duration: 4,
        repeat: -1,
        ease: 'none'
      })

      // 宝石名称
      gsap.from(card.querySelector('.gem-name-229'), {
        scrollTrigger: {
          trigger: card,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        },
        y: 20,
        opacity: 0,
        duration: 0.8,
        delay: i * 0.2 + 0.3,
        ease: 'power2.out'
      })

      // 描述
      gsap.from(card.querySelector('.gem-desc-229'), {
        scrollTrigger: {
          trigger: card,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        },
        y: 15,
        opacity: 0,
        duration: 0.8,
        delay: i * 0.2 + 0.4,
        ease: 'power2.out'
      })

      // 属性条
      gsap.from(card.querySelectorAll('.attr-fill-229'), {
        scrollTrigger: {
          trigger: card,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        },
        width: 0,
        duration: 1,
        stagger: 0.1,
        delay: i * 0.2 + 0.5,
        ease: 'power3.out'
      })

      // 按钮
      gsap.from(card.querySelector('.card-action-229'), {
        scrollTrigger: {
          trigger: card,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        },
        y: 20,
        opacity: 0,
        duration: 0.8,
        delay: i * 0.2 + 0.7,
        ease: 'power2.out'
      })
    })

    // 持续动画
    gsap.to('.halo-ring-229', {
      rotation: 360,
      duration: 20 + Math.random() * 10,
      repeat: -1,
      ease: 'none',
      stagger: 0.5
    })

    gsap.to('.floating-crystal-229', {
      y: -30,
      x: (i) => (i % 2 === 0 ? 20 : -20),
      rotation: 360,
      duration: 8 + Math.random() * 4,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    })

    // 滚动控制光环旋转速度
    gsap.to('.halo-ring-229', {
      scrollTrigger: {
        trigger: '.vault-container-229',
        start: 'top center',
        end: 'bottom center',
        scrub: 1
      },
      rotation: 360,
      ease: 'none'
    })

    // 鼠标交互
    cards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        gsap.to(card.querySelector('.card-aura-229'), {
          scale: 1.2,
          duration: 0.5,
          ease: 'power2.out'
        })

        gsap.to(card.querySelector('.gem-crystal-229'), {
          scale: 1.1,
          duration: 0.3,
          ease: 'back.out(1.7)'
        })

        gsap.to(card.querySelectorAll('.attr-fill-229'), {
          width: '100%',
          duration: 0.5,
          stagger: 0.05,
          ease: 'power2.out'
        })
      })

      card.addEventListener('mouseleave', () => {
        gsap.to(card.querySelector('.card-aura-229'), {
          scale: 1,
          duration: 0.5,
          ease: 'power2.out'
        })

        gsap.to(card.querySelector('.gem-crystal-229'), {
          scale: 1,
          duration: 0.3,
          ease: 'power2.out'
        })

        const gem = gems[Array.from(cards).indexOf(card)]
        if (gem) {
          const attrFills = card.querySelectorAll('.attr-fill-229')
          gsap.to(attrFills[0], { width: `${gem.purity}%`, duration: 0.5 })
          gsap.to(attrFills[1], { width: `${gem.brilliance}%`, duration: 0.5 })
          gsap.to(attrFills[2], { width: `${gem.rarity}%`, duration: 0.5 })
        }
      })
    })
  })
})

onUnmounted(() => {
  ctx?.revert()
})
</script>

<style scoped>
.scroll-crystal-vault-cards-229 {
  min-height: 100vh;
  background: linear-gradient(135deg, #0a0a1a 0%, #1a0a2a 50%, #0a1a1a 100%);
  padding: 80px 20px;
  position: relative;
  overflow: hidden;
}

/* 水晶洞穴背景 */
.crystal-cave-229 {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 1;
}

.crystal-bg-229 {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 20% 30%, #00d4ff15 0%, transparent 40%),
    radial-gradient(circle at 80% 70%, #9b59b615 0%, transparent 40%),
    radial-gradient(circle at 50% 50%, #2ecc7110 0%, transparent 50%);
}

/* 光线 */
.light-rays-229 {
  position: absolute;
  top: -50%;
  left: 0;
  right: 0;
  bottom: -50%;
}

.light-ray-229 {
  position: absolute;
  width: 3px;
  height: 200%;
  background: linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.1), transparent);
  transform-origin: top center;
  animation: rayRotate linear infinite;
}

@keyframes rayRotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* 浮动水晶 */
.floating-crystals-229 {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 2;
}

.floating-crystal-229 {
  position: absolute;
  animation: crystalFloat ease-in-out infinite;
}

@keyframes crystalFloat {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(180deg); }
}

.crystal-shape-229 {
  width: 40px;
  height: 40px;
  border: 2px solid currentColor;
  transform: rotate(45deg);
  opacity: 0.3;
}

/* 光环系统 */
.halo-system-229 {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 1;
}

.halo-ring-229 {
  position: absolute;
  border: 1px solid currentColor;
  border-radius: 50%;
  animation: haloRotate 30s linear infinite;
}

.halo-ring-229:nth-child(1) { width: 400px; height: 400px; }
.halo-ring-229:nth-child(2) { width: 500px; height: 500px; }
.halo-ring-229:nth-child(3) { width: 600px; height: 600px; }
.halo-ring-229:nth-child(4) { width: 700px; height: 700px; }
.halo-ring-229:nth-child(5) { width: 800px; height: 800px; }

@keyframes haloRotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* 主标题 */
.vault-title-229 {
  text-align: center;
  margin-bottom: 80px;
  position: relative;
  z-index: 3;
}

.title-rings-229 {
  position: relative;
  display: inline-block;
  margin-bottom: 20px;
}

.title-ring-229 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 2px solid;
  border-radius: 50%;
}

.ring-1-229 {
  width: 150px;
  height: 150px;
  border-color: #00d4ff;
  opacity: 0.3;
}

.ring-2-229 {
  width: 180px;
  height: 180px;
  border-color: #9b59b6;
  opacity: 0.2;
}

.ring-3-229 {
  width: 210px;
  height: 210px;
  border-color: #2ecc71;
  opacity: 0.1;
}

.title-text-229 {
  position: relative;
  z-index: 1;
}

.title-main-229 {
  display: block;
  font-size: 56px;
  font-weight: 900;
  background: linear-gradient(135deg, #00d4ff, #9b59b6, #2ecc71);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: 8px;
  text-shadow: 0 0 40px rgba(0, 212, 255, 0.5);
}

.title-sub-229 {
  display: block;
  font-size: 20px;
  color: #888;
  letter-spacing: 15px;
  margin-top: 10px;
}

/* 卡片容器 */
.vault-container-229 {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 40px;
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px;
  position: relative;
  z-index: 3;
}

/* 卡片样式 */
.crystal-card-229 {
  background: rgba(15, 15, 30, 0.9);
  border-radius: 30px;
  padding: 40px 30px;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(20px);
  transform-style: preserve-3d;
}

/* 光环 */
.card-aura-229 {
  position: absolute;
  top: -50%;
  left: -50%;
  right: -50%;
  bottom: -50%;
  pointer-events: none;
  opacity: 0.5;
}

/* 水晶边框 */
.crystal-border-229 {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border: 2px solid;
  border-radius: 30px;
  pointer-events: none;
  overflow: hidden;
}

.border-sparkle-229 {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  animation: sparkle 3s linear infinite;
}

@keyframes sparkle {
  from { transform: translateX(100%); }
  to { transform: translateX(300%); }
}

/* 卡片内容 */
.card-inner-229 {
  position: relative;
  z-index: 2;
}

/* 顶部装饰 */
.card-top-229 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
}

.crystal-badge-229 {
  position: relative;
  padding: 6px 16px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.05);
}

.badge-text-229 {
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 2px;
  color: #fff;
  position: relative;
  z-index: 1;
}

.badge-glow-229 {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 20px;
  opacity: 0.3;
}

.card-id-229 {
  font-size: 14px;
  font-weight: 600;
  opacity: 0.5;
}

/* 水晶图标 */
.gem-icon-229 {
  width: 120px;
  height: 120px;
  margin: 0 auto 25px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.gem-crystal-229 {
  width: 100%;
  height: 100%;
  position: relative;
}

.crystal-face-229 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60%;
  height: 60%;
  border-radius: 10px;
}

.crystal-shine-229 {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

.gem-emoji-229 {
  position: relative;
  z-index: 1;
  font-size: 48px;
  filter: drop-shadow(0 0 20px currentColor);
}

/* 宝石名称 */
.gem-name-229 {
  font-size: 24px;
  font-weight: 800;
  text-align: center;
  margin-bottom: 15px;
  letter-spacing: 2px;
  position: relative;
}

.name-glow-229 {
  position: absolute;
  bottom: -5px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 3px;
  transition: width 0.3s ease;
}

.crystal-card-229:hover .name-glow-229 {
  width: 100%;
}

/* 宝石描述 */
.gem-desc-229 {
  text-align: center;
  color: #888;
  font-size: 16px;
  margin-bottom: 30px;
  letter-spacing: 1px;
}

/* 属性条 */
.gem-attributes-229 {
  margin-bottom: 30px;
}

.attribute-229 {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.attr-label-229 {
  width: 80px;
  font-size: 13px;
  color: #666;
  letter-spacing: 1px;
}

.attr-bar-229 {
  flex: 1;
  height: 6px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
  overflow: hidden;
  margin: 0 15px;
}

.attr-fill-229 {
  height: 100%;
  border-radius: 3px;
  transition: width 0.5s ease;
  box-shadow: 0 0 10px currentColor;
}

.attr-value-229 {
  width: 45px;
  text-align: right;
  font-size: 14px;
  font-weight: 700;
}

/* 底部按钮 */
.card-action-229 {
  text-align: center;
}

.inspect-btn-229 {
  position: relative;
  padding: 12px 40px;
  border: 2px solid;
  border-radius: 25px;
  background: transparent;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 2px;
  cursor: pointer;
  transition: all 0.3s ease;
  overflow: hidden;
}

.inspect-btn-229:hover {
  transform: scale(1.05);
}

.btn-glow-229 {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.inspect-btn-229:hover .btn-glow-229 {
  opacity: 0.3;
  animation: btnShimmer 1s linear infinite;
}

@keyframes btnShimmer {
  from { transform: translateX(0); }
  to { transform: translateX(200%); }
}

/* 悬停光效 */
.hover-shimmer-229 {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    transparent 40%,
    rgba(255, 255, 255, 0.03) 50%,
    transparent 60%
  );
  background-size: 200% 200%;
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}

.crystal-card-229:hover .hover-shimmer-229 {
  opacity: 1;
  animation: shimmerMove 2s linear infinite;
}

@keyframes shimmerMove {
  from { background-position: 0% 0%; }
  to { background-position: 200% 200%; }
}

/* 底部装饰 */
.vault-footer-229 {
  text-align: center;
  margin-top: 60px;
  position: relative;
  z-index: 3;
}

.footer-crystal-229 {
  display: inline-block;
  margin-bottom: 15px;
}

.footer-crystal-shape-229 {
  width: 40px;
  height: 40px;
  border: 2px solid #00d4ff;
  transform: rotate(45deg);
  animation: footerCrystal 2s ease-in-out infinite;
}

@keyframes footerCrystal {
  0%, 100% { transform: rotate(45deg) scale(1); }
  50% { transform: rotate(45deg) scale(1.2); }
}

.footer-text-229 {
  display: block;
  color: #00d4ff;
  font-size: 16px;
  letter-spacing: 5px;
  text-transform: uppercase;
}

/* 响应式 */
@media (max-width: 768px) {
  .title-main-229 {
    font-size: 36px;
    letter-spacing: 4px;
  }

  .vault-container-229 {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .card-inner-229 {
    padding: 20px;
  }
}
</style>

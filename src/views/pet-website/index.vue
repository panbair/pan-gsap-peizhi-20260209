<template>
  <div class="pet-website">
    <!-- Hero Section - 沉浸式开场 -->
    <section class="hero-section">
      <div class="hero-bg">
        <LazyAuroraBorealis />
      </div>
      <div class="hero-content">
        <LazyTextTypewriter
          :texts="['欢迎来到', '宠物天堂', 'Pet Paradise']"
          :typing-speed="100"
          :deleting-speed="50"
          :pause-duration="2000"
        />
        <LazyNeonGlowText text="让爱宠相伴每一天" :glow-intensity="0.8" />
        <LazyMagneticButton class="hero-cta" @click="scrollTo('pets')">
          <LazyScrollTextSplit>探索爱宠</LazyScrollTextSplit>
        </LazyMagneticButton>
      </div>
      <div class="hero-paw-prints">
        <LazyInfiniteScrollText text="🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾" :speed="50" />
      </div>
    </section>

    <!-- Stats Section - 数据展示 -->
    <section class="stats-section" id="stats">
      <LazyScrollSplitReveal>
        <h2 class="section-title">我们的成就</h2>
      </LazyScrollSplitReveal>
      <div class="stats-grid">
        <LazyNumberCounter :target="50000" suffix="+" label="满意客户" />
        <LazyNumberCounter :target="1200" suffix="+" label="宠物品种" />
        <LazyNumberCounter :target="15" suffix="+" label="年经验" />
        <LazyNumberCounter :target="98" suffix="%" label="好评率" />
      </div>
    </section>

    <!-- Pets Gallery - 宠物画廊 -->
    <section class="pets-section" id="pets">
      <LazyScrollTextScramble text="明星宠物" />
      <div class="gallery-intro">
        <LazyScrollTextFlow>
          <p>每只宠物都有独特的故事，我们用心呵护每一个生命</p>
        </LazyScrollTextFlow>
      </div>
      <LazyParallaxZoomGallery class="pets-gallery" />
      <LazyRotationCarousel class="pets-carousel" />
    </section>

    <!-- Services Section - 服务展示 -->
    <section class="services-section">
      <LazyScrollTextShadow text="我们的服务" />
      <div class="services-grid">
        <LazyStaggerCards class="services-cards">
          <div class="service-card" v-for="service in services" :key="service.id">
            <LazyScrollCardMorph :card-id="service.id">
              <div class="service-icon">{{ service.icon }}</div>
              <h3>{{ service.title }}</h3>
              <p>{{ service.desc }}</p>
            </LazyScrollCardMorph>
          </div>
        </LazyStaggerCards>
      </div>
    </section>

    <!-- Features Section - 特色功能 -->
    <section class="features-section">
      <LazyScrollGradientText text="独特体验" />
      <LazyFlipCards class="features-grid">
        <div class="feature-item">
          <div class="feature-front">
            <LazyLiquidWave />
            <h3>专业护理</h3>
          </div>
          <div class="feature-back">
            <h3>24/7 在线</h3>
            <p>全天候专业护理服务</p>
          </div>
        </div>
        <div class="feature-item">
          <div class="feature-front">
            <LazyGalaxySpiral />
            <h3>健康管理</h3>
          </div>
          <div class="feature-back">
            <h3>智能追踪</h3>
            <p>AI驱动的健康监测</p>
          </div>
        </div>
        <div class="feature-item">
          <div class="feature-front">
            <LazyQuantumField />
            <h3>社交社区</h3>
          </div>
          <div class="feature-back">
            <h3>宠物社交</h3>
            <p>与其他宠物主人交流</p>
          </div>
        </div>
      </LazyFlipCards>
    </section>

    <!-- Testimonials Section - 用户评价 -->
    <section class="testimonials-section">
      <LazyScrollOutlineText text="用户之声" />
      <LazyFadeInStack class="testimonials-stack">
        <div class="testimonial-card" v-for="(testimonial, index) in testimonials" :key="index">
          <LazyScrollCardGlass>
            <div class="testimonial-content">
              <div class="quote-icon">"</div>
              <p>{{ testimonial.text }}</p>
              <div class="user-info">
                <LazyScrollCardZoom>
                  <div class="user-avatar">{{ testimonial.avatar }}</div>
                </LazyScrollCardZoom>
                <div class="user-details">
                  <h4>{{ testimonial.name }}</h4>
                  <span>{{ testimonial.pet }}</span>
                </div>
              </div>
            </div>
          </LazyScrollCardGlass>
        </div>
      </LazyFadeInStack>
    </section>

    <!-- Interactive Section - 互动区域 -->
    <section class="interactive-section">
      <LazyHolographic3D class="hologram-container">
        <div class="interactive-content">
          <LazyScrollTextMask text="互动体验" />
          <LazyScaleShapes>
            <div class="interactive-elements">
              <LazyBouncingBall />
              <LazyRotatingRings />
              <LazyScrollReveal>
                <p>点击下方按钮，开始您的宠物之旅</p>
              </LazyScrollReveal>
              <LazyMagneticButton class="start-btn" @click="startJourney">
                <LazyScrollTextSplit>立即开始</LazyScrollTextSplit>
              </LazyMagneticButton>
            </div>
          </LazyScaleShapes>
        </div>
      </LazyHolographic3D>
    </section>

    <!-- About Section - 关于我们 -->
    <section class="about-section">
      <LazyScrollTextBlur text="关于我们" />
      <LazyTimeline class="company-timeline">
        <div class="timeline-item" v-for="milestone in milestones" :key="milestone.year">
          <LazyScrollReveal>
            <div class="milestone-card">
              <LazyScrollCardRotate3D>
                <div class="milestone-year">{{ milestone.year }}</div>
                <h3>{{ milestone.title }}</h3>
                <p>{{ milestone.desc }}</p>
              </LazyScrollCardRotate3D>
            </div>
          </LazyScrollReveal>
        </div>
      </LazyTimeline>
    </section>

    <!-- Pricing Section - 价格方案 -->
    <section class="pricing-section">
      <LazyScrollNeonPulse text="选择您的方案" />
      <LazyStaggerGrid class="pricing-grid">
        <div class="pricing-card" v-for="plan in pricing" :key="plan.name" :class="plan.featured ? 'featured' : ''">
          <LazyScrollCardFloat>
            <LazyScrollCardBorder>
              <div class="pricing-header">
                <h3>{{ plan.name }}</h3>
                <div class="price">
                  <span class="currency">¥</span>
                  <span class="amount">{{ plan.price }}</span>
                  <span class="period">/月</span>
                </div>
              </div>
              <ul class="pricing-features">
                <li v-for="feature in plan.features" :key="feature">
                  <LazyScrollCardRipple>{{ feature }}</LazyScrollCardRipple>
                </li>
              </ul>
              <LazyScrollElasticScale>
                <button class="pricing-btn">{{ plan.button }}</button>
              </LazyScrollElasticScale>
            </LazyScrollCardBorder>
          </LazyScrollCardFloat>
        </div>
      </LazyStaggerGrid>
    </section>

    <!-- Contact Section - 联系我们 -->
    <section class="contact-section" id="contact">
      <LazyScrollTextScramble text="联系我们" />
      <LazyMorphingCards class="contact-cards">
        <LazyScrollCard3D>
          <div class="contact-form">
            <LazyScrollShapeElastic>
              <input type="text" placeholder="您的姓名" />
              <input type="email" placeholder="电子邮箱" />
              <textarea placeholder="留言内容" rows="5"></textarea>
            </LazyScrollShapeElastic>
            <LazyMagneticButton class="submit-btn">发送消息</LazyMagneticButton>
          </div>
        </LazyScrollCard3D>
      </LazyMorphingCards>
      <LazyMapPlaceholder class="map-placeholder" />
    </section>

    <!-- Footer Section -->
    <footer class="footer-section">
      <LazyScrollParallaxLayer class="footer-parallax">
        <div class="footer-content">
          <LazyScrollTextGlow text="Pet Paradise" />
          <LazyScrollTextColumns>
            <div class="footer-links">
              <h4>快速链接</h4>
              <a href="#about">关于我们</a>
              <a href="#services">服务项目</a>
              <a href="#pricing">价格方案</a>
              <a href="#contact">联系我们</a>
            </div>
            <div class="footer-links">
              <h4>热门服务</h4>
              <a href="#">宠物护理</a>
              <a href="#">健康检查</a>
              <a href="#">宠物美容</a>
              <a href="#">宠物寄养</a>
            </div>
            <div class="footer-links">
              <h4>社交媒体</h4>
              <a href="#">微博</a>
              <a href="#">微信公众号</a>
              <a href="#">抖音</a>
              <a href="#">小红书</a>
            </div>
          </LazyScrollTextColumns>
          <div class="footer-bottom">
            <p>© 2026 Pet Paradise. All rights reserved. 🐾</p>
          </div>
        </div>
      </LazyScrollParallaxLayer>
    </footer>

    <!-- Floating Elements -->
    <LazyCursorFollower />
    <LazyScrollProgress />
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent, ref } from 'vue'
import gsap from 'gsap'

// Hero Section Components
const LazyAuroraBorealis = defineAsyncComponent(() => import('../web/components/AuroraBorealis.vue'))
const LazyTextTypewriter = defineAsyncComponent(() => import('../web/components/TextTypewriter.vue'))
const LazyNeonGlowText = defineAsyncComponent(() => import('../web/components/NeonGlowText.vue'))
const LazyMagneticButton = defineAsyncComponent(() => import('../web/components/MagneticButton.vue'))
const LazyScrollTextSplit = defineAsyncComponent(() => import('../web/components/ScrollTextSplit.vue'))
const LazyInfiniteScrollText = defineAsyncComponent(() => import('../web/components/InfiniteScrollText.vue'))

// Stats Components
const LazyScrollSplitReveal = defineAsyncComponent(() => import('../web/components/ScrollSplitReveal.vue'))
const LazyNumberCounter = defineAsyncComponent(() => import('../web/components/NumberCounter.vue'))

// Gallery Components
const LazyScrollTextScramble = defineAsyncComponent(() => import('../web/components/ScrollTextScramble.vue'))
const LazyScrollTextFlow = defineAsyncComponent(() => import('../web/components/ScrollTextFlow.vue'))
const LazyParallaxZoomGallery = defineAsyncComponent(() => import('../web/components/ParallaxZoomGallery.vue'))
const LazyRotationCarousel = defineAsyncComponent(() => import('../web/components/RotationCarousel.vue'))

// Services Components
const LazyScrollTextShadow = defineAsyncComponent(() => import('../web/components/ScrollTextShadow.vue'))
const LazyStaggerCards = defineAsyncComponent(() => import('../web/components/StaggerCards.vue'))
const LazyScrollCardMorph = defineAsyncComponent(() => import('../web/components/ScrollCardMorph.vue'))

// Features Components
const LazyScrollGradientText = defineAsyncComponent(() => import('../web/components/ScrollGradientText.vue'))
const LazyFlipCards = defineAsyncComponent(() => import('../web/components/FlipCards.vue'))
const LazyLiquidWave = defineAsyncComponent(() => import('../web/components/LiquidWave.vue'))
const LazyGalaxySpiral = defineAsyncComponent(() => import('../web/components/GalaxySpiral.vue'))
const LazyQuantumField = defineAsyncComponent(() => import('../web/components/QuantumField.vue'))

// Testimonials Components
const LazyScrollOutlineText = defineAsyncComponent(() => import('../web/components/ScrollOutlineText.vue'))
const LazyFadeInStack = defineAsyncComponent(() => import('../web/components/FadeInStack.vue'))
const LazyScrollCardGlass = defineAsyncComponent(() => import('../web/components/ScrollCardGlass.vue'))
const LazyScrollCardZoom = defineAsyncComponent(() => import('../web/components/ScrollCardZoom.vue'))

// Interactive Components
const LazyHolographic3D = defineAsyncComponent(() => import('../web/components/Holographic3D.vue'))
const LazyScrollTextMask = defineAsyncComponent(() => import('../web/components/ScrollTextMask.vue'))
const LazyScaleShapes = defineAsyncComponent(() => import('../web/components/ScaleShapes.vue'))
const LazyBouncingBall = defineAsyncComponent(() => import('../web/components/BouncingBall.vue'))
const LazyRotatingRings = defineAsyncComponent(() => import('../web/components/RotatingRings.vue'))
const LazyScrollReveal = defineAsyncComponent(() => import('../web/components/ScrollReveal.vue'))

// About Components
const LazyScrollTextBlur = defineAsyncComponent(() => import('../web/components/ScrollTextBlur.vue'))
const LazyTimeline = defineAsyncComponent(() => import('../web/components/Timeline.vue'))
const LazyScrollCardRotate3D = defineAsyncComponent(() => import('../web/components/ScrollCardRotate3D.vue'))

// Pricing Components
const LazyScrollNeonPulse = defineAsyncComponent(() => import('../web/components/ScrollNeonPulse.vue'))
const LazyStaggerGrid = defineAsyncComponent(() => import('../web/components/StaggerGrid.vue'))
const LazyScrollCardFloat = defineAsyncComponent(() => import('../web/components/ScrollCardFloat.vue'))
const LazyScrollCardBorder = defineAsyncComponent(() => import('../web/components/ScrollCardBorder.vue'))
const LazyScrollCardRipple = defineAsyncComponent(() => import('../web/components/ScrollCardRipple.vue'))
const LazyScrollElasticScale = defineAsyncComponent(() => import('../web/components/ScrollElasticScale.vue'))

// Contact Components
const LazyScrollShapeElastic = defineAsyncComponent(() => import('../web/components/ScrollShapeElastic.vue'))
const LazyScrollCard3D = defineAsyncComponent(() => import('../web/components/ScrollCard3D.vue'))
const LazyMorphingCards = defineAsyncComponent(() => import('../web/components/MorphingCards.vue'))

// Footer Components
const LazyScrollParallaxLayer = defineAsyncComponent(() => import('../web/components/ScrollParallaxLayer.vue'))
const LazyScrollTextGlow = defineAsyncComponent(() => import('../web/components/ScrollTextGlow.vue'))
const LazyScrollTextColumns = defineAsyncComponent(() => import('../web/components/ScrollTextColumns.vue'))

// Utility Components
const LazyCursorFollower = defineAsyncComponent(() => import('../web/components/ScrollCursorFollower.vue'))
const LazyScrollProgress = defineAsyncComponent(() => import('../web/components/ScrollProgress.vue'))

// Map Placeholder Component (simple div)
const LazyMapPlaceholder = defineAsyncComponent({
  loader: () => Promise.resolve({
    template: `<div class="map-container">
      <div class="map-placeholder-content">
        <div class="map-icon">🗺️</div>
        <p>地图加载中...</p>
      </div>
    </div>`
  })
})

// Data
const services = ref([
  { id: 1, icon: '🐕', title: '宠物护理', desc: '专业的日常护理服务' },
  { id: 2, icon: '🏥', title: '健康检查', desc: '定期健康体检服务' },
  { id: 3, icon: '✨', title: '宠物美容', desc: '高端美容造型服务' },
  { id: 4, icon: '🏠', title: '宠物寄养', desc: '安全舒适的寄养环境' },
  { id: 5, icon: '🎮', title: '宠物娱乐', desc: '丰富的娱乐活动' },
  { id: 6, icon: '🍖', title: '营养餐食', desc: '定制化营养餐食' }
])

const testimonials = ref([
  {
    text: 'Pet Paradise 为我的狗狗提供了最专业的护理，非常感谢！',
    name: '李明',
    pet: '金毛犬 🐕',
    avatar: '👤'
  },
  {
    text: '服务态度非常好，我的猫咪在这里玩得很开心！',
    name: '王芳',
    pet: '英短猫 🐱',
    avatar: '👩'
  },
  {
    text: '健康管理功能太棒了，实时掌握宠物健康状况！',
    name: '张伟',
    pet: '柯基犬 🐕',
    avatar: '👨'
  }
])

const milestones = ref([
  { year: '2010', title: '创立', desc: 'Pet Paradise 正式成立' },
  { year: '2015', title: '扩张', desc: '开设第10家分店' },
  { year: '2020', title: '创新', desc: '推出智能健康管理' },
  { year: '2026', title: '领先', desc: '成为行业领军企业' }
])

const pricing = ref([
  {
    name: '基础版',
    price: '99',
    features: ['基础护理', '定期体检', '在线咨询', '社区访问'],
    button: '选择方案'
  },
  {
    name: '标准版',
    price: '199',
    features: ['基础护理', '定期体检', '在线咨询', '社区访问', '宠物美容', '营养餐食'],
    button: '选择方案',
    featured: true
  },
  {
    name: '尊享版',
    price: '399',
    features: ['全部服务', '24/7护理', '专属顾问', '智能监控', '优先服务', '会员折扣'],
    button: '选择方案'
  }
])

// Methods
const scrollTo = (id: string) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const startJourney = () => {
  scrollTo('contact')
}
</script>

<style scoped lang="scss">
.pet-website {
  min-height: 100vh;
  background: linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%);
  overflow-x: hidden;
  position: relative;

  // Hero Section
  .hero-section {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 80px 20px;

    .hero-bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 0;
      opacity: 0.3;
    }

    .hero-content {
      z-index: 1;
      text-align: center;
      max-width: 800px;
      animation: fadeInUp 1s ease-out;

      h1 {
        font-size: 4rem;
        font-weight: 700;
        margin-bottom: 20px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }

      .hero-cta {
        margin-top: 40px;
        padding: 20px 60px;
        font-size: 1.2rem;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        border: none;
        border-radius: 50px;
        color: white;
        cursor: pointer;
        transition: all 0.3s ease;

        &:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);
        }
      }
    }

    .hero-paw-prints {
      position: absolute;
      bottom: 40px;
      width: 100%;
      text-align: center;
      font-size: 2rem;
      opacity: 0.6;
    }
  }

  // Stats Section
  .stats-section {
    padding: 100px 20px;
    background: rgba(255, 255, 255, 0.02);
    backdrop-filter: blur(10px);

    .section-title {
      text-align: center;
      font-size: 3rem;
      margin-bottom: 60px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 40px;
      max-width: 1200px;
      margin: 0 auto;
    }
  }

  // Pets Gallery
  .pets-section {
    padding: 100px 20px;

    .gallery-intro {
      text-align: center;
      max-width: 600px;
      margin: 0 auto 60px;

      p {
        font-size: 1.2rem;
        color: rgba(255, 255, 255, 0.7);
      }
    }

    .pets-gallery,
    .pets-carousel {
      margin-top: 60px;
    }
  }

  // Services Section
  .services-section {
    padding: 100px 20px;
    background: rgba(255, 255, 255, 0.02);
    backdrop-filter: blur(10px);

    .services-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 30px;
      max-width: 1200px;
      margin: 60px auto 0;

      .service-card {
        .service-icon {
          font-size: 3rem;
          margin-bottom: 20px;
        }

        h3 {
          font-size: 1.8rem;
          margin-bottom: 15px;
          color: #667eea;
        }

        p {
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.6;
        }
      }
    }
  }

  // Features Section
  .features-section {
    padding: 100px 20px;

    .features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 30px;
      max-width: 1200px;
      margin: 60px auto 0;

      .feature-item {
        .feature-front,
        .feature-back {
          padding: 40px;
          border-radius: 20px;
          text-align: center;
        }

        .feature-front {
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1));
          border: 1px solid rgba(102, 126, 234, 0.2);

          h3 {
            margin-top: 20px;
            font-size: 1.5rem;
          }
        }

        .feature-back {
          background: linear-gradient(135deg, #667eea, #764ba2);

          h3 {
            font-size: 1.5rem;
            margin-bottom: 10px;
          }

          p {
            color: rgba(255, 255, 255, 0.9);
          }
        }
      }
    }
  }

  // Testimonials Section
  .testimonials-section {
    padding: 100px 20px;
    background: rgba(255, 255, 255, 0.02);
    backdrop-filter: blur(10px);

    .testimonials-stack {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 30px;
      max-width: 1200px;
      margin: 60px auto 0;

      .testimonial-card {
        .testimonial-content {
          padding: 30px;

          .quote-icon {
            font-size: 4rem;
            color: rgba(102, 126, 234, 0.3);
            line-height: 1;
            margin-bottom: 20px;
          }

          p {
            font-size: 1.1rem;
            line-height: 1.8;
            color: rgba(255, 255, 255, 0.9);
            margin-bottom: 30px;
          }

          .user-info {
            display: flex;
            align-items: center;
            gap: 15px;

            .user-avatar {
              width: 60px;
              height: 60px;
              border-radius: 50%;
              background: linear-gradient(135deg, #667eea, #764ba2);
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 2rem;
            }

            .user-details {
              h4 {
                margin: 0;
                color: #fff;
              }

              span {
                color: rgba(255, 255, 255, 0.6);
                font-size: 0.9rem;
              }
            }
          }
        }
      }
    }
  }

  // Interactive Section
  .interactive-section {
    padding: 100px 20px;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    .hologram-container {
      width: 100%;
      max-width: 1200px;
    }

    .interactive-content {
      text-align: center;

      .interactive-elements {
        margin-top: 40px;

        p {
          font-size: 1.3rem;
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 30px;
        }

        .start-btn {
          padding: 20px 50px;
          font-size: 1.2rem;
          background: linear-gradient(135deg, #667eea, #764ba2);
          border: none;
          border-radius: 50px;
          color: white;
          cursor: pointer;
          transition: all 0.3s ease;

          &:hover {
            transform: scale(1.05);
            box-shadow: 0 10px 30px rgba(102, 126, 234, 0.5);
          }
        }
      }
    }
  }

  // About Section
  .about-section {
    padding: 100px 20px;
    background: rgba(255, 255, 255, 0.02);
    backdrop-filter: blur(10px);

    .company-timeline {
      max-width: 1200px;
      margin: 60px auto 0;

      .timeline-item {
        margin-bottom: 40px;

        .milestone-card {
          padding: 40px;
          border-radius: 20px;
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1));
          border: 1px solid rgba(102, 126, 234, 0.2);

          .milestone-year {
            font-size: 2.5rem;
            font-weight: 700;
            background: linear-gradient(135deg, #667eea, #764ba2);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 15px;
          }

          h3 {
            font-size: 1.8rem;
            margin-bottom: 15px;
            color: #667eea;
          }

          p {
            color: rgba(255, 255, 255, 0.7);
            line-height: 1.6;
          }
        }
      }
    }
  }

  // Pricing Section
  .pricing-section {
    padding: 100px 20px;

    .pricing-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 30px;
      max-width: 1200px;
      margin: 60px auto 0;

      .pricing-card {
        border-radius: 20px;
        overflow: hidden;
        transition: transform 0.3s ease;

        &.featured {
          transform: scale(1.05);
          box-shadow: 0 20px 50px rgba(102, 126, 234, 0.3);

          .pricing-header {
            background: linear-gradient(135deg, #667eea, #764ba2);
          }
        }

        .pricing-header {
          padding: 40px;
          text-align: center;
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.2), rgba(118, 75, 162, 0.2));

          h3 {
            font-size: 1.8rem;
            margin-bottom: 20px;
          }

          .price {
            font-size: 3rem;
            font-weight: 700;

            .currency {
              font-size: 1.5rem;
            }

            .amount {
              background: linear-gradient(135deg, #667eea, #764ba2);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              background-clip: text;
            }

            .period {
              font-size: 1rem;
              color: rgba(255, 255, 255, 0.6);
            }
          }
        }

        .pricing-features {
          list-style: none;
          padding: 30px 40px;

          li {
            padding: 15px 0;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            color: rgba(255, 255, 255, 0.8);
            display: flex;
            align-items: center;
            gap: 10px;

            &:last-child {
              border-bottom: none;
            }
          }
        }

        .pricing-btn {
          width: calc(100% - 80px);
          margin: 0 40px 30px;
          padding: 15px;
          background: linear-gradient(135deg, #667eea, #764ba2);
          border: none;
          border-radius: 10px;
          color: white;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;

          &:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);
          }
        }
      }
    }
  }

  // Contact Section
  .contact-section {
    padding: 100px 20px;
    background: rgba(255, 255, 255, 0.02);
    backdrop-filter: blur(10px);

    .contact-cards {
      max-width: 800px;
      margin: 60px auto 40px;

      .contact-form {
        padding: 50px;
        border-radius: 20px;
        background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1));
        border: 1px solid rgba(102, 126, 234, 0.2);

        input,
        textarea {
          width: 100%;
          padding: 15px 20px;
          margin-bottom: 20px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(102, 126, 234, 0.3);
          border-radius: 10px;
          color: white;
          font-size: 1rem;
          transition: all 0.3s ease;

          &::placeholder {
            color: rgba(255, 255, 255, 0.4);
          }

          &:focus {
            outline: none;
            border-color: #667eea;
            box-shadow: 0 0 20px rgba(102, 126, 234, 0.3);
          }
        }

        .submit-btn {
          width: 100%;
          padding: 15px;
          background: linear-gradient(135deg, #667eea, #764ba2);
          border: none;
          border-radius: 10px;
          color: white;
          font-size: 1.1rem;
          cursor: pointer;
          transition: all 0.3s ease;

          &:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);
          }
        }
      }
    }

    .map-placeholder {
      max-width: 1200px;
      margin: 0 auto;
      height: 400px;
      border-radius: 20px;
      overflow: hidden;

      .map-container {
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1));
        border: 1px solid rgba(102, 126, 234, 0.2);
        display: flex;
        align-items: center;
        justify-content: center;

        .map-placeholder-content {
          text-align: center;

          .map-icon {
            font-size: 4rem;
            margin-bottom: 20px;
          }

          p {
            color: rgba(255, 255, 255, 0.6);
          }
        }
      }
    }
  }

  // Footer Section
  .footer-section {
    padding: 80px 20px 40px;
    background: rgba(0, 0, 0, 0.3);

    .footer-content {
      max-width: 1200px;
      margin: 0 auto;

      h2 {
        text-align: center;
        font-size: 2.5rem;
        margin-bottom: 60px;
        background: linear-gradient(135deg, #667eea, #764ba2);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }

      .footer-links {
        h4 {
          font-size: 1.2rem;
          margin-bottom: 20px;
          color: #667eea;
        }

        a {
          display: block;
          color: rgba(255, 255, 255, 0.6);
          text-decoration: none;
          padding: 8px 0;
          transition: all 0.3s ease;

          &:hover {
            color: #667eea;
            transform: translateX(5px);
          }
        }
      }

      .footer-bottom {
        text-align: center;
        margin-top: 60px;
        padding-top: 30px;
        border-top: 1px solid rgba(255, 255, 255, 0.1);

        p {
          color: rgba(255, 255, 255, 0.4);
        }
      }
    }
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

// Responsive
@media (max-width: 768px) {
  .pet-website {
    .hero-section {
      .hero-content {
        h1 {
          font-size: 2.5rem;
        }

        .hero-cta {
          padding: 15px 40px;
          font-size: 1rem;
        }
      }
    }

    .stats-section,
    .pets-section,
    .services-section,
    .features-section,
    .testimonials-section,
    .about-section,
    .pricing-section,
    .contact-section {
      padding: 60px 20px;

      .section-title {
        font-size: 2rem;
      }
    }

    .pricing-card.featured {
      transform: scale(1);
    }
  }
}
</style>

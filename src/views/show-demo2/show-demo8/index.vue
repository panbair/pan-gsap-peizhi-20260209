<template>
  <div class="website-container">
    <!-- 导航栏 -->
    <nav class="navbar">
      <div class="nav-logo">TechVision</div>
      <div class="nav-links">
        <a href="#home" class="nav-link">首页</a>
        <a href="#about" class="nav-link">关于</a>
        <a href="#services" class="nav-link">服务</a>
        <a href="#portfolio" class="nav-link">案例</a>
        <a href="#contact" class="nav-link">联系</a>
      </div>
      <button class="nav-button">立即咨询</button>
    </nav>

    <!-- 首屏 Hero Section -->
    <section id="home" class="section hero-section vertical">
      <div class="hero-bg"></div>
      <div class="hero-content">
        <div class="hero-badge">
          <span class="badge-icon">✨</span>
          <span class="badge-text">十年专注技术创新</span>
        </div>
        <h1 class="hero-title">
          <span class="title-line">用科技驱动未来</span>
          <span class="title-line">用创新改变世界</span>
        </h1>
        <p class="hero-subtitle">
          我们是一家领先的技术解决方案提供商，专注于为全球企业提供<br/>
          全方位的数字化转型服务，助力企业在数字经济时代蓬勃发展
        </p>
        <div class="hero-stats">
          <div class="hero-stat">
            <span class="hero-stat-number">500+</span>
            <span class="hero-stat-label">企业客户</span>
          </div>
          <div class="hero-stat-divider"></div>
          <div class="hero-stat">
            <span class="hero-stat-number">1000+</span>
            <span class="hero-stat-label">成功案例</span>
          </div>
          <div class="hero-stat-divider"></div>
          <div class="hero-stat">
            <span class="hero-stat-number">98%</span>
            <span class="hero-stat-label">客户满意度</span>
          </div>
        </div>
        <div class="hero-buttons">
          <button class="hero-btn primary">开始合作</button>
          <button class="hero-btn secondary">
            <span class="btn-icon">▶</span>
            观看视频
          </button>
        </div>
        <div class="hero-features">
          <div class="feature-item">
            <span class="feature-icon">🚀</span>
            <span class="feature-text">快速交付</span>
          </div>
          <div class="feature-item">
            <span class="feature-icon">🛡️</span>
            <span class="feature-text">安全保障</span>
          </div>
          <div class="feature-item">
            <span class="feature-icon">💡</span>
            <span class="feature-text">持续创新</span>
          </div>
        </div>
      </div>
      <div class="hero-decoration">
        <div class="deco-circle circle-1"></div>
        <div class="deco-circle circle-2"></div>
        <div class="deco-circle circle-3"></div>
        <div class="deco-circle circle-4"></div>
        <div class="floating-shape shape-1"></div>
        <div class="floating-shape shape-2"></div>
        <div class="floating-shape shape-3"></div>
      </div>
    </section>

    <!-- 关于我们 -->
    <section id="about" class="section about-section vertical">
      <div class="container">
        <div class="about-content">
          <div class="about-text">
            <h2 class="section-title">关于我们</h2>
            <p class="section-subtitle">专注技术创新，赋能企业发展</p>
            <p class="about-description">
              TechVision 成立于2014年，是一家总部位于北京的高新技术企业。我们拥有一支由50余名资深技术专家组成的专业团队，
              在人工智能、云计算、大数据、区块链等前沿技术领域拥有深厚的技术积累和丰富的实战经验。
            </p>
            <p class="about-description">
              多年来，我们始终坚持"以客户为中心"的服务理念，为超过500家企业客户提供了优质的技术解决方案，
              涵盖金融、医疗、教育、零售、制造等多个行业领域，帮助客户实现数字化转型，提升核心竞争力。
            </p>
            <div class="about-advantages">
              <div class="advantage-item">
                <div class="advantage-icon">
                  <span class="adv-emoji">🎯</span>
                </div>
                <h4 class="advantage-title">精准定位</h4>
                <p class="advantage-desc">深入了解客户需求，提供定制化解决方案</p>
              </div>
              <div class="advantage-item">
                <div class="advantage-icon">
                  <span class="adv-emoji">⚡</span>
                </div>
                <h4 class="advantage-title">高效执行</h4>
                <p class="advantage-desc">敏捷开发流程，快速响应，按时交付</p>
              </div>
              <div class="advantage-item">
                <div class="advantage-icon">
                  <span class="adv-emoji">🔒</span>
                </div>
                <h4 class="advantage-title">安全可靠</h4>
                <p class="advantage-desc">严格的质量控制，保障系统稳定运行</p>
              </div>
              <div class="advantage-item">
                <div class="advantage-icon">
                  <span class="adv-emoji">🔄</span>
                </div>
                <h4 class="advantage-title">持续迭代</h4>
                <p class="advantage-desc">持续优化升级，提供长期技术支持</p>
              </div>
            </div>
            <div class="about-stats">
              <div class="stat-item">
                <span class="stat-number" data-target="500">0</span>
                <span class="stat-label">+</span>
                <p class="stat-name">企业客户</p>
              </div>
              <div class="stat-item">
                <span class="stat-number" data-target="1000">0</span>
                <span class="stat-label">+</span>
                <p class="stat-name">成功案例</p>
              </div>
              <div class="stat-item">
                <span class="stat-number" data-target="50">0</span>
                <span class="stat-label">+</span>
                <p class="stat-name">技术专家</p>
              </div>
              <div class="stat-item">
                <span class="stat-number" data-target="10">0</span>
                <span class="stat-label">年+</span>
                <p class="stat-name">行业经验</p>
              </div>
            </div>
          </div>
          <div class="about-image">
            <div class="image-wrapper">
              <div class="image-box box-1">
                <div class="box-content">
                  <span class="box-icon">🌟</span>
                  <h4 class="box-title">创新精神</h4>
                  <p class="box-desc">持续探索前沿技术</p>
                </div>
              </div>
              <div class="image-box box-2">
                <div class="box-content">
                  <span class="box-icon">🤝</span>
                  <h4 class="box-title">客户至上</h4>
                  <p class="box-desc">用心服务每一位客户</p>
                </div>
              </div>
              <div class="image-box box-3">
                <div class="box-content">
                  <span class="box-icon">🏆</span>
                  <h4 class="box-title">追求卓越</h4>
                  <p class="box-desc">打造行业标杆产品</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 服务项目 -->
    <section id="services" class="section services-section vertical">
      <div class="container">
        <h2 class="section-title">我们的服务</h2>
        <p class="section-subtitle">全方位的技术解决方案，满足企业多元化需求</p>
        <div class="services-grid">
          <div class="service-card">
            <div class="service-icon icon-1"></div>
            <h3 class="service-title">网站开发</h3>
            <p class="service-desc">
              提供从需求分析、UI设计到开发部署的全流程网站建设服务，打造高品质、响应式、SEO友好的现代网站，助力企业建立线上品牌形象。
            </p>
            <ul class="service-features">
              <li>响应式设计，多端适配</li>
              <li>SEO优化，提升搜索排名</li>
              <li>高性能架构，秒级加载</li>
              <li>安全保障，数据加密传输</li>
            </ul>
            <a href="#" class="service-link">了解更多 →</a>
          </div>
          <div class="service-card">
            <div class="service-icon icon-2"></div>
            <h3 class="service-title">移动应用</h3>
            <p class="service-desc">
              专业开发iOS、Android原生应用及跨平台应用，为用户提供流畅的移动端体验，涵盖电商、社交、工具等多个应用场景。
            </p>
            <ul class="service-features">
              <li>原生开发，极致性能</li>
              <li>跨平台方案，降本增效</li>
              <li>用户体验优先设计</li>
              <li>完整测试，稳定可靠</li>
            </ul>
            <a href="#" class="service-link">了解更多 →</a>
          </div>
          <div class="service-card">
            <div class="service-icon icon-3"></div>
            <h3 class="service-title">云服务</h3>
            <p class="service-desc">
              基于阿里云、腾讯云、AWS等主流云平台，提供云架构设计、云迁移、云运维等一站式云服务，帮助企业实现上云转型。
            </p>
            <ul class="service-features">
              <li>弹性伸缩，按需付费</li>
              <li>多云架构，避免厂商锁定</li>
              <li>自动化运维，降低成本</li>
              <li>灾备方案，数据安全</li>
            </ul>
            <a href="#" class="service-link">了解更多 →</a>
          </div>
          <div class="service-card">
            <div class="service-icon icon-4"></div>
            <h3 class="service-title">数据分析</h3>
            <p class="service-desc">
              提供大数据采集、存储、分析、可视化的一体化解决方案，帮助企业挖掘数据价值，驱动业务决策，提升运营效率。
            </p>
            <ul class="service-features">
              <li>实时数据采集与处理</li>
              <li>智能数据可视化大屏</li>
              <li>AI驱动的数据分析</li>
              <li>数据仓库建设与优化</li>
            </ul>
            <a href="#" class="service-link">了解更多 →</a>
          </div>
          <div class="service-card">
            <div class="service-icon icon-5"></div>
            <h3 class="service-title">AI 解决方案</h3>
            <p class="service-desc">
              基于深度学习、自然语言处理、计算机视觉等AI技术，为企业提供智能客服、图像识别、智能推荐等AI应用服务。
            </p>
            <ul class="service-features">
              <li>智能客服，24小时在线</li>
              <li>OCR识别，票据自动化</li>
              <li>智能推荐，提升转化</li>
              <li>人脸识别，安全认证</li>
            </ul>
            <a href="#" class="service-link">了解更多 →</a>
          </div>
          <div class="service-card">
            <div class="service-icon icon-6"></div>
            <h3 class="service-title">技术咨询</h3>
            <p class="service-desc">
              提供专业的技术架构咨询、技术选型建议、性能优化方案、安全评估等服务，帮助企业构建稳定、高效、安全的技术体系。
            </p>
            <ul class="service-features">
              <li>技术架构设计与评审</li>
              <li>性能诊断与优化</li>
              <li>安全评估与加固</li>
              <li>技术培训与赋能</li>
            </ul>
            <a href="#" class="service-link">了解更多 →</a>
          </div>
        </div>
      </div>
    </section>

    <!-- 精选案例 -->
    <section id="portfolio" class="section portfolio-section vertical">
      <div class="container">
        <h2 class="section-title">精选案例</h2>
        <p class="section-subtitle">用实力说话，展示我们的优秀作品</p>
        <div class="portfolio-grid">
          <div class="portfolio-item item-1">
            <div class="portfolio-overlay">
              <div class="portfolio-tag">金融科技</div>
              <h3 class="portfolio-title">金融科技平台</h3>
              <p class="portfolio-desc">
                为某大型国有银行打造的综合金融服务平台，整合了智能投顾、在线借贷、风险管理等核心功能，
                日均处理交易量超过100万笔，用户满意度达99%。
              </p>
              <div class="portfolio-meta">
                <span class="meta-tag">移动端</span>
                <span class="meta-tag">AI智能</span>
                <span class="meta-tag">大数据</span>
              </div>
              <button class="portfolio-btn">查看详情</button>
            </div>
          </div>
          <div class="portfolio-item item-2">
            <div class="portfolio-overlay">
              <div class="portfolio-tag">智慧城市</div>
              <h3 class="portfolio-title">智慧城市系统</h3>
              <p class="portfolio-desc">
                为某一线城市建设的智慧城市数据可视化平台，整合交通、环境、治安等多维度数据，
                实时监控城市运行状态，为政府决策提供数据支撑，覆盖城市面积超过2000平方公里。
              </p>
              <div class="portfolio-meta">
                <span class="meta-tag">数据可视化</span>
                <span class="meta-tag">物联网</span>
                <span class="meta-tag">实时监控</span>
              </div>
              <button class="portfolio-btn">查看详情</button>
            </div>
          </div>
          <div class="portfolio-item item-3">
            <div class="portfolio-overlay">
              <div class="portfolio-tag">电商零售</div>
              <h3 class="portfolio-title">电商解决方案</h3>
              <p class="portfolio-desc">
                为知名零售企业打造的一站式电商平台，支持B2C、B2B、O2O多种业务模式，
                集成了智能推荐、直播带货、社交分享等功能，年交易额突破50亿元。
              </p>
              <div class="portfolio-meta">
                <span class="meta-tag">全渠道</span>
                <span class="meta-tag">直播带货</span>
                <span class="meta-tag">智能推荐</span>
              </div>
              <button class="portfolio-btn">查看详情</button>
            </div>
          </div>
          <div class="portfolio-item item-4">
            <div class="portfolio-overlay">
              <div class="portfolio-tag">医疗健康</div>
              <h3 class="portfolio-title">医疗健康APP</h3>
              <p class="portfolio-desc">
                为三甲医院开发的智能医疗健康管理应用，提供在线问诊、预约挂号、电子病历、健康档案等功能，
                日活用户超过50万，有效缓解了医院就诊压力。
              </p>
              <div class="portfolio-meta">
                <span class="meta-tag">移动应用</span>
                <span class="meta-tag">医疗物联网</span>
                <span class="meta-tag">AI诊断</span>
              </div>
              <button class="portfolio-btn">查看详情</button>
            </div>
          </div>
          <div class="portfolio-item item-5">
            <div class="portfolio-overlay">
              <div class="portfolio-tag">在线教育</div>
              <h3 class="portfolio-title">教育在线平台</h3>
              <p class="portfolio-desc">
                为教育集团打造的在线教育直播互动平台，支持万人同时在线上课，
                集成了白板互动、实时答题、分组讨论等功能，注册学生超过200万。
              </p>
              <div class="portfolio-meta">
                <span class="meta-tag">直播互动</span>
                <span class="meta-tag">音视频</span>
                <span class="meta-tag">实时通信</span>
              </div>
              <button class="portfolio-btn">查看详情</button>
            </div>
          </div>
          <div class="portfolio-item item-6">
            <div class="portfolio-overlay">
              <div class="portfolio-tag">物联网</div>
              <h3 class="portfolio-title">物联网解决方案</h3>
              <p class="portfolio-desc">
                为制造业企业打造的智能设备管理与监控系统，实现了生产设备的远程监控、故障预警、预测性维护，
                帮助企业降低30%的设备维护成本，提升20%的生产效率。
              </p>
              <div class="portfolio-meta">
                <span class="meta-tag">工业物联网</span>
                <span class="meta-tag">边缘计算</span>
                <span class="meta-tag">数据分析</span>
              </div>
              <button class="portfolio-btn">查看详情</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 联系我们 -->
    <section id="contact" class="section contact-section vertical">
      <div class="container">
        <h2 class="section-title">联系我们</h2>
        <p class="section-subtitle">期待与您的合作，共创美好未来</p>
        <div class="contact-content">
          <div class="contact-info">
            <div class="info-item">
              <div class="info-icon icon-location"></div>
              <div class="info-text">
                <h4>公司地址</h4>
                <p>北京市朝阳区科技园创新大厦A座12层</p>
                <p class="info-sub">邮编：100020</p>
              </div>
            </div>
            <div class="info-item">
              <div class="info-icon icon-phone"></div>
              <div class="info-text">
                <h4>联系电话</h4>
                <p>400-888-8888（全国免费热线）</p>
                <p class="info-sub">010-88886666（北京总部）</p>
              </div>
            </div>
            <div class="info-item">
              <div class="info-icon icon-email"></div>
              <div class="info-text">
                <h4>电子邮箱</h4>
                <p>contact@techvision.com</p>
                <p class="info-sub">business@techvision.com</p>
              </div>
            </div>
            <div class="info-item">
              <div class="info-icon icon-time"></div>
              <div class="info-text">
                <h4>工作时间</h4>
                <p>周一至周五 9:00 - 18:00</p>
                <p class="info-sub">周末及法定节假日休息</p>
              </div>
            </div>
          </div>
          <div class="contact-form">
            <div class="form-header">
              <h3>在线留言</h3>
              <p>填写下方表单，我们将在24小时内与您联系</p>
            </div>
            <form>
              <input type="text" placeholder="您的姓名 *" class="form-input" />
              <input type="email" placeholder="您的邮箱 *" class="form-input" />
              <input type="text" placeholder="联系电话" class="form-input" />
              <input type="text" placeholder="公司名称" class="form-input" />
              <select class="form-select">
                <option value="">请选择咨询类型</option>
                <option value="web">网站开发</option>
                <option value="app">移动应用</option>
                <option value="cloud">云服务</option>
                <option value="ai">AI解决方案</option>
                <option value="consult">技术咨询</option>
                <option value="other">其他</option>
              </select>
              <textarea placeholder="请描述您的需求或问题 *" class="form-textarea"></textarea>
              <button type="submit" class="form-submit">
                <span class="submit-icon">📨</span>
                发送消息
              </button>
            </form>
          </div>
        </div>
        <div class="contact-map">
          <div class="map-placeholder">
            <span class="map-icon">📍</span>
            <h4>公司位置</h4>
            <p>北京市朝阳区科技园创新大厦</p>
            <button class="map-button">查看地图</button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { onMounted, nextTick } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)



// 防抖函数
const createDebouncedFn = (fn: Function, delay: number, id: string) => {
  let timer: any = null
  return (...args: any[]) => {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => fn(...args), delay)
  }
}

// 清理所有动画
const killAllAnimation = ({ keepScrollPosition }: { keepScrollPosition?: boolean } = {}) => {
  const scrollPos = keepScrollPosition ? window.pageYOffset : 0
  gsap.killTweensOf('*')
  ScrollTrigger.getAll().forEach(st => st.kill())
  if (keepScrollPosition && scrollPos) {
    window.scrollTo(0, scrollPos)
  }
}

// 参考的垂直滚动动画模式
const verticalAnimation = async (selector: string, runStyle: any) => {
  try {
    if (!selector || !runStyle) return

    const toKey = runStyle.toKey || 'from'
    delete runStyle.toKey

    // 创建滚动触发动画
    gsap[toKey](selector, {
      ...runStyle,
      scrollTrigger: {
        trigger: selector,
        scrub: 1,
        markers: false,
        start: 'top 100%',
        end: 'bottom 100%'
      }
    })
  } catch (error) {
    console.error('纵向动画创建失败:', error)
  }
}

// 单页横向滚动
let globalTimeline: any = null
let globalScrollTriggerInstance: any = null

const horizontalScrollAnimation = (className = 'vertical') => {
  ScrollTrigger.refresh()

  let panels: any[] = []
  let originalStyles: Map<string, any> = new Map()
  let layerRef: any = null
  let layerOptions: any = {}
  let panelOptions: any = {}
  let onResize: any = null

  const cleanup = () => {
    if (onResize) {
      window.removeEventListener('resize', onResize)
    }

    // 恢复layer原始样式
    if (layerRef && Object.keys(layerOptions).length) {
      Object.entries(layerOptions).forEach(([key, value]) => {
        layerRef.style[key] = value
      })
    }

    // 恢复panels原始样式
    panels.forEach((panel) => {
      const panelId = panel.id || ''
      if (panelId && panelOptions[panelId]) {
        Object.entries(panelOptions[panelId]).forEach(([key, value]) => {
          panel.style[key] = value
        })
      }
      // 清理transform和opacity
      panel.style.transform = ''
      panel.style.opacity = ''
    })

    // 清理ScrollTrigger
    globalScrollTriggerInstance?.kill?.()
    globalScrollTriggerInstance = null

    // 清理timeline
    if (globalTimeline) {
      globalTimeline.clear(true)
      globalTimeline.kill(true)
      globalTimeline = null
    }

    killAllAnimation({ keepScrollPosition: true })
  }

  const getOriginalStyles = (element: any, defaults: any) => {
    const computed = window.getComputedStyle(element)
    const style: any = {}
    for (let key in defaults) {
      style[key] = computed[key]
    }
    return style
  }

  nextTick(() => {
    const layerStyle = {
      width: '100vw',
      height: '100vh',
      position: 'relative',
      overflow: 'hidden',
      whiteSpace: 'nowrap'
    }

    const panelStyle = {
      width: '100vw',
      height: '100vh',
      display: 'inline-block',
      verticalAlign: 'top'
    }

    panels = gsap.utils.toArray(`.${className}`) || []
    if (panels.length <= 1) return

    layerRef = document.querySelector('.website-container')
    if (!layerRef) return

    // 保存并应用layer样式
    layerOptions = getOriginalStyles(layerRef, layerStyle)
    Object.entries(layerStyle).forEach(([key, value]) => {
      layerRef.style[key] = value
    })

    // 保存并应用panels样式 - 横向排列
    panels.forEach((panel, index) => {
      const panelId = panel.id || `panel-${Math.random().toString(36).substr(2, 9)}`
      panelOptions[panelId] = getOriginalStyles(panel, panelStyle)
      Object.entries(panelStyle).forEach(([key, value]) => {
        panel.style[key] = value
      })
    })

    // 创建横向移动动画 - 一页一页滚动，带吸附效果
    const totalWidth = panels.length * window.innerWidth
    gsap.to(panels, {
      x: -totalWidth + window.innerWidth,
      ease: 'none',
      scrollTrigger: {
        trigger: layerRef,
        start: 'top top',
        end: '+=' + totalWidth,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        snap: {
          snapTo: 1 / (panels.length - 1),
          inertia: false,
          duration: { min: 0.5, max: 0.8 },
          ease: 'power2.out'
        }
      }
    })

    // 防抖的resize处理
    onResize = createDebouncedFn(() => {
      ScrollTrigger.refresh()
    }, 100, 'horizontal-resize')

    window.addEventListener('resize', onResize)
  })

  return cleanup
}

onMounted(() => {
  // 启动单页横向滚动
  const cleanupHorizontalScroll = horizontalScrollAnimation()

  // 导航栏动画
  gsap.from('.navbar', {
    y: -100,
    opacity: 0,
    duration: 1,
    ease: 'power3.out'
  })

  // Hero 区域动画 - 使用垂直滚动动画
  verticalAnimation('.hero-bg', {
    scale: 1.2,
    opacity: 0,
    duration: 1.5,
    toKey: 'from'
  })

  verticalAnimation('.hero-badge', {
    y: 30,
    opacity: 0,
    duration: 0.6,
    toKey: 'from'
  })

  verticalAnimation('.title-line', {
    y: 80,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    toKey: 'from'
  })

  verticalAnimation('.hero-subtitle', {
    y: 40,
    opacity: 0,
    duration: 0.8,
    toKey: 'from'
  })

  verticalAnimation('.hero-stat', {
    y: 30,
    opacity: 0,
    duration: 0.6,
    stagger: 0.1,
    toKey: 'from'
  })

  verticalAnimation('.hero-stat-divider', {
    scaleY: 0,
    opacity: 0,
    duration: 0.4,
    stagger: 0.1,
    toKey: 'from'
  })

  verticalAnimation('.hero-btn', {
    y: 30,
    opacity: 0,
    duration: 0.6,
    stagger: 0.15,
    toKey: 'from'
  })

  verticalAnimation('.feature-item', {
    y: 30,
    opacity: 0,
    duration: 0.5,
    stagger: 0.1,
    toKey: 'from'
  })

  // 装饰圆形动画
  verticalAnimation('.deco-circle', {
    scale: 0,
    opacity: 0,
    duration: 1.2,
    stagger: 0.2,
    toKey: 'from'
  })

  // 浮动形状动画
  verticalAnimation('.floating-shape', {
    scale: 0,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    toKey: 'from'
  })

  // 装饰圆形持续动画
  gsap.to('.circle-1', {
    rotate: 360,
    duration: 20,
    repeat: -1,
    ease: 'none'
  })
  gsap.to('.circle-2', {
    rotate: -360,
    duration: 25,
    repeat: -1,
    ease: 'none'
  })
  gsap.to('.circle-3', {
    y: -30,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: 'power1.inOut'
  })

  // 浮动形状持续动画
  gsap.to('.shape-1', {
    y: -20,
    duration: 3,
    repeat: -1,
    yoyo: true,
    ease: 'power1.inOut'
  })
  gsap.to('.shape-2', {
    y: -15,
    rotate: 180,
    duration: 4,
    repeat: -1,
    yoyo: true,
    ease: 'power1.inOut'
  })
  gsap.to('.shape-3', {
    y: -25,
    rotate: 360,
    duration: 5,
    repeat: -1,
    yoyo: true,
    ease: 'power1.inOut'
  })

  // 关于我们 - 使用垂直滚动动画
  verticalAnimation('.about-text', {
    x: -100,
    opacity: 0,
    duration: 1,
    toKey: 'from'
  })

  verticalAnimation('.about-image', {
    x: 100,
    opacity: 0,
    duration: 1,
    toKey: 'from'
  })

  // 优势项动画
  verticalAnimation('.advantage-item', {
    y: 40,
    opacity: 0,
    duration: 0.6,
    stagger: 0.1,
    toKey: 'from'
  })

  // 统计数字动画
  verticalAnimation('.stat-item', {
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    toKey: 'from'
  })

  // 图片盒子动画
  verticalAnimation('.image-box', {
    scale: 0,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    toKey: 'from'
  })

  // 数字增长动画
  const statNumbers = document.querySelectorAll('.stat-number')
  statNumbers.forEach((stat) => {
    const target = parseInt(stat.getAttribute('data-target') || '0')
    gsap.to(stat, {
      scrollTrigger: {
        trigger: '.about-stats',
        start: 'top 85%'
      },
      innerText: target,
      duration: 2,
      ease: 'power2.out',
      snap: { innerText: 1 },
      onUpdate: function() {
        this.targets()[0].innerHTML = Math.ceil(this.targets()[0].innerText)
      }
    })
  })

  // 服务卡片 - 使用垂直滚动动画
  verticalAnimation('.service-card', {
    y: 80,
    opacity: 0,
    duration: 0.8,
    stagger: 0.1,
    toKey: 'from'
  })

  // 案例项目 - 使用垂直滚动动画
  verticalAnimation('.portfolio-item', {
    y: 100,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    toKey: 'from'
  })

  // 案例项目悬停效果
  document.querySelectorAll('.portfolio-item').forEach(item => {
    const overlay = item.querySelector('.portfolio-overlay')
    item.addEventListener('mouseenter', () => {
      gsap.to(overlay, {
        opacity: 1,
        duration: 0.4,
        ease: 'power2.out'
      })
      gsap.fromTo(overlay.querySelector('.portfolio-tag'),
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.3, ease: 'power2.out', delay: 0.1 }
      )
      gsap.fromTo(overlay.querySelector('.portfolio-title'),
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, ease: 'power2.out', delay: 0.15 }
      )
      gsap.fromTo(overlay.querySelector('.portfolio-desc'),
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, ease: 'power2.out', delay: 0.2 }
      )
      gsap.fromTo(overlay.querySelectorAll('.meta-tag'),
        { y: 10, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.3, stagger: 0.05, ease: 'power2.out', delay: 0.3 }
      )
      gsap.fromTo(overlay.querySelector('.portfolio-btn'),
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, ease: 'power2.out', delay: 0.4 }
      )
    })
    item.addEventListener('mouseleave', () => {
      gsap.to(overlay, {
        opacity: 0,
        duration: 0.3,
        ease: 'power2.out'
      })
    })
  })

  // 联系信息 - 使用垂直滚动动画
  verticalAnimation('.contact-info', {
    x: -80,
    opacity: 0,
    duration: 1,
    toKey: 'from'
  })

  verticalAnimation('.contact-form', {
    x: 80,
    opacity: 0,
    duration: 1,
    toKey: 'from'
  })

  // 联系信息项动画
  verticalAnimation('.info-item', {
    x: -50,
    opacity: 0,
    duration: 0.6,
    stagger: 0.15,
    toKey: 'from'
  })

  // 表单输入框动画
  verticalAnimation('.form-header', {
    y: 20,
    opacity: 0,
    duration: 0.5,
    toKey: 'from'
  })

  verticalAnimation('.form-input, .form-select, .form-textarea, .form-submit', {
    y: 30,
    opacity: 0,
    duration: 0.6,
    stagger: 0.1,
    toKey: 'from'
  })

  // 地图占位符动画
  verticalAnimation('.map-placeholder', {
    y: 40,
    opacity: 0,
    duration: 0.8,
    toKey: 'from'
  })

  // 服务卡片悬停效果
  document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      gsap.to(card, {
        y: -10,
        boxShadow: '0 25px 50px rgba(0,0,0,0.15)',
        duration: 0.3,
        ease: 'power2.out'
      })
      gsap.to(card.querySelector('.service-icon'), {
        scale: 1.2,
        rotate: 5,
        duration: 0.3,
        ease: 'back.out(1.7)'
      })
    })
    card.addEventListener('mouseleave', () => {
      gsap.to(card, {
        y: 0,
        boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
        duration: 0.3,
        ease: 'power2.out'
      })
      gsap.to(card.querySelector('.service-icon'), {
        scale: 1,
        rotate: 0,
        duration: 0.3,
        ease: 'power2.out'
      })
    })
  })

  // 服务图标持续动画
  gsap.to('.service-icon', {
    scale: 1.1,
    duration: 1.5,
    repeat: -1,
    yoyo: true,
    ease: 'power1.inOut',
    stagger: {
      each: 0.2,
      from: 'random'
    }
  })

  // 表单输入框焦点动画
  document.querySelectorAll('.form-input, .form-select, .form-textarea').forEach(input => {
    input.addEventListener('focus', () => {
      gsap.to(input, {
        boxShadow: '0 0 0 3px rgba(102, 126, 234, 0.3)',
        scale: 1.02,
        duration: 0.3,
        ease: 'power2.out'
      })
    })
    input.addEventListener('blur', () => {
      gsap.to(input, {
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        scale: 1,
        duration: 0.3,
        ease: 'power2.out'
      })
    })
  })

  // 平滑滚动到指定section - 横向滚动动画适配
  const scrollToSection = (index: number) => {
    const hrefMap = ['#home', '#about', '#services', '#portfolio', '#contact']
    const href = hrefMap[index]

    if (!href) return

    // 找到对应的section索引
    const sections = Array.from(document.querySelectorAll('.section.vertical')) as HTMLElement[]

    let targetIndex = -1
    for (let i = 0; i < sections.length; i++) {
      if (sections[i].id === href.substring(1)) {
        targetIndex = i
        break
      }
    }

    if (targetIndex === -1) return

    console.log('横向滚动到:', {
      href,
      targetIndex,
      windowWidth: window.innerWidth
    })

    // 计算垂直滚动位置
    // ScrollTrigger使用垂直滚动来控制水平移动
    // 每个section对应的垂直滚动距离是 (totalWidth / (panels.length - 1))
    const panels = gsap.utils.toArray('.section.vertical')
    const totalWidth = panels.length * window.innerWidth
    const scrollPerSection = totalWidth / (panels.length - 1)
    const scrollPosition = targetIndex * scrollPerSection

    gsap.to(window, {
      duration: 1,
      scrollTo: { y: scrollPosition, autoKill: false },
      ease: 'power3.inOut'
    })
  }

  // 导航链接点击跳转
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault()
      const href = this.getAttribute('href')
      const panels = gsap.utils.toArray('.vertical')

      let targetIndex = 0
      if (href === '#home') targetIndex = 0
      else if (href === '#about') targetIndex = 1
      else if (href === '#services') targetIndex = 2
      else if (href === '#portfolio') targetIndex = 3
      else if (href === '#contact') targetIndex = 4

      scrollToSection(targetIndex)
    })
  })

  // 导航链接悬停动画
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('mouseenter', () => {
      gsap.to(link, {
        color: '#667eea',
        y: -2,
        duration: 0.2,
        ease: 'power2.out'
      })
    })
    link.addEventListener('mouseleave', () => {
      gsap.to(link, {
        color: '#fff',
        y: 0,
        duration: 0.2,
        ease: 'power2.out'
      })
    })
  })

  // 按钮悬停动画
  document.querySelectorAll('.hero-btn, .nav-button, .form-submit').forEach(btn => {
    btn.addEventListener('mouseenter', () => {
      gsap.to(btn, {
        scale: 1.05,
        boxShadow: '0 15px 40px rgba(102, 126, 234, 0.4)',
        duration: 0.3,
        ease: 'back.out(1.7)'
      })
    })
    btn.addEventListener('mouseleave', () => {
      gsap.to(btn, {
        scale: 1,
        boxShadow: '0 10px 30px rgba(102, 126, 234, 0.3)',
        duration: 0.3,
        ease: 'power2.out'
      })
    })
  })
})
</script>

<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  overscroll-behavior: none;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  background: #0a0a0f;
  color: #fff;
  overflow: hidden;
}

.website-container {
  width: 100%;
  min-height: 100vh;
}

// 导航栏
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 60px;
  background: rgba(10, 10, 15, 0.8);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.nav-logo {
  font-size: 28px;
  font-weight: 800;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.nav-links {
  display: flex;
  gap: 40px;
}

.nav-link {
  color: #fff;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.3s ease;
}

.nav-button {
  padding: 12px 30px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  border-radius: 30px;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
  transition: all 0.3s ease;
}

// 通用容器
.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 60px;
}

// 通用区块
.section {
  min-height: 100vh;
  padding: 100px 0;
  position: relative;
}

.section-title {
  font-size: 48px;
  font-weight: 800;
  margin-bottom: 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.section-subtitle {
  font-size: 20px;
  color: #a0aec0;
  margin-bottom: 60px;
}

// 首屏 Hero
.hero-section {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 80px;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 50%, #16213e 100%);
  z-index: -1;
}

.hero-content {
  text-align: center;
  z-index: 1;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 10px 25px;
  background: rgba(102, 126, 234, 0.2);
  border: 1px solid rgba(102, 126, 234, 0.3);
  border-radius: 50px;
  margin-bottom: 30px;
}

.badge-icon {
  font-size: 20px;
}

.badge-text {
  font-size: 14px;
  color: #667eea;
  font-weight: 600;
}

.hero-title {
  font-size: 72px;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 30px;
  background: linear-gradient(135deg, #fff 0%, #a0aec0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.title-line {
  display: block;
}

.hero-subtitle {
  font-size: 24px;
  color: #a0aec0;
  margin-bottom: 40px;
}

.hero-stats {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  margin-bottom: 40px;
}

.hero-stat {
  text-align: center;
}

.hero-stat-number {
  font-size: 36px;
  font-weight: 800;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-stat-label {
  font-size: 16px;
  color: #a0aec0;
}

.hero-stat-divider {
  width: 1px;
  height: 40px;
  background: rgba(255, 255, 255, 0.2);
}

.hero-buttons {
  display: flex;
  gap: 20px;
  justify-content: center;
}

.hero-btn {
  padding: 16px 40px;
  border: none;
  border-radius: 40px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.hero-btn.primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #fff;
  box-shadow: 0 15px 40px rgba(102, 126, 234, 0.4);
}

.hero-btn.secondary {
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  border: 2px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
}

.hero-decoration {
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.deco-circle {
  position: absolute;
  border-radius: 50%;
  opacity: 0.15;
}

.circle-1 {
  width: 400px;
  height: 400px;
  right: -100px;
  top: 100px;
  background: conic-gradient(from 0deg, #667eea, #764ba2, #f093fb, #667eea);
  border: 2px solid rgba(102, 126, 234, 0.3);
}

.circle-2 {
  width: 300px;
  height: 300px;
  left: -80px;
  bottom: 150px;
  background: conic-gradient(from 90deg, #f093fb, #667eea, #764ba2, #f093fb);
  border: 2px solid rgba(240, 147, 251, 0.3);
}

.circle-3 {
  width: 150px;
  height: 150px;
  right: 200px;
  bottom: 100px;
  background: radial-gradient(circle, rgba(102, 126, 234, 0.4) 0%, rgba(118, 75, 162, 0.2) 100%);
}

.circle-4 {
  width: 100px;
  height: 100px;
  left: 300px;
  top: 200px;
  background: radial-gradient(circle, rgba(240, 147, 251, 0.3) 0%, rgba(102, 126, 234, 0.1) 100%);
}

.floating-shape {
  position: absolute;
  opacity: 0.1;
}

.shape-1 {
  width: 60px;
  height: 60px;
  right: 400px;
  top: 300px;
  background: #667eea;
  border-radius: 50%;
}

.shape-2 {
  width: 40px;
  height: 40px;
  left: 400px;
  bottom: 300px;
  background: #f093fb;
  border-radius: 10px;
}

.shape-3 {
  width: 80px;
  height: 80px;
  right: 600px;
  bottom: 200px;
  background: #764ba2;
  clip-path: polygon(50% 0%, 100% 100%, 0% 100%);
}

.hero-features {
  display: flex;
  gap: 30px;
  justify-content: center;
  margin-top: 40px;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 15px 25px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 50px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.feature-icon {
  font-size: 20px;
}

.feature-text {
  font-size: 16px;
  font-weight: 600;
  color: #fff;
}

// 关于我们
.about-section {
  background: linear-gradient(135deg, #1a1a2e 0%, #0f3460 50%, #16213e 100%);
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

.about-description {
  font-size: 18px;
  line-height: 1.8;
  color: #a0aec0;
  margin-bottom: 30px;
}

.about-advantages {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-bottom: 40px;
}

.advantage-item {
  padding: 20px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.advantage-item:hover {
  background: rgba(255, 255, 255, 0.08);
  transform: translateY(-5px);
}

.advantage-icon {
  width: 50px;
  height: 50px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  margin-bottom: 15px;
}

.adv-emoji {
  font-size: 24px;
}

.advantage-title {
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 10px;
}

.advantage-desc {
  font-size: 14px;
  color: #a0aec0;
  line-height: 1.6;
}

.about-stats {
  display: flex;
  gap: 40px;
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: 48px;
  font-weight: 800;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.stat-label {
  font-size: 32px;
  font-weight: 800;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.stat-name {
  font-size: 16px;
  color: #a0aec0;
  margin-top: 10px;
}

.image-wrapper {
  position: relative;
  height: 400px;
}

.image-box {
  position: absolute;
  border-radius: 20px;
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px;
}

.box-1 {
  width: 300px;
  height: 250px;
  top: 0;
  left: 0;
  background: linear-gradient(145deg, rgba(102, 126, 234, 0.6) 0%, rgba(118, 75, 162, 0.4) 100%);
}

.box-2 {
  width: 320px;
  height: 280px;
  top: 100px;
  left: 180px;
  background: linear-gradient(145deg, rgba(240, 147, 251, 0.5) 0%, rgba(102, 126, 234, 0.3) 100%);
}

.box-3 {
  width: 250px;
  height: 200px;
  top: 250px;
  left: 50px;
  background: linear-gradient(145deg, rgba(118, 75, 162, 0.5) 0%, rgba(240, 147, 251, 0.3) 100%);
}

.box-content {
  text-align: center;
}

.box-icon {
  font-size: 40px;
  margin-bottom: 15px;
}

.box-title {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 10px;
}

.box-desc {
  font-size: 14px;
  color: #a0aec0;
  line-height: 1.6;
}

// 服务项目
.services-section {
  background: linear-gradient(135deg, #16213e 0%, #1a1a2e 50%, #0f3460 100%);
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.service-card {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 24px;
  padding: 40px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.service-icon {
  width: 80px;
  height: 80px;
  border-radius: 20px;
  margin-bottom: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.icon-1 { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); }
.icon-2 { background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); }
.icon-3 { background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); }
.icon-4 { background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%); }
.icon-5 { background: linear-gradient(135deg, #fa709a 0%, #fee140 100%); }
.icon-6 { background: linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%); }

.service-title {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 15px;
}

.service-desc {
  font-size: 16px;
  color: #a0aec0;
  line-height: 1.6;
  margin-bottom: 20px;
}

.service-features {
  list-style: none;
  margin-bottom: 20px;
}

.service-features li {
  font-size: 14px;
  color: #a0aec0;
  padding: 8px 0;
  padding-left: 20px;
  position: relative;
}

.service-features li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: bold;
}

.service-link {
  color: #667eea;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
}

.service-link:hover {
  color: #764ba2;
}

// 精选案例
.portfolio-section {
  background: linear-gradient(135deg, #0f3460 0%, #16213e 50%, #1a1a2e 100%);
}

.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.portfolio-item {
  position: relative;
  height: 350px;
  border-radius: 24px;
  overflow: hidden;
  cursor: pointer;
  background: linear-gradient(145deg, rgba(102, 126, 234, 0.4) 0%, rgba(118, 75, 162, 0.3) 100%);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.portfolio-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(10, 10, 15, 0.9);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
  text-align: center;
  opacity: 0;
  transition: all 0.4s ease;
}

.portfolio-title {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 15px;
}

.portfolio-desc {
  font-size: 16px;
  color: #a0aec0;
  margin-bottom: 25px;
  line-height: 1.6;
}

.portfolio-tag {
  display: inline-block;
  padding: 6px 16px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 20px;
}

.portfolio-meta {
  display: flex;
  gap: 10px;
  margin-bottom: 25px;
  flex-wrap: wrap;
  justify-content: center;
}

.meta-tag {
  padding: 6px 12px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  font-size: 12px;
  color: #a0aec0;
}

.portfolio-btn {
  padding: 12px 30px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  border-radius: 30px;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
  transition: all 0.3s ease;
}

.portfolio-btn:hover {
  transform: scale(1.05);
  box-shadow: 0 15px 40px rgba(102, 126, 234, 0.5);
}

// 联系我们
.contact-section {
  background: linear-gradient(135deg, #1a1a2e 0%, #0f3460 50%, #16213e 100%);
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.info-item {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  padding: 25px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.info-item:hover {
  background: rgba(255, 255, 255, 0.08);
  transform: translateX(10px);
}

.info-icon {
  width: 50px;
  height: 50px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  flex-shrink: 0;
}

.info-text h4 {
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 8px;
}

.info-text p {
  font-size: 16px;
  color: #a0aec0;
}

.info-sub {
  font-size: 14px;
  color: #718096;
  margin-top: 5px;
}

.contact-form {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 24px;
  padding: 50px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.form-header {
  margin-bottom: 30px;
}

.form-header h3 {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 10px;
}

.form-header p {
  font-size: 14px;
  color: #a0aec0;
}

.form-input {
  width: 100%;
  padding: 18px 25px;
  margin-bottom: 20px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  color: #fff;
  font-size: 16px;
  outline: none;
  transition: all 0.3s ease;
}

.form-input::placeholder {
  color: #a0aec0;
}

.form-textarea {
  width: 100%;
  padding: 18px 25px;
  margin-bottom: 20px;
  min-height: 150px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  color: #fff;
  font-size: 16px;
  outline: none;
  resize: vertical;
  transition: all 0.3s ease;
}

.form-textarea::placeholder {
  color: #a0aec0;
}

.form-select {
  width: 100%;
  padding: 18px 25px;
  margin-bottom: 20px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  color: #fff;
  font-size: 16px;
  outline: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.form-select::placeholder {
  color: #a0aec0;
}

.form-select:focus {
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.3);
}

.form-select option {
  background: #1a1a2e;
  color: #fff;
}

.submit-icon {
  margin-right: 8px;
}

.form-submit {
  width: 100%;
  padding: 18px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  border-radius: 12px;
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
  transition: all 0.3s ease;
}

.form-submit:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 40px rgba(102, 126, 234, 0.5);
}

.contact-map {
  margin-top: 60px;
}

.map-placeholder {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  padding: 60px;
  text-align: center;
  transition: all 0.3s ease;
}

.map-placeholder:hover {
  background: rgba(255, 255, 255, 0.08);
  transform: translateY(-5px);
}

.map-icon {
  font-size: 48px;
  margin-bottom: 20px;
}

.map-placeholder h4 {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 10px;
}

.map-placeholder p {
  font-size: 16px;
  color: #a0aec0;
  margin-bottom: 20px;
}

.map-button {
  padding: 14px 32px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  border-radius: 30px;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
  transition: all 0.3s ease;
}

.map-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 15px 40px rgba(102, 126, 234, 0.5);
}

// 响应式
@media (max-width: 1200px) {
  .container {
    padding: 0 40px;
  }

  .services-grid,
  .portfolio-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 992px) {
  .about-content,
  .contact-content {
    grid-template-columns: 1fr;
    gap: 60px;
  }

  .image-wrapper {
    height: 300px;
  }

  .hero-title {
    font-size: 56px;
  }
}

@media (max-width: 768px) {
  .navbar {
    padding: 15px 30px;
  }

  .nav-links {
    display: none;
  }

  .section-title {
    font-size: 36px;
  }

  .hero-title {
    font-size: 42px;
  }

  .services-grid,
  .portfolio-grid {
    grid-template-columns: 1fr;
  }

  .about-stats {
    flex-wrap: wrap;
    justify-content: center;
  }

  .footer-links {
    flex-wrap: wrap;
    gap: 20px;
  }
}
</style>

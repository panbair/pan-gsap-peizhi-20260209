<template>
  <div class="paper-fold-container-220">
    <div class="paper-header-220">
      <h2 class="paper-title-220">📄 纸张折叠动画</h2>
      <p class="paper-subtitle-220">自然的纸张折叠和展开物理质感</p>
      <div class="scroll-progress-220" ref="progressIndicator">
        <div class="progress-bar-220" ref="progressBar"></div>
        <span class="progress-text-220" ref="progressText">0%</span>
      </div>
    </div>

    <!-- 基础折叠 - 滚动控制 -->
    <div class="fold-section-220">
      <h3 class="section-title-220">基础折叠效果</h3>
      <div class="folds-grid-220">
        <div class="fold-card-220 fold-basic-1-220">
          <div class="paper-sheet-220">
            <div class="paper-fold-220 fold-h-220">
              <div class="fold-top-220">
                <span class="fold-text-220">对折</span>
              </div>
              <div class="fold-bottom-220">
                <span class="fold-text-220">展开</span>
              </div>
            </div>
          </div>
        </div>
        <div class="fold-card-220 fold-basic-2-220">
          <div class="paper-sheet-220">
            <div class="paper-fold-220 fold-v-220">
              <div class="fold-left-220">
                <span class="fold-text-220">左折</span>
              </div>
              <div class="fold-right-220">
                <span class="fold-text-220">右折</span>
              </div>
            </div>
          </div>
        </div>
        <div class="fold-card-220 fold-basic-3-220">
          <div class="paper-sheet-220">
            <div class="paper-fold-220 fold-corners-220">
              <div class="fold-corner-220 corner-tl-220"></div>
              <div class="fold-corner-220 corner-tr-220"></div>
              <div class="fold-corner-220 corner-bl-220"></div>
              <div class="fold-corner-220 corner-br-220"></div>
              <div class="fold-center-220">
                <span class="fold-text-220">四角折</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 折纸艺术 - 滚动控制 -->
    <div class="origami-section-220">
      <h3 class="section-title-220">折纸艺术</h3>
      <div class="origami-grid-220">
        <div class="origami-item-220 origami-1-220">
          <div class="origami-base-220">
            <div class="origami-wing-220 wing-left-220"></div>
            <div class="origami-wing-220 wing-right-220"></div>
            <div class="origami-body-220"></div>
          </div>
          <span class="origami-label-220">纸飞机</span>
        </div>
        <div class="origami-item-220 origami-2-220">
          <div class="origami-base-220">
            <div class="origami-petal-220 petal-1-220"></div>
            <div class="origami-petal-220 petal-2-220"></div>
            <div class="origami-petal-220 petal-3-220"></div>
            <div class="origami-petal-220 petal-4-220"></div>
          </div>
          <span class="origami-label-220">纸花</span>
        </div>
        <div class="origami-item-220 origami-3-220">
          <div class="origami-base-220">
            <div class="origami-crane-220">
              <div class="crane-body-220"></div>
              <div class="crane-neck-220"></div>
              <div class="crane-head-220"></div>
              <div class="crane-wing-220 wing-1-220"></div>
              <div class="crane-wing-220 wing-2-220"></div>
            </div>
          </div>
          <span class="origami-label-220">纸鹤</span>
        </div>
      </div>
    </div>

    <!-- 纸张展开 - 滚动控制 -->
    <div class="unfold-section-220">
      <h3 class="section-title-220">纸张展开</h3>
      <div class="unfold-container-220">
        <div class="unfold-paper-220 unfold-1-220">
          <div class="unfold-layer-220 layer-1-220">
            <span class="layer-text-220">第一层</span>
          </div>
          <div class="unfold-layer-220 layer-2-220">
            <span class="layer-text-220">第二层</span>
          </div>
          <div class="unfold-layer-220 layer-3-220">
            <span class="layer-text-220">第三层</span>
          </div>
        </div>
        <div class="unfold-paper-220 unfold-2-220">
          <div class="unfold-center-220">
            <div class="unfold-flap-220 flap-1-220"></div>
            <div class="unfold-flap-220 flap-2-220"></div>
            <div class="unfold-flap-220 flap-3-220"></div>
            <div class="unfold-flap-220 flap-4-220"></div>
          </div>
          <span class="unfold-label-220">四页展开</span>
        </div>
      </div>
    </div>

    <!-- 翻页效果 - 滚动控制 -->
    <div class="page-flip-section-220">
      <h3 class="section-title-220">翻页效果</h3>
      <div class="flip-container-220">
        <div class="flip-book-220 flip-1-220">
          <div class="flip-page-220 page-front-220">
            <div class="page-content-220">
              <span class="page-number-220">1</span>
              <p class="page-text-220">第一页</p>
            </div>
          </div>
          <div class="flip-page-220 page-back-220">
            <div class="page-content-220">
              <span class="page-number-220">2</span>
              <p class="page-text-220">第二页</p>
            </div>
          </div>
        </div>
        <div class="flip-book-220 flip-2-220">
          <div class="flip-page-220 page-front-220">
            <div class="page-content-220">
              <span class="page-number-220">3</span>
              <p class="page-text-220">第三页</p>
            </div>
          </div>
          <div class="flip-page-220 page-back-220">
            <div class="page-content-220">
              <span class="page-number-220">4</span>
              <p class="page-text-220">第四页</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 纸张皱褶 - 滚动控制 -->
    <div class="crinkle-section-220">
      <h3 class="section-title-220">纸张皱褶</h3>
      <div class="crinkle-container-220">
        <div class="crinkle-paper-220 crinkle-1-220">
          <div class="crinkle-lines-220"></div>
          <span class="crinkle-label-220">轻微皱褶</span>
        </div>
        <div class="crinkle-paper-220 crinkle-2-220">
          <div class="crinkle-lines-220"></div>
          <span class="crinkle-label-220">中度皱褶</span>
        </div>
        <div class="crinkle-paper-220 crinkle-3-220">
          <div class="crinkle-lines-220"></div>
          <span class="crinkle-label-220">重度皱褶</span>
        </div>
      </div>
    </div>

    <!-- 纸张撕裂 - 滚动控制 -->
    <div class="tear-section-220">
      <h3 class="section-title-220">纸张撕裂</h3>
      <div class="tear-container-220">
        <div class="tear-paper-220 tear-1-220">
          <div class="tear-left-220"></div>
          <div class="tear-right-220"></div>
        </div>
        <div class="tear-paper-220 tear-2-220">
          <div class="tear-piece-220 piece-1-220"></div>
          <div class="tear-piece-220 piece-2-220"></div>
          <div class="tear-piece-220 piece-3-220"></div>
        </div>
      </div>
    </div>

    <!-- 纸张漂浮 - 滚动控制 -->
    <div class="float-section-220">
      <h3 class="section-title-220">纸张漂浮</h3>
      <div class="float-container-220" ref="floatContainer">
        <div class="floating-paper-220 float-1-220">
          <div class="paper-3d-220">
            <div class="paper-front-220"></div>
            <div class="paper-back-220"></div>
          </div>
        </div>
        <div class="floating-paper-220 float-2-220">
          <div class="paper-3d-220">
            <div class="paper-front-220"></div>
            <div class="paper-back-220"></div>
          </div>
        </div>
        <div class="floating-paper-220 float-3-220">
          <div class="paper-3d-220">
            <div class="paper-front-220"></div>
            <div class="paper-back-220"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const progressIndicator = ref(null)
const progressBar = ref(null)
const progressText = ref(null)
const floatContainer = ref(null)

onMounted(() => {
  initScrollAnimations()
})

onUnmounted(() => {
  gsap.killTweensOf('.paper-fold-container-220 *')
  ScrollTrigger.getAll().forEach(trigger => trigger.kill())
})

function initScrollAnimations() {
  // 全局滚动进度指示器
  gsap.to(progressBar.value, {
    width: '100%',
    ease: 'none',
    scrollTrigger: {
      trigger: '.paper-fold-container-220',
      start: 'top top',
      end: 'bottom bottom',
      scrub: 0.3,
      onUpdate: (self) => {
        if (progressText.value) {
          progressText.value.textContent = Math.round(self.progress * 100) + '%'
        }
      }
    }
  })

  // 基础折叠 - 滚动控制
  const basicFolds = gsap.utils.toArray('.fold-basic-1-220, .fold-basic-2-220, .fold-basic-3-220')
  basicFolds.forEach((fold, i) => {
    const paper = fold.querySelector('.paper-sheet-220')
    const foldElement = fold.querySelector('.paper-fold-220')
    
    gsap.fromTo(fold,
      {
        scale: 0.8,
        opacity: 0,
        y: 50
      },
      {
        scale: 1,
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: fold,
          start: 'top 85%',
          end: 'top 70%',
          scrub: 1
        }
      }
    )

    if (foldElement) {
      // 滚动控制折叠动画
      gsap.fromTo(foldElement,
        {
          rotateX: i === 0 ? 180 : i === 1 ? 0 : 0,
          rotateY: i === 1 ? 180 : 0
        },
        {
          rotateX: 0,
          rotateY: 0,
          duration: 1.5,
          ease: 'power2.inOut',
          scrollTrigger: {
            trigger: fold,
            start: 'top 80%',
            end: 'top 50%',
            scrub: 1
          }
        }
      )
    }
  })

  // 折纸艺术 - 滚动控制
  const origamiItems = gsap.utils.toArray('.origami-1-220, .origami-2-220, .origami-3-220')
  origamiItems.forEach((item, i) => {
    gsap.fromTo(item,
      {
        scale: 0,
        rotate: i * 120 - 60,
        opacity: 0
      },
      {
        scale: 1,
        rotate: 0,
        opacity: 1,
        duration: 1.2,
        ease: 'elastic.out(1, 0.5)',
        scrollTrigger: {
          trigger: '.origami-section-220',
          start: 'top 80%',
          end: 'top 60%',
          scrub: 1
        }
      }
    )

    // 滚动控制折纸变形
    const wings = item.querySelectorAll('.origami-wing-220, .origami-petal-220, .crane-wing-220')
    wings.forEach((wing, j) => {
      gsap.to(wing, {
        rotate: j * 30 - 30,
        duration: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: '.origami-section-220',
          start: 'top 50%',
          end: 'bottom 20%',
          scrub: 1
        }
      })
    })
  })

  // 纸张展开 - 滚动控制
  const unfoldPapers = gsap.utils.toArray('.unfold-1-220, .unfold-2-220')
  unfoldPapers.forEach((unfold, i) => {
    const layers = unfold.querySelectorAll('.unfold-layer-220')
    const flaps = unfold.querySelectorAll('.unfold-flap-220')
    
    gsap.fromTo(unfold,
      {
        scale: 0.9,
        opacity: 0
      },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.unfold-section-220',
          start: 'top 85%',
          end: 'top 70%',
          scrub: 1
        }
      }
    )

    layers.forEach((layer, j) => {
      gsap.fromTo(layer,
        {
          scale: 0.5,
          opacity: 0,
          rotate: j * 10 - 5
        },
        {
          scale: 1,
          opacity: 1,
          rotate: 0,
          duration: 1,
          ease: 'elastic.out(1, 0.4)',
          scrollTrigger: {
            trigger: '.unfold-section-220',
            start: 'top 75%',
            end: 'top 55%',
            scrub: 1
          }
        }
      )
    })

    flaps.forEach((flap, j) => {
      gsap.fromTo(flap,
        {
          rotate: j * 90 - 135
        },
        {
          rotate: j * 90 - 45,
          duration: 1.2,
          ease: 'elastic.out(1, 0.5)',
          scrollTrigger: {
            trigger: '.unfold-section-220',
            start: 'top 70%',
            end: 'top 40%',
            scrub: 1
          }
        }
      )
    })
  })

  // 翻页效果 - 滚动控制
  const flipBooks = gsap.utils.toArray('.flip-1-220, .flip-2-220')
  flipBooks.forEach((flip, i) => {
    const pages = flip.querySelectorAll('.flip-page-220')
    
    gsap.fromTo(flip,
      {
        scale: 0.9,
        opacity: 0,
        y: 30
      },
      {
        scale: 1,
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: flip,
          start: 'top 85%',
          end: 'top 70%',
          scrub: 1
        }
      }
    )

    pages.forEach((page, j) => {
      gsap.fromTo(page,
        {
          rotateY: j === 0 ? 0 : 180
        },
        {
          rotateY: j === 0 ? 0 : 0,
          duration: 1.5,
          ease: 'power2.inOut',
          scrollTrigger: {
            trigger: flip,
            start: 'top 75%',
            end: 'top 45%',
            scrub: 1
          }
        }
      )

      // 持续翻页效果
      gsap.to(page, {
        rotateY: j === 0 ? 180 : 0,
        duration: 1.5,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: flip,
          start: 'top 40%',
          end: 'top 20%',
          scrub: 1
        }
      })
    })
  })

  // 纸张皱褶 - 滚动控制
  const crinklePapers = gsap.utils.toArray('.crinkle-1-220, .crinkle-2-220, .crinkle-3-220')
  crinklePapers.forEach((crinkle, i) => {
    gsap.fromTo(crinkle,
      {
        scale: 0.9,
        opacity: 0,
        rotate: i * 5 - 2.5
      },
      {
        scale: 1,
        opacity: 1,
        rotate: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.crinkle-section-220',
          start: 'top 85%',
          end: 'top 70%',
          scrub: 1
        }
      }
    )

    // 滚动控制皱褶程度
    gsap.to(crinkle, {
      scaleX: 1 + i * 0.1,
      scaleY: 1 - i * 0.05,
      ease: 'none',
      scrollTrigger: {
        trigger: '.crinkle-section-220',
        start: 'top 60%',
        end: 'bottom 30%',
        scrub: 1
      }
    })
  })

  // 纸张撕裂 - 滚动控制
  const tearPapers = gsap.utils.toArray('.tear-1-220, .tear-2-220')
  tearPapers.forEach((tear, i) => {
    const pieces = tear.querySelectorAll('.tear-left-220, .tear-right-220, .tear-piece-220')
    
    gsap.fromTo(tear,
      {
        scale: 0.9,
        opacity: 0
      },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.tear-section-220',
          start: 'top 85%',
          end: 'top 70%',
          scrub: 1
        }
      }
    )

    pieces.forEach((piece, j) => {
      gsap.to(piece, {
        x: (j - (pieces.length - 1) / 2) * 30,
        rotate: (j - (pieces.length - 1) / 2) * 10,
        ease: 'none',
        scrollTrigger: {
          trigger: '.tear-section-220',
          start: 'top 60%',
          end: 'bottom 30%',
          scrub: 1
        }
      })
    })
  })

  // 纸张漂浮 - 滚动控制
  const floatPapers = gsap.utils.toArray('.float-1-220, .float-2-220, .float-3-220')
  floatPapers.forEach((float, i) => {
    gsap.fromTo(float,
      {
        scale: 0,
        opacity: 0,
        y: 100
      },
      {
        scale: 1,
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'elastic.out(1, 0.5)',
        scrollTrigger: {
          trigger: '.float-section-220',
          start: 'top 80%',
          end: 'top 60%',
          scrub: 1
        }
      }
    )

    // 滚动控制漂浮
    gsap.to(float, {
      y: -50 - i * 20,
      rotate: i * 30 - 30,
      duration: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: '.float-section-220',
        start: 'top 50%',
        end: 'bottom 20%',
        scrub: 1
      }
    })
  })
}
</script>

<style scoped>
.paper-fold-container-220 {
  min-height: 100vh;
  background: linear-gradient(180deg, #f5f0e8 0%, #e8e0d5 50%, #f5f0e8 100%);
  padding: 40px 20px;
  overflow-x: hidden;
}

.paper-header-220 {
  text-align: center;
  margin-bottom: 60px;
}

.paper-title-220 {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 15px;
  color: #2c3e50;
}

.paper-subtitle-220 {
  font-size: 1.2rem;
  color: #7f8c8d;
  margin-bottom: 30px;
}

.scroll-progress-220 {
  width: 300px;
  height: 8px;
  background: rgba(44, 62, 80, 0.1);
  border-radius: 4px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
}

.progress-bar-220 {
  width: 0%;
  height: 100%;
  background: linear-gradient(90deg, #2c3e50, #34495e, #2c3e50);
  border-radius: 4px;
}

.progress-text-220 {
  position: absolute;
  top: -30px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 0.9rem;
  font-weight: 700;
  color: #2c3e50;
}

/* 折叠区块 */
.fold-section-220,
.origami-section-220,
.unfold-section-220,
.page-flip-section-220,
.crinkle-section-220,
.tear-section-220,
.float-section-220 {
  max-width: 1200px;
  margin: 0 auto 80px;
}

.section-title-220 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 30px;
  text-align: center;
}

/* 基础折叠 */
.folds-grid-220 {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.fold-card-220 {
  background: white;
  border-radius: 15px;
  padding: 40px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.paper-sheet-220 {
  width: 200px;
  height: 280px;
  background: linear-gradient(135deg, #fff, #f0f0f0);
  border: 1px solid #e0e0e0;
  margin: 0 auto;
  position: relative;
  transform-style: preserve-3d;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.paper-fold-220 {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
}

.fold-h-220 {
  display: flex;
  flex-direction: column;
}

.fold-top-220,
.fold-bottom-220 {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #fff, #f5f5f5);
  border-bottom: 2px solid #e0e0e0;
}

.fold-bottom-220 {
  border-top: 2px solid #e0e0e0;
  border-bottom: none;
}

.fold-v-220 {
  display: flex;
}

.fold-left-220,
.fold-right-220 {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #fff, #f5f5f5);
  border-right: 2px solid #e0e0e0;
}

.fold-right-220 {
  border-left: 2px solid #e0e0e0;
  border-right: none;
}

.fold-corners-220 {
  position: relative;
}

.fold-corner-220 {
  position: absolute;
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #e0e0e0, #d0d0d0);
}

.corner-tl-220 {
  top: 0;
  left: 0;
  clip-path: polygon(0 0, 100% 0, 0 100%);
}

.corner-tr-220 {
  top: 0;
  right: 0;
  clip-path: polygon(100% 0, 100% 100%, 0 0);
}

.corner-bl-220 {
  bottom: 0;
  left: 0;
  clip-path: polygon(0 100%, 100% 100%, 0 0);
}

.corner-br-220 {
  bottom: 0;
  right: 0;
  clip-path: polygon(100% 100%, 100% 0, 0 100%);
}

.fold-center-220 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #fff, #f5f5f5);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
}

.fold-text-220 {
  font-size: 0.9rem;
  font-weight: 600;
  color: #2c3e50;
}

/* 折纸艺术 */
.origami-grid-220 {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 40px;
}

.origami-item-220 {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.origami-base-220 {
  width: 150px;
  height: 150px;
  position: relative;
}

.origami-wing-220 {
  position: absolute;
  background: linear-gradient(135deg, #3498db, #2980b9);
  width: 60px;
  height: 80px;
  clip-path: polygon(50% 0%, 100% 100%, 0% 100%);
}

.wing-left-220 {
  left: 15px;
  top: 35px;
  transform: rotate(-15deg);
}

.wing-right-220 {
  right: 15px;
  top: 35px;
  transform: rotate(15deg);
}

.origami-body-220 {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 40px;
  height: 60px;
  background: linear-gradient(135deg, #2980b9, #1c5980);
  clip-path: polygon(50% 0%, 100% 100%, 0% 100%);
}

.origami-petal-220 {
  position: absolute;
  background: linear-gradient(135deg, #e74c3c, #c0392b);
  width: 40px;
  height: 60px;
  clip-path: polygon(50% 0%, 100% 100%, 0% 100%);
}

.petal-1-220 { top: 30px; left: 55px; transform: rotate(0deg); }
.petal-2-220 { top: 50px; right: 30px; transform: rotate(90deg); }
.petal-3-220 { bottom: 30px; left: 55px; transform: rotate(180deg); }
.petal-4-220 { top: 50px; left: 30px; transform: rotate(270deg); }

.origami-crane-220 {
  width: 100%;
  height: 100%;
  position: relative;
}

.crane-body-220 {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 30px;
  height: 50px;
  background: linear-gradient(135deg, #f39c12, #d68910);
  clip-path: polygon(50% 0%, 100% 100%, 0% 100%);
}

.crane-neck-220 {
  position: absolute;
  bottom: 70px;
  left: 50%;
  transform: translateX(-50%);
  width: 10px;
  height: 40px;
  background: linear-gradient(135deg, #f39c12, #d68910);
}

.crane-head-220 {
  position: absolute;
  bottom: 110px;
  left: 50%;
  transform: translateX(-50%);
  width: 15px;
  height: 15px;
  background: linear-gradient(135deg, #f39c12, #d68910);
  border-radius: 50% 50% 50% 0;
}

.crane-wing-220 {
  position: absolute;
  background: linear-gradient(135deg, #f39c12, #d68910);
  width: 50px;
  height: 30px;
  clip-path: polygon(0% 100%, 50% 0%, 100% 100%);
}

.wing-1-220 {
  top: 20px;
  left: 10px;
  transform: rotate(-20deg);
}

.wing-2-220 {
  top: 20px;
  right: 10px;
  transform: rotate(20deg);
}

.origami-label-220 {
  font-size: 0.9rem;
  font-weight: 600;
  color: #2c3e50;
}

/* 纸张展开 */
.unfold-container-220 {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
}

.unfold-paper-220 {
  background: white;
  border-radius: 15px;
  padding: 40px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.unfold-layer-220 {
  width: 180px;
  height: 240px;
  background: linear-gradient(135deg, #fff, #f5f5f5);
  border: 1px solid #e0e0e0;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
}

.layer-1-220 { background: linear-gradient(135deg, #fff, #f0f0f0); }
.layer-2-220 { background: linear-gradient(135deg, #f5f5f5, #ebebeb); }
.layer-3-220 { background: linear-gradient(135deg, #ebebeb, #e0e0e0); }

.unfold-center-220 {
  width: 180px;
  height: 180px;
  position: relative;
}

.unfold-flap-220 {
  position: absolute;
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #fff, #f5f5f5);
  border: 1px solid #e0e0e0;
  transform-origin: top left;
}

.flap-1-220 { top: 0; left: 0; }
.flap-2-220 { top: 0; right: 0; transform-origin: top right; }
.flap-3-220 { bottom: 0; left: 0; transform-origin: bottom left; }
.flap-4-220 { bottom: 0; right: 0; transform-origin: bottom right; }

.unfold-label-220 {
  font-size: 0.9rem;
  font-weight: 600;
  color: #2c3e50;
}

.layer-text-220 {
  font-size: 0.9rem;
  font-weight: 600;
  color: #2c3e50;
}

/* 翻页效果 */
.flip-container-220 {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 40px;
}

.flip-book-220 {
  width: 180px;
  height: 250px;
  perspective: 1000px;
  margin: 0 auto;
}

.flip-page-220 {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transform-style: preserve-3d;
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.page-back-220 {
  transform: rotateY(180deg);
}

.page-content-220 {
  padding: 30px;
  text-align: center;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
}

.page-number-220 {
  font-size: 2rem;
  font-weight: 800;
  color: #2c3e50;
}

.page-text-220 {
  font-size: 1rem;
  color: #7f8c8d;
}

/* 纸张皱褶 */
.crinkle-container-220 {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
}

.crinkle-paper-220 {
  background: white;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
}

.crinkle-lines-220 {
  width: 150px;
  height: 200px;
  background: linear-gradient(135deg, #fff, #f5f5f5);
  position: relative;
  overflow: hidden;
}

.crinkle-lines-220::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 10px,
    rgba(0, 0, 0, 0.05) 10px,
    rgba(0, 0, 0, 0.05) 11px
  );
}

.crinkle-label-220 {
  font-size: 0.9rem;
  font-weight: 600;
  color: #2c3e50;
}

/* 纸张撕裂 */
.tear-container-220 {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
}

.tear-paper-220 {
  background: white;
  border-radius: 10px;
  padding: 40px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
}

.tear-left-220,
.tear-right-220 {
  width: 100px;
  height: 200px;
  background: linear-gradient(135deg, #fff, #f5f5f5);
  border: 1px solid #e0e0e0;
}

.tear-left-220 {
  clip-path: polygon(0 0, 55% 0, 45% 20%, 55% 40%, 45% 60%, 55% 80%, 45% 100%, 0 100%);
}

.tear-right-220 {
  clip-path: polygon(45% 0, 100% 0, 100% 100%, 45% 100%, 55% 80%, 45% 60%, 55% 40%, 45% 20%, 55% 0);
}

.tear-piece-220 {
  width: 60px;
  height: 100px;
  background: linear-gradient(135deg, #fff, #f5f5f5);
  border: 1px solid #e0e0e0;
  border-radius: 5px;
}

/* 纸张漂浮 */
.float-container-220 {
  height: 400px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
}

.floating-paper-220 {
  width: 100px;
  height: 140px;
  position: relative;
  perspective: 1000px;
}

.paper-3d-220 {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
}

.paper-front-220,
.paper-back-220 {
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #fff, #f5f5f5);
  border: 1px solid #e0e0e0;
  backface-visibility: hidden;
}

.paper-back-220 {
  transform: rotateY(180deg);
}

/* 响应式 */
@media (max-width: 768px) {
  .paper-title-220 {
    font-size: 2rem;
  }

  .folds-grid-220,
  .origami-grid-220,
  .unfold-container-220,
  .flip-container-220,
  .crinkle-container-220,
  .tear-container-220 {
    grid-template-columns: 1fr;
  }

  .paper-sheet-220 {
    width: 150px;
    height: 210px;
  }

  .origami-base-220 {
    width: 120px;
    height: 120px;
  }

  .unfold-layer-220 {
    width: 150px;
    height: 200px;
  }

  .float-container-220 {
    flex-wrap: wrap;
    height: auto;
    padding: 40px 0;
  }
}
</style>

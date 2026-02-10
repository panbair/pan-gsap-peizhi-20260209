<template>
  <div class="website-container">
    <!-- 首屏 Hero Section -->
    <section id="page1" class="section section1">
      page1
    </section>

    <section id="page2" class="section section2">
      page2
    </section>
    <section id="page3" class="section section3">
      page3
      <div class="box box3">box3</div>
    </section>
    <section id="page4" class="section section4">
      page4
    </section>
  </div>
</template>

<script setup lang="ts">
import { onMounted, nextTick } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

onMounted(() => {
  console.log('onMounted 开始')

  // 延迟执行，确保 DOM 完全渲染
  setTimeout(() => {
    nextTick(() => {
      console.log('开始初始化 ScrollTrigger')
      console.log('窗口高度:', window.innerHeight)
      console.log('文档高度:', document.documentElement.scrollHeight)

      // 为 box3 添加淡入动画 - 当元素进入视口时触发
      const box3 = document.querySelector('.box3')
      const section3 = document.querySelector('.section3')

      console.log('box3 元素:', box3)
      console.log('box3 位置:', box3?.getBoundingClientRect())

      if (box3) {
        // 先设置初始状态（透明且向下偏移）
        gsap.set(box3, {
          opacity: 0,
          y: 50
        })
        console.log('已设置 box3 初始状态')

        // 创建动画 - 当元素进入视口时淡入
        const tween = gsap.to(box3, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section3, // 改用 section3 作为触发器
            start: 'top 70%', // 当 section3 顶部到达视口 70% 位置时开始
            toggleActions: 'play none none reverse', // 进入播放，离开反向播放
            markers: true, // 添加标记，方便调试
            onEnter: () => {
              console.log('section3 进入视口，box3 开始淡入')
            },
            onLeave: () => {
              console.log('section3 离开视口，box3 开始淡出')
            }
          }
        })

        console.log('box3 ScrollTrigger 已创建:', tween.scrollTrigger)
      } else {
        console.warn('未找到 .box3 元素')
      }

      // 刷新 ScrollTrigger
      ScrollTrigger.refresh()
    })
  }, 500)
})
</script>

<style lang="scss">
.website-container{
  width: 100vw;
  min-height: 100vh;  // 改为 min-height，允许内容撑开高度
  .section{
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }


  .section1{
    background-color: red;
  }
  .section2{
    background-color: blue;
  }
  .section3{
    background-color: yellow;
  }
  .section4{
    background-color: green;
  }

  .box{
    width: 100px;
    height: 100px;
  }
  .box3{
    background-color: pink;
  }

  /* 导航提示样式 */
  .nav-hint {
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 1000;
    background: rgba(255, 255, 255, 0.9);
    padding: 10px 20px;
    border-radius: 25px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
  
  .demo-link {
    text-decoration: none;
    color: #4f46e5;
    font-weight: 600;
    transition: all 0.3s ease;
    
    &:hover {
      color: #667eea;
      transform: translateX(5px);
    }
  }



}

</style>

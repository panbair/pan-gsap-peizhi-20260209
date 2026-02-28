/**
 * 验证动画库完整性
 */

import { animationOptions } from './src/views/page2/animationOptions.js'
import { config } from './src/views/page2/animation/config.js'

// 统计 GSAP 动画
const gsapTotal = animationOptions.reduce((sum, group) => sum + group.options.length, 0)

console.log('='.repeat(60))
console.log('GSAP 动画库验证报告')
console.log('='.repeat(60))
console.log()

animationOptions.forEach((group, index) => {
  console.log(`${index + 1}. ${group.label}`)
  console.log(`   动画数量: ${group.options.length}`)
  
  // 验证每个动画是否有对应的配置
  let validCount = 0
  group.options.forEach(opt => {
    if (config[opt.value]) {
      validCount++
    } else {
      console.log(`   ⚠️  缺失配置: ${opt.value} (${opt.label})`)
    }
  })
  
  console.log(`   有效配置: ${validCount}/${group.options.length}`)
  console.log()
})

console.log('='.repeat(60))
console.log(`GSAP 动画总数: ${gsapTotal}`)
console.log('='.repeat(60))

// 验证配置文件中的动画数量
const configKeys = Object.keys(config)
console.log(`配置文件中的动画数: ${configKeys.length}`)

// 找出配置文件中存在但动画选项中不存在的动画
const allAnimationValues = new Set()
animationOptions.forEach(group => {
  group.options.forEach(opt => allAnimationValues.add(opt.value))
})

const orphanConfigs = configKeys.filter(key => !allAnimationValues.has(key))
if (orphanConfigs.length > 0) {
  console.log()
  console.log('⚠️  以下配置没有对应的动画选项:')
  orphanConfigs.forEach(key => console.log(`   - ${key}`))
}

console.log()
console.log('✅ 验证完成')

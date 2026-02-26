/**
 * 优化后的动画配置
 * 从原始205个动画精简到87个核心动画（含V12新增22个）
 *
 * 保留原则：
 * - V1基础动画全部保留（标准CSS动画）
 * - 其他版本只保留最具代表性的特色动画
 * - 避免重复效果（如多个glitch/quantum/neon等系列）
 */

import { v1 } from './v1.js'
import { v2 } from './v2.js'
import { v3 } from './v3.js'
import { v4 } from './v4.js'
import { v5 } from './v5.js'
import { v6 } from './v6.js'
import { v7 } from './v7.js'
import { v8 } from './v8.js'
import { v9 } from './v9.js'
import { v10 } from './v10.js'
import { v11 } from './v11.js'
import { v12 } from './v12.js'
import { v13 } from './v13.js'

export const config = {
  ...v1,  // 19个基础动画
  ...v2,  // 6个高级特效
  ...v3,  // 4个前沿特效
  ...v4,  // 5个炫酷特效
  ...v5,  // 5个极限冲击
  ...v6,  // 6个光影特效
  ...v7,  // 5个超越极限
  ...v8,  // 5个量子维度
  ...v9,  // 5个时空幻境
  ...v10, // 3个超视觉
  ...v11, // 3个爆炸破坏
  ...v12,  // 22个创新动画
  ...v13  // 22个创新动画
}

// 总计：87个核心动画（65个优化动画 + 22个全新创新动画）

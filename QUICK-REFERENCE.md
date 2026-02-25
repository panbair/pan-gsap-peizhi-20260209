# 🚀 快速参考 - Universal Animations v2.0

## 一键命令

```bash
# 安装CSS版本
npm install @universal-animations/css

# 安装GSAP版本
npm install @universal-animations/gsap gsap

# 本地开发
npm run dev

# 构建
npm run build

# 发布NPM包
cd package && npm run build && npm publish
cd ../package-gsap && npm run build && npm publish
```

## 快速开始

### CSS版本

```html
<link rel="stylesheet" href="node_modules/@universal-animations/css/dist/index.css">
```

```html
<!-- 使用动画 -->
<div class="ua-v1-animated ua-v1-fadeIn">Fade In</div>
<div class="ua-v7-liquidIn">Liquid In</div>
<div class="pixelGlitch">Pixel Glitch</div>
<div class="nuclearExplosion">Nuclear Explosion</div>
```

### GSAP版本

```javascript
import { applyAnimation } from '@universal-animations/gsap'

// 应用动画
const element = document.querySelector('.my-element')
applyAnimation('nuclearExplosion', element)

// React示例
applyAnimation('springEntrance', ref.current)
```

## 动画列表速查

| 版本 | 主题 | 动画数 | 示例 |
|------|------|--------|------|
| V1 | 基础 | 19 | fadeIn, scaleIn, rotateIn |
| V2 | 高级 | 29 | hologram, vortexIn, sineWave |
| V3 | 前沿 | 9 | wormhole, quantumEntanglement |
| V4 | 炫酷 | 20 | neonGlitch, particleBurst |
| V5 | 极限 | 17 | hyperspaceJump, supernovaCore |
| V6 | 光影 | 17 | auroraFlow, crystalRefraction |
| V7 | 弹簧 | 18 | springEntrance, elasticPulse |
| V8 | 量子 | 20 | quantumMaterialize, temporalFlux |
| V9 | 时空 | 20 | timeDilation, multiverse |
| V10 | 故障 | 20 | pixelGlitch, chromaticAberration |
| V11 | 爆炸 | 16 | nuclearExplosion, glassShatter |

## 热门动画 TOP 10

1. `nuclearExplosion` - 核爆震撼
2. `pixelGlitch` - 像素故障
3. `springEntrance` - 弹簧进场
4. `quantumMaterialize` - 量子实体化
5. `auroraFlow` - 极光流光
6. `hologram` - 全息投影
7. `vortexIn` - 涡流吸入
8. `timeDilation` - 时间膨胀
9. `chromaticAberration` - 色差分裂
10. `glassShatter` - 玻璃碎裂

## 项目结构

```
gsap-20260209/
├── src/
│   └── views/
│       ├── animation/          # CSS动画
│       │   ├── index.vue
│       │   └── animation.css   # 184+ CSS动画
│       └── page2/             # GSAP动画
│           ├── index.vue
│           ├── config.js       # 168+ GSAP配置
│           └── animationOptions.js
│
├── package/                   # CSS NPM包
│   └── dist/
│       ├── index.css          # 完整版
│       ├── v1.css - v11.css   # 分版本
│       └── USAGE.md
│
├── package-gsap/              # GSAP NPM包
│   ├── dist/
│   │   ├── index.js
│   │   ├── index.esm.js
│   │   └── index.d.ts
│   └── README.md
│
├── docs/                     # 文档网站
│   └── docs/
│       ├── introduction.md
│       ├── css/
│       └── gsap/
│
├── vercel.json              # Vercel配置
├── netlify.toml            # Netlify配置
└── DEPLOYMENT.md           # 部署指南
```

## 重要文件

| 文件 | 用途 |
|------|------|
| `P0-COMPLETED.md` | P0任务完成清单 |
| `P0-SUMMARY.md` | 项目完整总结 |
| `PUBLISH-NOW.md` | 立即发布指南 |
| `DEPLOYMENT.md` | 部署完整文档 |
| `README.md` | 项目说明 |
| `CHANGELOG.md` | 变更日志 |

## 在线资源

| 资源 | 链接 |
|------|------|
| NPM CSS | https://www.npmjs.com/package/@universal-animations/css |
| NPM GSAP | https://www.npmjs.com/package/@universal-animations/gsap |
| 在线演示 | https://universal-animations.vercel.app |
| 官方文档 | https://universal-animations.github.io |
| GitHub仓库 | https://github.com/YOUR_USERNAME/universal-animations |

## 常用命令

### 开发

```bash
npm run dev              # 启动开发服务器
npm run build           # 构建生产版本
npm run preview         # 预览构建结果
npm run lint            # 代码检查
npm run format          # 代码格式化
```

### NPM包

```bash
cd package
npm run build          # 构建CSS包
npm publish            # 发布CSS包

cd ../package-gsap
npm run build          # 构建GSAP包
npm publish           # 发布GSAP包
```

### 文档

```bash
cd docs
npm install           # 安装依赖
npm run start         # 本地文档服务器
npm run build         # 构建文档
npm run deploy        # 部署到GitHub Pages
```

### 部署

```bash
# Vercel CLI
npm install -g vercel
vercel --prod

# Netlify CLI
npm install -g netlify-cli
netlify deploy --prod
```

## 配置文件

| 文件 | 用途 |
|------|------|
| `package.json` | 主项目配置 |
| `package/package.json` | CSS NPM包配置 |
| `package-gsap/package.json` | GSAP NPM包配置 |
| `vite.config.ts` | Vite构建配置 |
| `vercel.json` | Vercel部署配置 |
| `netlify.toml` | Netlify部署配置 |
| `docs/docusaurus.config.js` | 文档配置 |

## 版本号

- **主项目**: 2.0.0
- **CSS包**: 2.0.0
- **GSAP包**: 2.0.0
- **Node.js**: >= 18.0.0
- **GSAP**: >= 3.12.0

## 浏览器支持

| 浏览器 | 版本 |
|--------|------|
| Chrome | 87+ |
| Firefox | 78+ |
| Safari | 14+ |
| Edge | 88+ |
| iOS Safari | 14+ |
| Android | 87+ |

## 性能指标

- ✅ 60fps帧率
- ✅ GPU加速
- ✅ 最小重排
- ✅ 内存高效
- ✅ 延迟加载

## 许可证

MIT License - 完全免费,永久开源

## 获取帮助

- 📖 文档: `DEPLOYMENT.md`
- 🚀 发布: `PUBLISH-NOW.md`
- 📊 总结: `P0-SUMMARY.md`
- ✅ 清单: `P0-COMPLETED.md`
- 🐛 Issues: GitHub Issues

---

**快速开始你的动画之旅!** 🚀

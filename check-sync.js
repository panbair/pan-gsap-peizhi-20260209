const fs = require('fs');
const path = require('path');

const animationDir = path.join(__dirname, 'src/views/page2/animation');
const optionsPath = path.join(__dirname, 'src/views/page2/animationOptions.js');

// 收集所有动画名称
const allAnimations = new Set();

for (let i = 1; i <= 14; i++) {
  const filePath = path.join(animationDir, `v${i}.js`);
  const content = fs.readFileSync(filePath, 'utf-8');
  
  if (i === 1) {
    // V1 是对象格式
    const match = content.match(/export const v1 = \{([\s\S]*?)^}/m);
    if (match) {
      const inner = match[1];
      const keys = inner.match(/^\s*(\w+):\s*\{/gm);
      if (keys) {
        keys.forEach(key => {
          const name = key.trim().match(/(\w+):/)[1];
          allAnimations.add(name);
        });
      }
    }
  } else {
    // 其他版本
    const match = content.match(new RegExp(`export const v${i} = \\{([\\s\\S]*?)^\\}`, 'm'));
    if (match) {
      const inner = match[1];
      const lines = inner.split('\n');
      lines.forEach(line => {
        const keyMatch = line.match(/^\s*(\w+),?\s*$/);
        if (keyMatch) {
          allAnimations.add(keyMatch[1]);
        }
      });
    }
  }
}

// 读取 options
const optionsContent = fs.readFileSync(optionsPath, 'utf-8');
const options = optionsContent.match(/value: '(\w+)'/g) || [];
const optionNames = options.map(o => o.match(/'(\w+)'/)[1]);

console.log('动画文件中的动画数量:', allAnimations.size);
console.log('animationOptions.js 中的动画数量:', optionNames.length);

const missing = [...allAnimations].filter(a => !optionNames.includes(a));
const extra = optionNames.filter(o => !allAnimations.has(o));

if (missing.length > 0) {
  console.log(`\n❌ 在动画文件中存在但在 options 中缺失 (${missing.length}个):`);
  missing.forEach(m => console.log(`  - ${m}`));
}

if (extra.length > 0) {
  console.log(`\n❌ 在 options 中存在但在动画文件中缺失 (${extra.length}个):`);
  extra.forEach(e => console.log(`  - ${e}`));
}

if (missing.length === 0 && extra.length === 0) {
  console.log('\n✅ 完全一一对应！');
}

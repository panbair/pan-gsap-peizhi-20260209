const fs = require('fs');

// 读取所有动画文件并提取导出的动画名称
const files = [
  'v1.js', 'v2.js', 'v3.js', 'v4.js', 'v5.js', 
  'v6.js', 'v7.js', 'v8.js', 'v9.js', 'v10.js', 
  'v11.js', 'v12.js', 'v13.js', 'v14.js'
];

const allAnimations = {};
const v14Animations = {};

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf-8');
  
  // 提取导出的常量名称
  const matches = content.match(/export const (\w+) = \{/g);
  if (matches) {
    matches.forEach(match => {
      const name = match.match(/export const (\w+) = \{/)[1];
      if (file === 'v14.js') {
        v14Animations[name] = true;
      } else if (name !== 'v1' && name !== 'v2' && name !== 'v3' && 
                 name !== 'v4' && name !== 'v5' && name !== 'v6' && 
                 name !== 'v7' && name !== 'v8' && name !== 'v9' && 
                 name !== 'v10' && name !== 'v11' && name !== 'v12' && 
                 name !== 'v13' && name !== 'v14') {
        allAnimations[name] = true;
      }
    });
  }
});

console.log('=== 所有动画文件中的动画名称 ===');
console.log('V1-V13 动画数量:', Object.keys(allAnimations).length);
console.log('V14 动画数量:', Object.keys(v14Animations).length);
console.log('总计:', Object.keys(allAnimations).length + Object.keys(v14Animations).length);

// 读取 animationOptions.js 提取所有的 value
const optionsContent = fs.readFileSync('animationOptions.js', 'utf-8');
const optionValues = optionsContent.match(/\{ value: '(\w+)'/g);
const optionNames = optionValues ? optionValues.map(v => v.match(/'(\w+)'/)[1]) : [];

console.log('\n=== animationOptions.js 中的动画名称 ===');
console.log('总计:', optionNames.length);

// 检查是否一一对应
const allAnimNames = [...Object.keys(allAnimations), ...Object.keys(v14Animations)];
const missingInOptions = allAnimNames.filter(name => !optionNames.includes(name));
const extraInOptions = optionNames.filter(name => !allAnimNames.includes(name));

console.log('\n=== 检查结果 ===');
if (missingInOptions.length === 0 && extraInOptions.length === 0) {
  console.log('✅ 完全一一对应！');
} else {
  if (missingInOptions.length > 0) {
    console.log('❌ 在动画文件中存在但在 options 中缺失:', missingInOptions.join(', '));
  }
  if (extraInOptions.length > 0) {
    console.log('❌ 在 options 中存在但在动画文件中缺失:', extraInOptions.join(', '));
  }
}

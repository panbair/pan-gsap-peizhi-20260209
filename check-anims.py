import re
import os

os.chdir('d:/work20240226/rcs-20250311/gsap-20260209/src/views/page2/animation')

# 读取所有动画文件
animations = {}
for i in range(1, 15):
    filename = f'v{i}.js'
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()
        # 提取 v1-v14 对象内的所有属性名
        if i == 1:
            # V1 是对象格式
            pattern = r'export const v1 = \{([^}]+)\}'
            match = re.search(pattern, content, re.DOTALL)
            if match:
                inner = match.group(1)
                keys = re.findall(r'(\w+):\s*\{', inner)
                animations[keys] = 'V1'
        else:
            # 其他版本也是对象格式
            pattern = rf'export const v{i} = \{{([^}}]+)\}}'
            match = re.search(pattern, content, re.DOTALL)
            if match:
                inner = match.group(1)
                keys = re.findall(r'(\w+):\s*\{', inner)
                for key in keys:
                    animations[key] = f'V{i}'

# 读取 animationOptions.js
with open('animationOptions.js', 'r', encoding='utf-8') as f:
    content = f.read()
    options = re.findall(r'\{ value: \'(\w+)\'', content)

# 比较
print(f'动画文件中的动画数量: {len(animations)}')
print(f'animationOptions.js 中的动画数量: {len(options)}')
print()

missing = set(animations.keys()) - set(options)
extra = set(options) - set(animations.keys())

if missing:
    print(f'❌ 在动画文件中存在但在 options 中缺失 ({len(missing)}个):')
    for key in sorted(missing):
        print(f'  - {key} (来自 {animations[key]})')
    print()

if extra:
    print(f'❌ 在 options 中存在但在动画文件中缺失 ({len(extra)}个):')
    for key in sorted(extra):
        print(f'  - {key}')
    print()

if not missing and not extra:
    print('✅ 完全一一对应！')

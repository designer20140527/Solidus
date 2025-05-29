const fs = require('fs');
const path = require('path');

// 修复Next.js hydration错误的脚本
// 这个脚本会自动为layout.tsx文件的body标签添加suppressHydrationWarning属性

function fixHydrationIssue() {
  const layoutPaths = [
    'src/app/layout.tsx',
    'app/layout.tsx',
    'src/app/layout.jsx',
    'app/layout.jsx'
  ];

  let layoutPath = null;
  
  // 查找layout文件
  for (const pathToCheck of layoutPaths) {
    if (fs.existsSync(pathToCheck)) {
      layoutPath = pathToCheck;
      break;
    }
  }

  if (!layoutPath) {
    console.log('❌ 未找到layout文件，请确保在Next.js项目根目录中运行此脚本');
    return;
  }

  try {
    let content = fs.readFileSync(layoutPath, 'utf8');
    
    // 检查是否已经添加了suppressHydrationWarning
    if (content.includes('suppressHydrationWarning')) {
      console.log('✅ 已经修复过了，无需重复操作');
      return;
    }

    // 查找body标签并添加suppressHydrationWarning属性
    const bodyRegex = /(<body[^>]*)(>)/;
    const match = content.match(bodyRegex);
    
    if (match) {
      const newBodyTag = match[1].trim() + '\n        suppressHydrationWarning={true}' + match[2];
      content = content.replace(bodyRegex, newBodyTag);
      
      fs.writeFileSync(layoutPath, content);
      console.log('✅ 成功修复hydration错误!');
      console.log(`📁 修改的文件: ${layoutPath}`);
      console.log('🚀 现在可以重新运行 npm run dev');
    } else {
      console.log('❌ 未找到body标签，请手动添加suppressHydrationWarning属性');
    }
    
  } catch (error) {
    console.error('❌ 修复过程中出现错误:', error.message);
  }
}

// 运行修复
console.log('🔧 开始修复Next.js hydration错误...');
fixHydrationIssue(); 
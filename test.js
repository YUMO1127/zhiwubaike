// 植物百科应用测试脚本
// 用于验证所有功能模块是否正常工作

// 模拟数据测试
console.log('🌱 植物百科应用测试开始');

// 测试1: 检查模拟数据
console.log('\n📊 测试1: 模拟数据完整性检查');
try {
  const { mockPlants, mockPlantDetails, mockRecognitionResults, reminderTypes } = require('./src/mock/plantData.js');
  
  console.log(`✅ 植物基础数据: ${mockPlants.length} 条记录`);
  console.log(`✅ 植物详细数据: ${Object.keys(mockPlantDetails).length} 条记录`);
  console.log(`✅ 识别结果数据: ${mockRecognitionResults.length} 条记录`);
  console.log(`✅ 提醒类型数据: ${reminderTypes.length} 条记录`);
  
  // 检查数据字段完整性
  const samplePlant = mockPlants[0];
  const requiredFields = ['id', 'name', 'category', 'family', 'image'];
  const missingFields = requiredFields.filter(field => !samplePlant[field]);
  
  if (missingFields.length === 0) {
    console.log('✅ 植物基础数据字段完整');
  } else {
    console.log(`❌ 植物基础数据缺少字段: ${missingFields.join(', ')}`);
  }
  
} catch (error) {
  console.log('❌ 模拟数据加载失败:', error.message);
}

// 测试2: 检查组件导出
console.log('\n🔧 测试2: 组件导出检查');
const fs = require('fs');
const path = require('path');

const components = [
  'src/components/ImageUploader.jsx',
  'src/components/PlantCard.jsx',
  'src/components/LoadingState.jsx'
];

components.forEach(component => {
  if (fs.existsSync(component)) {
    console.log(`✅ ${path.basename(component)} 存在`);
  } else {
    console.log(`❌ ${path.basename(component)} 不存在`);
  }
});

// 测试3: 检查页面文件
console.log('\n📄 测试3: 页面文件检查');
const pages = [
  'src/pages/HomePage.jsx',
  'src/pages/SearchPage.jsx',
  'src/pages/RecognitionPage.jsx',
  'src/pages/ReminderPage.jsx',
  'src/pages/PlantDetailPage.jsx'
];

pages.forEach(page => {
  if (fs.existsSync(page)) {
    console.log(`✅ ${path.basename(page)} 存在`);
  } else {
    console.log(`❌ ${path.basename(page)} 不存在`);
  }
});

// 测试4: 检查路由配置
console.log('\n🛣️ 测试4: 路由配置检查');
try {
  const appContent = fs.readFileSync('src/App.jsx', 'utf8');
  const requiredRoutes = ['/home', '/search', '/recognition', '/reminder', '/plant'];
  
  const missingRoutes = requiredRoutes.filter(route => !appContent.includes(route));
  
  if (missingRoutes.length === 0) {
    console.log('✅ 所有必需路由已配置');
  } else {
    console.log(`❌ 缺少路由: ${missingRoutes.join(', ')}`);
  }
} catch (error) {
  console.log('❌ 路由检查失败:', error.message);
}

// 测试5: 检查样式文件
console.log('\n🎨 测试5: 样式文件检查');
try {
  const cssContent = fs.readFileSync('src/index.css', 'utf8');
  const requiredStyles = [
    '.plant-card',
    '.search-box',
    '.recognition-page',
    '.reminder-page',
    '.plant-detail-page'
  ];
  
  const missingStyles = requiredStyles.filter(style => !cssContent.includes(style));
  
  if (missingStyles.length === 0) {
    console.log('✅ 所有必需样式已定义');
  } else {
    console.log(`❌ 缺少样式: ${missingStyles.join(', ')}`);
  }
} catch (error) {
  console.log('❌ 样式检查失败:', error.message);
}

// 测试6: 功能按钮检查
console.log('\n🔘 测试6: 功能按钮逻辑检查');
try {
  const homeContent = fs.readFileSync('src/pages/HomePage.jsx', 'utf8');
  const searchContent = fs.readFileSync('src/pages/SearchPage.jsx', 'utf8');
  const recognitionContent = fs.readFileSync('src/pages/RecognitionPage.jsx', 'utf8');
  const reminderContent = fs.readFileSync('src/pages/ReminderPage.jsx', 'utf8');
  const detailContent = fs.readFileSync('src/pages/PlantDetailPage.jsx', 'utf8');
  
  const buttonChecks = [
    { file: 'HomePage', content: homeContent, patterns: ['navigate', 'onClick'] },
    { file: 'SearchPage', content: searchContent, patterns: ['onSearch', 'onChange'] },
    { file: 'RecognitionPage', content: recognitionContent, patterns: ['startRecognition', 'handleImageSelect'] },
    { file: 'ReminderPage', content: reminderContent, patterns: ['addReminder', 'deleteReminder'] },
    { file: 'PlantDetailPage', content: detailContent, patterns: ['useParams', 'useNavigate'] }
  ];
  
  buttonChecks.forEach(check => {
    const hasPatterns = check.patterns.every(pattern => check.content.includes(pattern));
    if (hasPatterns) {
      console.log(`✅ ${check.file} 按钮逻辑完整`);
    } else {
      console.log(`❌ ${check.file} 按钮逻辑可能不完整`);
    }
  });
  
} catch (error) {
  console.log('❌ 按钮逻辑检查失败:', error.message);
}

console.log('\n🎉 植物百科应用测试完成！');
console.log('💡 提示: 请确保所有测试项目都显示 ✅ 标记');
console.log('🔧 如果有 ❌ 标记，请检查对应的文件和功能');
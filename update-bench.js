const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');

// Маппинг категорий из xlsx → category в приложении
const CATEGORY_MAP = {
  "QA": "QA",
  "Backend Developer": "Backend",
  "Frontend Developer": "Frontend",
  "IOS": "iOS",
  "Дизайнеры": "Design",
  "Аналитики": "Analytics",
  "DevOps / Системный администратор": "DevOps",
  "РM / PO": "PM",
};

// Маппинг специализаций из xlsx → role в приложении
const SPEC_ROLE_MAP = {
  "Manual": "QA",
  "Java ": "Backend",
  "Java": "Backend",
  "Go": "Backend",
  "React": "Frontend",
  "IOS": "iOS",
  "UX / UI": "Design",
  "СА": "Analytics",
  "Сист. админ.": "DevOps",
  "РП": "DevOps",
  "Специалист техподдержки  L3": "DevOps",
  "Специалист техподдержки L3": "DevOps",
  "Руководитель проектов": "PM",
};

const MANAGERS = {
  anastasia: { name: "Анастасия Лаврова", telegram: "https://t.me/lavrova_stacy" },
  ekaterina: { name: "Екатерина Волкова", telegram: "https://t.me/sherlie221" },
};

const CATEGORY_MANAGER = {
  QA: MANAGERS.anastasia,
  Backend: MANAGERS.ekaterina,
  Frontend: MANAGERS.anastasia,
  iOS: MANAGERS.anastasia,
  Design: MANAGERS.anastasia,
  Analytics: MANAGERS.anastasia,
  DevOps: MANAGERS.ekaterina,
  PM: MANAGERS.anastasia,
};

// Читаем xlsx
const wb = XLSX.readFile(path.join(__dirname, 'бенч.xlsx'));
const ws = wb.Sheets[wb.SheetNames[0]];
const rawData = XLSX.utils.sheet_to_json(ws, { defval: '' });

const specialists = [];
let currentCategory = null;
let idCounter = 0;

for (const row of rawData) {
  const name = (row['__EMPTY'] || '').toString().trim();
  const grade = (row['Для бронирования напишите аккаунт-менеджерам в ТГ:'] || '').toString().trim();
  const specRaw = (row['__EMPTY_1'] || '').toString().trim();
  const rateRaw = row['__EMPTY_2'] || '';
  const experience = (row['__EMPTY_3'] || '').toString().trim();
  const cv = (row['__EMPTY_4'] || '').toString().trim();
  const availableFrom = (row['__EMPTY_5'] || '').toString().trim();

  if (!name) continue;

  // Строка-категория (нет грейда, спецификации и т.д.)
  if (!grade && !specRaw && !rateRaw && !experience && !cv) {
    if (CATEGORY_MAP[name]) {
      currentCategory = CATEGORY_MAP[name];
    }
    continue;
  }

  if (!currentCategory) continue;

  const role = SPEC_ROLE_MAP[specRaw] || currentCategory;
  const specialization = `${role}: ${specRaw}`;

  let rate;
  if (typeof rateRaw === 'number') {
    rate = `${rateRaw} ₽/ч`;
  } else if (rateRaw && rateRaw.toString().trim()) {
    rate = rateRaw.toString().trim();
  } else {
    rate = 'по запросу';
  }

  idCounter++;
  specialists.push({
    id: `${currentCategory.toLowerCase()}-${idCounter}`,
    name,
    category: currentCategory,
    grade,
    specialization,
    location: 'РФ',
    rate,
    experience,
    status: 'Свободен',
    availableFrom: availableFrom || 'по запросу',
    cv,
    manager: CATEGORY_MANAGER[currentCategory],
    letter: '',
  });
}

console.log(`Parsed ${specialists.length} specialists`);

// Генерируем JS-код
const jsCode = `const specialists = ${JSON.stringify(specialists, null, 2)};`;

// Читаем текущий app.js
const appJsPath = path.join(__dirname, 'app.js');
let appJs = fs.readFileSync(appJsPath, 'utf-8');

// Заменяем старый массив specialists на новый
// Находим от "const specialists = [" до "];" который перед "const benchBody"
const oldPattern = /const specialists = \[[\s\S]*?\];\n\nconst benchBody/;
const newCode = jsCode + '\n\nconst benchBody';

if (oldPattern.test(appJs)) {
  appJs = appJs.replace(oldPattern, newCode);
  fs.writeFileSync(appJsPath, appJs, 'utf-8');
  console.log('✅ app.js updated successfully!');
} else {
  console.log('❌ Could not find specialists array in app.js');
  console.log('Writing parsed data to specialists-data.js instead...');
  fs.writeFileSync(path.join(__dirname, 'specialists-data.js'), jsCode, 'utf-8');
  console.log('✅ specialists-data.js created. Replace manually in app.js');
}

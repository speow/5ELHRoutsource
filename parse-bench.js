/**
 * Парсер бенч.xlsx → массив специалистов
 * Запускается из браузера через <script type="module"> или конвертируется в данные
 *
 * Структура xlsx:
 * - Строки-категории: в столбце "Имя" написано название категории (QA, Backend Developer, etc.)
 * - Строки-специалисты: имя, грейд, специализация, ставка, опыт, CV, дата выхода
 */

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

// Менеджеры
const MANAGERS = {
  anastasia: {
    name: "Анастасия Лаврова",
    telegram: "https://t.me/lavrova_stacy",
  },
  ekaterina: {
    name: "Екатерина Волкова",
    telegram: "https://t.me/sherlie221",
  },
};

// Распределение менеджеров по категориям
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

/**
 * Парсит сырые данные из sheet_to_json и возвращает массив специалистов
 */
export function parseBenchData(rawData) {
  const specialists = [];
  let currentCategory = null;
  let idCounter = 0;

  for (const row of rawData) {
    const name = (row["__EMPTY"] || "").toString().trim();
    const grade = (row["Для бронирования напишите аккаунт-менеджерам в ТГ:"] || "").toString().trim();
    const specRaw = (row["__EMPTY_1"] || "").toString().trim();
    const rateRaw = row["__EMPTY_2"] || "";
    const experience = (row["__EMPTY_3"] || "").toString().trim();
    const cv = (row["__EMPTY_4"] || "").toString().trim();
    const availableFrom = (row["__EMPTY_5"] || "").toString().trim();

    // Пропускаем пустые строки
    if (!name) continue;

    // Проверяем, является ли строка заголовком категории
    if (!grade && !specRaw && !rateRaw && !experience && !cv) {
      // Это строка-категория
      if (CATEGORY_MAP[name]) {
        currentCategory = CATEGORY_MAP[name];
      }
      continue;
    }

    // Это строка специалиста
    if (!currentCategory) continue;

    const specialization = specRaw;
    const role = SPEC_ROLE_MAP[specRaw] || currentCategory;

    // Форматируем ставку
    let rate;
    if (typeof rateRaw === "number") {
      rate = `${rateRaw} ₽/ч`;
    } else if (rateRaw && rateRaw.toString().trim()) {
      rate = rateRaw.toString().trim();
    } else {
      rate = "по запросу";
    }

    idCounter++;
    specialists.push({
      id: `${currentCategory.toLowerCase()}-${idCounter}`,
      name,
      category: currentCategory,
      grade,
      specialization: `${role}: ${specialization}`,
      location: "РФ",
      rate,
      experience,
      status: "Свободен",
      availableFrom: availableFrom || "по запросу",
      cv,
      manager: CATEGORY_MANAGER[currentCategory],
      letter: "",
    });
  }

  return specialists;
}

/**
 * Генерирует JavaScript-код с массивом специалистов
 * Можно использовать для генерации статического app.js
 */
export function generateSpecialistsJS(specialists) {
  return `const specialists = ${JSON.stringify(specialists, null, 2)};`;
}

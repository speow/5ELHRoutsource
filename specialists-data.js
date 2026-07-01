const specialists = [
  {
    "id": "qa-1",
    "name": "Константин А.",
    "category": "QA",
    "grade": "Middle-",
    "specialization": "QA: Manual",
    "location": "РФ",
    "rate": "1500 ₽/ч",
    "experience": "2+ лет",
    "status": "Свободен",
    "availableFrom": "по запросу",
    "cv": "https://disk.360.yandex.ru/d/4ijC4-G6xFEGgg",
    "manager": {
      "name": "Анастасия Лаврова",
      "telegram": "https://t.me/lavrova_stacy"
    },
    "letter": ""
  },
  {
    "id": "qa-2",
    "name": "Ярослав Ш.",
    "category": "QA",
    "grade": "Lead",
    "specialization": "QA: Manual",
    "location": "РФ",
    "rate": "2600 ₽/ч",
    "experience": "5+ лет",
    "status": "Свободен",
    "availableFrom": "по согласованию",
    "cv": "https://disk.360.yandex.ru/i/inWqj0XpnyPt-Q",
    "manager": {
      "name": "Анастасия Лаврова",
      "telegram": "https://t.me/lavrova_stacy"
    },
    "letter": ""
  },
  {
    "id": "qa-3",
    "name": "Евгений С.",
    "category": "QA",
    "grade": "Lead",
    "specialization": "QA: Manual",
    "location": "РФ",
    "rate": "3100 ₽/ч",
    "experience": "9+ лет",
    "status": "Свободен",
    "availableFrom": "по согласованию",
    "cv": "https://disk.360.yandex.ru/i/27kf-ZAbumKceQ",
    "manager": {
      "name": "Анастасия Лаврова",
      "telegram": "https://t.me/lavrova_stacy"
    },
    "letter": ""
  },
  {
    "id": "qa-4",
    "name": "Анастасия П.",
    "category": "QA",
    "grade": "Middle",
    "specialization": "QA: Manual",
    "location": "РФ",
    "rate": "1350 ₽/ч",
    "experience": "4+ лет",
    "status": "Свободен",
    "availableFrom": "asap",
    "cv": "https://disk.360.yandex.ru/i/QkGBqT0JbOJCgA",
    "manager": {
      "name": "Анастасия Лаврова",
      "telegram": "https://t.me/lavrova_stacy"
    },
    "letter": ""
  },
  {
    "id": "qa-5",
    "name": "Алина Ю.",
    "category": "QA",
    "grade": "Middle",
    "specialization": "QA: Manual",
    "location": "РФ",
    "rate": "по запросу",
    "experience": "3+ лет",
    "status": "Свободен",
    "availableFrom": "2 недели",
    "cv": "https://disk.360.yandex.ru/d/SvKJpb6Pjcfdrg",
    "manager": {
      "name": "Анастасия Лаврова",
      "telegram": "https://t.me/lavrova_stacy"
    },
    "letter": ""
  },
  {
    "id": "qa-6",
    "name": "Михаил Р.",
    "category": "QA",
    "grade": "Middle+",
    "specialization": "QA: Manual",
    "location": "РФ",
    "rate": "2100 ₽/ч",
    "experience": "6+ лет",
    "status": "Свободен",
    "availableFrom": "asap",
    "cv": "https://disk.360.yandex.ru/d/EQpi7VsQwGSoIw",
    "manager": {
      "name": "Анастасия Лаврова",
      "telegram": "https://t.me/lavrova_stacy"
    },
    "letter": ""
  },
  {
    "id": "backend-7",
    "name": "Дмитрий Б.",
    "category": "Backend",
    "grade": "Middle +",
    "specialization": "Backend: Java",
    "location": "РФ",
    "rate": "2500 ₽/ч",
    "experience": "3+ лет",
    "status": "Свободен",
    "availableFrom": "по запросу",
    "cv": "https://disk.360.yandex.ru/i/0r3ySRI_lStX0g",
    "manager": {
      "name": "Екатерина Волкова",
      "telegram": "https://t.me/sherlie221"
    },
    "letter": ""
  },
  {
    "id": "backend-8",
    "name": "Павел К.",
    "category": "Backend",
    "grade": "Senior",
    "specialization": "Backend: Java",
    "location": "РФ",
    "rate": "3100 ₽/ч",
    "experience": "9+ лет",
    "status": "Свободен",
    "availableFrom": "по запросу",
    "cv": "https://disk.360.yandex.ru/d/X_aUde5JS6VycA",
    "manager": {
      "name": "Екатерина Волкова",
      "telegram": "https://t.me/sherlie221"
    },
    "letter": ""
  },
  {
    "id": "backend-9",
    "name": "Юрий Т.",
    "category": "Backend",
    "grade": "Middle+",
    "specialization": "Backend: Java",
    "location": "РФ",
    "rate": "2750 ₽/ч",
    "experience": "12+ лет",
    "status": "Свободен",
    "availableFrom": "asap",
    "cv": "https://disk.360.yandex.ru/i/Sh6MYUPcJSoO1Q",
    "manager": {
      "name": "Екатерина Волкова",
      "telegram": "https://t.me/sherlie221"
    },
    "letter": ""
  },
  {
    "id": "backend-10",
    "name": "Вячеслав С.",
    "category": "Backend",
    "grade": "Senior",
    "specialization": "Backend: Go",
    "location": "РФ",
    "rate": "по запросу",
    "experience": "4+ лет",
    "status": "Свободен",
    "availableFrom": "по запросу",
    "cv": "https://disk.360.yandex.ru/i/RwGnkEsFfH6d2g",
    "manager": {
      "name": "Екатерина Волкова",
      "telegram": "https://t.me/sherlie221"
    },
    "letter": ""
  },
  {
    "id": "frontend-11",
    "name": "Злата И.",
    "category": "Frontend",
    "grade": "Middle",
    "specialization": "Frontend: React",
    "location": "РФ",
    "rate": "1400 ₽/ч",
    "experience": "4+ лет",
    "status": "Свободен",
    "availableFrom": "по запросу",
    "cv": "https://disk.360.yandex.ru/i/aBmd5wqELaCwiA",
    "manager": {
      "name": "Анастасия Лаврова",
      "telegram": "https://t.me/lavrova_stacy"
    },
    "letter": ""
  },
  {
    "id": "frontend-12",
    "name": "Роман М.",
    "category": "Frontend",
    "grade": "Senior",
    "specialization": "Frontend: React",
    "location": "РФ",
    "rate": "2400 ₽/ч",
    "experience": "7+ лет",
    "status": "Свободен",
    "availableFrom": "по запросу",
    "cv": "https://disk.360.yandex.ru/i/OlTze6ECphCDzQ",
    "manager": {
      "name": "Анастасия Лаврова",
      "telegram": "https://t.me/lavrova_stacy"
    },
    "letter": ""
  },
  {
    "id": "frontend-13",
    "name": "Никита Р.",
    "category": "Frontend",
    "grade": "Middle",
    "specialization": "Frontend: React",
    "location": "РФ",
    "rate": "1700 ₽/ч",
    "experience": "4+ лет",
    "status": "Свободен",
    "availableFrom": "asap",
    "cv": "https://disk.360.yandex.ru/i/Ml86tkjV4IhkUQ",
    "manager": {
      "name": "Анастасия Лаврова",
      "telegram": "https://t.me/lavrova_stacy"
    },
    "letter": ""
  },
  {
    "id": "frontend-14",
    "name": "Станистав П.",
    "category": "Frontend",
    "grade": "Middle",
    "specialization": "Frontend: React",
    "location": "РФ",
    "rate": "1700 ₽/ч",
    "experience": "5 лет",
    "status": "Свободен",
    "availableFrom": "asap",
    "cv": "https://disk.360.yandex.ru/d/o7mvEeMPk8kWVw",
    "manager": {
      "name": "Анастасия Лаврова",
      "telegram": "https://t.me/lavrova_stacy"
    },
    "letter": ""
  },
  {
    "id": "ios-15",
    "name": "Ульяна Г.",
    "category": "iOS",
    "grade": "Middle",
    "specialization": "iOS: iOS",
    "location": "РФ",
    "rate": "1500 ₽/ч",
    "experience": "4+ лет",
    "status": "Свободен",
    "availableFrom": "по запросу",
    "cv": "https://disk.360.yandex.ru/i/I3HaV4jfALffew",
    "manager": {
      "name": "Анастасия Лаврова",
      "telegram": "https://t.me/lavrova_stacy"
    },
    "letter": ""
  },
  {
    "id": "design-16",
    "name": "Дарья И.",
    "category": "Design",
    "grade": "Middle+",
    "specialization": "Design: UX / UI",
    "location": "РФ",
    "rate": "1300 ₽/ч",
    "experience": "3+ лет",
    "status": "Свободен",
    "availableFrom": "по согласованию",
    "cv": "https://disk.360.yandex.ru/i/1tU0dDBUv1Dxkg",
    "manager": {
      "name": "Анастасия Лаврова",
      "telegram": "https://t.me/lavrova_stacy"
    },
    "letter": ""
  },
  {
    "id": "analytics-17",
    "name": "Алина Б.",
    "category": "Analytics",
    "grade": "Middle",
    "specialization": "Analytics: СА",
    "location": "РФ",
    "rate": "по запросу",
    "experience": "3+ лет",
    "status": "Свободен",
    "availableFrom": "по запросу",
    "cv": "https://disk.360.yandex.ru/i/xUm-DseGopH1gw",
    "manager": {
      "name": "Анастасия Лаврова",
      "telegram": "https://t.me/lavrova_stacy"
    },
    "letter": ""
  },
  {
    "id": "devops-18",
    "name": "Максим Б.",
    "category": "DevOps",
    "grade": "Middle",
    "specialization": "DevOps: Сист. админ.",
    "location": "РФ",
    "rate": "по запросу",
    "experience": "4+ лет",
    "status": "Свободен",
    "availableFrom": "asap",
    "cv": "https://disk.360.yandex.ru/d/eubEDNUm_hAAGA",
    "manager": {
      "name": "Екатерина Волкова",
      "telegram": "https://t.me/sherlie221"
    },
    "letter": ""
  },
  {
    "id": "devops-19",
    "name": "Никита Л.",
    "category": "DevOps",
    "grade": "Senior",
    "specialization": "DevOps: РП",
    "location": "РФ",
    "rate": "по запросу",
    "experience": "8+ лет",
    "status": "Свободен",
    "availableFrom": "по запросу",
    "cv": "https://disk.360.yandex.ru/i/eshYVQilwXZoGA",
    "manager": {
      "name": "Екатерина Волкова",
      "telegram": "https://t.me/sherlie221"
    },
    "letter": ""
  },
  {
    "id": "devops-20",
    "name": "Данил В.",
    "category": "DevOps",
    "grade": "Middle",
    "specialization": "DevOps: Специалист техподдержки  L3",
    "location": "РФ",
    "rate": "1500 ₽/ч",
    "experience": "3+ лет",
    "status": "Свободен",
    "availableFrom": "по запросу",
    "cv": "https://disk.360.yandex.ru/i/-YvLoErQ7kktDQ",
    "manager": {
      "name": "Екатерина Волкова",
      "telegram": "https://t.me/sherlie221"
    },
    "letter": ""
  },
  {
    "id": "pm-21",
    "name": "Юлия Р.",
    "category": "PM",
    "grade": "Senior",
    "specialization": "PM: Руководитель проектов",
    "location": "РФ",
    "rate": "2 400",
    "experience": "6+ лет",
    "status": "Свободен",
    "availableFrom": "по запросу",
    "cv": "https://disk.360.yandex.ru/i/5ORoRmYwZj5EPw",
    "manager": {
      "name": "Анастасия Лаврова",
      "telegram": "https://t.me/lavrova_stacy"
    },
    "letter": ""
  }
];
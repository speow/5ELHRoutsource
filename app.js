const managers = {
  anastasia: {
    name: "Анастасия Лаврова",
    telegram: "https://t.me/lavrova_stacy",
  },
  ekaterina: {
    name: "Екатерина Волкова",
    telegram: "https://t.me/sherlie221",
  },
};

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
    "manager": managers.anastasia,
    "letter": "Manual QA Engineer с опытом 2 года 10 месяцев в тестировании веб- и мобильных продуктов, а также в работе с распределенными командами. Уверенно использует Postman, SoapUI, TestRail, Jira, Confluence, Swagger, DBeaver, DevTools, Fiddler, OpenSearch, Headlamp Kubernetes UI, Lens, Docker, Kubernetes, PostgreSQL и базовый SQL. Имеет опыт функционального, регрессионного, системного, интеграционного и UI/UX-тестирования, подготовки чек-листов, тест-кейсов и тест-планов. На проектах ЕДЦ и NRB тестировал web-интерфейсы, Android-приложение, интеграции с внешними системами, трассировку логов в Kubernetes и участвовал в контроле исправления дефектов до релиза."
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
    "manager": managers.anastasia,
    "letter": "Специалист по тестированию ПО с опытом более 5 лет в финтехе, промышленности и автоматизации. Уверенно работает с PostgreSQL, SQL-запросами, TestRail, Jira, Confluence, Postman, Swagger, GitLab, Kibana, Kafka, Kubernetes, JMeter, Fiddler и DevTools. Имеет опыт ручного тестирования backend, web- и мобильных приложений, тестирования документации, API, интеграций, логов, интерфейсов, а также проведения функционального, системного, регрессионного, нагрузочного и стресс-тестирования. На проектах ГК Иннотех и RCM-Навигатор 2.0 тестировал банковские сервисы по депозитам юридических лиц и систему управления надежностью промышленного оборудования, поддерживал тестовую документацию и взаимодействовал с аналитиками и разработчиками."
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
    "manager": managers.anastasia,
    "letter": "QA Lead Engineer с опытом более 9 лет в тестировании, включая 1 год управления группой тестирования, 6 лет ручного тестирования и 2 года автоматизации. Имеет опыт в банковском и финтех-секторе, работе по Scrum, SAFe и ProPro, применении Shift-Left-подхода и переходе от монолитной системы к микросервисной архитектуре. Уверенно работает с Jira, Confluence, Сферой, Postman, JMeter, Selenium, PostgreSQL, Oracle, REST API, SOAP, Kafka, Kubernetes и Kibana. На проектах Иннотеха руководил тестированием микросервисов учета блокировок и арестов счетов, готовил тест-планы, гайдлайны, ревью документации, ПСИ и демо-показы, а также разработал инструмент для быстрого создания тестовых JSON-данных."
  },
  {
    "id": "qa-4",
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
    "manager": managers.anastasia,
    "letter": "Manual QA Engineer с опытом 6 лет 2 месяца в тестировании ERP, BPM, розничных и мобильных решений. Уверенно работает с SQL/PostgreSQL, Postman, Swagger, SoapUI, Insomnia, Zephyr, Jira, Confluence, Git, Kibana, OpenShift, Android Studio, Xcode, REST, SOAP, Kafka и 1C:УТ 11. Имеет опыт функционального, регрессионного, интеграционного и приемочного тестирования, тестирования документации, API, мок-сервисов, мобильных приложений и хранимых данных через DBeaver. На проекте Сбера по BPM-системе помощи юристам покрывал интеграционные процессы тестами, не допустил в прод блокирующие и критичные дефекты, а также давал обратную связь по AI-агентам для создания тестовых сценариев."
  },
  {
    "id": "backend-1",
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
    "manager": managers.ekaterina,
    "letter": "Java-разработчик с опытом 4 года в разработке backend- и микросервисных решений. Уверенно работает с Java 11/17/21, Spring Boot, Spring Data JPA, Spring Security, Spring Cloud, OpenFeign, Hibernate, Lombok, MapStruct, Liquibase, PostgreSQL, MS SQL Server, Kafka, Consul, Actuator, Prometheus, JUnit 5, Mockito, Maven и Git. Имеет опыт проектирования REST API, реализации бизнес-логики, интеграций и асинхронного взаимодействия между сервисами. На проекте METRO MCredit разрабатывал систему кредитования юридических лиц, реализовывал Kafka-механизмы синхронизации клиентских данных, выборочную блокировку бизнес-операций и event-driven обработку бизнес-событий через Kafka и Node-RED."
  },
  {
    "id": "backend-2",
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
    "manager": managers.ekaterina,
    "letter": "Java-разработчик с опытом более 9 лет в разработке банковских, портальных и корпоративных решений. Уверенно работает с Java, Kotlin, Groovy, Spring Boot, Spring Data JPA, Spring Security, Spring Batch, Vaadin, React, Angular, Oracle, PostgreSQL, Maven, Gradle, JUnit, REST API, SOAP, S3, Kafka, Docker и микросервисной архитектурой. Имеет опыт разработки backend-логики, UI на Vaadin, интеграций, загрузки файлов, документооборота, отчетности и оптимизации производительности. На проекте Совкомбанк Технологии развивал web-приложение «Кредиты» для корпоративных сервисов, переводил UI с deprecated API Vaadin, внедрял S3-хранилище, расширял чат, дорабатывал отчетность и снижал технический долг."
  },
  {
    "id": "backend-3",
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
    "manager": managers.ekaterina,
    "letter": "Java-разработчик с опытом 12 лет в банках, финтехе и электронном документообороте. Уверенно работает с Java, Kotlin, Spring Framework, Spring Boot, Hibernate, JDBC, JOOQ, SQL, PostgreSQL, Oracle, MSSQL, Liquibase, MongoDB, Maven, Jenkins, Gradle, JUnit, Mockito, Kotest, SOAP, REST, Kafka, Docker, Kubernetes, Jira, Confluence и Git. Имеет опыт разработки и сопровождения банковских микросервисов, интеграций с внутренними системами банка, бизнес-оркестрации и повышения надежности сервисов. На проектах ВТБ, Хоум Банка и БСС занимался импортозамещением, разработкой сервисов по карточным операциям и депозитам ЮЛ, развитием чат- и голосовых ботов, а также ДБО для юридических лиц."
  },
  {
    "id": "frontend-1",
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
    "manager": managers.anastasia,
    "letter": "Frontend-разработчик с опытом 4 года в разработке веб-интерфейсов и работе в распределенных командах. Уверенно работает с JavaScript, TypeScript, React, Next.js, Webpack, Vite, SCSS, CSS Modules, React Hook Form, Material UI, Framer Motion, Swiper, Zustand, Redux Toolkit, Axios, WebSocket, Swagger, Figma, Jira, GitLab и Confluence. Имеет опыт разработки сложных форм, UI-компонентов, клиентской интеграции с REST API и WebSocket, обработки асинхронных статусов, ошибок и ретраев. На проекте ВТБ ЭДО разрабатывала интерфейсы для создания, обработки и подписания документов, реализовывала массовую загрузку файлов, chunk upload, работу с CAdES plugin API и пользовательскими сертификатами."
  },
  {
    "id": "frontend-2",
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
    "manager": managers.anastasia,
    "letter": "Ведущий Frontend-разработчик с опытом более 7 лет в банковском, финтех- и логистическом доменах. Уверенно работает с TypeScript, JavaScript, React, React Native, NestJS, Express, Electron, Angular, FSD, Redux, Effector, PostgreSQL, TypeORM, Webpack, Vite, Jest, Enzyme, Cypress, REST API, Socket.IO, Docker, Material UI, Tailwind, Styled-Components и React Hook Form. Имеет опыт работы в Scrum-командах от 2 до 30 человек, включая роль тимлида, настройку unit- и e2e-тестов и развитие сложных интерфейсов. На проектах NRB и Сбербанка разрабатывал административные панели, адаптивные таблицы, формы, интеграции с API, внедрял Feature-Sliced Design, переходил с Redux на Effector и оптимизировал поддержку frontend-кода."
  },
  {
    "id": "frontend-3",
    "name": "Никита Р.",
    "category": "Frontend",
    "grade": "Middle",
    "specialization": "Frontend: React",
    "location": "РФ",
    "rate": "1700 ₽/ч",
    "experience": "3+ лет",
    "status": "Свободен",
    "availableFrom": "asap",
    "cv": "https://disk.360.yandex.ru/i/Ml86tkjV4IhkUQ",
    "manager": managers.anastasia,
    "letter": "Frontend-разработчик с опытом более 4 лет в информационных технологиях и HR-Tech, также имеющий практический fullstack-опыт. Уверенно работает с JavaScript, TypeScript, React, Vite, Webpack, Sass, Less, Vitest, AntDesign, MUI, React Bootstrap, BEM, Chrome DevTools, React Developer Tools, REST API, Jira, Confluence и Git. Имеет опыт разработки административных кабинетов, таблиц с поиском, пагинацией и фильтрацией, интерактивных форм, загрузки и обработки изображений, интеграции с API и настройки Nginx для Next.js-приложений. На проектах «Все моторы», NRB и «Мой Край» проектировал frontend- и backend-части, реализовывал REST API, работал с PostgreSQL и оптимизировал UX административных интерфейсов."
  },
  {
    "id": "frontend-4",
    "name": "Станислав П.",
    "category": "Frontend",
    "grade": "Middle",
    "specialization": "Frontend: React",
    "location": "РФ",
    "rate": "1700 ₽/ч",
    "experience": "3+ лет",
    "status": "Свободен",
    "availableFrom": "asap",
    "cv": "https://disk.360.yandex.ru/d/o7mvEeMPk8kWVw",
    "manager": managers.anastasia,
    "letter": "Frontend-разработчик с опытом 4 года 9 месяцев в проектах для туризма, маркетплейсов и организации рабочих процессов. Уверенно работает с JavaScript, TypeScript, React, React Hook Form, Redux, Material UI, Ant Design, Axios, HTML, CSS, БЭМ, Jest, React Testing Library, Cypress, PostgreSQL, Vite, Webpack, Zustand, REST, GraphQL, Docker, GitLab, Postman, Node.js, Jira и Confluence. Имеет опыт разработки интерфейсов админ-панелей, таблиц с поиском, пагинацией и фильтрацией, форм создания и редактирования продуктов, модальных окон, ролевых ограничений и работы с изображениями через Canvas. На проектах Marketplace TN, «Мой Край» и АИС разрабатывал React-интерфейсы, покрывал ключевые модули тестами и оптимизировал работу пользовательских сценариев."
  },
  {
    "id": "ios-1",
    "name": "Ульяна Г.",
    "category": "IOS",
    "grade": "Middle",
    "specialization": "IOS: IOS",
    "location": "РФ",
    "rate": "1500 ₽/ч",
    "experience": "4+ лет",
    "status": "Свободен",
    "availableFrom": "по запросу",
    "cv": "https://disk.360.yandex.ru/i/I3HaV4jfALffew",
    "manager": managers.anastasia,
    "letter": "iOS-разработчик с опытом более 4 лет в мобильной разработке и работе в распределенных командах. Уверенно работает со Swift, UIKit, SwiftUI, MVVM, Clean Swift, Combine, Async/Await, CoreData, SwiftData, Firebase, REST, GraphQL, TestFlight и App Store Connect. Имеет практический опыт разработки корпоративного маркетплейса и мобильных приложений для внутреннего туризма, включая поиск мест и событий, маршруты, бронирование отелей и авиабилетов. На проектах реализовывала новые функции, проектировала архитектуру модулей, покрывала ключевую логику unit-тестами, участвовала в релизах, код-ревью и интеграциях с HealthKit, StoreKit, Firebase, Яндекс.Картами, AppMetrica и внешними OAuth-сервисами."
  },
  {
    "id": "design-1",
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
    "manager": managers.anastasia,
    "letter": "UX/UI-дизайнер с опытом более 4 лет в финтехе, HR, медиа и развлекательных продуктах. Уверенно работает с Figma, Miro, Photoshop, Illustrator, Jira, Kaiten, Confluence и презентационными материалами. Имеет опыт проектирования пользовательских сценариев, информационной архитектуры, интерактивных прототипов, UI-kit и дизайн-систем для сложных B2B- и B2C-сервисов. На проектах ВТБ Специализированный депозитарий, NRB, Reliab Connect и АИС HR разрабатывала интерфейсы веб-платформ, мобильных приложений и внутренних сервисов, сопровождала дизайн от идеи до релиза, защищала решения перед заказчиками и работала в связке с аналитиками, разработчиками и продакт-менеджерами."
  },
  {
    "id": "devops-1",
    "name": "Данил В.",
    "category": "DevOps",
    "grade": "Middle",
    "specialization": "DevOps: Специалист техподдержки L3",
    "location": "РФ",
    "rate": "1500 ₽/ч",
    "experience": "3+ лет",
    "status": "Свободен",
    "availableFrom": "по запросу",
    "cv": "https://disk.360.yandex.ru/i/-YvLoErQ7kktDQ",
    "manager": managers.ekaterina,
    "letter": "Специалист технического сопровождения и системный администратор с опытом 3 года в поддержке, сопровождении и DevOps-задачах. Уверенно работает с Docker, Docker Compose, GitHub Actions, GitLab CI, PostgreSQL, MongoDB, NGINX, Kubernetes, Prometheus, Grafana, Redis, Celery, Python, Bash, YAML, JSON, Postman и Swagger. Имеет практический опыт сопровождения интеграционных сервисов, мониторинга, анализа логов и диагностики инцидентов. На проектах ЛАНИТ и Moodle Cluster работал с ЕБП, Kafka, OpenSearch, Pimcore, REST API, SOAP, XML/XSD-схемами, настраивал мониторинг Prometheus + Node Exporter, собирал дашборды Grafana и готовил техническую документацию для команды."
  },
  {
    "id": "pm-1",
    "name": "Юлия Р.",
    "category": "PM",
    "grade": "Senior",
    "specialization": "PM: Руководитель проектов",
    "location": "РФ",
    "rate": "2400 ₽/ч",
    "experience": "6+ лет",
    "status": "Свободен",
    "availableFrom": "по запросу",
    "cv": "https://disk.360.yandex.ru/i/5ORoRmYwZj5EPw",
    "manager": managers.anastasia,
    "letter": "IT Project Manager с опытом более 6 лет в HR-Tech, Legal-Tech, Ed-Tech, GameDev и ритейле. Уверенно работает с Jira, Redmine, GanttPRO, Miro, Яндекс.Трекером, Confluence, MS Office, BPMN, Figma, а также с Agile, Scrum, Kanban и Waterfall-подходами. Имеет опыт полного цикла управления проектами: от пресейла, сбора требований и оценки трудоемкости до delivery, приемки, отчетности и закрывающих документов. В Пятом Элементе управляла портфелем продуктов NRB, Burger King и ВНТ «Водокомфорт», координировала команду до 15 специалистов, вела roadmap, backlog, риски, бюджеты, демо, CustDev и внедряла AI-инструменты в проектные процессы."
  }
];

const benchBody = document.querySelector("#bench-body");
const letterModal = document.querySelector("#letter-modal");
const modalDialog = letterModal ? letterModal.querySelector(".modal-dialog") : null;
const modalCloseControls = letterModal ? letterModal.querySelectorAll("[data-modal-close]") : [];
const modalTitle = document.querySelector("#letter-modal-title");
const modalText = document.querySelector("#letter-modal-text");
const revealTargets = document.querySelectorAll(
  ".section-heading, .bench-table-wrap, .site-footer .footer-inner",
);

let lastFocusedElement = null;

function forEachNode(nodeList, callback) {
  Array.prototype.forEach.call(nodeList, callback);
}

function createCell(label, content) {
  const cell = document.createElement("td");
  cell.dataset.label = label;

  if (content instanceof Node) {
    cell.appendChild(content);
  } else {
    cell.textContent = content;
  }

  return cell;
}

function createActionLink(label, href, className, ariaLabel) {
  const link = document.createElement("a");
  link.className = `table-action ${className}`.trim();
  link.href = href;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.textContent = label;

  if (ariaLabel) {
    link.setAttribute("aria-label", ariaLabel);
  }

  return link;
}

function splitSpecialization(value) {
  const separatorIndex = value.indexOf(":");

  if (separatorIndex === -1) {
    return {
      specialization: value,
      role: "",
    };
  }

  return {
    specialization: value.slice(separatorIndex + 1).trim(),
    role: value.slice(0, separatorIndex).trim(),
  };
}

function capitalizeFirstLetter(value) {
  if (!value) {
    return value;
  }

  return value.charAt(0).toUpperCase() + value.slice(1);
}

function createSpecialistRow(specialist) {
  const row = document.createElement("tr");
  const specializationParts = splitSpecialization(specialist.specialization);

  const nameWrap = document.createElement("span");
  nameWrap.className = "specialist-name";

  const name = document.createElement("strong");
  name.textContent = specialist.name;

  nameWrap.appendChild(name);

  const grade = document.createElement("span");
  grade.className = "grade-pill";
  grade.textContent = specialist.grade;

  const letterButton = document.createElement("button");
  letterButton.className = "table-action primary";
  letterButton.type = "button";
  letterButton.setAttribute("aria-label", `Открыть сопроводительное письмо специалиста ${specialist.name}`);
  letterButton.addEventListener("click", () => openLetterModal(specialist));

  const desktopText = document.createElement("span");
  desktopText.className = "btn-desktop-text";
  desktopText.textContent = "Открыть";

  const mobileText = document.createElement("span");
  mobileText.className = "btn-mobile-text";
  mobileText.textContent = "Коротко про опыт";

  letterButton.appendChild(desktopText);
  letterButton.appendChild(mobileText);

  [
    createCell("Специалист", nameWrap),
    createCell("Грейд", grade),
    createCell("Специализация", capitalizeFirstLetter(specializationParts.specialization)),
    createCell("Роль", specializationParts.role),
    createCell("Ставка", specialist.rate),
    createCell("Опыт", specialist.experience),
    createCell("CV", createActionLink("CV", specialist.cv, "", `Открыть CV специалиста ${specialist.name}`)),
    createCell("Коротко про опыт", letterButton),
    createCell(
      "Контакт",
      createActionLink("Telegram", specialist.manager.telegram, "telegram", `Связаться с менеджером: ${specialist.manager.name}`),
    ),
  ].forEach((cell) => row.appendChild(cell));

  return row;
}

const activeFilters = {
  role: null,
  specialization: null,
  grade: null,
};

function getUniqueValues(key) {
  const values = new Set();
  specialists.forEach((s) => {
    const specParts = splitSpecialization(s.specialization);
    if (key === "role") values.add(specParts.role);
    else if (key === "specialization") values.add(specParts.specialization);
    else if (key === "grade") values.add(s.grade);
  });
  return Array.from(values).sort();
}

function filterSpecialists() {
  return specialists.filter((s) => {
    const specParts = splitSpecialization(s.specialization);
    if (activeFilters.role && specParts.role !== activeFilters.role) return false;
    if (activeFilters.specialization && specParts.specialization !== activeFilters.specialization) return false;
    if (activeFilters.grade && s.grade !== activeFilters.grade) return false;
    return true;
  });
}

function renderFilters() {
  const toolbar = document.querySelector("#bench-toolbar");
  if (!toolbar) return;

  toolbar.innerHTML = "";

  const hasRole = activeFilters.role !== null;

  // Всегда показываем фильтр «Специализация» (роль)
  renderFilterGroup(toolbar, "role", "Специализация", getUniqueValues("role"), true);

  if (!hasRole) {
    // Пока роль не выбрана — показываем подсказку вместо фильтров
    const hint = document.createElement("div");
    hint.className = "filter-hint";
    hint.innerHTML = `
      <div class="filter-hint-icon">👆</div>
      <p>Выберите специализацию, чтобы открыть фильтры по стеку и грейду</p>
    `;
    toolbar.appendChild(hint);
    return;
  }

  // Фильтр «Стек» — только когда выбрана роль
  const specValues = getFilteredValues("specialization", { role: activeFilters.role });
  renderFilterGroup(toolbar, "specialization", "Стек", specValues, true);

  // Фильтр «Грейд» — только когда выбрана роль (и опционально стек)
  const gradeValues = getFilteredValues("grade", { role: activeFilters.role, specialization: activeFilters.specialization });
  renderFilterGroup(toolbar, "grade", "Грейд", gradeValues, true);
}

function renderFilterGroup(toolbar, key, label, values, enabled) {
  const group = document.createElement("div");
  group.className = "filter-group";
  group.setAttribute("role", "group");
  group.setAttribute("aria-label", label);

  if (!enabled) {
    group.classList.add("filter-group-disabled");
  }

  const labelEl = document.createElement("div");
  labelEl.className = "filter-group-label";
  labelEl.textContent = label;
  group.appendChild(labelEl);

  const chipsWrap = document.createElement("div");
  chipsWrap.className = "filter-chips";

  values.forEach((value) => {
    const chip = document.createElement("button");
    chip.className = "filter-chip";
    chip.type = "button";
    chip.textContent = value;
    chip.setAttribute("aria-pressed", activeFilters[key] === value ? "true" : "false");

    if (activeFilters[key] === value) {
      chip.classList.add("active");
    }

    if (!enabled) {
      chip.classList.add("filter-chip-disabled");
      chip.setAttribute("disabled", "true");
    } else {
      chip.addEventListener("click", () => {
        activeFilters[key] = activeFilters[key] === value ? null : value;
        // При смене роли — сбрасываем стек и грейд
        if (key === "role") {
          activeFilters.specialization = null;
          activeFilters.grade = null;
        }
        // При смене стека — сбрасываем грейд
        if (key === "specialization") {
          activeFilters.grade = null;
        }
        renderFilters();
        renderBench();
      });
    }

    chipsWrap.appendChild(chip);
  });

  group.appendChild(chipsWrap);
  toolbar.appendChild(group);
}

/**
 * Возвращает уникальные значения для ключа, отфильтрованные по уже выбранным фильтрам.
 * Например, если выбрана роль "Backend", вернёт только стеки бэкендеров.
 */
function getFilteredValues(key, activeRoleAndSpec) {
  const values = new Set();
  specialists.forEach((s) => {
    const specParts = splitSpecialization(s.specialization);

    // Проверяем соответствие уже выбранным фильтрам
    if (activeRoleAndSpec.role && specParts.role !== activeRoleAndSpec.role) return;
    if (activeRoleAndSpec.specialization && specParts.specialization !== activeRoleAndSpec.specialization) return;

    if (key === "role") values.add(specParts.role);
    else if (key === "specialization") values.add(specParts.specialization);
    else if (key === "grade") values.add(s.grade);
  });
  return Array.from(values).sort();
}

function renderBench() {
  if (!benchBody) {
    return;
  }

  benchBody.textContent = "";

  const filtered = filterSpecialists();

  if (filtered.length === 0) {
    const emptyRow = document.createElement("tr");
    const emptyCell = document.createElement("td");
    emptyCell.colSpan = 9;
    emptyCell.className = "empty-state";

    const emptyWrap = document.createElement("div");
    emptyWrap.className = "empty-state-inner";

    const emptyIcon = document.createElement("div");
    emptyIcon.className = "empty-state-icon";
    emptyIcon.textContent = "🔍";

    const emptyTitle = document.createElement("p");
    emptyTitle.className = "empty-state-title";
    emptyTitle.textContent = "Специалисты не найдены";

    const emptyHint = document.createElement("p");
    emptyHint.className = "empty-state-hint";
    emptyHint.textContent =
      "Попробуйте изменить параметры фильтрации или сбросить все фильтры";

    const resetBtn = document.createElement("button");
    resetBtn.className = "filter-chip active";
    resetBtn.type = "button";
    resetBtn.textContent = "Сбросить фильтры";
    resetBtn.style.marginTop = "8px";
    resetBtn.addEventListener("click", () => {
      activeFilters.role = null;
      activeFilters.specialization = null;
      activeFilters.grade = null;
      renderFilters();
      renderBench();
    });

    emptyWrap.appendChild(emptyIcon);
    emptyWrap.appendChild(emptyTitle);
    emptyWrap.appendChild(emptyHint);
    emptyWrap.appendChild(resetBtn);
    emptyCell.appendChild(emptyWrap);
    emptyRow.appendChild(emptyCell);
    benchBody.appendChild(emptyRow);
    return;
  }

  filtered.forEach((specialist) => {
    benchBody.appendChild(createSpecialistRow(specialist));
  });
}

renderFilters();

function openLetterModal(specialist) {
  if (!letterModal || !modalDialog || !modalTitle || !modalText) {
    return;
  }

  lastFocusedElement = document.activeElement;
  modalTitle.textContent = `Сопроводительное письмо специалиста ${specialist.name}`;
  modalText.textContent = specialist.letter;

  letterModal.classList.add("is-open");
  letterModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  modalDialog.focus();
}

function closeLetterModal(restoreFocus = true) {
  if (!letterModal) {
    return;
  }

  letterModal.classList.remove("is-open");
  letterModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");

  if (restoreFocus && lastFocusedElement instanceof HTMLElement) {
    lastFocusedElement.focus();
  }
}

forEachNode(modalCloseControls, (control) => {
  control.addEventListener("click", () => closeLetterModal());
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && letterModal && letterModal.classList.contains("is-open")) {
    closeLetterModal();
  }
});

renderBench();

forEachNode(revealTargets, (element, index) => {
  element.classList.add("reveal", `reveal-delay-${(index % 3) + 1}`);
});

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14, rootMargin: "0px 0px -36px" },
  );

  forEachNode(revealTargets, (element) => revealObserver.observe(element));
} else {
  forEachNode(revealTargets, (element) => element.classList.add("is-visible"));
}

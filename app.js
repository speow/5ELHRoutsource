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
    id: "qa-yaroslav-sh",
    name: "Ярослав Ш.",
    category: "QA",
    grade: "Lead",
    specialization: "QA: Manual",
    location: "РФ",
    rate: "2600 ₽/ч",
    experience: "4+ лет",
    status: "На проекте",
    availableFrom: "по согласованию",
    cv: "https://disk.360.yandex.ru/i/XulrP8z0KPzH3A",
    manager: managers.anastasia,
    letter: "Специалист по тестированию ПО с опытом более 5 лет в финтехе, промышленности и автоматизации. Уверенно работает с PostgreSQL, SQL-запросами, TestRail, Jira, Confluence, Postman, Swagger, GitLab, Kibana, Kafka, Kubernetes, JMeter, Fiddler и DevTools. Имеет опыт ручного тестирования backend, web- и мобильных приложений, тестирования документации, API, интеграций, логов, интерфейсов, а также проведения функционального, системного, регрессионного, нагрузочного и стресс-тестирования. На проектах ГК Иннотех и RCM-Навигатор 2.0 тестировал банковские сервисы по депозитам юридических лиц и систему управления надежностью промышленного оборудования, поддерживал тестовую документацию и взаимодействовал с аналитиками и разработчиками.",
  },
  {
    id: "qa-evgeniy-s",
    name: "Евгений С.",
    category: "QA",
    grade: "Lead",
    specialization: "QA: Manual",
    location: "РФ",
    rate: "3100 ₽/ч",
    experience: "9+ лет",
    status: "На проекте",
    availableFrom: "по согласованию",
    cv: "https://disk.360.yandex.ru/i/1xiMXNwvI9oZsw",
    manager: managers.anastasia,
    letter: "QA Lead Engineer с опытом более 9 лет в тестировании, включая 1 год управления группой тестирования, 6 лет ручного тестирования и 2 года автоматизации. Имеет опыт в банковском и финтех-секторе, работе по Scrum, SAFe и ProPro, применении Shift-Left-подхода и переходе от монолитной системы к микросервисной архитектуре. Уверенно работает с Jira, Confluence, Сферой, Postman, JMeter, Selenium, PostgreSQL, Oracle, REST API, SOAP, Kafka, Kubernetes и Kibana. На проектах Иннотеха руководил тестированием микросервисов учета блокировок и арестов счетов, готовил тест-планы, гайдлайны, ревью документации, ПСИ и демо-показы, а также разработал инструмент для быстрого создания тестовых JSON-данных.",
  },
  {
    id: "qa-mikhail-r",
    name: "Михаил Р.",
    category: "QA",
    grade: "Middle+",
    specialization: "QA: Manual",
    location: "РФ",
    rate: "2100 ₽/ч",
    experience: "6+ лет",
    status: "Свободен",
    availableFrom: "asap",
    cv: "https://disk.360.yandex.ru/d/EQpi7VsQwGSoIw",
    manager: managers.anastasia,
    letter: "Manual QA Engineer с опытом 6 лет 2 месяца в тестировании ERP, BPM, розничных и мобильных решений. Уверенно работает с SQL/PostgreSQL, Postman, Swagger, SoapUI, Insomnia, Zephyr, Jira, Confluence, Git, Kibana, OpenShift, Android Studio, Xcode, REST, SOAP, Kafka и 1C:УТ 11. Имеет опыт функционального, регрессионного, интеграционного и приемочного тестирования, тестирования документации, API, мок-сервисов, мобильных приложений и хранимых данных через DBeaver. На проекте Сбера по BPM-системе помощи юристам покрывал интеграционные процессы тестами, не допустил в прод блокирующие и критичные дефекты, а также давал обратную связь по AI-агентам для создания тестовых сценариев.",
  },
  {
    id: "backend-pavel-k",
    name: "Павел К.",
    category: "Backend",
    grade: "Senior",
    specialization: "Backend: Java",
    location: "РФ",
    rate: "3100 ₽/ч",
    experience: "9+ лет",
    status: "Свободен",
    availableFrom: "готов к старту",
    cv: "https://disk.360.yandex.ru/d/X_aUde5JS6VycA",
    manager: managers.ekaterina,
    letter: "Java-разработчик с опытом более 9 лет в разработке банковских, портальных и корпоративных решений. Уверенно работает с Java, Kotlin, Groovy, Spring Boot, Spring Data JPA, Spring Security, Spring Batch, Vaadin, React, Angular, Oracle, PostgreSQL, Maven, Gradle, JUnit, REST API, SOAP, S3, Kafka, Docker и микросервисной архитектурой. Имеет опыт разработки backend-логики, UI на Vaadin, интеграций, загрузки файлов, документооборота, отчетности и оптимизации производительности. На проекте Совкомбанк Технологии развивал web-приложение «Кредиты» для корпоративных сервисов, переводил UI с deprecated API Vaadin, внедрял S3-хранилище, расширял чат, дорабатывал отчетность и снижал технический долг.",
  },
  {
    id: "backend-yuriy-t",
    name: "Юрий Т.",
    category: "Backend",
    grade: "Middle+",
    specialization: "Backend: Java",
    location: "РФ",
    rate: "2750 ₽/ч",
    experience: "12+ лет",
    status: "Свободен",
    availableFrom: "asap",
    cv: "https://disk.360.yandex.ru/i/Sh6MYUPcJSoO1Q",
    manager: managers.ekaterina,
    letter: "Java-разработчик с опытом 12 лет в банках, финтехе и электронном документообороте. Уверенно работает с Java, Kotlin, Spring Framework, Spring Boot, Hibernate, JDBC, JOOQ, SQL, PostgreSQL, Oracle, MSSQL, Liquibase, MongoDB, Maven, Jenkins, Gradle, JUnit, Mockito, Kotest, SOAP, REST, Kafka, Docker, Kubernetes, Jira, Confluence и Git. Имеет опыт разработки и сопровождения банковских микросервисов, интеграций с внутренними системами банка, бизнес-оркестрации и повышения надежности сервисов. На проектах ВТБ, Хоум Банка и БСС занимался импортозамещением, разработкой сервисов по карточным операциям и депозитам ЮЛ, развитием чат- и голосовых ботов, а также ДБО для юридических лиц.",
  },
  {
    id: "frontend-roman-m",
    name: "Роман М.",
    category: "Frontend",
    grade: "Senior",
    specialization: "Frontend: React",
    location: "РФ",
    rate: "2100 ₽/ч",
    experience: "7+ лет",
    status: "Свободен",
    availableFrom: "готов к старту",
    cv: "https://disk.360.yandex.ru/i/jIqdPKDTr4J0kw",
    manager: managers.anastasia,
    letter: "Ведущий Frontend-разработчик с опытом более 7 лет в банковском, финтех- и логистическом доменах. Уверенно работает с TypeScript, JavaScript, React, React Native, NestJS, Express, Electron, Angular, FSD, Redux, Effector, PostgreSQL, TypeORM, Webpack, Vite, Jest, Enzyme, Cypress, REST API, Socket.IO, Docker, Material UI, Tailwind, Styled-Components и React Hook Form. Имеет опыт работы в Scrum-командах от 2 до 30 человек, включая роль тимлида, настройку unit- и e2e-тестов и развитие сложных интерфейсов. На проектах NRB и Сбербанка разрабатывал административные панели, адаптивные таблицы, формы, интеграции с API, внедрял Feature-Sliced Design, переходил с Redux на Effector и оптимизировал поддержку frontend-кода.",
  },
  {
    id: "frontend-nikita-r",
    name: "Никита Р.",
    category: "Frontend",
    grade: "Middle",
    specialization: "Frontend: React",
    location: "РФ",
    rate: "1700 ₽/ч",
    experience: "3+ лет",
    status: "Свободен",
    availableFrom: "asap",
    cv: "https://disk.360.yandex.ru/i/u5ToO7iV8KB_yg",
    manager: managers.anastasia,
    letter: "Frontend-разработчик с опытом более 4 лет в информационных технологиях и HR-Tech, также имеющий практический fullstack-опыт. Уверенно работает с JavaScript, TypeScript, React, Vite, Webpack, Sass, Less, Vitest, AntDesign, MUI, React Bootstrap, BEM, Chrome DevTools, React Developer Tools, REST API, Jira, Confluence и Git. Имеет опыт разработки административных кабинетов, таблиц с поиском, пагинацией и фильтрацией, интерактивных форм, загрузки и обработки изображений, интеграции с API и настройки Nginx для Next.js-приложений. На проектах «Все моторы», NRB и «Мой Край» проектировал frontend- и backend-части, реализовывал REST API, работал с PostgreSQL и оптимизировал UX административных интерфейсов.",
  },
  {
    id: "frontend-stanislav-p",
    name: "Станистав П.",
    category: "Frontend",
    grade: "Middle",
    specialization: "Frontend: React",
    location: "РФ",
    rate: "1700 ₽/ч",
    experience: "3+ лет",
    status: "Свободен",
    availableFrom: "asap",
    cv: "https://disk.360.yandex.ru/d/o7mvEeMPk8kWVw",
    manager: managers.anastasia,
    letter: "Frontend-разработчик с опытом 4 года 9 месяцев в проектах для туризма, маркетплейсов и организации рабочих процессов. Уверенно работает с JavaScript, TypeScript, React, React Hook Form, Redux, Material UI, Ant Design, Axios, HTML, CSS, БЭМ, Jest, React Testing Library, Cypress, PostgreSQL, Vite, Webpack, Zustand, REST, GraphQL, Docker, GitLab, Postman, Node.js, Jira и Confluence. Имеет опыт разработки интерфейсов админ-панелей, таблиц с поиском, пагинацией и фильтрацией, форм создания и редактирования продуктов, модальных окон, ролевых ограничений и работы с изображениями через Canvas. На проектах Marketplace TN, «Мой Край» и АИС разрабатывал React-интерфейсы, покрывал ключевые модули тестами и оптимизировал работу пользовательских сценариев.",
  },
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

  const filters = [
    { key: "role", label: "Специализация" },
    { key: "specialization", label: "Стек" },
    { key: "grade", label: "Грейд" },
  ];

  filters.forEach(({ key, label }) => {
    const group = document.createElement("div");
    group.className = "filter-group";
    group.setAttribute("role", "group");
    group.setAttribute("aria-label", label);

    const labelEl = document.createElement("div");
    labelEl.className = "filter-group-label";
    labelEl.textContent = label;
    group.appendChild(labelEl);

    const chipsWrap = document.createElement("div");
    chipsWrap.className = "filter-chips";

    const values = getUniqueValues(key);
    values.forEach((value) => {
      const chip = document.createElement("button");
      chip.className = "filter-chip";
      chip.type = "button";
      chip.textContent = value;
      chip.setAttribute("aria-pressed", activeFilters[key] === value ? "true" : "false");

      if (activeFilters[key] === value) {
        chip.classList.add("active");
      }

      chip.addEventListener("click", () => {
        activeFilters[key] = activeFilters[key] === value ? null : value;
        renderFilters();
        renderBench();
      });

      chipsWrap.appendChild(chip);
    });

    group.appendChild(chipsWrap);
    toolbar.appendChild(group);
  });
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
    emptyCell.textContent = "Нет специалистов, соответствующих фильтрам";
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

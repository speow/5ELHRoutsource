const roleData = {
  3770: {
    id: "ID 3770",
    title: "BA analyst",
    summary: "Senior аналитик для описания бизнес-процессов, интеграций и требований к продуктовой команде.",
    grade: "Senior",
    area: "Analysts · full-time",
    status: "Свободен",
    requirements: [
      "Опыт бизнес-анализа и системного анализа от 4 лет.",
      "Уверенная работа с BPMN, UML, пользовательскими сценариями и требованиями.",
      "Понимание интеграций REST/SOAP и базовые навыки SQL.",
      "Опыт взаимодействия с заказчиками, разработкой и QA в Agile-командах.",
      "Умение быстро уточнять спорные требования и фиксировать договоренности.",
    ],
  },
  3756: {
    id: "ID 3756",
    title: "Tech lead Java developer",
    summary: "Технический лидер для финтех-команды, микросервисной архитектуры и инженерных решений.",
    grade: "Tech Lead",
    area: "Backend · финтех",
    status: "На проекте",
    requirements: [
      "Java 17, Spring Boot, Spring Cloud и опыт промышленной backend-разработки от 6 лет.",
      "Проектирование микросервисов, API-контрактов и отказоустойчивых интеграций.",
      "Практический опыт с PostgreSQL, Kafka, Docker и Kubernetes.",
      "Техническое лидерство: ревью, декомпозиция задач, развитие инженерных практик.",
      "Умение обсуждать архитектуру с бизнесом, аналитиками и смежными командами.",
    ],
  },
  3754: {
    id: "ID 3754",
    title: "Team lead Java developer",
    summary: "Лид разработки для backend-команды, интеграционного контура и сопровождения кодовой базы.",
    grade: "Team Lead",
    area: "Backend · интеграции",
    status: "Интервью",
    requirements: [
      "Java, Spring Framework, REST API и опыт backend-разработки от 5 лет.",
      "Управление небольшой командой разработки и контроль качества поставки.",
      "Код-ревью, постановка задач и техническая декомпозиция требований.",
      "Работа с PostgreSQL, Kafka или аналогичными брокерами сообщений.",
      "Опыт поддержки интеграционных решений в продуктивной среде.",
    ],
  },
  3764: {
    id: "ID 3764",
    title: "DevOps engineer",
    summary: "Инженер для поддержки Kubernetes-контуров, CI/CD и инфраструктурных релизов.",
    grade: "Middle / Middle+",
    area: "DevOps · Kubernetes",
    status: "На проекте",
    requirements: [
      "Администрирование Linux и сопровождение production-инфраструктуры.",
      "Kubernetes, Helm, Docker и опыт эксплуатации контейнерных сервисов.",
      "Настройка CI/CD-пайплайнов и автоматизация релизных процессов.",
      "Terraform или Ansible для управления инфраструктурой как кодом.",
      "Мониторинг, логирование и разбор инцидентов вместе с командами разработки.",
    ],
  },
  3748: {
    id: "ID 3748",
    title: "QA engineer",
    summary: "Senior QA для регресса, API-проверок и контроля качества релизного цикла.",
    grade: "Senior",
    area: "QA · регресс и API",
    status: "Свободен",
    requirements: [
      "Опыт функционального и регрессионного тестирования от 4 лет.",
      "Уверенное тестирование REST API через Postman, Swagger или аналогичные инструменты.",
      "SQL для проверки данных и анализа дефектов.",
      "Ведение тестовой документации: чек-листы, тест-кейсы, отчеты по регрессу.",
      "Опыт автотестов будет преимуществом, но не обязателен для старта.",
    ],
  },
  3752: {
    id: "ID 3752",
    title: "React.js developer",
    summary: "Senior frontend-разработчик для продуктовой команды на React и TypeScript.",
    grade: "Senior",
    area: "Frontend · TypeScript",
    status: "На проекте",
    requirements: [
      "React, TypeScript и опыт коммерческой frontend-разработки от 4 лет.",
      "Работа с состоянием приложения, формами, валидацией и REST API.",
      "Понимание производительности интерфейсов и доступности базовых сценариев.",
      "Опыт с дизайн-системами, компонентным подходом и code review.",
      "Тестирование компонентов и аккуратная работа с пользовательскими состояниями.",
    ],
  },
};

const roleOptions = [
  "1С-аналитик",
  "1С-разработчик",
  "1С-Руководитель проекта",
  "1С-тестировщик",
  "Android-разработчик",
  "Back-end Developer",
  "ВІ-разработчик",
  "Data/BI analyst",
  "Data Engineer",
  "Data Scientist",
  "DBA",
  "DevOps",
  "DWH analyst",
  "Flutter разработчик",
  "Frontend",
  "Fullstack разработчик",
  "Full-stak тестировщик (C#)",
  "Full-stak тестировщик (Java)",
  "Full-stak тестировщик (Python)",
  "Golang-разработчик",
  "Growth-manager",
  "iOS-разработчик",
  "Jira developer",
  "Low-code разработчик ELMA",
  "ML Engineer",
  "MLOps Engineer",
  ".NET",
  "РНР-разработчик",
  "РНР-разработчик (Fullstack)",
  "RPA разработчик",
  "SQL-разработчик",
  "Автотестер",
  "Автотестировщик (Java)",
  "Автотестировщик (JavaScript)",
  "Автотестировщик (Python)",
  "Аналитик",
  "Аналитик ELMA",
  "Аналитик OEBS",
  "Аналитик Siebel",
  "Аналитик ИБ",
  "Архитектор",
  "Бизнес-аналитик",
  "Дизайнер",
  "Инженер тех. поддержки",
  "Иное",
  "ИТ лидер",
  "Консультант SAP BW",
  "Консультант SAP MM/LO/LE",
  "Консультант SAP TM",
  "Нагрузочное тестирование",
  "Продуктовый аналитик",
  "Разработчик АВАР",
  "Разработчик ВPMSoft",
  "Разработчик С#",
  "Разработчик С++",
  "Разработчик ELMA",
  "Разработчик Front (Angular)",
  "Разработчик ELMA",
  "Разработчик Front (Angular)",
  "Разработчик Front (React)",
  "Разработчик Front (Vue)",
  "Разработчик Java",
  "Разработчик OEBS",
  "Разработчик Python",
  "Разработчик Siebel",
  "Разработчик SQL",
  "Разработчик Unity AR",
  "Разработчик ЦФТ",
  "Риск менеджер",
  "Руководитель проекта",
  "Ручной тестировщик",
  "Системный аналитик",
  "Системный Аналитик DWH",
  "Специалист UI/UX",
  "Специалист по разметке данных",
  "Специалист сопровождения ПО",
  "Технический писатель",
];

const tabs = document.querySelectorAll(".tab");
const roleCards = document.querySelectorAll(".role-card");
const form = document.querySelector(".request-form");
const formNote = document.querySelector(".form-note");
const submitButton = form?.querySelector('button[type="submit"]');
const requestTypeRadios = form?.querySelectorAll('input[name="type"]') ?? [];
const requestTypeOptions = form?.querySelectorAll(".type-option") ?? [];
const requestTypeTriggers = document.querySelectorAll("[data-request-type]");
const roleModal = document.querySelector("#role-modal");
const modalDialog = roleModal?.querySelector(".modal-dialog");
const modalCloseControls = roleModal?.querySelectorAll("[data-modal-close]") ?? [];
const modalFields = {
  id: document.querySelector("#modal-role-id"),
  title: document.querySelector("#modal-role-title"),
  summary: document.querySelector("#modal-role-summary"),
  grade: document.querySelector("#modal-role-grade"),
  area: document.querySelector("#modal-role-area"),
  status: document.querySelector("#modal-role-status"),
  requirements: document.querySelector("#modal-role-requirements"),
};
const revealTargets = document.querySelectorAll(
  ".hero-copy > *, .visual-cubes, .visual-cube, .section-heading, .role-tabs, .role-card, .request-copy > *, .request-highlights article, .request-form, .site-footer > *",
);

let lastFocusedElement = null;

function populateRoleOptions() {
  const roleSelect = form?.querySelector('select[name="role"]');

  if (!roleSelect || roleOptions.length === 0) {
    return;
  }

  roleOptions.forEach((role) => {
    const option = document.createElement("option");
    option.value = role;
    option.textContent = role;
    roleSelect.append(option);
  });
}

function syncRequestTypeStyles() {
  requestTypeOptions.forEach((option) => {
    const input = option.querySelector('input[name="type"]');
    option.classList.toggle("is-selected", Boolean(input?.checked));
  });
}

function setRequestType(type, shouldFocusForm = false) {
  const targetRadio = [...requestTypeRadios].find((radio) => radio.value === type);

  if (!targetRadio) {
    return;
  }

  targetRadio.checked = true;
  syncRequestTypeStyles();

  if (submitButton) {
    submitButton.textContent =
      type === "specialist" ? "Отправить специалиста" : "Отправить запрос";
  }

  if (formNote) {
    formNote.textContent =
      type === "specialist"
        ? "Заполните специализацию, грейд, формат доступности и контакт."
        : "Заполните роль, грейд, формат работы и контакт ответственного.";
    formNote.classList.remove("success");
  }

  if (shouldFocusForm) {
    form?.querySelector("select, input, textarea")?.focus({ preventScroll: true });
  }
}

function closeRoleModal(restoreFocus = true) {
  if (!roleModal) {
    return;
  }

  roleModal.classList.remove("is-open");
  roleModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");

  if (restoreFocus && lastFocusedElement instanceof HTMLElement) {
    lastFocusedElement.focus();
  }
}

function openRoleModal(card) {
  const data = roleData[card.dataset.roleKey];

  if (!roleModal || !modalDialog || !data) {
    return;
  }

  lastFocusedElement = document.activeElement;

  modalFields.id.textContent = data.id;
  modalFields.title.textContent = data.title;
  modalFields.summary.textContent = data.summary;
  modalFields.grade.textContent = `Грейд: ${data.grade}`;
  modalFields.area.textContent = data.area;
  modalFields.status.textContent = `Статус: ${data.status}`;
  modalFields.requirements.replaceChildren(
    ...data.requirements.map((requirement) => {
      const item = document.createElement("li");
      item.textContent = requirement;
      return item;
    }),
  );

  roleModal.classList.add("is-open");
  roleModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  modalDialog.focus();
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const filter = tab.dataset.filter;

    tabs.forEach((item) => item.classList.remove("active"));
    tab.classList.add("active");

    roleCards.forEach((card) => {
      const isVisible = filter === "all" || card.dataset.category === filter;
      card.classList.toggle("is-hidden", !isVisible);
    });
  });
});

roleCards.forEach((card) => {
  card.addEventListener("click", () => openRoleModal(card));
  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openRoleModal(card);
    }
  });
});

modalCloseControls.forEach((control) => {
  control.addEventListener("click", closeRoleModal);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && roleModal?.classList.contains("is-open")) {
    closeRoleModal();
  }
});

requestTypeRadios.forEach((radio) => {
  radio.addEventListener("change", () => setRequestType(radio.value));
});

requestTypeTriggers.forEach((trigger) => {
  trigger.addEventListener("click", () => {
    setRequestType(trigger.dataset.requestType);

    if (roleModal?.classList.contains("is-open")) {
      closeRoleModal(false);
    }
  });
});

form?.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const type = formData.get("type");
  const role = formData.get("role");

  formNote.textContent =
    type === "specialist"
      ? `Специалист по направлению «${role}» зафиксирован. В рабочем контуре он уйдет ответственному за подбор.`
      : `Запрос на роль «${role}» зафиксирован. В рабочем контуре он появится в витрине со статусом «Свободен».`;
  formNote.classList.add("success");
});

syncRequestTypeStyles();
populateRoleOptions();

revealTargets.forEach((element, index) => {
  element.classList.add("reveal", `reveal-delay-${(index % 4) || 1}`);
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
    { threshold: 0.16, rootMargin: "0px 0px -40px" },
  );

  revealTargets.forEach((element) => revealObserver.observe(element));
} else {
  revealTargets.forEach((element) => element.classList.add("is-visible"));
}

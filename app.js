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
    id: "qa-konstantin-a",
    name: "Константин А.",
    category: "QA",
    grade: "Middle-",
    specialization: "QA: Manual",
    location: "РФ",
    rate: "уточняется",
    experience: "2+ лет",
    status: "Свободен",
    availableFrom: "готов к старту",
    cv: "https://disk.360.yandex.ru/d/4ijC4-G6xFEGgg",
    manager: managers.anastasia,
  },
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
  },
  {
    id: "qa-anastasia-p",
    name: "Анастасия П.",
    category: "QA",
    grade: "Middle",
    specialization: "QA: Manual",
    location: "РФ",
    rate: "1350 ₽/ч",
    experience: "4+ лет",
    status: "Свободен",
    availableFrom: "asap",
    cv: "https://disk.360.yandex.ru/i/QkGBqT0JbOJCgA",
    manager: managers.anastasia,
  },
  {
    id: "qa-alina-yu",
    name: "Алина Ю.",
    category: "QA",
    grade: "Middle",
    specialization: "QA: Manual",
    location: "РФ",
    rate: "уточняется",
    experience: "3+ лет",
    status: "Свободен",
    availableFrom: "2 недели",
    cv: "https://disk.360.yandex.ru/d/SvKJpb6Pjcfdrg",
    manager: managers.anastasia,
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
  },
  {
    id: "backend-vyacheslav-s",
    name: "Вячеслав С.",
    category: "Backend",
    grade: "Senior",
    specialization: "Backend: Go",
    location: "РФ",
    rate: "уточняется",
    experience: "4+ лет",
    status: "Свободен",
    availableFrom: "готов к старту",
    cv: "https://disk.360.yandex.ru/i/RwGnkEsFfH6d2g",
    manager: managers.ekaterina,
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
  },
  {
    id: "design-daria-i",
    name: "Дарья И.",
    category: "Дизайн",
    grade: "Middle+",
    specialization: "Дизайн: UX / UI",
    location: "РФ",
    rate: "уточняется",
    experience: "3+ лет",
    status: "Свободен",
    availableFrom: "по согласованию",
    cv: "https://disk.360.yandex.ru/i/FwlKfVtYPMalNw",
    manager: managers.anastasia,
  },
  {
    id: "analytics-alina-b",
    name: "Алина Б.",
    category: "Аналитика",
    grade: "Middle",
    specialization: "Аналитика: системный аналитик",
    location: "РФ",
    rate: "уточняется",
    experience: "3+ лет",
    status: "На проекте",
    availableFrom: "по согласованию",
    cv: "https://disk.360.yandex.ru/i/xUm-DseGopH1gw",
    manager: managers.anastasia,
  },
  {
    id: "devops-maksim-b",
    name: "Максим Б.",
    category: "DevOps",
    grade: "Middle",
    specialization: "DevOps: системный администратор",
    location: "РФ",
    rate: "уточняется",
    experience: "4+ лет",
    status: "Свободен",
    availableFrom: "asap",
    cv: "https://disk.360.yandex.ru/d/eubEDNUm_hAAGA",
    manager: managers.ekaterina,
  },
  {
    id: "pm-nikita-l",
    name: "Никита Л.",
    category: "PM",
    grade: "Senior",
    specialization: "PM: руководитель проекта",
    location: "РФ",
    rate: "уточняется",
    experience: "8+ лет",
    status: "Свободен",
    availableFrom: "готов к старту",
    cv: "https://disk.360.yandex.ru/i/eshYVQilwXZoGA",
    manager: managers.ekaterina,
  },
].map((specialist) => ({
  ...specialist,
  letter:
    specialist.letter != null
      ? specialist.letter
      : `${specialist.name} — ${specialist.grade} специалист направления ${specialist.specialization}. ` +
      `Опыт: ${specialist.experience}. Локация: ${specialist.location}. ` +
      `Текущий статус: ${specialist.status}; предварительный выход: ${specialist.availableFrom}. ` +
      `Для уточнения деталей, ставки и доступности свяжитесь с ответственным менеджером: ${specialist.manager.name}.`,
}));

const benchBody = document.querySelector("#bench-body");
const letterModal = document.querySelector("#letter-modal");
const modalDialog = letterModal ? letterModal.querySelector(".modal-dialog") : null;
const modalCloseControls = letterModal ? letterModal.querySelectorAll("[data-modal-close]") : [];
const modalTitle = document.querySelector("#letter-modal-title");
const modalText = document.querySelector("#letter-modal-text");
const revealTargets = document.querySelectorAll(
  ".section-heading, .bench-table-wrap, .site-footer > *",
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
  letterButton.textContent = "Открыть";
  letterButton.setAttribute("aria-label", `Открыть сопроводительное письмо специалиста ${specialist.name}`);
  letterButton.addEventListener("click", () => openLetterModal(specialist));

  [
    createCell("Специалист", nameWrap),
    createCell("Грейд", grade),
    createCell("Специализация", capitalizeFirstLetter(specializationParts.specialization)),
    createCell("Роль", specializationParts.role),
    createCell("Ставка", specialist.rate),
    createCell("Опыт", specialist.experience),
    createCell("CV", createActionLink("CV", specialist.cv, "", `Открыть CV специалиста ${specialist.name}`)),
    createCell("Письмо", letterButton),
    createCell(
      "Контакт",
      createActionLink("Telegram", specialist.manager.telegram, "telegram", `Связаться с менеджером: ${specialist.manager.name}`),
    ),
  ].forEach((cell) => row.appendChild(cell));

  return row;
}

function renderBench() {
  if (!benchBody) {
    return;
  }

  benchBody.textContent = "";

  specialists.forEach((specialist) => {
    benchBody.appendChild(createSpecialistRow(specialist));
  });
}

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

const tabs = document.querySelectorAll(".tab");
const roleCards = document.querySelectorAll(".role-card");
const form = document.querySelector(".request-form");
const formNote = document.querySelector(".form-note");
const revealTargets = document.querySelectorAll(
  ".hero-copy > *, .product-preview, .brand-art, .section-heading, .value-card, .role-card, .workflow-list li, .request-copy > *, .request-form, .site-footer > *",
);

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

form.addEventListener("submit", (event) => {
  event.preventDefault();
  formNote.textContent = "Заявка зафиксирована. В реальном MVP она появится в витрине и уйдет ответственному за подбор.";
  formNote.classList.add("success");
});

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

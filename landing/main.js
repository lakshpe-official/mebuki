const rulesToggle = document.getElementById("rules-toggle");
const moreRules = document.getElementById("more-rules");

if (rulesToggle && moreRules) {
  rulesToggle.addEventListener("click", () => {
    const isOpen = moreRules.classList.toggle("is-open");

    rulesToggle.classList.toggle("is-open", isOpen);

    rulesToggle.childNodes[0].textContent =
      isOpen ? " 閉じる " : " 続きを見る ";
  });
}
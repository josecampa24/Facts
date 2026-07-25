const btn = document.querySelector(".btn-open");

btn.addEventListener("click", function () {
  const form = document.querySelector(".fact-form");
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "Close";
  } else {
    form.classList.add("hidden");
    btn.textContent = "Share a fact";
  }
});

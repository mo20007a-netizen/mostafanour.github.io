const toggle = document.getElementById("themeToggle");

// تأكيد إن الموقع يبدأ دايمًا Dark
document.body.classList.remove("light");
toggle.textContent = "🌞";

toggle.addEventListener("click", () => {
  document.body.classList.toggle("light");

  toggle.textContent = document.body.classList.contains("light")
    ? "🌙"
    : "🌞";
});

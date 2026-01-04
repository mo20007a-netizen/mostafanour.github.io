hereconst toggle = document.getElementById("toggle");

toggle.addEventListener("click", () => {
  // مجرد أيقونة شكلية فقط
  toggle.textContent = toggle.textContent === "🌞" ? "🌙" : "🌞";
});

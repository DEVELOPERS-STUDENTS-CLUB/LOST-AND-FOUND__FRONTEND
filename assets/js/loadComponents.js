function includeHTML() {
  document.querySelectorAll("[data-include]").forEach(async (el) => {
    const file = el.getAttribute("data-include");
    const response = await fetch(file);
    if (response.ok) {
      el.innerHTML = await response.text();
    } else {
      el.innerHTML = "Component not found!";
    }
  });
}

window.addEventListener("DOMContentLoaded", includeHTML);

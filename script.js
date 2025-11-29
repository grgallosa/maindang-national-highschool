  const nav = document.querySelector(".nav-links");
  const openBtn = document.getElementById("openMenu");
  const closeBtn = document.getElementById("closeMenu");

  openBtn.addEventListener("click", () => {
    nav.classList.add("active");
    document.body.classList.add("menu-open");
    openBtn.setAttribute("aria-expanded", "true");
  });

  closeBtn.addEventListener("click", () => {
    nav.classList.remove("active");
    document.body.classList.remove("menu-open");
    openBtn.setAttribute("aria-expanded", "false");
  });
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
  
  //scroll up button
  const scrollTopBtn = document.getElementById("scrollTopBtn");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollTopBtn.style.display = "flex";
    } else {
      scrollTopBtn.style.display = "none";
    }
  });

  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
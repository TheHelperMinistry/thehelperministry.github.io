// The Helper Ministry - 공용 레이아웃 및 네비게이션 관리

document.addEventListener("DOMContentLoaded", function () {
  var navItems = [
    { label: "Home", href: "/index.html#promo", matchPaths: ["/", "/index.html"] },
    { label: "About", href: "/about.html", matchPaths: ["/about.html"] },
    { label: "9-Year Bible", href: "/devotional.html", matchPaths: ["/devotional.html"] },
    { label: "AI Seminar", href: "/seminar.html", matchPaths: ["/seminar.html"] }
  ];

  var currentPath = window.location.pathname.replace(/\/+$/, "") || "/";
  var navList = document.querySelector(".custom-nav-list");

  if (navList) {
    navList.innerHTML = "";

    navItems.forEach(function (item) {
      var li = document.createElement("li");
      li.className = "nav-item";

      var isActive = item.matchPaths.indexOf(currentPath) !== -1;
      if (isActive) {
        li.classList.add("active");
      }

      var link = document.createElement("a");
      link.href = item.href;
      link.textContent = item.label;
      if (isActive) {
        link.setAttribute("aria-current", "page");
      }

      li.appendChild(link);
      navList.appendChild(li);
    });
  }

  var triggerBtn = document.getElementById("custom-menu-trigger");
  var drawerBox = document.getElementById("custom-menu-box");

  if (triggerBtn && drawerBox) {
    triggerBtn.addEventListener("click", function (e) {
      e.preventDefault();
      var isOpen = drawerBox.classList.toggle("box-open");
      triggerBtn.classList.toggle("btn-active", isOpen);
      triggerBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    document.addEventListener("click", function (e) {
      if (!triggerBtn.contains(e.target) && !drawerBox.contains(e.target)) {
        triggerBtn.classList.remove("btn-active");
        drawerBox.classList.remove("box-open");
        triggerBtn.setAttribute("aria-expanded", "false");
      }
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth > 768) {
        triggerBtn.classList.remove("btn-active");
        drawerBox.classList.remove("box-open");
        triggerBtn.setAttribute("aria-expanded", "false");
      }
    });
  }
});

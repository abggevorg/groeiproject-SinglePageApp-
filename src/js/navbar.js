import * as pageManipulation from "./page.js";
export function addEventsToNavbar() {
  for (let nav of document.getElementsByClassName("nav-link")) {
    nav.addEventListener("click", selectNavItem);
  }
}
export function onStartUp() {
  for (let nav of document.getElementsByClassName("nav-link")) {
    if (nav.innerText.toLowerCase() == "home") {
      nav.classList.add("active");
      pageManipulation.setPageContent(nav);
    }
  }
}

export function selectNavItem(navItem) {
  for (let nav of document.getElementsByClassName("nav-link")) {
    nav.classList.remove("active");
  }

  navItem.target.classList.add("active");
  pageManipulation.setPageContent(navItem.target);
}

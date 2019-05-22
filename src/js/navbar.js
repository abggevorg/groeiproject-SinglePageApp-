import * as pageManipulation from "./page.js";
export function addEventsToNavbar() {
  for (let nav of document.getElementsByClassName("nav-link")) {
    if (nav.innerText.toLowerCase() == "home") {
      nav.classList.add("active");
      pageManipulation.setPageContent(nav);
    }
    nav.addEventListener("click", selectNavItem);
  }
}
export function selectNavItem(navItem) {
  for (let nav of document.getElementsByClassName("nav-link")) {
    nav.classList.remove("active");
  }
  navItem.target.classList.add("active");
  pageManipulation.setPageContent(navItem.target);
}

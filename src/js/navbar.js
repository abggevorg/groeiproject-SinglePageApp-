import * as pageManipulation from "./page.js";
export function addEventsToNavbar() {
  for (let nav of document.getElementsByClassName("nav-link")) {
    nav.addEventListener("click", selectNavItem);
  }
}
export function onStartUp() {
  for (let nav of document.getElementsByClassName("nav-link")) {
    if (nav.innerText.toLowerCase() == "home") {
      selectNavItem(nav);
    }
  }
}

export function selectNavItem(navItem) {
  for (let nav of document.getElementsByClassName("nav-link")) {
    nav.classList.remove("active");
  }
  if (navItem.target == "") {
    navItem.classList.add("active");
    pageManipulation.setPageContent(navItem);
  } else {
    navItem.target.classList.add("active");
    pageManipulation.setPageContent(navItem.target);
  }
}

export function addEventsToNavbar() {
  for (let nav of document.getElementsByClassName("nav-link")) {
    nav.addEventListener("click", selectNavItem);
  }
}
export function selectNavItem(navItem) {
  for (let nav of document.getElementsByClassName("nav-link")) {
    nav.classList.remove("active");
  }
  if (navItem.target == "") {
    navItem.classList.add("active");
  } else {
    navItem.target.classList.add("active");
  }
}

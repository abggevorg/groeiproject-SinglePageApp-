export function setPageContent(selectedNavItem) {
  console.log(selectedNavItem.innerText.toLowerCase());

  for (let section of document.getElementsByTagName("section")) {
    console.log(section.id.toLowerCase());
    if (section.id.toLowerCase() === selectedNavItem.innerText.toLowerCase()) {
      section.style.display = "block";
      console.log("gelukt");
    } else {
      section.style.display = "none";
    }
  }
}

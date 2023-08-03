var items = document.querySelectorAll(".item");

for (var i = 0; i < items.length; i++) {
  items[i].addEventListener("click", zoomImage(items[i]));
}
function zoomImage(elem) {
  // console.log(elem);
}

function recenterContent() {
  const header = document.querySelector("#header")
  const footer = document.querySelector("#footer")
  const content = document.querySelector("#content")
  
  content.style.height = window.innerHeight - footer.clientHeight - header.clientHeight + "px";
  content.style.top = header.clientHeight + "px"
}
window.addEventListener("resize",recenterContent);
recenterContent()
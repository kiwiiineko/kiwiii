var items = document.querySelectorAll(".item");

for (var i = 0; i < items.length; i++) {
  items[i].addEventListener("click", zoomImage(items[i]));
}
function zoomImage(elem) {
  console.log(elem);
}

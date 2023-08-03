const imgArr = [
    "dZlS7N.jpg",
    "dZlS7N.jpg",
    "dZlS7N.jpg",
    "dZlS7N.jpg",
    "dZlS7N.jpg",
    "dZlS7N.jpg",
    "dZlS7N.jpg",
    "dZlS7N.jpg",
    "dZlS7N.jpg",
    "dZlS7N.jpg",
    "dZlS7N.jpg",
    "dZlS7N.jpg",
    "dZlS7N.jpg",
    "dZlS7N.jpg",
    "dZlS7N.jpg",
    "dZlS7N.jpg",
    "dZlS7N.jpg",
    "dZlS7N.jpg",
    "dZlS7N.jpg",
    "dZlS7N.jpg",
    "dZlS7N.jpg",
    "dZlS7N.jpg",
    "dZlS7N.jpg",
    "dZlS7N.jpg",
]; 






//not edit
for(i =0;i<imgArr.length;i++){
    document.getElementById("items").innerHTML += `<img class="item" src="images/${imgArr[i]}"></img> `
    console.log(imgArr[i])
  }
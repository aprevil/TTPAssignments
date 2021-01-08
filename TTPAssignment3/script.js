//question 1
const firstcontain = document.getElementById("container");
console.log(firstcontain);
//question 2
const secondcontain = document.querySelector("#container");
console.log(secondcontain);
//question 3
const list = document.querySelectorAll(".second");
console.log(list);
//question 4
const third = document.querySelector("ol .third");
console.log(third);
//question 5
//firstcontain.innerHTML = "Hello!";
//question 6
const footdiv = document.querySelector(".footer");
footdiv.classList.add("main");
//question 7
footdiv.classList.remove("main");
//question 8
const createli = document.createElement("li");
//question 9
createli.innerHTML = "four";
//question 10
const add = document.querySelector("ul");
add.appendChild(createli);
//question 12
const olLength = document.querySelectorAll("ol li");
const divArr = Array.from(olLength);
for(let i = 0; i<divArr.length;i++){
    divArr[i].style.backgroundColor = "green";
    
}
//question 13
const body=document.querySelector("body");
body.removeChild(footdiv);

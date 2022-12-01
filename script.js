const btn = document.getElementById("btn")

btn.addEventListener("click",function () {
   const edit = btn.previousElementSibling.children[0]
   edit.style.color= "red";
   const font = btn.previousElementSibling.lastElementChild.children[1]
   font.style.fontSize = "50px"
})
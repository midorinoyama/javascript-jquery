const form = document.getElementById("form");
const ul = document.getElementById("ul");
const clickbtn = document.getElementById("clickbtn");
clickbtn.addEventListener("click", clicked);

function clicked() {
  if (form.value.length > 0){
    const li = document.createElement("li");
    li.innerText = form.value;
    ul.appendChild(li);
    form.value = "";
  }    
}
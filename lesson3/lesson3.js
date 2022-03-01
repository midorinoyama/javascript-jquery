const nametext = document.getElementById("nametext");
const clickbtn = document.getElementById("clickbtn");
clickbtn.addEventListener("click", clicked);

function clicked() { 
  alert("私の名前は" + nametext.value + "です。");
  nametext.value = "";
}
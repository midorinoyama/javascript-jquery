const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
const box3 = document.getElementById("box3");

  //マウスが触れた時
  box1.addEventListener('mouseover', function() {
  box1.style.backgroundColor = "red";
  });

  box2.addEventListener('mouseover', function() {
  box2.style.backgroundColor = "blue";
  });

  box3.addEventListener('mouseover', function() {
  box3.style.backgroundColor = "green";
  });

  //マウスが離れた時
  box1.addEventListener('mouseleave', function(){
  box1.style.backgroundColor = "#fff";
  });
  box2.addEventListener('mouseleave', function(){
  box2.style.backgroundColor = "#fff";
  });
  box3.addEventListener('mouseleave', function(){
  box3.style.backgroundColor = "#fff";
  
});
$(function(){
  //マウスが触れた時
  $('.box1').mouseover(function(){
    $('.box1').css('background-color', 'red');    
  });
  //マウスが離れた時
  $('.box1').mouseout(function(){
    $('.box1').css('background-color', '#fff');
  });

  $('.box2').mouseover(function(){
    $('.box2').css('background-color', 'blue');    
  });
  $('.box2').mouseout(function(){
    $('.box2').css('background-color', '#fff');
  });

  $('.box3').mouseover(function(){
    $('.box3').css('background-color', 'green');    
  });
  $('.box3').mouseout(function(){
    $('.box3').css('background-color', '#fff');
  });

});
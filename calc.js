action.onclick = function(){
  alert("계산이 완료되었습니다 :)");
  var n1 = num1.value;
  var n2 = num2.value;
  var n3 = num3.value;
  result(n1,n2,n3);
}

function result(n1, n2, n3){
  var res = (n2 * n3) / n1 ;
  var text = "결과값은" + res + "입니다";
  display.innerHTML = text;
}

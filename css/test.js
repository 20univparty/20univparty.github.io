function button1_click() {

  var chk_radio = document.getElementsByName('chk_info');
  var sel_type = null;

  var city = 0;
  var culture = 0;
  var museum = 0;
  var history = 0;
  var amusement = 0;
  var nature = 0;

  for(var i=0;i<chk_radio.length;i++){
    if(chk_radio[i].checked == true){
      sel_type = chk_radio[i].value;

        if(sel_type == "city"){
         city++;
       }
        if (sel_type == "culture") {
          culture++;
        }
        if (sel_type == "museum") {
          museum++;
        }
        if (sel_type == "history") {
          history++;
        }
        if (sel_type == "amusement") {
          amusement++;
        }
        if (sel_type == "nature") {
          nature++;
        }
    }
  }

  var max = Math.max(city, amusement, museum, nature, culture, history);

  if(sel_type == null){
        alert("선택해주세요.");
		} else if(max == history){
    location.href="result/history.html"
  } else if (max == culture){
    location.href="result/culture.html"
  } else if(max == nature){
    location.href="result/nature.html"
  } else if(max == museum){
    location.href="result/museum.html"
  } else if(max == amusement){
    location.href="result/amusement.html"
  } else if(max == city){
    location.href="result/city.html"
  }


}

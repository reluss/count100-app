var btnGo = document.getElementById("go");

function go() {
  var btnAmount = document.getElementById("buttonsAmount").value;
  console.log(btnAmount + " test");
  var divSec = document.getElementById("btnTemp");
  divSec.innerHTML = "";

  for (i = 1; i <= btnAmount; i++) {
    var createButtons = document.createElement("button");
    createButtons.innerHTML = i;
    divSec.appendChild(createButtons);
    if (Number.isInteger(i / 10)) {
      var createBreak = document.createElement("br");
      divSec.appendChild(createBreak);
    }
    createButtons.setAttribute("id", i);
    createButtons.setAttribute("class", "btnON");
    createButtons.setAttribute("onClick", "markBtn(this.id)");
  }

  document.getElementById("resultCalc").innerHTML = btnAmount;
}

function markBtn(clicked_id) {
  //alert(clicked_id);
  var btnColor = document.getElementById(clicked_id);
  if (btnColor.classList.contains("btnON")) {
    btnColor.className = "btnOFF";
  } else {
    btnColor.className = "btnON";
  }
  var greenBtn = document.querySelectorAll(".btnON").length;
  var redBtn = document.querySelectorAll(".btnOFF").length;
  var result = greenBtn + redBtn - redBtn;
  var resultP = document.getElementById("resultCalc");
  resultP.innerHTML = greenBtn + redBtn + " - " + redBtn + " = " + result;
  console.log(result);
}
console.log("check");

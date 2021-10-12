function caculation() {
  document.getElementById("thongbao").value = "";
  document.querySelector("#checknum1").innerHTML = "";
  document.querySelector("#checknum2").innerHTML = "";
  var n1 = document.getElementById("number1").value;
  var n2 = document.getElementById("number2").value;

  if (document.getElementById("number1").value == "") {
    document.querySelector("#checknum1").innerHTML = "Please enter a number";
  }

  if (document.getElementById("number2").value == "") {
    document.querySelector("#checknum2").innerHTML = "Please enter a number";
  }

  if (document.querySelector('input[name="pheptinh"]:checked')) {
    var pt = document.querySelector('input[name="pheptinh"]:checked').value;
  } else {
    document.getElementById("thongbao").value = "Please check type to caculate";
    return 0;
  }

  if (isNaN(n1) || isNaN(n2)) {
    document.getElementById("thongbao").value = "Not a number";
  }

  if (pt == "option1") {
    var kq = Number(n1) + Number(n2);
  } else if (pt == "option2") {
    var kq = Number(n1) - Number(n2);
  } else if (pt == "option3") {
    kq = Number(n1) * Number(n2);
  }

  if (pt != "option4") {
    document.getElementById("ketqua").value = kq;
  } else {
    if (n2 != 0) {
      kq = Number(n1) / Number(n2);
      document.getElementById("ketqua").value = kq;
    } else {
      document.getElementById("ketqua").value = "infinity";
    }
  }
}

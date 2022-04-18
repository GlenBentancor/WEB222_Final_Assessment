function checkForm() {
  var error = "";
  var errorNum = 0;

  //prodDesc check
  var prodDesc = document.getElementById("ProductDesc").value;
  if (isLetter(prodDesc)) {
    if (errorNum < 3 && !isCapLetter(prodDesc)) {
      error += "Product description must start with a capital letter.\n";
      errorNum += 1;
    }
  } else if (errorNum < 3 && !isLetter(prodDesc)) {
    error += "Product description must start with a letter.\n";
    errorNum += 1;
  }

  if (errorNum < 3 && /[^a-zA-Z\s]/g.test(prodDesc)) {
    error += "Product description must only contain letters.\n";
    errorNum += 1;
  }

  //username check
  var userName = document.getElementById("Username").value;
  if (errorNum < 3 && !isLetter(userName)) {
    error += "Username must start with a letter.\n";
    errorNum += 1;
  }

  //checkbox check
  var checkBox = document.querySelectorAll('input[name="Status"]:checked');
  var values = [];

  checkBox.forEach((checkBox) => {
    values.push(checkBox.value);
  });

  if (errorNum < 3 && values.length == 0) {
    error += "At least one status box must be selected.\n";
    errorNum += 1;
  }

  //error check/display
  if (errorNum > 0) {
    var sidePanel = document.getElementById("productLeftSidePanel");
    var a = document.createElement("a");
    a.innerText = error;
    errorBarClear();

    var h3 = document.createElement("h4");
    h3.innerText = "Error";
    sidePanel.appendChild(h3);

    sidePanel.appendChild(a);
    error = "";
    return false;
  }

  return true;
}

//first character is letter check
function isLetter(str) {
  if (/[a-zA-Z]/.test(str[0])) {
    return true;
  }
  return false;
}

//first letter is capital check
function isCapLetter(str) {
  if (str[0] == str[0].toUpperCase()) {
    return true;
  }
  return false;
}

//sidebar error list clear
function errorBarClear() {
  var sidePanel = document.getElementById("productLeftSidePanel");
  while (sidePanel.firstChild) {
    sidePanel.removeChild(sidePanel.lastChild);
  }
}

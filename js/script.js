let numberBtn = document.getElementById("num");
let symbolBtn = document.getElementById("symbol");
let lowerCaseWordBtn = document.getElementById("lowerCaseWord");
let upperCaseWordBtn = document.getElementById("upperCaseWord");
let generaterBtn = document.getElementById("generater");
let range = document.getElementById("range");
let output = document.getElementById("output");
let rangeOutput = document.querySelector("span");

document.oncontextmenu = function () {
//   return false;
};

console.log(range.value);
rangeOutput.innerText = range.value;

let words = [];

numberBtn.addEventListener("click", () => {
  if (numberBtn.checked === true) {
    words.push("1234567890");
  } else {
    let index = words.indexOf("1234567890");
    words.splice(index, 1);
  }
});

upperCaseWordBtn.addEventListener("click", () => {
  if (upperCaseWordBtn.checked === true) {
    words.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  } else {
    let index = words.indexOf("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    words.splice(index, 1);
  }
});

lowerCaseWordBtn.addEventListener("click", () => {
  if (lowerCaseWordBtn.checked === true) {
    words.push("abcdefghijklmnopqrstuvwxyz");
  } else {
    let index = words.indexOf("abcdefghijklmnopqrstuvwxyz");
    words.splice(index, 1);
  }
});

symbolBtn.addEventListener("click", () => {
  if (symbolBtn.checked === true) {
    words.push("@#$%*()_+=-.:/?&*");
  } else {
    let index = words.indexOf("@#$%*()_+=-.:/?&*");
    words.splice(index, 1);
  }
});

let passwordLenght = range.value;

range.addEventListener("input", () => {
  passwordLenght = range.value;
  rangeOutput.innerText = range.value;
});

generaterBtn.addEventListener("click", () => {
  let allSelectedWordsType = words.toString();

  let result = "";

  for (let i = 0; i < passwordLenght; i++) {
    let generater = Math.floor(Math.random() * allSelectedWordsType.length);

    result += allSelectedWordsType.substring(generater, generater + 1);

    output.innerHTML = result;
  }
});

output.addEventListener("click", async () => {
  const value = output.getInnerHTML();

  if (!navigator.clipboard) {
    // Clipboard API not available
    Swal.fire("Algo salio mal!");
  }

  try {
    await navigator.clipboard.writeText(value);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Copiado al portapapeles",
      showConfirmButton: false,
      timer: 1500,
    });
  } catch (err) {
    Swal.fire({
      position: "center",
      icon: "error",
      title: "Algo salio mal, no se ha podido copiar!",
      showConfirmButton: false,
      timer: 1500,
    });
  }
});

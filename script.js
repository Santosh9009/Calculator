let string = "";
const input = document.querySelector("input");
console.log(input.value);

const button = document.querySelectorAll("button");
const arr = Array.from(button);
arr.forEach((button) => {
  button.addEventListener("click", function (e) {
    if (e.target.innerHTML == "=") {
      string = eval(string);
    } else if (e.target.innerHTML == "C") {
      string = "";
    } else if (e.target.innerHTML == "DE") {
      string = string.substring(0,string.length-1);
    } else {
      string += e.target.innerHTML;
    }
    input.value = string;
  });
});

console.log("Hello world");

document.querySelector("#output").style.visibility = "hidden";

var input = document.querySelector("input");

input.addEventListener("input", function (e) {
    document.querySelector("#output").style.visibility = "visible";
  var temp = e.target.value;
  var grams = temp * 1000;
  var pounds = temp * 2.20462;
  var ounces = temp * 35.274;
  
/*   console.log("The value of grams is:- ", grams);
  console.log("The value of pounds is:- ", pounds);
  console.log("The value of ounces is:- ", ounces); */

  document.querySelector("#gramsOutput").innerHTML = grams;
  document.querySelector("#poundOutput").innerHTML = pounds;
  document.querySelector("#ozOutput").innerHTML = ounces;
});

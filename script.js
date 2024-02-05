let opening = document.querySelector('.story-opening');
let buttonOne = document.querySelector(".option-one");
let b2 = document.querySelector('.option-two');
let jason = document.querySelector (".Jason");
let optiononeScreen = document.querySelector('.option-one-screen');
let optiontwoScreen = document.querySelector('.option-two-screen');
 let Button2 = document.querySelector (".option-two");
buttonOne.onclick = function() {
    opening.style.display = "none";
    buttonOne.style.display = "none";
    optiononeScreen.style.display = "block";
    Button2.style.display = "none";
    jason.style.display = "block";
};
Button2.onclick = function () {
      opening.style.display = "none";
    buttonOne.style.display = "none";
    optiontwoScreen.style.display = "block";
    Button2.style.display = "none";




};

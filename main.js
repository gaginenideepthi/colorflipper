const flipper = [0,1,2,3,4,5,6,7,8,9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
btn.addEventListener("click", function () {
    let colorFlipper = "#";
    for (let i = 0; i < 6; i++) {
        colorFlipper += flipper [getRandomNumber()];
    }
color.textContent = colorFlipper;
document.body.style.backgroundColor = colorFlipper;
});
function getRandomNumber(){
return Math.floor(Math.random() * flipper.length);
}
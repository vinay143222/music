// document.querySelector("button").addEventListener("click", handClick);

// function handClick() {
//     alert("clcked");
// }
// there are two methods of do the things anynomous function
var number = document.querySelectorAll('.drum').length;
for (var i = 0; i < number; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function button() {
        var buttonIneer = this.innerHTML;
        makesound(buttonIneer);

    });
}
document.addEventListener('keypress', function(event) {
    makesound(event.key);

})

function makesound(key) {
    switch (key) {
        case "w":
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;
        case "a":
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case "s":
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
        case "d":
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case "j":
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
        case "k":
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
        case "l":
            var audio = new Audio('sounds/snare.mp3');
            audio.play();


    }
} // var audio = new Audio('sounds/tom-1.mp3');
//         audio.play();
// debugger; it is used to debugg the entrie code as we do in the c, shift+enter 
// function add(num1, num2) {
//     return num1 + num2;
// }

// function sub(num1, num2) {
//     return num1 - num2;
// }

// function cal(num1, num2, operator) {
//     return operator(num1, num2);
// }
// consturctor function
// function Bell(name,age){
//     this.name=name;
//     this.age=age;
// } Bell("vinay",26);
// var bellboy1=new Bell("vinay",12);
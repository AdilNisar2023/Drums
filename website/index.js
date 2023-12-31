let buttonLength = document.querySelectorAll(".drum").length;

for (var i = 0; i < buttonLength; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
  function handleClick() {
    this.style.color = "white";
    var buttonClkick = this.innerHTML;
    buttonAnimation(buttonClkick)
    makeSound(buttonClkick);
  }
}
function makeSound(key) {
  switch (key) {
    case "w":
      var sound1 = new Audio("./sounds-main/tom-1.mp3");
      sound1.play();
      break;
    case "a":
      var sound2 = new Audio("./sounds-main/tom-2.mp3");
      sound2.play();
      break;
    case "s":
      var sound3 = new Audio("./sounds-main/tom-3.mp3");
      sound3.play();
      break;
    case "d":
      var sound4 = new Audio("./sounds-main/tom-4.mp3");
      sound4.play();
      break;
    case "j":
      var sound5 = new Audio("./sounds-main/crash.mp3");
      sound5.play();
      break;
    case "k":
      var sound6 = new Audio("./sounds-main/kick-bass.mp3");
      sound6.play();
      break;
    case "l":
      var sound7 = new Audio("./sounds-main/snare.mp3");
      sound7.play();
      break;
  }
}

document.addEventListener("keypress",function(event){
    console.log(event.key)
    makeSound(event.key)
    buttonAnimation(event.key)
})
function buttonAnimation(currentkey){
  var activekey=document.querySelector("."+ currentkey)
  activekey.classList.add("pressed");
  setTimeout (function(){
    activekey.classList.remove("pressed");
  },100);
}

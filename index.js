//detecting button click
var numberOfRunButtons = document.querySelectorAll(".drum").length;
for(var i=0;i<numberOfRunButtons;i++){

  document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    pressedLetter=this.innerHTML; //this is the clickde letter
    keyBoardPress(pressedLetter); // this take the clicked
    buttonAnimation(pressedLetter);
  });//{
  //   key = this.innerHTML; //checks which letter was clicked in the webpage.
  //   makeSound(buttoninnerHTML);
  // }

}

//Detecting keyboardpress
function keyBoardPress(key){
  buttonAnimation(key);
      switch (key) {
        case "w":
          var tom1= new Audio('sounds/tom-1.mp3');
          tom1.play();
          break;
        case "a":
          var tom2= new Audio('sounds/tom-2.mp3');
          tom2.play();
        case "s":
          var tom3 = new Audio('sounds/tom-3.mp3');
          tom3.play();
        case "d":
          var tom4= new Audio('sounds/tom-4.mp3');
          tom4.play();
        case "j":
          var snare= new Audio('sounds/snare.mp3');
          snare.play();
        case "k":
          var crash =new Audio('sounds/crash.mp3');
          crash.play();
        case "l":
          var kick = new Audio('sounds/kick-bass.mp3');
          kick.play();
        default:
          console.log(key);
      }

}
document.addEventListener("keydown",function(event){
  keyBoardPress(event.key);
}
);
function buttonAnimation(currentKey){
  var activebutton = document.querySelector("."+currentKey);
  activebutton.classList.add("pressed"); //added the class pressed to the vairable activebutton
  setTimeout(function(){
    activebutton.classList.remove("pressed");
  },100)
}
// function handleClick(){
//   var audio= new Audio('sounds/tom-1.mp3');
//   audio.play();
// }

var colors = ["red","blue","green","yellow"]
var gamePattern = []
var userClickedPattern = []
var level = 0
function nextSequence() {
  var randomNumber = Math.floor(Math.random()*4)
  var randomChosenColor = colors[randomNumber]
  gamePattern.push(randomChosenColor)
  $("#"+randomChosenColor).fadeOut(300).fadeIn(100);
  makeSound(randomChosenColor);
  level+=1
  $("h1").text("Level "+level)
  userClickedPattern = []
}
function makeSound(key){
  switch(key){
  case "blue":
      var blue = new Audio('sounds//blue.mp3')
      blue.play();
    break;
  case "red":
      var red = new Audio('sounds//red.mp3')
      red.play();
    break;
  case "green":
      var green = new Audio('sounds//green.mp3')
      green.play();
    break;
  case "yellow":
      var yellow = new Audio('sounds//yellow.mp3')
      yellow.play();
    break;
  case "wrong":
      var wrong = new Audio('sounds//wrong.mp3')
      wrong.play();

}
}
$("button").on("click",(function() {
  var userChosenColor = this.id
  makeSound(userChosenColor)
  animatePress(userChosenColor)
  userClickedPattern.push(userChosenColor)
  checkAnswer(userChosenColor)
}));
function animatePress(currentColor) {
  var button = $("#"+currentColor)
  button.addClass("pressed")
  setTimeout(function(currentColor) {button.removeClass("pressed")},100)
}

$(document).one("keydown",function (){$("h1").text("Level "+level)
 nextSequence()})
function checkAnswer(currentLevel){
  if (currentLevel===gamePattern[(userClickedPattern.length)-1]){
    if (userClickedPattern.length===gamePattern.length){setTimeout(nextSequence,1000)}}
  else{$("body").addClass("game-over")
  makeSound("wrong")
        setTimeout(function(){$("body").removeClass("game-over")},200)
      $("h1").text("Game Over, Press Any Key To Restart.")
    startOver()}
  console.log(currentLevel);
  console.log(gamePattern);
  console.log(level)
}
console.log(gamePattern[level-1])
function startOver(){
  level = 0
  gamePattern = []
  $(document).one("keydown",function (){$("h1").text("Level "+level)
   nextSequence()})
}

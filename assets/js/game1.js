// 1. start define data to be shown = an array of objects done
// 2. display question and options = one at a time 
// 3. start timer each question has 10s timer
// 4. if user selects wong option display screen 
// 5. if selects correct answer display screen score++
// 6. if time runs out display screen
// 7. show next question
var Rapunzel = [
  {
    qNumber: 1,
    que: "What gave Rapunzel’s hair its magical properties?",
    options: ["A magic spoon", "A moonrock", "A golden flower", "An enchanted haircut"],
    correct: "A golden flower"
  }, {
    qNumber: 2,
    que: "Who kidnaps Rapunzel as a baby?",
    options: ["Mother Gothel", "Maximus", "Father Gogo", "Eugene"],
    correct: "Mother Gothel"
  }, {
    qNumber: 3,
    que: "What do the King and Queen do every year in honor of Rapunzel’s birthday?",
    options: ["Build a castle", "Sing a sad song", "Spin hay into gold", "Release paper lanters"],
    correct: "Release paper lanters"
  }, {
    qNumber: 4,
    que: "What does Rapunzel hit Flynn Rider with when they first meet?",
    options: ["A spatula", "A brick", "A frying pan", "A broom"],
    correct: "A frying pan"
  }, {
    qNumber: 5,
    que: "What is Flynn Rider’s real name?",
    options: ["Gregory Bert", "Rapunzolo", "Percy McGinty", "Eugene Fitzherbert"],
    correct: "Eugene Fitzherbert"
  }, {
    qNumber: 6,
    que: "What type of animal is Pascal?",
    options: ["A Chameleon", "A Dog", "A snake", "A Horse"],
    correct: "A Chameleon"
  }, {
    qNumber: 7,
    que: "What does Rapunzel want in return for giving Flynn the crown?",
    options: ["She wants Flynn to marry mother Gothel", "She wants Flynn to buy her a horse", "She wants Flynn to take her to see lanterns", "She wants Flynn to bake her a cake"],
    correct: "She wants Flynn to take her to see lanterns"
  }, {
    qNumber: 8,
    que: "When Rapunzel sings, what does her hair do?",
    options: ["It glows", "It sings back", "It changes color", "it gets shorter"],
    correct: "It glows"
  }, {
    qNumber: 9,
    que: "What color hair does Rapunzel have after Flynn cuts it?",
    options: ["Blonde", "Red", "Brunette", "White"],
    correct: "Brunette"
  }, {
    qNumber: 10,
    que: "Finish the Flynn Rider quote: “I didn’t want to have to do this, but you leave me no choice. Here comes _________”",
    options: ["The laugh", "The smolder", "The shrug", "The singing"],
    correct: "The smolder"
  }
];
var value = '';
var questionIndex = 0;
var counter = 9;
var t = 0;
var timeUp;
var selected;

$(".Rap").on('click', function () {
  $(".overlay").html("<div class='overlay-bg'><div class='gameScreen text-center'><div ><img class='top' src='assets/images/tangled_top.jpeg'></div><div class='playArea'><div class='timer'>10</div><div class='questionArea'></div><div class='optionArea mt-5'><div class='opt1 optClick'></div><div class='opt2 optClick'></div><div class='opt3 text-center optClick'></div><div class='opt4 optClick'></div></div></div></div></div>");
  nextQuestion()

})

function nextQuestion(){
  
  selected = Rapunzel[questionIndex];
  $(".questionArea").html(selected.que);
  $(".opt1").html(selected.options[0]);
  $(".opt1").attr('data','10');
  $(".opt2").html(selected.options[1]);
  $(".opt2").attr('data','11');
  $(".opt3").html(selected.options[2]);
  $(".opt3").attr('data','12');
  $(".opt4").html(selected.options[3]);
  $(".opt4").attr('data','13');

  counter = 10;
  t = setInterval(time, 1000);
  optUser();

  questionIndex++;

}


function time() {
  counter--;
  $('.timer').html(counter);
  console.log(counter);
  if (counter == 0) {
    stop();
    console.log("times up");
    $(".playArea").html("The correct answer is: "+selected.correct);
  }else{
    console.log("guess the answer");
  }

}
function stop() {
  clearInterval(t);
  if(questionIndex <10){
    console.log("wait here");
    var wait = setTimeout(function(){
      $(".overlay").html("<div class='overlay-bg'><div class='gameScreen text-center'><div ><img class='top' src='assets/images/tangled_top.jpeg'></div><div class='playArea'><div class='timer'>10</div><div class='questionArea'></div><div class='optionArea mt-5'><div class='opt1 optClick'></div><div class='opt2 optClick'></div><div class='opt3 text-center optClick'></div><div class='opt4 optClick'></div></div></div></div></div>");
  
      nextQuestion();
    },5000);
  }else{

  }
}
function optUser(){
  $(".optClick").on('click',function(){
    console.log("you selected an option");
    value = $(this).text();
    console.log("value "+value);
    if(value == selected.correct){
      console.log("right!!");
      $(".playArea").html("right!!"); 
      stop();
    }else{
      console.log("wrong answer")
      $(".playArea").html("wrong answer");
      stop();

    }
   

  })
}


// start screen with event listner
// main game screen
//   countr for que number
//   decrementer for remaining
//   var for score
//   countdown TimeR
//   Array or obj of questions and options and correct answers
//   var to huld questions
//   btn 1 an2 with on click EventSource
//   var to diplay options
// on correct congratulation screen
$(document).ready(function () {
  // var  sets;//options, correct;
  // screen2
  var questions = {
    sets: [
      {
        qNumber:1,
        que: "what is it?",
        options: ["one", "two", "three"],
        correct: "two"
      }, {
        qNumber:2,
        que: "where is it?",
        options: ["where", "there", "here"],
        correct: "here"
      }, {
        qNumber:3,
        que: "when is it?",
        options: ["now", "later", "never"],
        correct: "never"
      }
    ],
    queChosen:false,
    selection:function(){
      var compChoice = sets[Math.floor(Math.random()*sets.length)];
      console.log("selected Que: "+compChoice);
      this.queChosen = true;
      return(compChoice);

    }

  }
questions.sets.selection;
})

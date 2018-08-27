var first =[
 { qNumber:1,
  que: "What did Alfred Nobel develop??",
  options: ["Atomic bomb", "two", "three"],
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
  ]

// console.log("question is: "+first[0].que);
// console.log("options are: "+first[0].options);
// console.log("you chose: "+first[0].options[2]);
// console.log("correct answer is: "+first[0].correct);
// var newArr = [];
// newArr = first.sets;
// console.log("newArr: "+newArr);
var selected = first[Math.floor(Math.random()*first.length)];
console.log("using math: "+selected);
console.log(selected.qNumber);
console.log(selected.que);
console.log(selected.correct);


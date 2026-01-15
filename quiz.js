//alert("js is Connected");

const questions = [

    {
     question: "1.What does HTML stand for?",
      answers: [
      { text :  "Hyper Text Markup Language", correct: true },
       { text : "High Text Machine Language", correct: false },
        { text :  "Hyperlinks and Text Markup Language", correct: false },
         { text :  "Home Tool Markup Language" , correct: false },
    ]
   },
   
    {
    question: "2.Which keyword is used to declare a variable in JavaScript?",
    answers: [
       { text: "int", correct: false },
         { text: "let", correct: true },
          { text: "string", correct: false },
           { text: "float", correct: false }
    ]
  },
  {
    question: "3.Which symbol is used for single-line comments in JavaScript?",
    answers: [
       { text: "/* */", correct: false },
        { text: "<!-- -->", correct: false },
         { text: "#", correct: false },
          { text: "//", correct: true }
      
    ]
  },
  {
    question: "4.Which method is used to convert JSON string into JavaScript object?",
    answers: [
      { text: "JSON.convert()", correct: false },
        { text: "JSON.object()", correct: false },
         { text: "JSON.parse()", correct: true },
          { text: "JSON.stringify()", correct: false }
    ]
  },
  {
    question: "5.Which operator is used to compare both value and type in JavaScript?",
    answers: [
      { text: "==", correct: false },
       { text: "=", correct: false },
        { text: "===", correct: true },
         { text: "!=", correct: false }
    ]
  },
  {
    question: "6.Which function is used to print something in the browser console?",
    answers: [
      { text: "console.log()", correct: true },
       { text: "print()", correct: false },
        { text: "log()", correct: false },
         { text: "document.write()", correct: false }
    ]
  },

  {
    question:"7.What is correct HTML for inserting a line break?",
    answers: [
      { text : "<ib>" , correct: false },
       { text : "<break>" , correct: false },
        { text : "<br>" , correct: true },
         { text : "<inbr>" , correct: false }
    ]
  },
  
 
  
  {
    question: "8.Which is NOT a programming language?",
     answers: [
      { text :"Python", correct: false },
       { text :"Java", correct: false },
        { text :"HTML", correct: true },
         { text :  "None of the Above" , correct: false }
    ]
  },

];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-btn");
const nextButton = document.getElementById("btn-nxt");

let currentQuestionIndex = 0;
let score = 0;

// Quiz start
  function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.style.display = "none";
    showQuestion();
  }

// Show question
function showQuestion() {
  resetState();

    let currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
      const button = document.createElement("button");
      button.innerText = answer.text;
       button.classList.add("btn");
      answerButtons.appendChild(button);

    if (answer.correct) {
        button.dataset.correct = answer.correct;
    }

     button.addEventListener("click", selectAnswer);
  });
}

// reset the  old answers

      function resetState() {
            nextButton.style.display = "none";
            while (answerButtons.firstChild) {
              answerButtons.removeChild(answerButtons.firstChild);
          }
      }

// Answer section
function selectAnswer(e) {
      const selectedBtn = e.target;
      const isCorrect = selectedBtn.dataset.correct === "true";

        if (isCorrect) {
          selectedBtn.style.backgroundColor = "green";
          score++;
        } else {
          selectedBtn.style.backgroundColor = "red";
        }

  Array.from(answerButtons.children).forEach(button => {

        if (button.dataset.correct === "true") {
          button.style.backgroundColor = "green";
        }
        button.disabled = true;

      });

  nextButton.style.display = "block";

}

 //thw  next button
    nextButton.addEventListener("click", () => {
      currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
          showQuestion();
        } else {
          showScore();
        }
    });

// display of final score
  function showScore() {
    resetState();
      questionElement.innerText = `You scored ${score} out of ${questions.length}`;
      nextButton.innerText = "Restart";
      nextButton.style.display = "block";
  }

startQuiz();
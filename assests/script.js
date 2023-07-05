// Globally declared variables
var startQuizButton = document.getElementById("start-button");
var highschoresButton = document.getElementById("highscores-button");
var aButton = document.getElementById("a-button");
var bButton = document.getElementById("b-button");
var cButton = document.getElementById("c-button");
var dButton = document.getElementById("d-button");
var quizTimer = document.getElementById("timer");
var startQuizDiv = document.getElementById("quiz");
var gameOverDiv = document.getElementById("quiz-end");
var highscoresScreen = document.getElementById("high-scores-screen");
var questionsEl = document.getElementById("questions");
var currentQuestionIndex = 0;
var finalQuestionIndex = quizQuestions.length;
var timeLeft = 60;
var timerInterval;
var score = 0;
var correct;

// Questions object saved as an array
var quizQuestions = [{
  question: "How many elements can you apply an 'ID' attribute to?",
  choiceA: "As many as you want",
  choiceB: "3",
  choiceC: "1",
  choiceD: "128",
  correctAnswer: "c"},
{
  question: "What does DOM stand for?",
  choiceA: "Document Object Model",
  choiceB: "Display Object Management",
  choiceC: "Digital Ordinance Model",
  choiceD: "Desktop Oriented Mode",
  correctAnswer: "a"},
 {
  question: "What is used primarily to add styling to a web page?",
  choiceA: "HTML",
  choiceB: "CSS",
  choiceC: "Python",
  choiceD: "Node",
  correctAnswer: "b"},
  {
  question: "What tag is used to define an interactive button in an HTML document?",
  choiceA: "Footer",
  choiceB: "Header",
  choiceC: "Div",
  choiceD: "Button",
  correctAnswer: "d"},
  {
  question: "CSS stands for ____ Style Sheets.",
  choiceA: "Cascading",
  choiceB: "Concept",
  choiceC: "Curious",
  choiceD: "Concave",
  correctAnswer: "a"},  
  {
  question: "What is a JavaScript element that represents either TRUE or FALSE values?",
  choiceA: "Integer",
  choiceB: "String",
  choiceC: "Boolean",
  choiceD: "Array",
  correctAnswer: "c"},
  {
  question: "What HTML attribute can be used to link an external JavaScript file?",
  choiceA: "href",
  choiceB: "src",
  choiceC: "class",
  choiceD: "index",
  correctAnswer: "b"},
];

// This function cycles through the object array containing the quiz questions to generate the questions and answers.
function generateQuizQuestion(){
  gameOverDiv.style.display = "none";
  if (currentQuestionIndex === finalQuestionIndex){
      return showScore();
  } 
  var currentQuestion = quizQuestions[currentQuestionIndex];
  questionsEl.innerHTML = "<p>" + currentQuestion.question + "</p>";
  aButton.innerHTML = currentQuestion.choiceA;
  bButton.innerHTML = currentQuestion.choiceB;
  cButton.innerHTML = currentQuestion.choiceC;
  dButton.innerHTML = currentQuestion.choiceD;
};

// Start Quiz function starts the TimeRanges, hides the start button, and displays the first quiz question.
function startQuiz(){
    gameOver.style.display = "none";
    startQuiz.style.display = "none";
    generateQuizQuestion();

    //Timer
    timerInterval = setInterval(function() {
        timeLeft--;
        quizTimer.textContent = "Timer: " + timeLeft;
    
        if(timeLeft === 0) {
          clearInterval(timerInterval);
          showScore();
        }
      }, 1000);
    quizBody.style.display = "flex";
};

// This function is the end page screen that displays your score after either completeing the quiz or upon timer run out
function showScore(){
  quizBody.style.display = "none"
  gameoverDiv.style.display = "flex";
  clearInterval(timerInterval);
  highscoreInputName.value = "";
  finalScoreEl.innerHTML = "Your score is " + timeLeft;
};

// This function displays the high scores page while hiding all of the other pages from 
function showHighscore(){
  startQuizDiv.style.display = "none"
  gameOverDiv.style.display = "none";
  highscoreContainer.style.display = "flex";
  highscoreDiv.style.display = "block";
  endGameBtns.style.display = "flex";

  generateHighscores();
};

// This function checks the response to each answer 
function checkAnswer(answer){
  correct = quizQuestions[currentQuestionIndex].correctAnswer;

  if (answer === correct && currentQuestionIndex !== finalQuestionIndex){
      score++;
      alert("That Is Correct!");
      currentQuestionIndex++;
      generateQuizQuestion();
      //display in the results div that the answer is correct.
  }else if (answer !== correct && currentQuestionIndex !== finalQuestionIndex){
      alert("That Is Incorrect.")
      currentQuestionIndex++;
      generateQuizQuestion();
      //display in the results div that the answer is wrong.
  }else{
      showScore();
  };
}  
// Event listener to start the quiz
startQuizButton.addEventListener("click", startQuiz);
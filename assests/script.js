// Globally declared variables
var startQuizButton = document.getElementById("start-button");
var highschoresButton = document.getElementById("highscores-button");
var aButton = document.getElementById("a-button");
var bButton = document.getElementById("b-button");
var cButton = document.getElementById("c-button");
var dButton = document.getElementById("d-button");
var quizTimer = document.getElementById("timer");
var startQuiz = document.getElementById("quiz");
var gameOverDiv = document.getElementById("quiz-end");
var highscoresScreen = document.getElementById("high-scores-screen");
var questionsEl = document.getElementById("questions");


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
  question: "When is localStorage data cleared?",
  choiceA: "No expiration time",
  choiceB: "On page reload",
  choiceC: "On browser close",
  choiceD: "On computer restart",
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
  gameoverDiv.style.display = "none";
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
  finalScoreEl.innerHTML = "You got " + score + " out of " + quizQuestions.length + " correct!";
};

// Event listener to start the quiz
startQuizButton.addEventListener("click",startQuiz);
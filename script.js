// Globally declared variables
var startQuizButton = document.getElementById("start-button")
var highschoresButton = document.getElementById("highscores-button")
var aButton = document.getElementById("a-button")
var bButton = document.getElementById("b-button")
var cButton = document.getElementById("c-button")
var dButton = document.getElementById("d-button")
var quizTimer = document.getElementById("timer")
var startQuiz = document.getElementById("quiz")
var gameOver = document.getElementById("quiz-end")
var highscoresScreen = document.getElementById("high-scores-screen")


// Questions object saved as an array
var quizQuestons = [{

}]

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
    quizBody.style.display = "block";
}

// Event listener to start the quiz
startQuizButton.addEventListener("click",startQuiz);
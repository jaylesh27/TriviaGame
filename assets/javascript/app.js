//create a 10-question trivia game

/*
1. What is the most populated city in the world? Tokyo
2. Who is the richest person in the world (as of April 2017)? Bill Gates
3. Which year did the first iPhone come out? 2007
4. What city does Batman live in? Gotham
5. How many votes were cast in the 2016 U.S. presidential election (per the FEC)? 136,669,237
6. How far is the sun from the Earth (in miles)? 92.96 million miles
7. How many different species of spiders are there? ~35000
8. How many countries are there in the world? 195
9. How fast did the Millenium Falcon make the Kessel run? (less than 12 parsecs)

*/
//create variables for correct/incorrect/unanswered questions
var correctAnswers;
var incorrectAnswers;
var unansweredQuestions;

//  Variable that will hold our setInterval that runs the stopwatch
//	var intervalId;

//Have a button labeled "start" for the user to click on in order to start the game
$(".btn").on("click", triviaGame());


$(document).ready(function() {

	//create triviaGame object for the game
	var triviaGame = {


	//figure out how to store the questions and their answers in this object and how to display them on the HTML page when the game starts (test this possible solution to display each question and answer in HTMl: triviaGame.questionOne[0];)
		questionOne: ["What is the most populated city in the world?", "Tokyo", "New Brunswick, NJ", "London", "Mumbai"],
		questionTwo: [],

	//When the user clicks start, create a function to show the first question and have a timer on the page counting down from 30 seconds
		displayQuestionOne: function() {

		},

	//Use clearInterval to stop the count here.
        //clearInterval(intervalId);

	//If user clicks on incorrect answer, pause the timer and show the correct answer. Increment incorrectAnswers variable by 1

	// after three seconds, show the next question and reset the timer to 30 seconds

	// If user clicks on correct answer, show screens saying they got the right answer.  Increment correctAnswers variable by 1

	//after three seconds show the next question and reset the timer to 30 seconds

	//If user doesn't click on any answer and time runs out, show that the user ran "out of time" and display correct answer and then move on to the next question.  Increment unAnswered variable by 1

	//At the end of the game:
	//	remove the timer from the display
	//	display the final score of correct, incorrect, and unanswered questions
	//	have a start over button to start the game all over (not reload the page, but reset the game)


	};





}
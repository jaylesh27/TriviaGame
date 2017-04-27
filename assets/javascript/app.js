//create a 10-question trivia game

//create variables for correct/incorrect/unanswered questions
var correctAnswers;
var incorrectAnswers;
var unansweredQuestions;

//Variable that will hold our setInterval that runs the stopwatch
var intervalId;


var triviaGameHTML = 
	'<div class = "row">' + 
		'<div class = "col-lg-8">' +
			'<section id = "timer-section"></section><br>' +
			'<section id = "question-section"><h2>Insert question here</h2></section><br>' +
			'<div class="list-group" id = "answers-section">' +
			  '<button type="button" class="list-group-item" id = "answer-one">Answer 1</button>' +
			  '<button type="button" class="list-group-item" id = "answer-two">Answer 2</button>' +
			  '<button type="button" class="list-group-item" id = "answer-three">Answer 3</button>' +
			  '<button type="button" class="list-group-item" id = "answer-four">Answer 4</button>' + 
			'</div>' +
		'</div>' +
	'</div>';

console.log(triviaGameHTML);

 $(".btn").on("click", function() {
 	//use .replaceWith() to replace the start button class with the HTML in var triviaGameHTML
 	$("div.third").replaceWith(triviaGameHTML);
 });

$(document).ready(function() {



	//create triviaGame object for the game
	var triviaGame = {


	//figure out how to store the questions and their answers in this object and how to display them on the HTML page when the game starts (test this possible solution to display each question and answer in HTMl: triviaGame.questionOne[0];)
		questionOne: ["What is the most populated city in the world?", "Tokyo!", "New Brunswick, NJ", "London", "Mumbai"],
		questionTwo: ["Who is the richest person in the world (as of April 2017)?", "Jeff Bezos", "Bill Gates!", "Warren Buffett", "Donald Trump"],
		questionThree: ["Which year did the first iPhone come out?", "1776", "2008", "2007!", "2005"],
		questionFour: ["Which city does Batman operate in?", "Gotham!", "Metropolis", "Star City", "Detroit"],
		questionFive: ["How many votes were cast in the 2016 U.S. presidential election (per the FEC)?", "143,392,192", "1,238,504,010", "136,669,237!", "134,395,203"],
		questionSix: ["How far is the sun from the Earth (in miles)?", "80.95 million", "102.96 million", "89.11 million", "92.96 million!"],
		questionSeven: ["How many different species of spiders are there?", "~35000!", "~46000", "~3000", "~15350"],
		questionEight: ["How fast did the Millenium Falcon make the Kessel run?", "25 seconds", "less than 12 parsecs!", "3.4 light years", "none of the above"],

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





});
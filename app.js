// @ts-check
import { questions } from "./data/questions.js";
import { Quiz } from "./models/Quiz.js";
import { UI } from "./models/UI.js";
("./models/UI.js");

const renderPage = (quiz, ui) => {
	ui.showQuestion(quiz.getQuestionIndex().text);
	ui.showChoices(quiz.getQuestionIndex().choices, (currentChoice) => {
		quiz.guess(currentChoice);
		renderPage(quiz, ui);
	});
};

function main() {
	const quiz = new Quiz(questions);
	const ui = new UI();

	renderPage(quiz, ui);
}

main();

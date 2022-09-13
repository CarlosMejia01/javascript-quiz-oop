export class UI {
	constructor() {}

	/**
	 *
	 * @param {string} text question to render
	 */
	showQuestion(text) {
		const questionTitle = document.getElementById("question");
		questionTitle.innerText = text;
	}

	/**
	 *
	 * @param {string[]} choices the choices of the question
	 */
	showChoices(choices, callback) {
		const choicesContainer = document.getElementById("choices");
		choicesContainer.innerHTML = "";
		for (let i = 0; i < choices.length; i++) {
			const button = document.createElement("button");
			button.innerText = choices[i];
			button.className = "button";
			button.addEventListener("click", () => callback(choices[i]));

			choicesContainer.append(button);
		}
	}

	/**
	 *
	 * @param {number} score the total score
	 */
	showScores(score) {
		const quizEndHtml = `
			<h1>Result</h1>
			<h2>Your score: ${score}</h2>
		`;

		const element = document.getElementById("quiz");
		element.innerHTML = quizEndHtml;
	}
}

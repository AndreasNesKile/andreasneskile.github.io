import React from "react";

const QuizApplicationDescription = () => (
	<div className="quiz-application-description">
		<div className="quiz-general-description">
			Ein simpel quiz-applikasjon kor ein på førehand bestemmer antall
			spørsmål (mellom 10-20) for ei runde. Spørsmålenes kategori er
			tilfeldig utvalde.
			<br />
			<br />
			Applikasjonen er laga med hensyn til å utforske rammeverket Vue.js
			og generell CSS-styling.
		</div>
		<br />
		<div>Kunde: Experis Academy</div>
		<hr />
		<div className="stack-wrapper">
			<h1>Stack</h1>
			<span>Frontend</span>
			<br />
			<ul>
				<li>Vue.js</li>
			</ul>
			<br />
			<hr />
			<div className="github-link-property-project">
				<li style={{ listStyle: "none" }}>
					<a
						href="https://github.com/AndreasNesKile/trivia-application"
						target="_"
					>
						<span
							className="uk-icon-link socials-github"
							uk-icon="icon: github; ratio: 1.5"
						></span>
					</a>
				</li>
			</div>
		</div>
	</div>
);

export default QuizApplicationDescription;

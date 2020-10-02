import React from "react";

import CernLogo from "../assets/cern-logo.png";
import ExperisLogo from "../assets/Logo_Academy.svg";
import Exam480 from "../assets/exam480.png";

import "./experience.scss";

const Experience = () => (
	<div className="uk-container">
		<div className="experience-wrapper" uk-grid="true">
			<div className="experience-list">
				<div className="language-experience-wrapper">
					<div className="webdevelopment-wrapper">
						<h3>Webutvikling</h3>
						<ul>
							<li>HTML</li>
							<li>CSS</li>
							<dd>
								<a href="https://getbootstrap.com/" target="_">
									- Bootstrap
								</a>
							</dd>
							<dd>
								<a href="https://bulma.io/" target="_">
									- Bulma
								</a>
							</dd>
							<dd>
								<a href="https://getuikit.com/" target="_">
									- UiKit
								</a>
							</dd>
							<li>Javascript/TypeScript</li>
							<dd>- Reactjs</dd>
							<dd>- Vuejs</dd>
							<dd>- Angular</dd>
							<li>Node.js</li>
							<dd>- Express.js</dd>
							<li>PHP</li>
							<dd>- Laravel</dd>
							<li>Python</li>
							<dd>
								<a
									href="https://flask.palletsprojects.com/en/1.1.x/"
									target="_"
								>
									- Flask
								</a>
							</dd>
							<li>Git/GitHub/Gitlab</li>
							<li>Java</li>
							<li>C#</li>
							<li>.NET</li>
							<dd>- ASP.NET Core</dd>
							<dd>- Entity Framework</dd>
							<li>SQL</li>
							<dd>- MySSQL</dd>
							<dd>- MongoDB</dd>
						</ul>
					</div>
					<div className="computer-devops-container">
						<h3>DevOps</h3>
						<ul>
							<li>Docker</li>
							<li>CI/CD</li>
							<dd>- GitHub Actions</dd>
							<li>RedHat OpenShift</li>
						</ul>
					</div>
					<div className="computer-engineering-container">
						<h3>Ingeniørferdigheter</h3>
						<ul>
							<li>Maskinlæring</li>
							<dd>- Tensorflow</dd>
							<dd>- Keras</dd>
							<li>NumPy</li>
						</ul>
						<ul>
							<li>Data visualisering</li>
							<dd>- Jupyter</dd>
						</ul>
					</div>
				</div>
				<div className="divider-container">
					<div className="uk-divider-small"></div>
				</div>
				<div className="certificates-container">
					<h2>Sertifikat</h2>
					<div className="certificates-wrapper">
						<div className="msca-certificate">
							<a
								href="https://www.youracclaim.com/badges/578b96f4-b9b4-40a5-9abe-6f96a3d0028d/linked_in"
								target="_"
							>
								<img
									src={Exam480}
									key="exam480-img"
									className="exam480-img"
									alt="Exam 480 certificate"
								></img>
							</a>
							<p>
								Exam 480: Programming in HTML5 with JavaScript
								and CSS4
							</p>
						</div>
					</div>
				</div>
				<div className="divider-container">
					<div className="uk-divider-small"></div>
				</div>
				<div className="work-experience-wrapper uk-container">
					<h2>Jobberfaring</h2>
					<div className="jobs-wrapper">
						<div className="job-experis-wrapper">
							<h3>2020 - </h3>
							<a href="https://experisacademy.no/">
								<img
									src={ExperisLogo}
									className="experis-logo"
									alt="experis logo"
								></img>
							</a>
						</div>
						<hr className="uk-divider-vertical"></hr>
						<div className="job-cern-wrapper">
							<h3>2018 - 2019</h3>
							<a
								href="https://jobs.smartrecruiters.com/CERN/743999714837270-technical-studentships-it-mathematics-and-robotics?trid=c3270850-b100-4fd2-8aad-40a973eec45a"
								target="_"
							>
								<img
									src={CernLogo}
									className="cern-logo"
									alt="cern logo"
								></img>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
);

export default Experience;

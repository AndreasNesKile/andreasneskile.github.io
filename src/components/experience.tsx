import React from "react";

import CernLogo from "../assets/cern-logo.png";

import "./experience.scss";

const Experience = () => (
	<div className="uk-container">
		<div className="experience-wrapper" uk-grid="true">
			<div className="experience-list">
				<div className="language-experience-wrapper">
					<div className="webdevelopment-wrapper">
						<h3>Web Utvikling</h3>
						<ul>
							<li>HMTL</li>
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
								></a>
								- Flask
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
							<li>Machine Learning</li>
							<dd>- Tensorflow</dd>
							<dd>- Keras</dd>
							<li>NumPy</li>
						</ul>
						<ul>
							<li>Data visualisation</li>
							<dd>- Jupyter</dd>
						</ul>
					</div>
				</div>
				<div className="work-experience-wrapper uk-container">
					<h2>Jobberfaring</h2>
					<div className="jobs-wrapper">
						<div className="job-experis-wrapper">
							<h3>Experis Academy Norway (2020- )</h3>
						</div>
						<div className="job-cern-wrapper">
							<h3>CERN (2018-2019)</h3>
							<img src={CernLogo} className="cernlogo"></img>
							<p>Teknisk student </p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
);

export default Experience;

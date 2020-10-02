import React from "react";

// Used in project view

const PropertyProjectDescription = () => (
	<div className="property-project-description">
		<div className="general-description-property-project">
			Applikasjonen let deg sjå på ulike fiktive eigendommar, og basert på
			din autorisasjon (3 ulike nivåer) får du informasjon tilgjengeleg
			for gjeldande autorisjonsnivå.
			<br />
			<br />
			Som ein
			<span style={{ fontStyle: "italic" }}> ikkje-innlogga</span> brukar
			av applikasjonen har du tilgong til ulik informasjon basert på
			autorisjonsnivået. Ein vanleg brukar kan sjå informasjon som pris,
			plassering og bilete av eigendommen.
			<br />
			<br />
			Ein innlogga
			<span style={{ fontStyle: "italic" }}> standard brukar </span>{" "}
			(kjøpar) vil kunne sjå byggingsår, oppussingshistorikk og meir
			generell informasjon om eigendommen.
			<br />
			<br />
			Er ein innlogga som
			<span style={{ fontStyle: "italic" }}> eiendomsmeglar</span> får ein
			tilgong til ytterligare informasjon som eigar- og
			oppussingshistorikk, samt kontaktinformasjon til eigar av
			eigendommen.
		</div>
		<br />
		<div>Kunde: Experis Academy</div>

		<hr />
		<div className="stack-wrapper">
			<h1>Stack</h1>
			<span>Frontend</span>
			<br />
			<ul>
				<li>React</li>
				<li>Leaflet</li>
				<li>Auth0</li>
			</ul>
			<br />
			<span>Backend</span>
			<ul>
				<li>ASP.NET Core (C#)</li>
				<li>Entity Framework</li>
				<li>MySQL</li>
				<li>Auth0</li>
			</ul>
			<hr />
			<div className="github-link-property-project">
				<li>
					<a
						href="https://github.com/AndreasNesKile/property-noroff-frontend"
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

export default PropertyProjectDescription;

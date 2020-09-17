import React from "react";

// Used in project view

const PropertyProjectDescription = () => (
	<div className="property-project-description">
		<div className="general-description-property-project">
			Applikasjonen lar deg se på ulike fiktive eiendommer, og basert på
			din autorisasjon (3 ulike nivåer) får du informasjon tilgjengelig
			for gjeldende autorisjonsnivå.
			<br />
			<br />
			Som en
			<span style={{ fontStyle: "italic" }}> ikke-innlogget</span> bruker
			av applikasjonen har du tilgang til ulik informasjon basert på
			autorisjonsnivået. En vanlig bruker kan se informasjon som pris,
			plassering og bilder av eiendommen.
			<br />
			<br />
			En innlogget
			<span style={{ fontStyle: "italic" }}> standard bruker </span>{" "}
			(kjøper) vil kunne se byggingsår, oppussingshistorikk og mer
			generell informasjon om eiendommen.
			<br />
			<br />
			Er man innlogget som
			<span style={{ fontStyle: "italic" }}> eiendomsmegler</span> får man
			tilgang til ytterlige informasjon som eier- og oppussingshistorikk,
			samt kontaktinformasjon til eier av eiendommen.
		</div>
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

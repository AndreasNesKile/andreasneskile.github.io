import React from "react";

const MaintenancePage = () => (
	<div className="uk-container uk-container-large main-content-container">
		<div className="uk-card uk-card-primary uk-card-body uk-card-hover maintenance-card">
			<h3 className="uk-card-title">
				Hei!
				<span role="img" aria-label="smiley face">
					😀
				</span>
			</h3>
			<p className="maintenance-descripiton">
				Min portfolio er for øyeblikket under oppbygging!
			</p>

			<p>Se under for sosiale medier og kontaktinformasjon.</p>
			<a uk-scroll="true" href="#socials">
				<span className="fa fa-chevron-down go-to-socials"></span>
			</a>
		</div>
	</div>
);

export default MaintenancePage;

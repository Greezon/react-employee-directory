import React from "react"

function Header() {

	return (
		<div className="bg-secondaryu">

			<div className="pos-f-t">
				<div className="collapse" id="navbarToggleExternalContent">
					<div className="bg-dark p-4">
						<h5 className="text-white h4"><h1>Employee Directory</h1></h5>
						<span className="text-muted">"E" React Employee Domain</span>
					</div>
				</div>
				<nav className="navbar navbar-dark bg-dark">
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
				</nav>
			</div>
		</div>
	)

}

export default Header;
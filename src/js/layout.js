import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Characters } from "./views/characters";
import { Planets } from "./views/planets";
import { Starships} from "./views/vehicles";
import {Person} from "./views/sinCharacter";
import { Planet } from "./views/sinPlanet";
import { Starship } from "./views/sinVehicles";
import {Favorites} from "./views/favorites";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route path={"/characters"} component={Characters}/>
						<Route path={"/planets"} component={Planets}/>
						<Route path={"/starships"} component={Starships}/>
						<Route path={"/character/:uid"} component={Person}/>
						<Route path={"/planet/:uid"} component={Planet}/>
						<Route path={"/starship/:uid"} component={Starship}/>
						<Route path={"/favorites"} component={Favorites}/>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);

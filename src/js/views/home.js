import React from "react";
import { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Home = () => {

	
 return (
	<div>
		<h1>WELCOME! To the starwars universe.</h1>
		<p>Here you will find information about the universe of StarWars.</p>
		<p>Just click on one of the topics to get started!:</p>
	<ul>
	<li><Link to="/characters">Characters</Link></li>
	<li><Link to="/planets">Planets</Link></li>
	<li><Link to="/starships">Starships</Link></li>
	</ul>

	</div>
)};

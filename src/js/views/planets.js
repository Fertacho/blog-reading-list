import React from "react";
import { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Planets = () => {

	const {store,actions} = useContext(Context)
	useEffect(() => {
        actions.getPlanets();
    }, [])
	console.log(store.planets)
 return (
	<div className="text-center row mt-5">
		{store.planets.map((planets,index)=>{
	return <div className="card bg-dark col-5"  key={index}>
		<div className="card-body">
			<h5>{planets.name}</h5>
			<Link to={"/planet/" + planets.uid}>See in detail.</Link>
			<button href="#" className="btn btn-warning" onClick={() => actions.addFavorite(planets.name)}>♡</button></div></div>
		
			})}
		</div>
)};

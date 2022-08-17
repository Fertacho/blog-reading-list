import React from "react";
import { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Planets } from "./planets";

export const Starships = () => {

	const {store,actions} = useContext(Context)
	useEffect(() => {
        actions.getStarships();
    }, [])
	console.log(store.starships)
 return (
	<div className="text-center row mt-5">
		{store.starships.map((starships,index)=>{
return <div className="card bg-dark col-5"  key={index}>
	<div className="card-body">
		<h5>{starships.name}</h5>
		<Link to={"/starship/" + starships.uid}>See in detail.</Link>
		<button href="#" className="btn btn-warning" onClick={() => actions.addFavorite(starships.name)}>♡</button>
		</div>
		</div>
		
		})}
	</div>
)};

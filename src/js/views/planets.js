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
	return <div className="card col-5"  key={index}>
		<img src="..." className="card-img-top" alt="..."/>
		<div className="card-body">
			<h5>{planets.name}</h5>
			<Link to={"/planet/" + planets.uid}>See in detail.</Link>
			<button href="#" className="btn btn-warning">♡</button></div></div>
		
			})}
		</div>
)};

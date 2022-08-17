import React from "react";
import { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";
import { number } from "prop-types";

export const Starship = () => {
    
    const {store,actions} = useContext(Context)
    const {uid} = useParams();

	useEffect(() => {
        actions.getStarship("https://www.swapi.tech/api/starships/" + uid);    
    }, [])
    console.log(store.starship,"naves")

    return <div className="card bg-dark mb-3">
    <div className="card-body">
    <h5>Name: {!!store.starship && store.starship.name}</h5>
							<p>Model: {!!store.starship && store.starship.model}</p>
							<p>Vehicle Class: {!!store.starship && store.starship.starship_class}</p>
							<p>Manufacturer: {!!store.starship && store.starship.manufacturer}</p>
    </div>
  </div>
}
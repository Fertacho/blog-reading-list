import React from "react";
import { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";
import { number } from "prop-types";

export const Planet = () => {
    
    const {store,actions} = useContext(Context);
    const {uid} = useParams();

	useEffect(() => {
        actions.getPlanet("https://www.swapi.tech/api/planets/" +  (uid));    
    }, [])
    console.log(store.planet,"planetas")

    return <div className="card bg-dark mb-3">
    <div className="card-body">
    <h5>Name: {!!store.planet && store.planet.name}</h5>
							<p>Climate: {!!store.planet && store.planet.climate}</p>
							<p>Terrain: {!!store.planet && store.planet.terrain}</p>
							<p>Population: {!!store.planet && store.planet.population}</p>
    </div>
  </div>
}
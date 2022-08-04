import React from "react";
import { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";
import { number } from "prop-types";

export const Planet = () => {
    
    const {store,actions} = useContext(Context)
    const {uid} = useParams();
	useEffect(() => {
        actions.getPlanet("https://www.swapi.tech/api/planets/" + Number (uid+1));    
    }, [])
    console.log(store.planet,"planetas")

    return <div className="card mb-3">
    <img src="..." className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Name: {!!store.planet && store.planet.name}</h5>
      <p className="card-text"></p>
      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
}
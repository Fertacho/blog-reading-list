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

    return <div className="card mb-3">
    <img src="..." className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Name: {!!store.starship && store.starship.name}</h5>
      <p className="card-text"></p>
      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
}
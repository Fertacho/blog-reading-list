import React from "react";
import { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";
import { number } from "prop-types";

export const Person = () => {
    
    const {store,actions} = useContext(Context)
    const {uid} = useParams();
	useEffect(() => {
        actions.getPerson("https://www.swapi.tech/api/people/" + Number (uid+1));    
    }, [])
    console.log(store.person,"personajitos")

    return <div className="card mb-3">
    <img src="..." className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Name: {!!store.person && store.person.name}</h5>
      <p className="card-text">Birth Year: {!!store.person && store.person.birth_year}</p>
      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
}
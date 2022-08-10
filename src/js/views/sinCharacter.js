import React from "react";
import { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";
import { number } from "prop-types";

export const Person = () => {
    
    const {store,actions} = useContext(Context);
    const {uid} = useParams();
    
	useEffect(() => {
        actions.getPerson("https://www.swapi.tech/api/people/" + (uid));    
    }, [])
    console.log(store.person,"personajitos")

    return <div className="card mb-3">
    <img src="..." className="card-img-top" alt="..."/>
    <div className="card-body">
    <h5>Name: {!!store.person && store.person.name}</h5>
							<p>Birth Year: {!!store.person && store.person.birth_year}</p>
							<p>Sex: {!!store.person && store.person.gender}</p>
							<p>Height: {!!store.person && store.person.height}</p>
							<p>Skin Color: {!!store.person && store.person.skin_color}</p>
							<p>Eye Color: {!!store.person && store.person.eye_color}</p>
    </div>
  </div>
}
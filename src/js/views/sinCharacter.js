import React from "react";
import { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

export const Person = () => {
    
    const {store,actions} = useContext(Context)
    const params = useParams();
	useEffect(() => {
        actions.getPerson("https://www.swapi.tech/api/people/" + params.uid);
        console.log(store.person,"personajitos")
    }, [])

    return <div className="card mb-3">
    <img src="..." className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Name:{store.person[params.uid]}</h5>
      <p className="card-text">des</p>
      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
}
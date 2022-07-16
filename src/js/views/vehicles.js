import React from "react";
import { useContext, useEffect } from "react";
import { Context } from "../store/appContext";

export const Starships = () => {

	const {store,actions} = useContext(Context)
	useEffect(() => {
        actions.getStarships();
    }, [])
	console.log(store.starships)
 return (
	<div className="text-center row mt-5">
		{store.starships.map((starships,index)=>{
return <div className="card col-5"  key={index}><img src="..." className="card-img-top" alt="..."/><div className="card-body"><h5>{starships.name}</h5><button href="#" class="btn btn-primary">Go somewhere</button><button href="#" class="btn btn-warning">♡</button></div></div>
		
		})}
	</div>
)};

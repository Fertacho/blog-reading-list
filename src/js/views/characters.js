import React from "react";
import { useContext, useEffect } from "react";
import { Context } from "../store/appContext";

export const Characters = () => {

	const {store,actions} = useContext(Context)
	useEffect(() => {
        actions.getCharacters();
    }, [])
	console.log(store.characters)
 return (
	<div className="text-center row mt-5">
		{store.characters.map((characters,index)=>{
return <div className="card col-5"  key={index}><img src="..." className="card-img-top" alt="..."/><div className="card-body"><h5>{characters.name}</h5><button href="#" class="btn btn-primary">Go somewhere</button><button href="#" class="btn btn-warning">♡</button></div></div>
		})}
	</div>
)};


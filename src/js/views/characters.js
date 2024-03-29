import React from "react";
import { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Characters = () => {

	const {store,actions} = useContext(Context)
	useEffect(() => {
        actions.getCharacters();
    }, [])
	console.log(store.characters)
 return (
	<div className="text-center row mt-5">
		{store.characters.map((characters,index)=>{
	return <div className="card bg-dark col-5"  key={index}>
		<div className="card-body">
			<h5>{characters.name}</h5>
			<Link to={"/character/" + characters.uid}>See in detail.</Link>
			<button href="#" className="btn btn-warning" onClick={() => actions.addFavorite(characters.name)}>♡</button>
		</div>
		</div>
		})}
	</div>
)};


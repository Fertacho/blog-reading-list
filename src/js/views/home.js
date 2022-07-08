import React from "react";
import { useContext, useEffect } from "react";
import { Context } from "../store/appContext";

export const Home = () => {

	const {store,actions} = useContext(Context)
	useEffect(() => {
        actions.getCharacters();
    }, [])
	console.log(store.characters)
 return (
	<div className="text-center mt-5">
		{store.characters.map((characters,index)=>{
return <p key={index}>{characters.url}</p>
		
		})}
	</div>
)};

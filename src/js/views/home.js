import React from "react";
import { useContext, useEffect } from "react";
import { Context } from "../store/appContext";

export const Home = () => {
	const {store,actions} = useContext(Context)
 return (
	<div className="text-center mt-5">
		<button onClick={actions.getCharacters}>get characters</button>
		{store.characters.map((value,index)=>{
return <li key={index}>{value}</li>
		})}
	</div>
)};

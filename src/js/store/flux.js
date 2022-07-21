import { useParams } from "react-router";
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters:[],
			person:[],
			planets:[],
			planet:[],
			starships:[],
			starship:[],
			favorites:[]
		},
		actions: {
			
			getCharacters:()=>{
				const store = getStore();
				fetch("https://www.swapi.tech/api/people")
  				.then(response => response.json())
  				.then(result =>{console.log(result,"este es el fetch de personas"), setStore({characters:[...result.results]})})
  				.catch(error => console.log('error', error));
			},
			getPlanets:()=>{
				const store = getStore();
				fetch("https://www.swapi.tech/api/planets")
  				.then(response => response.json())
  				.then(result =>{console.log(result,"este es el fetch de planetas"), setStore({planets:[...result.results]})})
  				.catch(error => console.log('error', error));
			},
			getStarships:()=>{
				const store = getStore();
				fetch("https://www.swapi.tech/api/starships")
  				.then(response => response.json())
  				.then(result =>{console.log(result,"este es el fetch de vehiculos"), setStore({starships:[...result.results]})})
  				.catch(error => console.log('error', error));
			},
			getPerson: url =>{
				const store = getStore();
				fetch(url)
  				.then(response => response.json())
  				.then(data =>{console.log("fetch individual",data.result),setStore({person:[...data]})})
  				.catch(error => console.log('error', error));
			}
		}
	};
};

export default getState;

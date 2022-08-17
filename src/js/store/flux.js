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
				fetch("https://www.swapi.tech/api/people")
  				.then(response => response.json())
  				.then(result =>{console.log(result,"este es el fetch de personas"), setStore({characters:[...result.results]})})
  				.catch(error => console.log('error', error));
			},
			getPlanets:()=>{
				fetch("https://www.swapi.tech/api/planets")
  				.then(response => response.json())
  				.then(result =>{console.log(result,"este es el fetch de planetas"), setStore({planets:[...result.results]})})
  				.catch(error => console.log('error', error));
			},
			getStarships:()=>{
				fetch("https://www.swapi.tech/api/starships")
  				.then(response => response.json())
  				.then(result =>{console.log(result,"este es el fetch de vehiculos"), setStore({starships:[...result.results]})})
  				.catch(error => console.log('error', error));
			},
			getPerson: url =>{
				fetch(url)
  				.then(response => response.json())
  				.then(data =>{console.log("fetch individual personas",data.result),setStore({person:data.result.properties})})
  				.catch(error => console.log('error', error));
			},
			getPlanet: url =>{
				fetch(url)
  				.then(response => response.json())
  				.then(data =>{console.log("fetch individual planetas",data.result),setStore({planet:data.result.properties})})
  				.catch(error => console.log('error', error));
			},
			getStarship: url =>{
				fetch(url)
  				.then(response => response.json())
  				.then(data =>{console.log("fetch individual starships ",data.result),setStore({starship:data.result.properties})})
  				.catch(error => console.log('error', error));
			},
			addFavorites: item => {
				const {favorites} = getStore();
				   if(favorites.find((fav)=> fav === item)){
					   console.log('encontrado')
				   } else {
					   favorites.push(item);
					   setStore({favorites})
				   }
	
				   
			   },
			filterFavorites: item => {
				const {favorites} = getStore();
				   let filtered = favorites.filter((fav) => 
					   fav !== item
				   )
				   setStore({favorites: filtered});
			   },
			addFavorite: item  => {
                const {favorites} = getStore();
                if(favorites.find((fav) => fav === item)){
                    console.log('Found')
                }else{
				const newStore = getStore()
                setStore({ favorites: [...newStore.favorites, item] })}			             
			},
		
			deleteFavorite: index => {
				const newStore = getStore();
				var newFavorites = newStore.favorites.filter((item, ind) => index != ind);
				setStore({ favorites: newFavorites });
			}
		}
	};
};

export default getState;

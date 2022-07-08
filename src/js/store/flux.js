const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters:[],
			person:[],
			planets:[],
			planet:[],
			vehicles:[],
			favorites:[],
		},
		actions: {
			
			getCharacters:()=>{
				const store = getStore();
				fetch("https://www.swapi.tech/api/people")
  				.then(response => response.json())
  				.then(result =>{console.log(result,"este es el fetch"), setStore({characters:[...result.results]})})
  				.catch(error => console.log('error', error));
			}
		}
	};
};

export default getState;

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
				fetch("https://www.swapi.tech/api/people", requestOptions)
  				.then(response => response.json())
  				.then(result => setStore({characters:[...store.characters,result[0].url]}))
  				.catch(error => console.log('error', error));
			}
		}
	};
};

export default getState;

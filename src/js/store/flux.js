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
  				.then(result => setStore({characters:[store.characters,result[0].url]}))
  				.catch(error => console.log('error', error));
			}
		}
	};
};

export default getState;

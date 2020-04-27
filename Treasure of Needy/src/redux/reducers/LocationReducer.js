import { GET_CURRENT_LOCATION } from '../action/locationType';

const initState = {
    longitude : String,
    latitude : String
  };
  


  const reducersMethod = (state = initState,action) =>{


    const newState = { ...state}
 
    switch(action.type){
       case GET_CURRENT_LOCATION :
            newState.latitude = action.value.coords.latitude
            newState.longitude = action.value.coords.longitude
            break;            
    }
    return newState
 }


 export default reducersMethod;
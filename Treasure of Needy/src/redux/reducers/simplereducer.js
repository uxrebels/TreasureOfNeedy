const initState = {
    longitude : String,
   
  };
  


  const reducersMethod = (state = initState,action) =>{


    const newState = { ...state}
 
    switch(action.type){
       case 'mycheck' :
            newState.longitude = action.value
            
            break;            
    }
    return newState
 }


 export default reducersMethod;
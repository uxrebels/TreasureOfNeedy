import { SAVE_HOSPITAL_DETAILS , CHANGE_SUCEESS_STATE } from '../action/locationType';

const initState = {

     title : String, 
     descrption : String, 
     phno : String , 
     address :String ,
     hours: String, 
     covid  : String,
     image : String,
     getHospitalDetailsSuccess : Boolean
  };
  


  const reducersMethod = (state = initState,action) =>{


    const newState = { ...state}
 
    switch(action.type){
       case SAVE_HOSPITAL_DETAILS :
            newState.title = action.value.title;
            newState.descrption = action.value.descrption;
            newState.phno = action.value.phno;
            newState.address = action.value.address;
            newState.hours = action.value.hours;
            newState.covid = action.value.covid;
            newState.image = action.value.image;
            newState.getHospitalDetailsSuccess = true;
            break;   
            
            
        case CHANGE_SUCEESS_STATE :
                newState.getHospitalDetailsSuccess = false;
                
                break; 
    }
    return newState
 }


 export default reducersMethod;
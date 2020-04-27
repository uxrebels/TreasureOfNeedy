import { combineReducers } from 'redux';

import LocationReducer  from '../reducers/LocationReducer';
import simplereducer from '../reducers/simplereducer'
import HospitalDetailsReducer from '../reducers/HospitalDetailsReducer'
const rootReducer = combineReducers({
    LocationReducer,
    simplereducer,
    HospitalDetailsReducer
});

export default rootReducer;

import { combineReducers } from "redux";
import spotsReducer from './spots_reducer';
import reservationsReducer from './reservation_reducer';
import vehiclesReducer from './vehicles_reducer';
import usersReducer from './users_reducer';


const entitiesReducer = combineReducers({
    user: usersReducer,
    reservations: reservationsReducer,
    spots: spotsReducer,
    vehicles: vehiclesReducer
});

export default entitiesReducer;

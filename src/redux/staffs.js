import * as ActionTypes from './ActionTypes';


export const Staffs = (state = {
    isLoading: true,
    errMess: null,
    staffs: [] 
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_STAFFS:
            return{...state, isLoading: false, errMess:null, staffs: action.payload   }
        case ActionTypes.STAFFS_LOADING:
            return{...state, isLoading: true, errMess:null, staffs: []   }
        case ActionTypes.STAFFS_FAILED:
            return{...state, isLoading: false, errMess:action.payload, staffs: []   }

        case ActionTypes.ADD_NEW_STAFF:
            return {staffs: [...state.staffs, action.payload]}
        
        case ActionTypes.UPDATE_STAFFS:
            return {...state, isLoading: false, errMess: null, staffs: action.payload}
        
        default:
            return state;
    }
}
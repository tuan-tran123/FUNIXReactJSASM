import { DEPARTMENTS, STAFFS } from '../shared/staffs';


export const initialState = {
    staffs: STAFFS,
    departments: DEPARTMENTS
};

export const Reducer = (state =initialState , action) => {
    return state;
}

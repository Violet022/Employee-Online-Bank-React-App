import { UserApi } from "../../api/UserApi";

const SET_EMPLOYEES = 'SET_EMPLOYEES';
const BLOCK_EMPLOYEE = 'BLOCK_EMPLOYEE';

let initialState = {
    employees: []
}

const EmployeesReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_EMPLOYEES: {
            return {...state, employees: action.employees}
        }
        case BLOCK_EMPLOYEE: {return state;}
        default:
            return state;
    }
};

// Actions
export const setEmployeesActionCreator = (employees) => {
    return {type: SET_EMPLOYEES, 
            employees: employees}
};
export const blockEmployeesActionCreator = (id) => {
    return {type: BLOCK_EMPLOYEE, 
        id: id}
};

// Thunks
export const getEmployeesThunkCreator = () => {
    return (dispatch) => {
        UserApi.getAllUsers()
        .then(data => {
            let allEmployees = data.filter(e => e.role == 'сотрудник')
            dispatch(setEmployeesActionCreator(allEmployees));
        })
    }
}

export const blockAnEmployeeThunkCreator = (employeeId) => {
    return (dispatch) => {
        UserApi.blockUser(employeeId)
        .then(() => {
            UserApi.getAllUsers()
            .then(data => {
                let allEmployees = data.filter(e => e.role == 'сотрудник')
                dispatch(setEmployeesActionCreator(allEmployees));
            })
        })
    }
}

export default EmployeesReducer;
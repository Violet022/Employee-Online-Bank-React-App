import React from "react";
import Employees from "./Employees";
import EmployeesContainer from "./EmployeesContainer";
import NewEmployeeCreationForm from "./NewEmployeeCreationForm";


function EmployeesPage() {
    return (
        <> 
        <NewEmployeeCreationForm/>
        {/* <Employees/> */}

        <EmployeesContainer/>
        </>
    )
}

export default EmployeesPage
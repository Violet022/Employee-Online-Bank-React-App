import React from "react";
import EmployeeItem from "./EmployeeItem"
import {ListGroup} from 'react-bootstrap';

function Employees() {
    return (
        <> 
        <ListGroup>
            {/* {
                this.props.employees.map((emp, idx) => {
                    return <EmployeeItem employee={emp} onBlockButtonClick={props.blockAnEmployeeThunkCreator} key={idx}/>
                })
            } */}
            <EmployeeItem/>
            <EmployeeItem/>
        </ListGroup>
        </>
    );

}

export default Employees;
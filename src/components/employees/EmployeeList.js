// import react function from react
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Define component function
export const EmployeeList = () => {

    // the array contains two variables
    // first one holds state, the second one is function to modify state
    // what you want the variable(employees or specialties)
    const [employees, setEmployees] = useState([])
    const [specialties, setSpecialties] = useState("")

    // useEffect like event listeners
    useEffect(
        () => {
            fetch("http://localhost:8088/employees")
                .then(res => res.json())
                .then(
                    (employeeArray) => {
                        setEmployees(employeeArray)
                    }
                )
        },
        []
    )
    // useEffect hook that extracts specialty from each employee
    // And updates the value of specialties state variable
    useEffect(() => {
        // return an
        const specialArray = employees.map((employee) => {
            return employee.specialty
        })
        setSpecialties(specialArray.join(', '))
        /*
            1. Use .map() to get the specialty of each employee
            2. Then update a state variable to be a comma-separated string
                (e.g. "iPhone, Printers, ...")
        */
    }, [employees])
    return (
        <>
            <h2>Employees</h2>
            <div>
                Specialties:
                {specialties}
            </div>
            {employees.map(employeeObject => {
                return <p key={`employee--${employeeObject.id}`}>
                    <Link to={`/employees/${employeeObject.id}`}>
                        {employeeObject.name}
                    </Link></p>
            })}
        </>
    )
    
}

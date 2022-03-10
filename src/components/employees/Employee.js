import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const Employee = () => {
    // employee = state variable, the
    // ({}) = initial state, equal to const employee = {}
    // "set" function updates component state
    const [employee, set] = useState({})  // State variable for current employee object
    const { employeeId } = useParams()  // Variable storing the route parameter
    // useEffect evoked when state changes
    // any time variable (employeeID) changes, the function happens
    useEffect(
        () => {
            fetch(`http://localhost:8088/employees/${employeeId}`)
                .then(res => res.json())
                .then(set)
        },
        [ employeeId ]  // Above function runs when the value of employeeId change
    )

    return (
        <>
            <section className="employee">
                <h3 className="employee__name">{employee.name}</h3>
                <div className="employee__specialty">Specialty is {employee.specialty}.</div>
            </section>
        </>
    )
}
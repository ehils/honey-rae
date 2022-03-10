import React, { useEffect, useState } from "react"

export const CustomerList = () => {
    const [customers, setCustomers] = useState([])
    const [totalCustomerMessage, updateMessage] = useState("")

    useEffect(
        () => {
            fetch("http://localhost:8088/customers")
                .then(res => res.json())
                .then((data) => {
                    setCustomers(data)
                })
        },
        // this empty array means this use effect looks for initial state change
        // a use effect that only observes initial change is the best place to get
        // data; only happens once
        []
    )

    useEffect(
        () => {
            if (customers.length === 1) {
                updateMessage("You have 1 customer")
            } else {
                updateMessage(`You have ${customers.length} customers`)
            }

        },
        [customers]
    )

    return (
        <>
        <h2>Customer List</h2>
        <div>{totalCustomerMessage}</div>
            {
                customers.slice(0, 3).map(
                    (customerObject) => {
                        return <p key={`customer--${customerObject.id}`}>{customerObject.name}</p>
                    }
                )
            }
        </>
    )
}
// import React, { useEffect, useState } from "react"

// export const CustomerList = () => {
    
//     // what state do I want this component to render
//         // evoke useState, deconstruct the array it returns
//         // define a variable to hold state (customers), 
//         // define a variable to hold the function to modify the state
//     const [customers, setCustomers] = useState([])
//     // if component needs data from API
//     // evoke useEffect with function as first parameter, and empty array as second

//     useEffect(
//         () => {
//             fetch("http://localhost:8088/customers")
//                 .then(res => res.json())
//                 .then(
                    
//                     (customersArray) => { 
//                         // evoke function (setCustomers) from useState to retrieve customers Array
                        
//                         setCustomers(customersArray)
//                     }
//                 )
//         },
//         []
//     )
//     // return statement to return html
//     return (
//         <>
//         <h1>Customers</h1>

//         {
//             customers.map(
//                 (customerObject) => { 
//                     return <h2 key={`customer--${customerObject.id}`}>{customerObject.name}</h2>
//                 }
//             )
//         }
//       </>  
//     )
// }
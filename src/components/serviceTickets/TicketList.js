import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import { Link } from "react-router-dom"
import "./Ticket.css"
export const TicketList = () => {
    const [tickets, setTickets] = useState([])
    const [active, setActive] = useState("")
    const history = useHistory()

    useEffect(
       () => updateTicketList(),
        []
    )

    const updateTicketList = () => {
        
            fetch("http://localhost:8088/serviceTickets?_expand=customer&_expand=employee")
                .then(res => res.json())
                .then((data) => {
                    setTickets(data)
                })
        
    }

    useEffect(() => {
        const activeTicketCount = tickets.filter(t => t.dateComplete === "").length
        setActive(`There are ${activeTicketCount} open tickets`)
    }, [tickets])

    const deleteTicket = (id) => {
        fetch(`http://localhost:8088/serviceTickets/${id}`, {
            method: "DELETE"
        }).then(
            () => updateTicketList()
        )
    }



    return (
        <>
            <div>
                <button onClick={() => history.push('/tickets/create')}>Create Ticket</button>
            </div>
            {active}
            <h2>Service Tickets</h2>
            {
                tickets.map(ticket => {
                    return <div key={`ticket__${ticket.id}`}>
                        <p className={`ticket`} class={ticket.emergency ? "emergency" : ""}>
                            {ticket.emergency ? "🚑" : ""}
                            <Link to={`/tickets/${ticket.id}`}>
                                {ticket.description}
                            </Link> submitted by {ticket.customer.name} and worked on by {ticket.employee.name}
                        </p><button onClick={() => {
                            deleteTicket(ticket.id)
                        }}>Delete</button>
                    </div>
                }

                )}
        </>
    )
}
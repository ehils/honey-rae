import React from "react";
import { Route } from "react-router-dom"
import { CustomerList } from "./customers/CustomerList";
import { EmployeeList } from "./employees/EmployeeList";
import { TicketForm } from "./serviceTickets/TicketForm";
import { TicketList } from "./serviceTickets/TicketList";
import { Ticket } from "./serviceTickets/Ticket";
import { Employee } from "./employees/Employee";
export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/customers">
                <CustomerList />
            </Route>

            <Route exact path="/employees">
                <EmployeeList />
            </Route>
            <Route exact path="/tickets">
                <TicketList />
            </Route>
            <Route path="/tickets/create">
                <TicketForm />
            </Route>
            <Route path="/tickets/:ticketId(\d+)">
                <Ticket />
            </Route>
                            {/* \d+ says this has to be a number */}
            <Route path="/employees/:employeeId(\d+)">
                <Employee />
            </Route>
        </>
    )
}
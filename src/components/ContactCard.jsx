import React from "react"
import { Link } from "react-router-dom"

const ContactCard = ({contact}) => {
    return (
        <div className="border border-1 row" style={{height:"160px"}}>
            <div className="col-3"><img className="rounded-circle m-3 ms-5" src="https://picsum.photos/id/64/200" style={{height:"125px"}}/></div>
            <div className="col-7 my-auto">
                <h4 className="">{contact.name}</h4>
                <div className="d-flex gap-2 lh-1"><i className="fa-solid fa-location-dot"></i><p>{contact.address}</p></div>
                <div className="d-flex gap-2 lh-1"><i className="fa-solid fa-phone"></i><p>{contact.phone}</p></div>
                <div className="d-flex gap-2 lh-1"><i className="fa-regular fa-envelope"></i><p>{contact.email}</p></div>
            </div>
            <div className="col-2 mt-3">
                <Link to={`/edit/${contact.id}`}>
                <button className="me-3 border-0 bg-transparent" type="button"><i className="fa-solid fa-pencil"></i></button>
                </Link>
                
                <button className="me-3 border-0 bg-transparent" type="button"><i className="fa-solid fa-trash-can"></i></button>
            </div>
        </div>
    )
}
export default ContactCard
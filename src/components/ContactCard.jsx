import React from "react"
import { Link } from "react-router-dom"
import { deleteContact } from "../Services/APIServices"
import useGlobalReducer from "../hooks/useGlobalReducer"


const ContactCard = ({ contact }) => {

    const { dispatch } = useGlobalReducer()

    return (
        <div className="border border-1 row" style={{ height: "160px" }}>
            <div className="col-md-3 d-md-block d-none text-center"><img className="rounded-circle mt-3" src="https://picsum.photos/id/64/200" style={{ height: "125px" }} /></div>
            <div className="col-md-7 col-10 my-auto">
                <h4 className="">{contact.name}</h4>
                <div className="d-flex gap-2 lh-1"><i className="fa-solid fa-location-dot"></i><p>{contact.address}</p></div>
                <div className="d-flex gap-2 lh-1"><i className="fa-solid fa-phone"></i><p>{contact.phone}</p></div>
                <div className="d-flex gap-2 lh-1"><i className="fa-regular fa-envelope"></i><p>{contact.email}</p></div>
            </div>
            <div className="col-2 my-auto">
                <Link to={`/edit/${contact.id}`}>
                    <button className="m-2 border-0 bg-transparent" type="button"><i className="fa-solid fa-pencil"></i></button>
                </Link>

                <button className="m-2 border-0 bg-transparent" data-bs-toggle="modal" data-bs-target="#deleteContactModal" type="button" ><i className="fa-solid fa-trash-can"></i></button>
            </div>
            <div className="modal fade" id="deleteContactModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel"><i className="fa-solid fa-triangle-exclamation text-danger"></i>  ¡Warning!  <i className="fa-solid fa-triangle-exclamation text-danger"></i></h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Are you sure you want to delete the contact? This action cannot be undone.
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel deletion</button>
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={() => { deleteContact(contact, dispatch) }}>Take the risk</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ContactCard
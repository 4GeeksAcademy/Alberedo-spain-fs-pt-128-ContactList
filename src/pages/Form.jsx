import React, { useEffect, useReducer, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { createContact, editContact } from "../Services/APIServices";
import useGlobalReducer from "../hooks/useGlobalReducer";

const Form = () => {

    const navigate = useNavigate()

    const { store, dispatch } = useGlobalReducer()

    const { id } = useParams()

    const [isEditing, setIsEditing] = useState(false)

    const initialState = {
        name: "",
        email: "",
        phone: "",
        address: ""
    }

    const setContactToEdit = () => {
        const contactFinded = store.contacts.find(contact => {
            return contact.id === Number(id)
        })
        console.log(contactFinded);
        dispatch2({ type: "SET_CONTACT_TO_EDIT", payload: contactFinded })

    }

    function reducer(state, action) {
        switch (action.type) {
            case "CHANGE":
                return {
                    ...state,
                    [action.field]: action.value,
                }
            case "SET_CONTACT_TO_EDIT":
                return state = action.payload
            default: return state
        }
    }

    useEffect(() => {
        if (id) {
            setIsEditing(true)
            console.log(`Estoy editando un contacto!`);
            setContactToEdit()

        } else {
            setIsEditing(false)
            console.log(`Estoy creando un contacto!`);
        }
    }, [])

    const [state, dispatch2] = useReducer(reducer, initialState)

    return (<div className="col-11 mx-auto">
        <h1 className="text-center">Add a new contact</h1>
        <form onSubmit={(e) => {
            e.preventDefault()
            state.name != "" && state.email != "" && state.phone != "" && state.address != "" ? isEditing ? editContact(state, navigate) : createContact(state, dispatch, navigate) : alert("Todos los datos deben ester rellenos")
        }}>
            <div className="mb-3">
                <label htmlFor="address" className="form-label">Full Name</label>
                <input type="text" value={state.name} onChange={e => dispatch2({ type: "CHANGE", field: "name", value: e.target.value })} placeholder="Full Name" className="form-control" id="fullName" aria-describedby="fullName" />
            </div>
            <div className="mb-3">
                <label for="email" className="form-label">Email</label>
                <input type="text" value={state.email} onChange={e => dispatch2({ type: "CHANGE", field: "email", value: e.target.value })} placeholder="Enter email" className="form-control" id="email" aria-describedby="email" />
            </div>
            <div className="mb-3">
                <label for="phone" className="form-label">Phone</label>
                <input type="text" value={state.phone} onChange={e => dispatch2({ type: "CHANGE", field: "phone", value: e.target.value })} placeholder="Enter phone number" className="form-control" id="phone" aria-describedby="phone" />
            </div>
            <div className="mb-3">
                <label for="address" className="form-label">Adress</label>
                <input type="text" value={state.address} onChange={e => dispatch2({ type: "CHANGE", field: "address", value: e.target.value })} placeholder="Enter address" className="form-control" id="address" aria-describedby="address" />
            </div>

            <button type="submit" className="btn btn-primary col-12">{!isEditing ? "Submit" : "Save changes"}</button>
            <Link to="/"><p className="link-style">or get back to contacts</p></Link>
        </form>
    </div>)
}

export default Form
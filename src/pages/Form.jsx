import React, { useReducer } from "react";
import { Link } from "react-router-dom";

const Form = () => {

    const initialState = {
        name: "Alberto",
        email: "",
        phone: "",
        address: ""
    }

    function reducer(state, action) {
        switch (action.type) {
            case "CHANGE":
                return {
                    ...state,
                    [action.field]: action.value,
                }
            default: return state
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    return (<div className="col-11 mx-auto">
        <h1 className="text-center">Add a new contact</h1>
        <form onSubmit={(e) => {
            e.preventDefault()
            console.log(state);
        }}>
            <div className="mb-3">
                <label for="address" className="form-label">Full Name</label>
                <input type="text" value={state.name} onChange={e => dispatch({ type: "CHANGE", field: "name", value: e.target.value })} placeholder="Full Name" className="form-control" id="fullName" aria-describedby="fullName" />
            </div>
            <div className="mb-3">
                <label for="email" className="form-label">Email</label>
                <input type="text" value={state.email} onChange={e => dispatch({ type: "CHANGE", field: "email", value: e.target.value })} placeholder="Enter email" className="form-control" id="email" aria-describedby="email" />
            </div>
            <div className="mb-3">
                <label for="phone" className="form-label">Phone</label>
                <input type="text" value={state.phone} onChange={e => dispatch({ type: "CHANGE", field: "phone", value: e.target.value })} placeholder="Enter phone number" className="form-control" id="phone" aria-describedby="phone" />
            </div>
            <div className="mb-3">
                <label for="address" className="form-label">Adress</label>
                <input type="text" value={state.address} onChange={e => dispatch({ type: "CHANGE", field: "address", value: e.target.value })} placeholder="Enter address" className="form-control" id="address" aria-describedby="address" />
            </div>

            <button type="submit" className="btn btn-primary col-12">Submit</button>
            <Link to="/"><a href="">or get back to contacts</a></Link>
        </form>
    </div>)
}

export default Form
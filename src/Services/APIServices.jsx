
const SLUG = "Alberto"
const BASE_API = "https://playground.4geeks.com/contact"

//region:getContacts
export const getContacts = async (dispatch) => {
    const response = await fetch(`${BASE_API}/agendas/${SLUG}/contacts`)
    if (!response.ok) {
        console.log("No existe el usuario elegido");
        createSlug(SLUG)
        response = await fetch(`${BASE_API}/agendas/${SLUG}/contacts`)
    }
    const data = await response.json()
    console.log(data)
    dispatch({ type: 'set_contacts', payload: data.contacts })
}

//region:createSlug
const createSlug = async (slugName) => {
    const response = await fetch(`${BASE_API}/agendas/${slugName}`,
        { method: "POST" }
    )
    response.ok ? console.log(`Se ha creado el usuario ${SLUG} correctamente`) : console.log(`Ha habido un error al crear el usuario ${SLUG}`);
}

//region:createContact
export const createContact = async (contact, dispatch, navigate) => {
    const response = await fetch(`${BASE_API}/agendas/${SLUG}/contacts`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contact)
    })
    console.log(response);
    dispatch({ type: "create_contact", payload: contact })
    navigate("/")
}

//region:editContact
export const editContact = async (contact, navigate) => {
    const response = await fetch(`${BASE_API}/agendas/${SLUG}/contacts/${contact.id}`, {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(contact)
    })
    console.log(response)
    navigate("/")
}

//region:deleteContact
export const deleteContact = async (contact, dispatch) => {
    const response = await fetch(`${BASE_API}/agendas/${SLUG}/contacts/${contact.id}`, {
        method: "DELETE"
    })
    await dispatch({ type: 'delete_contact', payload: contact.id })
}
import React from "react"

const USER = "Alberto"
const BASE_API = "https://playground.4geeks.com/contact"


export const getContacts = async(dispatch)=>{
    const response = await fetch(`${BASE_API}/agendas/${USER}/contacts`)
    if(!response.ok){
        console.log("No existe el usuario elegido");
        createSlug(USER)
    }
    const data = await response.json()
    console.log(data)
    dispatch({type:'set_contacts', payload: data.contacts}) 
}

const createSlug = async(slugName, dispatch)=>{
    const response = await fetch(`${BASE_API}/agendas/${slugName}`,
        {method:"POST"}
    )
    response.ok ? console.log(`Se ha creado el usuario ${USER} correctamente`): console.log(`Ha habido un error al crear el usuario ${USER}`);
}

//Hay que borrarlo cuando se cree el formulario
const pepito = {
  "name": "Pepito el de los palotes",
  "phone": "666555666",
  "email": "pepidelospalotes@gmail.com",
  "address": "Lugar inventado nº 999"
}

export const createContact = async()=>{
    const response = await fetch(`${BASE_API}/agendas/${USER}/contacts`,{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(pepito)
    })
    console.log(response);
}
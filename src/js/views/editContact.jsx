import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router";


export const EditContact = () => {
    const { actions, store } = useContext(Context)
    const navigate = useNavigate()
    const [fullName, setFullName] = useState(store.contact.name)
    const [email, setEmail] = useState(store.contact.email)
    const [phone, setPhone] = useState(store.contact.phone)
    const [address, setAddress] = useState(store.contact.address)


    const handleEdit = () => {
        actions.editContact(fullName, phone, email, address,store.contact.id)
        navigate("/")
    }
    return (
        
            <div className="d-flex flex-column">
                <h1>Edit contacts</h1>
                <label htmlFor="">Full name</label>
                <input type="text" onChange={(e) => setFullName(e.target.value)} value={fullName} />
                <label htmlFor="">Email</label>
                <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} />
                <label htmlFor="">Phone</label>
                <input type="number" onChange={(e) => setPhone(e.target.value)} value={phone} />
                <label htmlFor="">Addres</label>
                <input type="text" onChange={(e) => setAddress(e.target.value)} value={address} />
                <button className="btn btn-primary mt-3" onClick={() => handleEdit()}>Save</button>
                <a href="https://crispy-disco-q79v7gg6x44q2p45-3000.app.github.dev/">or get back to contacts</a>
            </div>
    )
}
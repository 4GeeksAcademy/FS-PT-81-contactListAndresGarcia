import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router";




const Card = ({ name, phone, email, address, id }) => {
    const { actions, store } = useContext(Context)
    const navigate = useNavigate()
    const editContact = () => {
        actions.saveDataContact(name, phone, email, address, id)
        navigate("/EditContact")
    }
    const deleteContact = () => {
        if (window.confirm("¿Estas seguro de borrar esto?")) {
            actions.deleteContact(id)
        }
    }
    return (
        <div className="card-container">
            <div className="imagen">
                <img src="https://thumbs.dreamstime.com/b/ejemplo-de-person-symbol-pictogram-del-vector-del-icono-del-hombre-97085462.jpg" className="img" style={{ width: "18rem;" }} alt="..." />
            </div>
            <div className="info">
                <h5 className="card-title">{name}</h5>
                <p className="card-text"><i class="fa-solid fa-envelope"></i> {email}</p>
                <p className="card-text"><i class="fa-solid fa-phone"></i> {phone}</p>
                <p className="card-text"><i class="fa-solid fa-location-dot"></i> {address}</p>
            </div>
            <div className="buttons">
                <button className="btn btn-primary" onClick={editContact}><i className="fa fa-eraser"></i></button>
                <button className="btn btn-primary" onClick={deleteContact}><i className="fa fa-trash fa-lg"></i></button>
            </div>
        </div>
    )
}

export default Card;
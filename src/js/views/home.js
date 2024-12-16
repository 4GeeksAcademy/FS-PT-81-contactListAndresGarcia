import React, { useEffect } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { useContext } from "react";
import { Context } from "../store/appContext";
import Card from "../component/Card";

export const Home = () => {
	const { actions, store } = useContext(Context)
	useEffect(() => {
		actions.getContacts()	
	},[])
	return (
		<div className="text-center mt-5">
			{store.contacts?.map((contact) => (<Card name={contact.name} phone={contact.phone} address={contact.address} email={contact.email} id={contact.id} />))}
		</div>
	)
};

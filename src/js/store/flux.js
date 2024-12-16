const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			backendUrl: "https://playground.4geeks.com/contact/",
			contacts: [],
			contact: null
		},
		actions: {
			createAgenda: () => {
				fetch(getStore().backendUrl + "agendas/Andrew27", {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify()
				})
					.then(response => {
						return response.json()
					})
					.then(data => {
						console.log(data);
					})
					.catch(error => {
						console.error(error);
					});
			}
			,
			createContact: (name, phone, email, address) => {
				fetch(getStore().backendUrl + "agendas/Andrew27/contacts", {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						name: name,
						phone: phone,
						email: email,
						address: address
					})
				})
					.then(response => {
						if(response.ok){
							getActions().getContacts()
						}
						return response.json()
					})
					.then(data => {
						console.log(data);
					})
					.catch(error => {
						console.error(error);
					});
			}
			,
			getContacts: () => {
				fetch(getStore().backendUrl + "agendas/Andrew27/contacts")
				.then(response => {
					return response.json()
				})
				.then(data => {
					setStore({contacts: data.contacts})
				})
				.catch(error => {
					console.error(error);
				});
			},
			deleteContact: (id) => {
				fetch(getStore().backendUrl + "agendas/Andrew27/contacts/" + id, {
					method:'DELETE',
					headers: {
						'Content-Type': 'application/json',
					},
				})
				.then(() => {
					const newContacts = getStore().contacts.filter((contact)=>contact.id != id)
					setStore({contacts: newContacts})
				})
				.catch(error => {
					console.error(error);
				});
			},
			editContact: (name,phone,email,address,id) => {
				fetch(getStore(). backendUrl + "agendas/Andrew27/contacts/" + id, {
					method: 'PUT', 
					headers: {
						'Content-Type': 'application/json',
						
					},
					body: JSON.stringify({
						name: name,
						phone: phone,
						email: email,
						address: address
					})
				})
				.then(response => {
					if (response.ok) {
						getActions().getContacts()
					}
					return response.json();
				})
				.then(data => {
					console.log('Contacto actualizado:', data);
					const{contacts} = getStore()
					// const newContacts = contacts.map((contact,i)=>{
					// 	if(contact.id == id){
					// 		contacts[i] = data
					// 	}
					// })
					// setStore({contacts: newContacts})
				})
				.catch(error => {
					console.error('Error al realizar la actualización:', error);
				});
			},
			saveDataContact: (name,phone,email,address,id) => {
				setStore({contact:{name,phone,email,address,id}})
			}
			}
		}
	}
export default getState;

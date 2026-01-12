import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import ContactCard from "../components/ContactCard.jsx";
import { useEffect } from "react";
import { getContacts } from "../components/APIServices.jsx";
import { Link } from "react-router-dom";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	useEffect(() => {
		getContacts(dispatch)
	}, [])

	return (
		<div className="mt-5 px-5">
			<div className="mb-3">
				<Link to="/add">
					<button className="btn btn-success ms-auto" type="button">Add new contact</button>
				</Link>
				{store.contacts.length == 0 &&
					<div className="m-5 text-center">
						<h1>The contact list is empty</h1>
						<h3>Please click on button above to create your first contact.</h3>
					</div>}
			</div>

			{store && store.contacts?.map((item) => {
				return (
					<div key={item.id} className="my-4">
						<ContactCard contact={item} />
					</div>
				);
			})}
		</div>
	);
}; 
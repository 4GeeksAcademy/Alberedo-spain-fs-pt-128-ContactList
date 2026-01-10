import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import ContactCard from "../components/ContactCard.jsx";
import Form from "../pages/Form.jsx";
import { useEffect } from "react";
import { getContacts } from "../components/APIServices.jsx";
import { Link } from "react-router-dom";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	useEffect(() => {
		getContacts(dispatch)

	}
		, [])

	const pepito = {
		"name": "Pepito el de los palotes",
		"phone": "666555666",
		"email": "pepidelospalotes@gmail.com",
		"address": "Lugar inventado nº 99"
	}


	return (
		<div className="mt-5 px-5">
			<div className="d-flex mb-3">
				<Link to="/add">
					<button className="btn btn-success ms-auto" type="button">Add new contact</button>
				</Link>
			</div>

			{store && store.contacts?.map((item, index) => {
          return (
            <div key={item.id} className="my-4"><ContactCard contact={item}/></div>
          );
        })}

		</div>
	);
}; 
import axios from "axios";

const baseUrl = "http://localhost:3009/persons";

const getAll = () => axios.get(baseUrl).then(response => response.data);

const addPerson = person =>
	axios.post(baseUrl, person).then(response => response.data);

const removePerson = id =>
	axios.delete(baseUrl.concat(`/${id}`)).then(response => response.data);

export default { getAll, addPerson, removePerson };
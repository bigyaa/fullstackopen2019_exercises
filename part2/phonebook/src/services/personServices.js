import axios from "axios";

const baseUrl = "/api/persons";

const getAll = () => axios.get(baseUrl).then(response => response.data);

const addPerson = person =>
  axios.post(baseUrl, person).then(response => response.data);

const removePerson = id =>
  axios.delete(baseUrl.concat(`/${id}`)).then(response => response.data);

const updatePerson = (id, updatedPerson) =>
  axios
    .put(baseUrl.concat(`/${id}`), updatedPerson)
    .then(response => response.data);

export default { getAll, addPerson, removePerson, updatePerson };

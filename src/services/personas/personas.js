import axios from 'axios';

export const serviceGetPersons = async () => {
  return await axios.get('/personas/list', {});
};

export const serviceCreatePerson = async (payload) => {
  return await axios.post('/personas/newAction', payload);
};

export const serviceEditPerson = async (payload) => {
  return await axios.post('/personas/edit', payload);
};

export const serviceDeletePerson = async (id) => {
  return await axios.post(`/personas/deleteById`, { id });
};

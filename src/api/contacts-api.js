import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://6713c3be690bf212c75fad95.mockapi.io/',
});

export const getContactsApi = async () => {
  const response = await instance.get('/contacts');
  return response.data;
};

export const addContactApi = async contact => {
  const response = await instance.post('/contacts', contact);
  return response.data;
};

export const deleteContactApi = async id => {
  const response = await instance.delete(`/contacts/${id}`);
  return response.data;
};

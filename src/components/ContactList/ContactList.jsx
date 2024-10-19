import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contactsSlice.js';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

function ContactList() {
  const filteredContacts = useSelector(selectFilteredContacts);

  if (filteredContacts.length === 0) {
    return <p>No contacts found.</p>;
  }

  return (
    <ul className={css['contact-list']}>
      {filteredContacts.map(contact => (
        <li className={css['contact-list-item']} key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
}

export default ContactList;

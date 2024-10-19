import { useDispatch } from 'react-redux';
import { FaUser, FaPhone } from 'react-icons/fa';
import { deleteContact } from '../../redux/contactsSlice';
import classes from './Contact.module.css';

function Contact({ contact }) {
  const dispatch = useDispatch();

  return (
    <div className={classes['contact-card']}>
      <div className={classes['contact-card-info']}>
        <div className={classes['contact-card-info-item']}>
          <FaUser />
          <span className={classes['contact-card-name']}>{contact.name}</span>
        </div>
        <div className={classes['contact-card-info-item']}>
          <FaPhone />
          <span className={classes['contact-card-number']}>{contact.number}</span>
        </div>
      </div>
      <button
        onClick={() => dispatch(deleteContact(contact.id))}
        className={classes['contact-card-delete-btn']}
        type="button"
      >
        Delete
      </button>
    </div>
  );
}

export default Contact;

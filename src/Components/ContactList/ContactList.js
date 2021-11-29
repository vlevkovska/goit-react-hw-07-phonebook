import React from 'react';
import PropTypes from 'prop-types';
import c from './ContactList.module.css';
import ContactsEl from '../ContactElement/ContactElement';
import {
  useFetchContactsQuery,
  useDeleteContactMutation,
} from '../../redux/contactSlice';

const Contacts = () => {
  const { data: contacts } = useFetchContactsQuery();
  const [deleteContact] = useDeleteContactMutation();

  return (
    <ul className={c.list}>
      {contacts.map(contact => {
        return (
          <li key={contact.id} className={c.item}>
            <ContactsEl
              id={contact.id}
              name={contact.name}
              number={contact.number}
              onDeleteContact={() => deleteContact(contact.id)}
            />
          </li>
        );
      })}
    </ul>
  );
};

Contacts.propTypes = {
  onDeleteContact: PropTypes.func,
  contacts: PropTypes.array,
  // PropTypes.shape({
  //   id: PropTypes.string.isRequired,
  //   name: PropTypes.string.isRequired,
  //   number: PropTypes.string.isRequired,
  // }),
  // ),
};

export default Contacts;

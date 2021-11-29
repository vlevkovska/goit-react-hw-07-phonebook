import React from 'react';
import PropTypes from 'prop-types';
import ce from './ContactElement.module.css';
import { useDeleteContactMutation } from '../../redux/contactSlice';
import Loader from '../Loader/Loader';

export default function ContactsEl({ id, name, number }) {
  const [onDeleteContact, { isLoading }] = useDeleteContactMutation();

  return (
    <p className={ce.box}>
      <span>{name}</span>
      <span>{number}</span>
      <button
        className={ce.btn}
        type="button"
        disabled={isLoading}
        id={id}
        onClick={() => onDeleteContact(id)}
      >
        {isLoading ? <Loader /> : 'Remove'}
      </button>
    </p>
  );
}

ContactsEl.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

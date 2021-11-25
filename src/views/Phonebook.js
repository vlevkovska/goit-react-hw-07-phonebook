import React from 'react';
import {
  useFetchContactsQuery,
  useDeleteContactMutation,
} from '../redux/contactSlice';
import { connect } from 'react-redux';
import Container from '../Components/Container/Container';
import Section from '../Components/Section/Section';
import ContactForm from '../Components/ContactForm/ContactForm';
import Filter from '../Components/Filter/Filter';
import ContactList from '../Components/ContactList/ContactList';
import * as actions from '../redux/actions';

function ContactsPage({ filter, changeFilter }) {
  const { data, error, isFetching } = useFetchContactsQuery();
  const [deleteContact] = useDeleteContactMutation();

  function filtration(value) {
    if (value === '') {
      return data;
    } else {
      return data.filter(contact => {
        return contact.name.toLocaleLowerCase().includes(value);
      });
    }
  }

  return (
    <Container>
      <Section title="Phonebook">
        <ContactForm contacts={data} />
      </Section>
      <Section title="Contacts">
        <Filter filter={filter} onChangeFilter={changeFilter} />
        {isFetching && <h4>Loading...</h4>}
        {data && (
          <ContactList
            contacts={filtration(filter)}
            deleteContact={deleteContact}
          />
        )}
        {error && <h4>{error}</h4>}
      </Section>
    </Container>
  );
}

const mapStateToProps = state => ({
  filter: state.filter.filter,
});

const mapDispatchToProps = dispatch => ({
  changeFilter: value => dispatch(actions.changeFilter(value.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsPage);

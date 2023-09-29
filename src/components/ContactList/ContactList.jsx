import ContactListItem from 'components/ContactList/ContactListItem';
import { getContacts } from 'components/redux/selectors';
import { useSelector } from 'react-redux';
import { getFilter } from 'components/redux/selectors';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContacts = getFilteredContacts();
  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactListItem
          key={id}
          id={id}
          name={name}
          number={number}
        ></ContactListItem>
      ))}
    </ul>
  );
};

export default ContactList;

import { useDispatch } from 'react-redux';
import { Button } from './ContactListItem.styled';
import PropTypes from 'prop-types';
import { deleteContact } from 'components/redux/contactsSlice';

const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));
  return (
    <li>
      {name}: {number}
      <Button onClick={handleDelete}>Delete</Button>
    </li>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactListItem;

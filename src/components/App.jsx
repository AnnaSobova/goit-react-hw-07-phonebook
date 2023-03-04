
import Container from './container/Container';
import Phonebook from './Phonebook/Phonebook';
import Contacts from './Phonebook/Contacts/Contacts';
import { useSelector } from 'react-redux';


const App = ()=> {
  const contacts= useSelector(state => state.contacts.items);

return(
  <Container title="Phonebook">
     <Phonebook />
          {contacts.length > 0 ? (
          <Contacts
            name="Contacts"/>
        ) : (
          <p>Phonebook empty</p>
        )}
  </Container>
  );
 
};

export default App;
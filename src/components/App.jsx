
import Container from './container/Container';
import Phonebook from './Phonebook/Phonebook';
import Contacts from './Phonebook/Contacts/Contacts';
import {useGetContactsQuery} from 'redux/contactsApi';


const App = ()=> {
  const { data, error, isLoading } = useGetContactsQuery();

return(
  <Container title="Phonebook">
     <Phonebook />
          {!isLoading&& data.length > 0 ? (
          <Contacts
            name="Contacts"/>
        ) : (
          <p>Phonebook empty</p>
        )}
        {error&& <p> Sorry.. something wrong. Try again. </p>}
  </Container>
  );
};

export default App;
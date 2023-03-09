
import { useState } from 'react';
import { useGetContactsQuery, useAddContactMutation } from 'redux/contactsApi';
import Notiflix from 'notiflix';

import InputName from './Input/InputName';
import LabelPhoneBook from './Label/Label';
import ButtonSubmit from './Button/ButtonSubmit';
import InputNumber from './Input/InputNumber';
import FormPhonebook from './Form/Form';

const Phonebook = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  
  const {data:contacts}= useGetContactsQuery();
  const [addContact] = useAddContactMutation();

  const handleChange = e => {
    switch (e.currentTarget.name) {
      case 'name':
        setName(e.currentTarget.value);
        break;
      case 'number':
        setPhone(e.currentTarget.value);
        break;
      default:
        return;
    }
  };

  const reset = () => {
    setName('');
    setPhone('');
  };

  const formSubmitHandle = async data => {
    
    if (contacts.filter(contact => contact.name.toLowerCase() === data.name.toLowerCase()).length > 0) {
      Notiflix.Notify.warning(`${data.name} is already in contacts`);
      return;
    }
    try{
      await addContact(data)
      Notiflix.Notify.success('Contact already added');
    } catch (error){ 
      Notiflix.Notify.failure('Something wrong.... try again');
    }
    
  };

  const clickOnBtnSubmit = e => {
    e.preventDefault();
    formSubmitHandle({ name, phone });
    reset();
  };

  return (
    <FormPhonebook onSubmit={clickOnBtnSubmit}>
      <LabelPhoneBook title="Name">
        <InputName value={name} onChange={handleChange} />
      </LabelPhoneBook>
      <LabelPhoneBook title="Number">
        <InputNumber value={phone} onChange={handleChange} />
      </LabelPhoneBook>
      <ButtonSubmit text="Add contact" />
    </FormPhonebook>
  );
};

export default Phonebook;

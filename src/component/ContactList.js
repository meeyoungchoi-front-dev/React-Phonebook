import React from 'react';
import SearchBox from './SearchBox';
import ContactItem from './ContactItem';
import { useSelector } from 'react-redux';

const ContactList = () => {
  // 필터된 연락처 목록을 가져옴
  const contactList = useSelector(state => state.filteredList);

  return (
    <div>
      <SearchBox />
      {contactList.map((item, index) => (
        <ContactItem 
          key={index} 
          item={item} 
        />
      ))}
    </div>
  );
}

export default ContactList;

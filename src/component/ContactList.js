import React, { useEffect, useState } from 'react'
import SearchBox from './SearchBox'
import ContactItem from './ContactItem'
import { useSelector } from 'react-redux'

const ContactList = () => {
    const contactList = useSelector((state)=>state.contactList);
    const searchKey = useSelector((state)=>state.searchKey);
    const [searchList,setSearchList] = useState([]);
    useEffect(()=>{
      setSearchList(contactList.filter((item)=>item.name.includes(searchKey)))
    },[searchKey])
    console.log(searchKey)
    console.log(searchList)
  return (
    <div>
      <SearchBox />
      <h5>My friends : {contactList.length}</h5>
      <div className='result-box'>
        {searchKey?searchList.map((item)=>(
        <ContactItem item={item}/>
      )):contactList.map((item)=>(
        <ContactItem item={item}/>
      ))}
      </div>

      <div>
        
      </div>
      
    </div>
  )
}

export default ContactList

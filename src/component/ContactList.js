import React, { useEffect, useState } from 'react'
import SearchBox from './SearchBox'
import ContactItem from './ContactItem'
import { useDispatch, useSelector } from 'react-redux'

const ContactList = () => {
    const dispatch = useDispatch();
    const contactList = useSelector((state)=>state.contactList);
    const searchKey = useSelector((state)=>state.searchKey);
    const deleteName = useSelector((state)=>state.deleteName);
    const deleteNumber = useSelector((state)=>state.deleteNumber);
    const [resultList,setResultList] = useState([]);

    useEffect(()=>{
      if (searchKey !== '') {
        setResultList(contactList.filter((item)=>item.name.includes(searchKey)))
      } else {
        console.log(contactList)
        setResultList(contactList)
      }
      
    },[searchKey,contactList])
    console.log(searchKey)
   console.log(resultList)
   

    useEffect(()=>{
      let resultItems = contactList.filter((item)=>(
        item.name !== deleteName || item.number !== deleteNumber
        ))
      dispatch({type:"DELETEITEMS",payload:{resultItems}})
    },[deleteName,deleteNumber])

  return (
    <div>
      <SearchBox />
      <h5>My friends : {contactList.length}</h5>
      <div className='result-box'>
        {resultList.map((item)=>(
          <ContactItem item={item}/>
        ))}
      </div>
    </div>
  )
}

export default ContactList

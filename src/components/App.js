import React, {useState, useEffect} from "react";
import { uuid } from 'uuidv4';
import './App.css';
import Header from "./Header";
import Addcontact from "./Addcontact";
import Contactlist from "./Contactlist";

function App() {
  const LOCAL_STORAGE_KEY ="contacts";
 const [contacts,setContacts]=useState([]);

 const addContactHandler = (contact)=>{
   console.log(contact);
   setContacts([...contacts,{id: uuid(), ...contact}]);
 };

 const removeContactHandler = (id) => {
   const newContactList= contacts.filter((contact) => {
     return contact.id !== id;
   });
   setContacts(newContactList);
 }
 useEffect(()=>{
  const retrivalcontacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  if(retrivalcontacts) setContacts(retrivalcontacts);
   },[]);
 useEffect(()=>{
localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
 },[contacts]);

  return (

    <div className="ui container">
     <Header/>
     <Addcontact addContactHandler={addContactHandler}/>
     <Contactlist contacts={contacts} getContactId={removeContactHandler}/> 
    </div>//jsx java script

  );
}

export default App;

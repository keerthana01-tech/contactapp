import React from 'react';
import ContactCard from './ContactCard';
const Contactlist =(props) =>{
    console.log(props);
    const deleteContactHandler =(id) => {
        props.getContactId(id);
    };
    const renderContactlist = props.contacts.map((contact)=>{
        return(
           < ContactCard contact={contact} clickHandler={ deleteContactHandler} key=
        {contact.id}></ ContactCard>
        );
    })
return <div className="ui called list">{renderContactlist}</div>
};
export default Contactlist;

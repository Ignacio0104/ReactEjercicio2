import React, {useState,useEffect} from 'react'
import { Contact } from '../../models/contacto.class'
import ContactComponent from '../pure/contact'
import ContactForm from '../pure/forms/contactForm';

export default function ContactList() {
  const contactOne = new Contact("Ignacio","Smirlian","ignacio@gmail.com",1513452314,true);
  const contactTwo = new Contact("Pedro","Gutierrez","pedro@gmail.com",567345612,false);
  const contactThree = new Contact("Esteban","Gonzalez","esteban@click.com",45671234,true);
  const contactFour = new Contact("Magali","Suarez","suarez@gmail.com",1241453,false);
  const contactFive = new Contact("Santiago","Vazquez","vazquez@gmail.com",63512345,false);

  const [contacts, setContacts] = useState([contactOne,contactTwo,contactThree,contactFour,contactFive]);
  const [altaContacto, setAltaContacto] = useState(false);

  useEffect(() => {
    //console.log("Contact list has been modified")
    return () => {
      //console.log("TaskList component is going to be unmount");
    }
  }, [contacts])

  function deleteContact(index)
  {
      setContacts(
        contacts.filter((contact,i) => i !== index)
      );
  }

  function updateStatus(index,boolean)
  {
    const updatedContacts = contacts.map((contact, i) => {
      if (i === index) {
        contact.connected=boolean;
      }
        return contact;
    });
    setContacts(updatedContacts);
  }


  function addContact(contacto)
  {
    setContacts(prevState=>[...prevState,contacto]);
    setAltaContacto(!altaContacto);
  }

  function MostrarOcultarForm()
  {
    if(altaContacto)
    {
      return(
        <ContactForm add={addContact}></ContactForm>
      )
    }     
  }

  function LoadHeaders()
  {
    if(contacts.length>0)
    {
      return(
        <tr>
        <th scope='col'>Name</th>
        <th scope='col'>Email</th>
        <th scope='col'>Phone</th>
        <th scope='col'>Status</th>
        <th scope='col'>Action</th>
      </tr>
      )
    }else{
      return(
        <tr>
          <h3>No contacts</h3>
        </tr>
      )
    }
  }
  
  return (
    <div>
    <div className='col-12'>
        <div className='card'>
        {/*Card header */}
            <div className='card-header p-3'> {/* padding 3*/}
                <h5>
                    Your Contacts:
                </h5>
            </div>
          {/*Card body */}
            <div className='card-body' data-mdb-perfect-scrollbar="true" style={{position : "relative",height: "400px"}}>
                <table>
                    <thead>
                      {LoadHeaders()}
                    </thead>
                    <tbody>
                        {/*TO DO iteracion*/}
                        {contacts.map((contact,index)=>
                            {
                                return (
                                    <ContactComponent key={index} contactId={index} 
                                    delete={deleteContact} contact={contact}
                                    update={updateStatus}>                                     
                                    </ContactComponent>
                                );
                            }
                        )}
                    </tbody>
                </table>
                <button onClick={()=>setAltaContacto(!altaContacto)}>
                    {altaContacto ? "Cerrar Formularo" : "Crear Contacto"}     
                </button>
            </div>                    
           {MostrarOcultarForm()}
        </div>
    </div>
</div>
  )
}

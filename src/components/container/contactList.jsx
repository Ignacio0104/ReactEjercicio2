import React, {useState,useEffect} from 'react'
import { Contact } from '../../models/contacto.class'
import ContactComponent from '../pure/contact'

export default function ContactList() {
  const contactOne = new Contact("Ignacio","Smirlian","ignacio@gmail.com",1513452314,true);
  const contactTwo = new Contact("Pedro","Gutierrez","pedro@gmail.com",567345612,false);
  const contactThree = new Contact("Esteban","Gonzalez","esteban@click.com",45671234,true);
  const contactFour = new Contact("Magali","Suarez","suarez@gmail.com",1241453,false);
  const contactFive = new Contact("Santiago","Vazquez","vazquez@gmail.com",63512345,false);

  const [contacts, setContacts] = useState([contactOne,contactTwo,contactThree,contactFour,contactFive]);

  useEffect(() => {
    console.log("Contact list has been modified")
    return () => {
      console.log("TaskList component is going to be unmount");
    }
  }, [contacts])

  function deleteContact(index)
  {
      setContacts(
        contacts.filter((contact,i) => i !== index)
      );
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
                        <tr>
                            <th scope='col'>Name</th>
                            <th scope='col'>Email</th>
                            <th scope='col'>Phone</th>
                            <th scope='col'>Status</th>
                            <th scope='col'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/*TO DO iteracion*/}
                        {contacts.map((contact,index)=>
                            {
                              console.log(contact);
                                return (
                                    <ContactComponent key={index} contactId={index} 
                                    delete={deleteContact} contact={contact}>
                                      
                                    </ContactComponent>
                                );
                            }
                        )}
                    </tbody>
                </table>
            </div>
            {/*<TaskForm></TaskForm>*/}
        </div>
    </div>
</div>
  )
}

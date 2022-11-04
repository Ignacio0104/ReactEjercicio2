import React, {useEffect,useRef} from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contacto.class.js';
//Importamos la hoja de estilos

import "../../styles/taks.scss"


const ContactComponent = (props) => {

    const nameRef = useRef("");
    const lastNameRef = useRef("");

    useEffect(() => {
        /*console.log("Contact created")
        return () => {
          console.log(`Contact ${props.contact.name} deleted`);
        }*/
      },[props.contact]);
  

    //Returns a badge depending on the level of the task
    function ConnectedIcon(){
        if(props.contact.connected){
            return (<i className='bi bi-check-circle-fill' style={{color:"green"}}></i>);
        }else{
            return (<i className='bi bi-dash-circle-fill' style={{color:"red"}}></i>);
        }  
    }  

    function handleConnection(e)
    {
        e.preventDefault();
        //Funcion para actualizar
    }

    function ShowConnectionButton(){
        if(props.contact.connected){
            return (<button type='submit' className="btn btn-success" onClick={handleConnection}> Log In </button>);
        }else{
            return (<button type='submit'  className="btn btn-danger" onClick={handleConnection}> Log In </button>);
        }  
    }  
    return (
        <tr className='fw-normal'>
            <th>
                <span className='ms-2' ref={nameRef}>{props.contact.name} </span>
                <span className='ms-2' ref={lastNameRef}>{props.contact.lastName}</span>
            </th>
            <td className='align-middle'>
                <span>{props.contact.phone}</span>
            </td>
            <td className='align-middle'>
                <span>{props.contact.email}</span>
            </td>
            <td className='align-middle'>
                {ConnectedIcon()}
            </td>
            <td className='align-middle'>
                {ShowConnectionButton()}
                <i className='bi-trash' 
                style={{color:"tomato",padding:"10px" ,fontSize:"20px"}}
                onClick={()=>props.delete(props.contactId)}></i>
                {console.log(`${props.contact.name} tiene el id ${props.contactId}`)}
            </td>
        </tr>
    );
};


ContactComponent.propTypes = {
    task: PropTypes.instanceOf(Contact)
};


export default ContactComponent;

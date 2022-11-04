import React, {useRef} from 'react'
import { Contact } from '../../../models/contacto.class'

export default function ContactForm(props) {

    const nameRef = useRef("")
    const apellidoRef = useRef("")
    const emailRef = useRef("")
    const telefonoRef = useRef("")

    function CrearUsuario(e)
    {
        e.preventDefault();
        let contactAux = new Contact(nameRef.current.value,apellidoRef.current.value,emailRef.current.value,
            telefonoRef.current.value,false);

        props.add(contactAux);
    }
  return (
    <div>
      <form>
        <input ref={nameRef} placeholder='Ingrese su nombre...'></input>
        <input ref={apellidoRef} placeholder='Ingrese su apellido...'></input>
        <input ref={emailRef} placeholder='Ingrese su email...'></input>
        <input ref={telefonoRef} placeholder='Ingrese su telefono...'></input>
        <button onClick={CrearUsuario}>Crear</button>
      </form>
    </div>
  )
}

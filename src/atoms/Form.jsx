import Big_text from "./Big_text"
import "./Form.css"

export default function Form ({placeholder, type, nom, content}) {
  return (
    <>
        <div className="atom-form form-group">
        <label htmlFor={nom}><Big_text content={content} color="pink" /></label>
        <input className ="inside_form" type={type} id={nom} name={nom} placeholder={placeholder} required/>
      </div>
    </>
  )
}

 

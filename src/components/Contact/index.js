import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';


function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    
    const [ errorMessage, setErrorMessage ] = useState("");
    const { name, email, message } = formState;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!errorMessage) {
          console.log('Submit Form', formState);
        }
      };

    function handleChange(e) {
        if (e.target.name === "email") {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
             //isValid conditional statement
            if (!isValid) {
                setErrorMessage("Please enter a valid email address");
            } else {
                setErrorMessage("");
            }
            } else {
                if (!e.target.value.length) {
                  setErrorMessage(`${e.target.name} is required.`);
                } else {
                  setErrorMessage('');
                }
            }
                if (!errorMessage) {
                    setFormState({ ...formState, [e.target.name]: e.target.value });
                    console.log('Handle Form', formState);
                }
            }
        
    return(
    <section >
    <h1 className='justify-content-center' >Contact me</h1>
    <div className="d-flex flex-row flex-wrap justify-content-center" >
    
    <form id="contact-form" onSubmit={handleSubmit}>
      <div className="p-2">
        <p>Name</p>
        <label htmlFor="name" ></label>
        <input type="text" name="name" defaultValue={name} onBlur={handleChange}/>
      </div>
      <div className="p-2">
        <p>Email</p>
        <label htmlFor="email"></label>
        <input type="email" name="email" defaultValue={email} onBlur={handleChange}  />
      </div>
      <div className='p-2'>
        <p>Message</p>
        <label htmlFor="message"></label>
        <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange}/>
      </div>
      {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
      <div className='p-2'>
      <button type="submit" >Submit</button>
      </div>
    </form>
    </div>
    </section>
    )
}

export default ContactForm;
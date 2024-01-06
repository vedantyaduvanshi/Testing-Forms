import React, { useState } from 'react'

export default function App() {
    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      email: '',
      contacts: '',
    });
  
    const [registrationMessage, setRegistrationMessage] = useState('');
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!formData.firstName.trim()) {
        setRegistrationMessage('Please enter your first name!');
      } else if (!formData.lastName.trim()) {
        setRegistrationMessage('Please enter your last name!');
      } else if (!formData.email.trim()) {
        setRegistrationMessage('Please enter your email!');
      } else if (!formData.contacts.trim()) {
        setRegistrationMessage('Please enter your contacts!');
      } else {
        setRegistrationMessage('');
        handleRegistrationSuccess();
      }
    };
  
    const handleRegistrationSuccess = () => {

      setRegistrationMessage('Registration successful!');
    }
  

  
  return (
    <div id='FormPapa'>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Contacts:
          <input
            type="text"
            name="contacts"
            value={formData.contacts}
            onChange={handleChange}
          />
        </label>
        {registrationMessage && <p>{registrationMessage}</p>}
        <br />
        <button type="submit">Register</button>
      </form>
     
    </div>
  
  )
}

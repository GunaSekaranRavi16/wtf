import React, { useState } from 'react';

import '../style/JoinForm.css'; // Import your CSS for the form



const JoinForm = ({ onClose }) => {

  const [data, setFormData] = useState({

    name: '',

    mobile: '',

    email: '',

    job: '',

    salary: '',
    
  });

   const {name,mobile,email,job,salary}=data;

  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData({ ...data, [name]: value });

  };



  const handleSubmit =  async(e) => {

    e.preventDefault();
    try {
      const response=await fetch('https://v1.nocodeapi.com/gunasekaran/google_sheets/VtFBmfbPrnNBNTMR?tabId=Sheet1',{
        method:'POST',
         headers:{
          'Content-Type':'application/json'
         },
         body:JSON.stringify([[name,mobile,email,job,salary],]),
      });
      await response.json();
      window.alert("form submitted sucessfully")
      console.log('Form submitted:', data);
      onClose();
  
    } catch (err) {
      console.log(err)
    }
    // Handle form submission (e.g., send data to server)

     // Close the form after submission

  };



  return (

    <div className="join-form-overlay">

      <div className="join-form">

        <h2>Join the Club</h2>

        <button className="close-btn" onClick={onClose} aria-label="Close form">✖</button>

        <form onSubmit={handleSubmit}>

          <label>

            Name:

            <input type="text" name="name" value={data.name} onChange={handleChange} required />

          </label>

          <label>

            Mobile No:

            <input type="tel" name="mobile" value={data.mobile} onChange={handleChange} required />

          </label>

          <label>

            Email:

            <input type="email" name="email" value={data.email} onChange={handleChange} required />

          </label>

          <label>

            Job:

            <input type="text" name="job" value={data.job} onChange={handleChange} />

          </label>

          <label>

            Salary:

            <input type="number" name="salary" value={data.salary} onChange={handleChange} />

          </label>

          <button type="submit">Submit</button>

        </form>

      </div>

    </div>

  );

};



export default JoinForm;
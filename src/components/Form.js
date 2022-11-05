import React, { useState } from 'react'
import '../App.css'
import { v4 as uuidv4 } from 'uuid'
import './Form_styles.css'
import Spinner from './spinner/Spinner';
import Employee from './employee';


export default function Form() {

  const [loadSpinner, setLoadSpinner] = useState(false);
  const [data, setData] = useState({
    id: uuidv4().slice(0, 8),
    name: '',
    age: '',
    gender: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData((prevalue) => {
      return {
        ...prevalue,  // Spread operator
        [name]: value
      }
    });
  }

  const handleSubmit = (event) => {
    setLoadSpinner(true);
    let formdata = data;

    setTimeout(() => {
      setLoadSpinner(false);
      Employee.push(formdata);
      console.log("Employee:", Employee);
    }, 2000);
    event.preventDefault();

    // clear Data
    setData({
      id: '',
      name: '',
      age: '',
      gender: ''
    })
  };

  return (
    <>
      {loadSpinner && <Spinner />}
      <form className='my-5' onSubmit={handleSubmit}>
        <section className='bg-success text-light text-center py-3'>
          <h2>Application Form</h2>
        </section>
        <section id="formsection" className='bg-light bg-gradient border container py-3'>
          <div className="row my-3">
            <div className="col-lg-6 col-md-6 col-sm-6">
              <label htmlFor="name" className='mb-2'>Name:</label>
              <input type="text" name="name" id="name" className='form-control' placeholder='Enter Name' value={data.name} onChange={handleChange} />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 sm-my-3">
              <label htmlFor="age" className='mb-2'>Age:</label>
              <input type="number" name="age" id="age" className='form-control' placeholder='Enter Age 5-100' value={data.age} onChange={handleChange} min={5} max={100} />
            </div>
          </div>
          <div className="row my-3">
            <div className="col-lg-6 col-md-6 col-sm-6">
              <label htmlFor="gender" className='mb-2'>Gender:</label>
              <select name="gender" id="gender" className="form-control" value={data.gender} onChange={handleChange} >
                <option select="true" value>-- select an option --</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
          </div>
          {/* Submit form */}
          <div className="text-center my-3">
            <button type="submit" className="btn btn-success">Submit</button>
          </div>
        </section>
      </form>
    </>
  )
}

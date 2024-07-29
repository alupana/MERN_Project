import React, { useState } from 'react';
import { createEmployee } from "./Library"


function CreateEmployee() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [designation, setDesignation] = useState('');
  const [gender, setGender] = useState('');
  const [course, setCourse] = useState('');
  // const [imgUpload, setImgUpload] = useState(null);

  const handleCreateEmployee = async () => {
    try {
      await createEmployee(
        {
          image: '',
          name: name,
          email: email,
          mobile: mobileNumber,
          designation: designation,
          gender: gender,
          course: course

        },
        (result) => {
          // setEditStatus('success');
          // setpriorities((prevPriorities) => {
          //   return [...prevPriorities, result[0][0]]
          // })
          // Clear input field values
          // setNewPrioritie({
          //   priority_name: '',
          //   description: ''
          // });
        }
      );
    } catch (error) {
      // setEditStatus('error');
    }
  };



  return (
    <div className='mx-auto justify-content-center align-middle card' style={{ width: '600px' }}>
      <div className='mb-2 card-header display-6'>Create Employee</div>
      <div className='card-body'>
        <form>
          <div className="mb-3 d-flex">
            <label htmlFor="name" className='form-label me-3' style={{ width: '150px' }}>Name</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className='form-control'
            />
          </div>
          <div className="mb-3 d-flex">
            <label htmlFor="email" className='form-label me-3' style={{ width: '150px' }}>Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='form-control'
            />
          </div>
          <div className="mb-3 d-flex">
            <label htmlFor="mobileNumber" className='form-label me-3' style={{ width: '150px' }}>Mobile No</label>
            <input
              id="mobileNumber"
              type="text"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              className='form-control'
            />
          </div>
          <div className="mb-3 d-flex">
            <label htmlFor="designation" className='form-label me-3' style={{ width: '150px' }}>Designation</label>
            <input
              id="designation"
              type="text"
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
              className='form-control'
            />
          </div>
          <div className="mb-3 d-flex">
            <label htmlFor="gender" className='form-label me-3' style={{ width: '150px' }}>Gender</label>
            <input
              id="gender"
              type="text"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className='form-control'
            />
          </div>
          <div className="mb-3 d-flex">
            <label htmlFor="course" className='form-label me-3' style={{ width: '150px' }}>Course</label>
            <input
              id="course"
              type="text"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
              className='form-control'
            />
          </div>
          <div className="mb-3 d-flex">
            <label htmlFor="imgUpload" className='form-label me-3' style={{ width: '150px' }}>Img Upload</label>
            <input
              id="imgUpload"
              type="file"
              className='form-control'
            />
          </div>
          <div>
            <input
              type="Text"
              className='btn btn-primary'
              value="Submit"
              onClick={handleCreateEmployee}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateEmployee;
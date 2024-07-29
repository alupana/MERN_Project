import React, { useState, useEffect } from 'react';

function EditEmployee({ employee, onSave }) {
  const [formData, setFormData] = useState({ ...employee });

  useEffect(() => {
    setFormData({ ...employee });
  }, [employee]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the onSave function passed as a prop to update the employee data
    onSave(formData);
  };

  return (
    <div className="container mt-3 mx-3">
      <h3>Edit Employee</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Unique Id</label>
          <input type="text" className="form-control" value={formData.f_Id} readOnly />
        </div>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            name="f_Name"
            value={formData.f_Name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            name="f_Email"
            value={formData.f_Email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Mobile No</label>
          <input
            type="text"
            className="form-control"
            name="f_Mobile"
            value={formData.f_Mobile}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Designation</label>
          <input
            type="text"
            className="form-control"
            name="f_Designation"
            value={formData.f_Designation}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Gender</label>
          <input
            type="text"
            className="form-control"
            name="f_gender"
            value={formData.f_gender}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Course</label>
          <input
            type="text"
            className="form-control"
            name="f_Course"
            value={formData.f_Course}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Create Date</label>
          <input
            type="text"
            className="form-control"
            name="f_Createdata"
            value={formData.f_Createdata}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default EditEmployee;
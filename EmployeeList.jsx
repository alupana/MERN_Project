import React, { useState, useEffect } from 'react';
import CreateEmployee from './CreateEmployee';
import EditEmployee from './EditEmployee';
import { employees } from './Library';

function EmployeeList() {
  const [showCreateEmployee, setShowCreateEmployee] = useState(false);
  const [showEditEmployee, setShowEditEmployee] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [employe, setEmploye] = useState([]);

  const handleCreateEmployeeClick = () => {
    setShowCreateEmployee((prevState) => !prevState);
    setShowEditEmployee(false); // Close edit employee if open
  };

  const handleEditEmployeeClick = (employee) => {
    setSelectedEmployee(employee);
    setShowEditEmployee(true);
    setShowCreateEmployee(false); // Close create employee if open
  };

  const handleSaveEditEmployee = (updatedEmployee) => {
    setEmploye((prevEmploye) =>
      prevEmploye.map((emp) =>
        emp.f_Id === updatedEmployee.f_Id ? updatedEmployee : emp
      )
    );
    setShowEditEmployee(false);
  };

  useEffect(() => {
    employees((employees) => {
      setEmploye(employees);
    });
  }, []);

  return (
    <div className="container mt-3">
      <div className="d-flex justify-content-end mb-3">
        <div>
          <button className="btn btn-primary" onClick={handleCreateEmployeeClick}>
            {showCreateEmployee ? 'Close' : 'Create Employee'}
          </button>
        </div>
      </div>
      {showCreateEmployee && <CreateEmployee />}
      {showEditEmployee && selectedEmployee && (
        <EditEmployee employee={selectedEmployee} onSave={handleSaveEditEmployee} />
      )}
      <div>
        <h3>Employee Data</h3>
      </div>
      <div className="container mt-5">
        <h6>Total Count : {employe.length}</h6>
        <span className="pb-5">
          Search <input type="text" placeholder="Enter Search Keyword" />
        </span>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Unique Id</th>
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile No</th>
              <th>Designation</th>
              <th>Gender</th>
              <th>Course</th>
              <th>Create date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {employe.map((employee) => (
              <tr key={employee.f_Id}>
                <td>{employee.f_Id}</td>
                <td>{employee.f_Image}</td>
                <td>{employee.f_Name}</td>
                <td>{employee.f_Email}</td>
                <td>{employee.f_Mobile}</td>
                <td>{employee.f_Designation}</td>
                <td>{employee.f_gender}</td>
                <td>{employee.f_Course}</td>
                <td>{employee.f_Createdata}</td>
                <td>
                  <button onClick={() => handleEditEmployeeClick(employee)}>
                    Edit
                  </button>
                  - Delete
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EmployeeList;
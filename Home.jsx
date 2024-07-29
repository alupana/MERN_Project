import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './first_page';
import EmployeeList from './EmployeeList';
import { GVContext } from './Login';


function Main() {
  const handleLogout = () => {
    console.log("Logged out");
  };

  const username = "JohnDoe";

  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">LOGO</Link>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/employee-list">EmployeeList</Link>
                </li>
              </ul>
              <div className="d-flex ms-auto align-items-center">
                <span className="me-3">{username}</span>
                <button className="btn btn-outline-danger" onClick={handleLogout}>Logout</button>
              </div>
            </div>
          </div>
        </nav>

        <div className="container mt-3">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/employee-list" element={<EmployeeList />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default Main;

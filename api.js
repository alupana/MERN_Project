const mysql = require('mysql');

const getConfig = () => {
  const dbConnectionProps = {
    host: 'localhost',
    user: 'root',
    password: 'root'
  };
  return dbConnectionProps;
}

const dbConnectionProps = getConfig();
const con = mysql.createConnection({ ...dbConnectionProps, database: 'chat' });
con.connect((err) => {
  if (err) {
    console.log(`Error in connection:${err}`);
  }
});

// employee Project
////////////////////////////////////////////////////
const validateUser = (req, res) => {
  var query = `CALL usp_UserValidate(@p_username := '${req.body.username}', @p_password := '${req.body.password}')`
  console.log(query)
  con.query(query, (err, result) => {
    if (err) {
      res.send(`Error in validating the user credentials: ${err}`);
    } else {
      res.send(result);
    }
  })
};

const employeesData = (req, res) => {
  var query = CALL f_EmployeesCRUD(@p_f_Id := '1', @p_f_Image := '', @p_f_Name := '', @p_f_Email := '', @p_f_Mobile := '4', @p_f_Designation:= '', @p_f_gender := '', @p_f_Course := '', @p_f_Createdata := '', @p_mode := 'READ');
  console.log(query)
  con.query(query, (err, result) => {
    if (err) {
      res.send(Error while getting employees:${ err })
}
    else {
  res.send(result);
}
  })
};

const createEmployee = (req, res) => {
  var query = `CALL f_EmployeesCRUD(@p_f_Id := null, @p_f_Image := '',@p_f_Name := ${req.body.name ? '${req.body.name}' : null},@p_f_Email := ${req.body.email ? '${req.body.email}' : null},@p_f_Mobile := ${req.body.mobile ? '${req.body.mobile}' : null},@p_f_Designation:= ${req.body.designation ? '${req.body.designation}' : null},@p_f_gender :=${req.body.gender ? '${req.body.gender}' : null},@p_f_Course := ${req.body.course ? '${req.body.course}' : null},@p_f_Createdata := '',@p_mode := 'CREATE');`
  console.log(query)
  con.query(query, (err, result) => {
    if (err) {
      res.send(Error while createing  Employee:${ err })
}
    else {
  res.send(result);
}
  })
};

const updateEmployee = (req, res) => {
  var query = `CALL f_EmployeesCRUD(@p_f_Id := ${req.body.Id}, @p_f_Image := '',@p_f_Name := ${req.body.name ? '${req.body.name}' : null},@p_f_Email := ${req.body.email ? '${req.body.email}' : null},@p_f_Mobile := ${req.body.mobile ? '${req.body.mobile}' : null},@p_f_Designation:= ${req.body.designation ? '${req.body.designation}' : null},@p_f_gender :=${req.body.gender ? '${req.body.gender}' : null},@p_f_Course := ${req.body.course ? '${req.body.course}' : null},@p_f_Createdata := '',@p_mode := 'UPDATE');`
  console.log(query)
  con.query(query, (err, result) => {
    if (err) {
      res.send(Error while updateing Employee:${ err })
}
    else {
  res.send(result);
}
  })
};

const deleteEmployee = (req, res) => {
  var query = `CALL usp_TaskPrioritiesCRUD(@p_priority_id :=${req.query.priority_id ? '${req.query.priority_id}' : null},@p_priority_name := null,@p_description := null,@p_mode := 'DELETE');`
  console.log(query)
  con.query(query, (err, result) => {
    if (err) {
      res.send(Error while deleteing Employee:${ err })
}
    else {
  res.send(result);
}
  })
};

///////////////////////////////////////////////////
module.exports = {
  validateUser,
  employeesData,
  createEmployee,
  updateEmployee,
  deleteEmployee
};
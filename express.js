const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const apis = require('./apis.js');
const cors = require('cors');

const app = express();
const corsOptions = {
  origin: ["http://localhost:3000"],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,FETCH',
};

app.use(cors(corsOptions));
//Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const server = http.createServer(app);

app.post('/validateUser', (req, res) => {
  console.log(JSON.stringify(req.body.username));
  apis.validateUser(req, res);
});

app.get('/employee', (req, res) => {
  console.log(JSON.stringify(req.body));
  apis.employeesData(req, res);
});

app.post('/employeecreate', (req, res) => {
  console.log(JSON.stringify(req.body));
  apis.createEmployee(req, res);
});

app.put('/employeeupdate', (req, res) => {
  console.log(JSON.stringify(req.body));
  apis.updateEmployee(req, res);
});

app.delete('/employedelete', (req, res) => {
  console.log(JSON.stringify(req.query));
  apis.deleteEmployee(req, res);
});
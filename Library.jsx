import React from 'react'
export const APIServerURL = 'http://localhost:3300';

function Library() {
  return (
    <div>
      Library
    </div>
  )
}

export const getChatUser = () => {
  return JSON.parse(window.localStorage.getItem('chat'));
};

export const addChatUser = (user) => {
  window.localStorage.setItem('chat', JSON.stringify(res));
};

export const validateUser = ({ username, password }, call_back) => {
  fetch(APIServerURL + '/validateUser', {
    method: 'POST'
    , body: JSON.stringify({
      'username': username
      , 'password': password
    })
    , headers: {
      "Content-Type": "application/json"
    }
  }).then(response => response.json())
    .then(json => {
      console.log(json);
      if (json[0][0].response === 'valid')
        call_back(json[0]);
      else {
        alert(json[0][0].response);
      }
    })
}

export const employees = (call_back) => {
  fetch(APIServerURL + /employee, {
    method: 'GET'
    , headers: {
    "Content-Type": "application/json"
  }
  }).then(response => response.json())
  .then(json => {
    call_back(json[0])
  })
}

export const createEmployee = ({ image, name, email, mobile, designation, gender, course }, call_back) => {
  fetch(APIServerURL + '/employeecreate', {
    method: 'POST'
    , body: JSON.stringify({
      'image': image,
      "name": name,
      "email": email,
      "mobile": mobile,
      "designation": designation,
      "gender": gender,
      "course": course
    })
    , headers: {
      "Content-Type": "application/json"
    }
  }).then(response => response.json())
    .then(json => {
      call_back(json);
    })
}

export const updateEmployee = ({ image, name, email, mobile, designation, gender, course }, call_back) => {
  fetch(APIServerURL + '/employeeupdate', {
    method: 'PUT'
    , body: JSON.stringify({
      'image': image,
      "name": name,
      "email": email,
      "mobile": mobile,
      "designation": designation,
      "gender": gender,
      "course": course
    })
    , headers: {
      "Content-Type": "application/json"
    }
  }).then(response => response.json())
    .then(json => {
      call_back(json);
    })
}

export const deleteEmployee = ({ priority_id }, call_back) => {
  fetch(APIServerURL + /employedelete?priority_id=${priority_id}, {
    method: 'DELETE'
    , headers: {
    "Content-Type": "application/json"
  }
  }).then(response => response.json())
  .then(json => {
    call_back(json);
  })
}

///////////////////////////////////////

export default Library
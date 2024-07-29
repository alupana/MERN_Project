import React, { useState, useEffect } from 'react';
import Home from "./Home";
import { validateUser, getChatUser, addChatUser } from './Library';
export const GVContext = createContext();


function Login() {

  const [GV, setGV] = useState(GVContext);
  const [username, setUsername] = useState(user && user.username);
  const [password, setPassword] = useState();
  let user = getChatUser();


  const handleLogin = () => {
    validateUser({ username: username, password: password }, (res) => {
      addChatUser({ username: username, email: email, user_id: res[0].user_id });
    }
    );
  }
  return (
    <GVContext.Provider value={{ GV, setGV }} >
      {!user ?
        <div className='mx-auto justify-content-center align-middle m-5 card' style={{ width: '400px' }} >
          <div className=' mb-2 card-header display-6' >Login</div>
          <div className='card-body'>
            <form >
              <input type="text" value={username}
                onChange={(e) => setUsername(e.target.value)} className='form-control m-2 p-2' placeholder='Name'></input>
              <input type="password" value={password}
                onChange={(e) => setPassword(e.target.value)} className='form-control m-2 p-2' placeholder='Password'></input>
            </form>
          </div>
          <div>
            <input type="submit" onClick={handleLogin} className='btn btn-primary  m-2' value="Login"></input>
          </div>
        </div>
        : <><Home /></>
      }
    </GVContext.Provider>

  )
}


export default Login
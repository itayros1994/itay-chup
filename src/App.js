import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { addUser } from './features/Users';
import { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [username, setUserName] = useState('');

  const dispatch = useDispatch();
  const userList = useSelector((state) => state.users.value);

  return (
    <div className="App">
      <div className="addUser">
        <input type="text" placeholder="Name" onChange={(event) => setName(event.target.value)} />
        <input type="text" placeholder="Username..." onChange={(event) => setUserName(event.target.value)} />
        <button onClick={() => dispatch(addUser({ id: 0, name: name, username: username }))}>Add User</button>
      </div>
      <div className="displayUsers">
        {userList.map((user) => {
          return (
            <div>
              <h1>{user.name}</h1>
              <h1>{user.username}</h1>
              <h3>itay frist branch</h3>
              <h3>chup branch asd adad!</h3>
              <div>chuptal</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;

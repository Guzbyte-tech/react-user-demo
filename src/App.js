import { useState } from 'react';
import './App.css';
import UserDetails from './Components/UserDetails';
import UserList from './Components/UserList';

const usersList = [];

function App() {

  const [users, setUsers] = useState(usersList);

  const onSubmitUserDetailshandler = user => {
    setUsers((prevUsers) => {
      return [
        user, 
        ...prevUsers
      ];
    });
  }

  let userListContent = (
    <p style={{ textAlign: 'center', color: 'white' }}>No User found. Maybe add one?</p>
  );

  if(users.length > 0){
    userListContent = (<UserList items={users} />);
  }
  return (
    <div className="container">
        <UserDetails onSubmitUserDetails={onSubmitUserDetailshandler}/>
        {userListContent}
    </div>
  );
}

export default App;

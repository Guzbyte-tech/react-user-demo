import React, { useState } from 'react'
import Card from '../UI/Card';
import './userList.css';


const UserList = (props) => {

  console.log(props);
  return (
    <Card className="user-list">
      {
        props.items.map( user => (
          <p key={user.id}>{user.username+ " "+user.age+" (years old)"}</p>
        ))}
    </Card>
  )
}

export default UserList
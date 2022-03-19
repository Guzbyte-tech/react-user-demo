import React from 'react'
import Card from '../UI/Card';
import './UserDetails.css';
import UserForm from './UserForm';

const UserDetails = (props) => {
    const onSubmitUserFormHandler = (user) => {
        props.onSubmitUserDetails(user);
    }
  return (
    <Card className='user-detail'>
        <UserForm onSubmitUserForm={onSubmitUserFormHandler}/>
    </Card>
  )
}

export default UserDetails;
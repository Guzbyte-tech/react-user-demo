import React, { useState } from 'react'
import './UserDetails.css';
import Button from '../UI/Button';

const UserForm = (props) => {
    const [username, setUserName] = useState("");
    const [age, setAge] = useState("");
    const [isUsernameValid, setUserNameValid] = useState(true);
    const [isAgeValid, setAgeValid] = useState(true);
    const [usernameError, setUsernameError] = useState("");
    const [ageError, setAgeError] = useState("");
    

    const usernameChangeHandler = (event) => {
        setUserName(event.target.value);
    }
    const ageChangeHandler = (event) => {
        setAge(event.target.value);
    }

    const submitUserDetails = (event) => {
        event.preventDefault();
        if(username.trim().length <= 0){
            setUsernameError("Enter username");
            setUserNameValid(false);
            console.log((prevUsernameError) => {
                return setUsernameError("Enter username");
            });
            return;
        }

        if(age.trim().length <= 0){
            setAgeError("Enter age");
            setAgeValid(false);
            return;
        }

        const userDetails = {
            "username" : username,
            "age" : age
        };

        props.onSubmitUserForm(userDetails);
        setUserName("");
        setAge("");

    }

  return (
    <form onSubmit={submitUserDetails}>
        <div className='form-group'>
            <label>Username:</label>
            <input type="text" className='form-control' onChange={usernameChangeHandler}  value={username}/>
        </div>
        
        <div className='form-group'>
            <label>Age:</label>
            <input type="number" step="any" className='form-control' onChange={ageChangeHandler} value={age} />
        </div>

        <div className='form-group'>
            <Button type="submit">Submit</Button>
        </div>
    </form>
  )
}

export default UserForm;
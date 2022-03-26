import React, { useRef, useState } from "react";
import "./UserDetails.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const UserForm = (props) => {

  const usernameRef = useRef();
  const ageRef = useRef();
  const [username, setUserName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] =useState();

  // const usernameChangeHandler = (event) => {
  //   setUserName(event.target.value);
  // };
  // const ageChangeHandler = (event) => {
  //   setAge(event.target.value);
  // };

  const submitUserDetails = (event) => {
    event.preventDefault();
    const refUSername = usernameRef.current.value;
    const refAge = ageRef.current.value;
    if (refUSername.trim().length === 0 || refAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Enter a valid name and age (non-empty value)."
      })
      return;
    }

    if (+refAge < 1) {
        setError({
            title: "Invalid Age",
            message: "Please enter a valid age (> 0)."
          })
      return;
    }
    const userDetails = {
      username: refUSername,
      age: refAge,
      id: Math.random().toString(),
    };


    props.onSubmitUserForm(userDetails);
    // setUserName("");
    // setAge("");
    ageRef.current.value="";
    usernameRef.current.value="";
  };

  const errorHandler = () => {
      setError(null);
  }

  return (
    <div>
      
      {error && (<ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>)}

      <form onSubmit={submitUserDetails}>
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            className="form-control"
            // onChange={usernameChangeHandler}
            // value={username}
            ref={usernameRef}
          />
        </div>

        <div className="form-group">
          <label>Age:</label>
          <input
            type="number"
            step="any"
            className="form-control"
            // onChange={ageChangeHandler}
            // value={age}
            ref={ageRef}
          />
        </div>

        <div className="form-group">
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;

import './App.css';
import UserDetails from './Components/UserDetails';

function App() {

  const onSubmitUserDetailshandler = user => {
    console.log("Coming from App Js");
    console.log(user);
  }
  return (
    <div className="container">
        <UserDetails onSubmitUserDetails={onSubmitUserDetailshandler}/>
    </div>
  );
}

export default App;

import React, {useState} from "react";
import axios from "axios";

const Login = (props) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [grabData, setGrabData] = useState({ username: 'Lambda School', password: 'i<3Lambd4'});
  const handleChange = event => setGrabData({...grabData, [event.target.name]: event.target.value})
  const handleSubmit = event => {
    console.log('handleSubmit button clicked')
      event.preventDefault();
      // submitData(grabData);
      axios
      .post('http://localhost:5000/api/login', grabData)
      .then(res => {
        console.log(res)
        console.log(props.history)
        localStorage.setItem('token', res.data.payload);
        props.history.push('/colors')
      })
  }
  
  return (
    <form onSubmit ={handleSubmit}>
    <input 
    type ="text" 
    name="username"
    placeholder="username" 
    value={grabData.username} 
    onChange={handleChange} />

<input 
    type ="password" 
    name="password"
    placeholder="password" 
    value={grabData.password} 
    onChange={handleChange} />
    <button type="submit">Submit</button>
</form>
  );
};

export default Login;

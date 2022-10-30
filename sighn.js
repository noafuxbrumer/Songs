import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { yupResolver } from '@hookform/resolvers/yup';
import { connect } from 'react-redux'
import * as yup from "yup";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import './Sighn.css';



const schema = yup.object().shape({
  name: yup.string().test('len', ' חובה אורך 5', val => val.length === 5).required(),

}).required();

const App = (props) => {
    
    // return <Button className={classes.root}>Hook</Button>;

  const navigate = useNavigate()
  let UserName = "";
  let Password = "";
  // const { register, handleSubmit } = useForm({
  //   shouldUseNativeValidation: true,
  //   resolver: yupResolver(schema),
  // });
  const onSubmit = (e) => {
    e.preventDefault();
    axios.get(`https://localhost:44319/api/user?UserName=${UserName}&password=${Password}`).then(x => {
      console.log(x)
      if (x.data) {
        navigate("/songs");
      }
      else { navigate("/login") }

      // props.LoginUsers(x.data)
      // Navigate.replace("/llll")
    })
      .catch(x => console.log(x))
  }

  return (
<div id='container'>
<h2>הכנס</h2>
<p>Stay updated with our newsletter</p>
    <form onSubmit={onSubmit}>
      <br></br>
     
      <input type="text" color='pink'  placeholder="Type your name" required onChange={e => { UserName = e.target.value }} />
      <br></br>
     
      <input type="password"  placeholder="Type your password" onChange={e => { Password = e.target.value }} />
<br></br>
      <br></br>
      
      <Button     
      variant="contained" color="secondary" 
    type="submit"  >התחברות</Button>
    </form>
</div>
  )}
  
const mapDispatchToProps = dispatchEvent => {
  return {
    LoginUsers: (user) => dispatchEvent({ type: "LOGIN", users: user })
  }
}
export default connect(null, mapDispatchToProps)(App)

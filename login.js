import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const schema = yup.object().shape({
  name: yup.string().test('len', ' חובה אורך 5', val => val.length === 5).required(),
  age: yup.number().required(),
}).required();

const Login = (props) => {
  
  const navigate = useNavigate()
  const { register, handleSubmit } = useForm({
    shouldUseNativeValidation: true,
    resolver: yupResolver(schema),
  });
  const onSubmit = async data => {
    //  event.preventDefault();
    console.log(register, "llll")
    const d = { k: 5 }
    console.log(data)

    axios.post("https://localhost:44319/api/user", data).then(x => {
      console.log(x)
      props.allUser(x.data)
      // Navigate.replace("/llll")
      navigate("/songs");
    })
      .catch(x => console.log(x))
  }

  return (
   

    
<div id='container'>
<h2>הרשם</h2>
<p>הכנס את פרטייך</p>
    <form onSubmit={handleSubmit(onSubmit)} >
      
   
      <input type="string"{...register("name")} color='pink'  placeholder="Type your name" required />
      <br></br>
     
      <input type="number" {...register("age")} color='pink'  placeholder="Type your age" required />
      <br></br>
     
      {/* ,{ max:100,min:20}).required} /> */}
      <input type="password"{...register("password")} color='pink'  placeholder="Type your password" required />
      <br></br>
   
      {/* ,{max:7,min:3}).required} /> */}
      <input type="mail"{...register("mail")} color='pink'  placeholder="Type your mail" required />
      <br></br>
     
      {/* ,{ rejex: /"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$"/})} /> */}
      <input type="text"{...register("id").required}  color='pink'  placeholder="Type your id" required />
      <br></br>
      <br></br>
      
      <Button  variant="contained" color="secondary" type="submit" 
        Send  >הרשמה</Button>
    </form>
</div>
  )
}
const mapDispatchToProps = dispatchEvent => {
  return {
    allUser: (user) => dispatchEvent({ type: "LOGIN", users: user })
  }
}
export default connect(null, mapDispatchToProps)(Login)

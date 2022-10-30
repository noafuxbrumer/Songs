import { Link, Route, Navigate, Routes } from 'react-router-dom';
import Login from './login'
import SighnIn from './sighn'
import './App.css';
import Song from './song';
import Home from './home';
import AddSong from './addSong';
import { Button, colors } from '@material-ui/core';
import { Style } from '@material-ui/icons';
// import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
 import './Sighn.css';

export default App;

function App()  {
  return (
    <div className="App" id='app' >
     <br></br>
     <br></br>
      <Link to="/login" > <Button  variant="contained" color="secondary" >Login    </Button> </Link>
      <br></br>
   
      {/* <Link to="/home">Home</Link> */}
  
      <Link to="/sighn"> <Button     
      variant="contained" color="secondary"  
     >Sighn in    </Button></Link>
      <Routes>
        <Route  path="login" element={<Login />} ></Route>
        {/* <Route path="home" element={<Home />}></Route> */}
        <Route path="sighn" element={<SighnIn />}></Route>
        <Route path="songs" element={<Song />}></Route>
        <Route path="addsong" element={<AddSong />}></Route>
        <Route path="addsong/:id" element={<AddSong />}></Route>
        <Route path="kkk" element={<Navigate to="/gg" />} />
      </Routes>


    </div>
  );
}


// export default App;

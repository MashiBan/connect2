import React, { useState } from 'react'
import {Link} from "react-router-dom";
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';
import "./Join.css"

let user={name1:"",year1:""};



const Join = () => {
   
 const [name,setname]=useState("");
 const [year,setyear]=useState("");
 


const senduser=()=>{
    user.name1=document.getElementById("nameinput").value;
    user.year1=document.getElementById("yearinput").value;
    document.getElementById("nameinput").value="";
    document.getElementById("yearinput").value="";
}

  return (


    <div className="Joinmain">
        <div className="JoinContainer">
          <center>
          <Typography variant='h4' style={{fontWeight:'600', marginBottom:'0.1em'}}>🚀Connect2</Typography>    
        <Typography variant='h6' style={{fontWeight:'400', marginBottom:'2em'}}>Welcome Back</Typography>
        
        </center>
        <Card style={{paddingTop:'0.5em', padding:'2em', width:'24em'}}>
        <h1>Log In</h1>
          <Box>
             {/* <input type="text" onChange={(e)=>setname(e.target.value)} id="nameinput" placeholder="Enter Your name" /> */}
             <TextField label="Name" variant="outlined" onChange={(e)=>setname(e.target.value)} id="nameinput" placeholder="Enter your name" fullWidth/>
             <br></br>
             <br></br>
             {/* <input type="text" onChange={(e)=>setyear(e.target.value)} id="yearinput" placeholder="Enter Your year" /> */}
             <TextField label="Year" variant="outlined" onChange={(e)=>setyear(e.target.value)} id="yearinput" placeholder="Enter your year" fullWidth/>
             <br></br>
             <br></br>
             <Link onClick={(e)=>(!name,!year)?e.preventDefault() :null } to="/main"><Button variant="contained" onClick={senduser} fullWidth>Log in</Button></Link>
            </Box>
            </Card>
        </div>
    </div>
  )
}

export default Join
export {user}



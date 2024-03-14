import React, { useState }from 'react'
import axios from "axios"
import { useNavigate , Link } from 'react-router-dom'

function Signup() {

    const history = useNavigate();

    const [name , setName ] = useState(' ')
    const [ email , setEmail ] = useState('')
    const [password , setPassword ] = useState('')
   
    async function submit(e){
        e.preventDefault();
        try{

            await axios.post("http://localhost:8000/signup",{
                name,email,password
            })
            .then(res=>{
                if(res.data==="exist"){
                   
                    alert("User already existed")

                

                }else if (res.data==="notexist"){
                    history("/")
                    alert("Submited succesfully")

                }
             })
             .catch(e=>{
                alert("wrong details")
                console.log(e);
             })

        }catch(e){

            console.log(e);

        }
    }


  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>

    <div className='w-50 bg-black  rounded p-3'>
        <h1 className='text-danger'>Signup</h1>
        <form action="/signup" method="post">
        <input type ="text" onChange={(e)=>{setName(e.target.value)}} className='form control' placeholder="Enter name" required/><br/><br/>
            <input type ="email" onChange={(e)=>{setEmail(e.target.value)}} className='form control' placeholder="Enter email" required/><br/><br/>
            <input type ="password" onChange={(e)=>{setPassword(e.target.value)}} className='form control'  placeholder="Enter password" required/><br/><br/>
           <h4><input type ="submit" className='text-success bg-black'  onClick={submit}/></h4> 

        </form>
        <br/>
        <h6>Already have account?</h6>
        
       <h3> <Link to ='/' className='text-white'>Login</Link></h3>
    </div>
    </div>

  )
}

export default Signup
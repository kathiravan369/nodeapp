import React, { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function CreateUser() {
    const[name,setName] = useState()
    const[age,setAge] = useState()
    const[address,setAddress] = useState()
    const[phone,setPhone] = useState()
    const[blood,setBlood] = useState()

    
    const navigate = useNavigate()
    

    const Submit = (e) =>{
       e.preventDefault();

       axios.post("http://localhost:8000/createUser",{name,age,address,phone,blood})
       .then(result => {
           console.log(result)
           navigate('/home')
       })
       .catch(err => console.log(err))
    }
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
       
        <div className='w-50 bg-black rounded p-3'>
            <form onSubmit={Submit}>
                <h2 className='text-danger'>Add User</h2>
                <div className='mb-2'>
                    <input type="text" placeholder='Enter Name' className='form control'
                    onChange={(e) =>setName(e.target.value)} required/>
                </div>
                <div className='mb-2'>
                    <input type="text" placeholder='Enter Age' className='form control'
                    onChange={(e) =>setAge(e.target.value)} required/>
                </div>
                <div className='mb-2 ' >
                    <textarea style={{width:"190px"}} placeholder='Enter Address' className='form control'
                    onChange={(e) =>setAddress(e.target.value)} required/>
                </div>
                <div className='mb-2'>
                    <input type="text" placeholder='Enter number' className='form control'
                    onChange={(e) =>setPhone(e.target.value)} required/>
                </div>
                <div className='mb-2'>
                    <input type="text" placeholder='Enter bloodgroup' className='form control'
                    onChange={(e) =>setBlood(e.target.value)} required/>
                </div>
                

                <button className='btn btn-success'>Add</button>
            </form>
        </div>
    </div>
  )
}

export default CreateUser
import React,{ useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";



function Home() {
    const[users,setUsers] = useState([])

     useEffect(() =>{
        axios.post('http://localhost:8000/home')
        .then(result => setUsers(result.data))
        .catch(err => console.log(err))

     },[])
    
     
    const handleDelete = (id) =>{
        axios.delete('http://localhost:8000/deleteUser/'+id)
        .then(res => {console.log(res)
              window.location.reload()
        })
        .catch(errr => console.log(errr))
    }
  return (
  <div className='bg-primary vh-100'>
    <h1 className='text-white'>Welcome to Employee Portal</h1>
    <Link to="/create" className='btn btn-success'>Add +</Link>
            <Link to="/" className='btn btn-danger' style={{marginLeft:"20px"}}>Logout</Link>
     

    <div className='d-flex justify-content-center align-items-center mt-5'>
        <div className='w-50 bg-black text-white rounded p-3'>
       
          <table className='table bg-black text-white'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>Bloodgroup</th>
                        <th>Action</th>

                    </tr>
                </thead>
                <tbody>
                    
                 {
                  users.map((user) => {
                        return <tr>
                            <td>{user.name}</td>
                            <td>{user.age}</td>
                            <td>{user.address}</td>
                            <td>{user.phone}</td>

                            <td>{user.blood}</td>
                            <td><Link to={`/update/${user._id}`} className='btn btn-success'>Update</Link>
                            <button className='btn btn-danger' style={{marginLeft:"10px"}}
                            onClick={(e) => handleDelete(user._id)}>Delete</button></td>
                        </tr>
                    })
                 }

                </tbody>



            </table>
            
            </div> 
       
            </div> 
        
    </div>
  )
}

export default Home
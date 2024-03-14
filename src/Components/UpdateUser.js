import React ,{useState , useEffect} from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import axios from 'axios'

function UpdateUser() {
    const{id} = useParams()
    const[name,setName] = useState()
    const[age,setAge] = useState()
    const[address,setAddress] = useState()
    const[phone,setPhone] = useState()
    const[blood,setBlood] = useState()

     const navigate = useNavigate()

     useEffect(() =>{
        axios.get('http://localhost:8000/getUser/'+id)
        .then(result => {console.log(result)
            setName(result.data.name)
            setAge(result.data.age)
            setAddress(result.data.address)
            setPhone(result.data.phone)
            setBlood(result.data.blood)

            
        })
        .catch(err => console.log(err))

    },[])

    const Update = (e) =>{
        e.preventDefault();

        axios.put("http://localhost:8000/updateUser/"+id,{name,age,address,phone,blood})
        .then(result => {
            console.log(result)
            navigate('/home')
        })
        .catch(err => console.log(err))
    }

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
       
        <div className='w-50 bg-black rounded p-3'>
            <form onSubmit={Update}>
                <h2 className='text-danger'>Update User</h2>
                <div className='mb-2'>
                    <input type="text" placeholder='Enter Name' className='form control'
                     value={name} onChange={(e) =>setName(e.target.value)}/>
                </div>
                <div className='mb-2'>
                    <input type="text" placeholder='Enter Age' className='form control'
                   value={age}  onChange={(e) =>setAge(e.target.value)}/>
                </div>
                <div className='mb-2 ' >
                    <textarea style={{width:"190px"}} placeholder='Enter Address' className='form control'
                    value={address} onChange={(e) =>setAddress(e.target.value)}/>
                </div>
                <div className='mb-2'>
                    <input type="text" placeholder='Enter number' className='form control'
                    value={phone} onChange={(e) =>setPhone(e.target.value)}/>
                </div>
                <div className='mb-2'>
                    <input type="text" placeholder='Enter bloodgroup' className='form control'
                    value={blood} onChange={(e) =>setBlood(e.target.value)}/>
                </div>
                

                <button className='btn btn-success'>Update</button>
            </form>
        </div>
    </div>
  )
}

export default UpdateUser
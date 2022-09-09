import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link,useNavigate, useParams} from 'react-router-dom';
export default function EditUser() {


   let navigate = useNavigate()

    const {id}= useParams();
    const[user,setUser]=useState({
       firstName:"",
       lastName:"",
       emailId:"",
    })
    useEffect (()=>{
      loadUser();
      },[]);
   
    const{firstName,lastName,emailId}=user;

    const onInputChange=(e)=>{
         setUser({...user,[e.target.name]:e.target.value}) 
    };

    //first initial submission for the user to update data
    const onSubmit=async (e)=>{
       e.preventDefault();
       await axios.put(`http://localhost:8080/api/v1/employees/${id}`,user)
       navigate("/")
    };
   
     //laoding data for existing already
    const loadUser = async ()=>{
           const result = await axios.get(`http://localhost:8080/api/v1/employees/${id}`)
           setUser(result.data)
    }

   


  return (
    <div className='container'>
        <div className='row'>
          <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
          <h3 className='text-center m-4'> Edit User</h3>
          <form onSubmit={(e)=>onSubmit(e)}>
           <div className='mb-3'>
            <label htmlFor='firstName' className='form-label'>
             First Name
            </label>
             <input 
             type={"text"}
             className="form-control"
             placeholder='Enter your First Name'
             name="firstName"
             value={firstName}
              onChange={(e)=> onInputChange(e)}/>
             <label htmlFor='lastName' className='form-label'>
             Last Name
            </label>
             <input 
             type={"text"}
             className="form-control"
             placeholder='Enter your Last Name'
             name="lastName"
             value={lastName}
             onChange={(e)=> onInputChange(e)}/>
             <label htmlFor='emaiId' className='form-label'>
             Email Id
            </label>
             <input 
             type={"text"}
             className="form-control"
             placeholder='Enter your Email Id'
             name="emailId"
             value={emailId}
             onChange={(e)=> onInputChange(e)}/>
           </div>
           <button type='submit' className='btn btn-outline-success'>
            Update</button>
           
           <Link className='btn btn-outline-danger mx-2 ' to="/">
            Cancel</Link>
            </form>
          </div>
            
        </div>



    </div>
  )
}

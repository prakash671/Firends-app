
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link,useParams } from 'react-router-dom';

export default function ViewUser() {

  const [user,setUsers] = useState({
    firstName:"",
    lastName:"",
    emailId:"", 

  });
  
  const {id} = useParams();
    
  useEffect(() => {
     loadUser();
  },[]);

  const loadUser=async ()=>{
         const result = await axios.get(`http://localhost:8080/api/v1/employees/${id}`)
         setUsers(result.data);
  };
return (
<div className='container'>
        <div className='row'>
          <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
          <h3 className='text-center m-4'> Friend </h3>
           <div className='card'>
            <div className='card-header'>
              <h3>Details: {user.id}</h3> 
                <ul className='list-group list-group-flush'>
                  <li className='list-group-item'>
                    <b>First Name:</b>
                    {user.firstName}
                  </li>
                  <li className='list-group-item'>
                    <b> Last Name:</b>
                    {user.lastName}
                  </li>
                  <li className='list-group-item'>
                    <b> Email Id:</b>
                    {user.emailId}
                  </li>
                </ul>
            </div>
           </div>
           <Link className='btn btn-primary my-2' to={"/"}>Back to Home</Link>
          </div>
          </div>
          </div>
  )
}
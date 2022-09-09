import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import '../index.css';
export default function Home() {


  const [users,setUsers] = useState([]);

  useEffect(() => {
     loadUser();
  },[]);

  const {id} = useParams()
  const loadUser=async ()=>{
         const result = await axios.get("http://localhost:8080/api/v1/employees")
         setUsers(result.data);
  };

  const deleteUser= async(id)=>{
     await axios.delete(`http://localhost:8080/api/v1/employees/${id}`)
     loadUser()
  }
  
  return (
    <div className='container'>
        
        <div className='py-4'>
        <div className='banner'>
        <table className="table border shadow">
        
  <thead className='tblhead'>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">EmailId</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody className='tblbody'>
    {
      users.map((user,index)=>(
        <tr>
        <th scope="row" key={user.empid}> {user.empid} </th>
        <td>{user.firstName}</td>
        <td>{user.lastName}</td>
        <td>{user.emailId}</td>
        <td>
             <Link className='btn btn-primary mx-2' to={`/viewuser/${user.empid}`}> View</Link>
             <Link className='btn btn-outline-info mx-2' to={`/edituser/${user.empid}`}> Update</Link>
             <button className='btn btn-danger mx-2' onClick={()=> deleteUser(user.empid)}> Delete</button>
        </td>
      </tr>
      ))
   
}
  </tbody>
  
</table>
</div>
      </div>
    </div>
    
  )
}

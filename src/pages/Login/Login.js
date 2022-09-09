import React, { Component } from 'react'
import  User from './images/icons8-customer.png'
import './Login.css'
export default class Login extends Component {
  
    state={
        email:'',
        password:''
    }

    handleChange = (e) =>{
        const {name,value} = e.target
        this.setState({[name]:value})
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        this.props.isLogin(true)
    }
  
    render() {
    return (
        <div className='container-v'>
      <div className='div-login'>
         <div className='div-login-logo'>
             <img src={User}></img>
         </div>
           <div>
             <form onSubmit={this.handleSubmit}>
                <input type='email' name='email' placeholder='enter your email id' required onChange={this.handleChange}></input>
                <input type='password' name='password' placeholder='enter your password' required onChange={this.handleChange}></input>
                <button onSubmit={this.handleSubmit}> Login</button>
             </form>
           </div>
      </div>
      </div>
    )
  }
}   

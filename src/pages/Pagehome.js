import React from 'react'
import'./Pagehome.css'
import Heartlogo from './images/iconheart.gif'
import Savelogo from './images/icons8-save-100.png'
import PrivacyLogo from './images/icons8-privacy-100.png'
import ListLogo from './images/icons8-list-view-100.png'
import EditLogo from './images/icons8-edit-64.png'
import userLogo from './images/icons8-customer-100.png'
import Pagehome2 from './Pagehome2'

export default function Pagehome() {
  return (
   
        <div>
<PageHomesec1></PageHomesec1>
  <Pagehome2></Pagehome2>
        </div>
        
        
    
  )
}


function PageHomesec1() {
    return(
        
        <section className='service'>
        <div className='container'>
           <h2 className='title'> Basic Personal Friends Listing Web App</h2>
            <p className='subtitle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            </p>

           <div className='row'>
               <div className='col-md-4'>
                   <div className='service-box'>
                       <img src={Heartlogo}/>
                       <h6> Favourite Friends</h6>
                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quae vitae consequatur, ea non ab libero quisquam commodi unde veritatis deserunt illo eveniet quibusdam aliquam fuga aut officia sed voluptas!</p>
                         
                   </div>
               </div>
               <div className='col-md-4'>
               <div className='service-box active-service'>
                       <img src={ListLogo}/>
                       <h6>Details List</h6>
                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quae vitae consequatur, ea non ab libero quisquam commodi unde veritatis deserunt illo eveniet quibusdam aliquam fuga aut officia sed voluptas!</p>
                         
                   </div>
               </div>
               <div className='col-md-4'>
               <div className='service-box'>
                       <img src={PrivacyLogo}/>
                       <h6> Privacy</h6>
                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quae vitae consequatur, ea non ab libero quisquam commodi unde veritatis deserunt illo eveniet quibusdam aliquam fuga aut officia sed voluptas!</p>
                         
                   </div>
               </div>
           </div>
           <div className='row'>
               <div className='col-md-4'>
                   <div className='service-box active-service'>
                       <img src={Savelogo}/>
                       <h6> Save </h6>
                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quae vitae consequatur, ea non ab libero quisquam commodi unde veritatis deserunt illo eveniet quibusdam aliquam fuga aut officia sed voluptas!</p>
                         
                   </div>
               </div>
               <div className='col-md-4'>
               <div className='service-box'>
                       <img src={EditLogo}/>
                       <h6>Edit</h6>
                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quae vitae consequatur, ea non ab libero quisquam commodi unde veritatis deserunt illo eveniet quibusdam aliquam fuga aut officia sed voluptas!</p>
                         
                   </div>
               </div>
               <div className='col-md-4'>
               <div className='service-box active-service'>
                       <img src={userLogo}/>
                       <h6> View Seperate User Details</h6>
                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quae vitae consequatur, ea non ab libero quisquam commodi unde veritatis deserunt illo eveniet quibusdam aliquam fuga aut officia sed voluptas!</p>
                         
                   </div>
               </div>
           </div>
        </div>
        
   </section>
   

    )
}




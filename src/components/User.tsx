import React from 'react'

function User({user}) {
  console.log(user)
  return (  



<div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img className="p-8 rounded-t-lg" src={user.image} alt="product image" />
    </a>
    <div className="px-5 pb-5">
        <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{user.firstName} {user.lastName}</h5>
        </a>
        <div className="flex items-center mt-2.5 mb-5">
               
          
        <a href="#">
            <p className="text-center text-wrap text-s font-thin  font-semibold tracking-tight text-gray-900 dark:text-white pr-0 ">{user.email} </p>
        </a>
          
           
        </div>
        <div className="flex items-center justify-between">
            <span className="text-start font-light text-gray-900 dark:text-white">{user.phone}</span>
            
        </div>
    </div>
</div>


  )
}

export default User
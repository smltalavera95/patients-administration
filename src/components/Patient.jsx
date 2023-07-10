import React from 'react'

const Patient =({patient})=>{

  const {name, owner, email, date, description} = patient

  return (
    <div className="bg-white shadow-md rounded-lg mx-5 py-5 px-10 mb-5">
         <p className="font-bold mb-3 text-gray-700 uppercase">
           Name: {''}
           <span className="font-normal normal-case">{name}</span>
         </p>
         <p className="font-bold mb-3 text-gray-700 uppercase">
           Pet Owner: {''}
           <span className="font-normal normal-case">{owner}</span>
         </p>
         <p className="font-bold mb-3 text-gray-700 uppercase">
           Email Owner: {''}
           <span className="font-normal normal-case">{email}</span>
         </p>
         <p className="font-bold mb-3 text-gray-700 uppercase">
           Visit Day: {''}
           <span className="font-normal normal-case">{date}</span>
         </p>
         <p className="font-bold mb-1 text-gray-700 uppercase">Description: {''}
           <span className="text-gray-700 font-normal normal-case">{description}</span>
         </p>
      </div>
  )
}

export default Patient
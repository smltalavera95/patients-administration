import React from 'react'

const Patient =()=>{
  return (
    <div className="bg-white shadow-md rounded-lg mx-5 py-5 px-10">
         <p className="font-bold mb-3 text-gray-700 uppercase">
           Name: {''}
           <span className="font-normal normal-case">Meow</span>
         </p>
         <p className="font-bold mb-3 text-gray-700 uppercase">
           Pet Owner: {''}
           <span className="font-normal normal-case">Meow</span>
         </p>
         <p className="font-bold mb-3 text-gray-700 uppercase">
           Email Owner: {''}
           <span className="font-normal normal-case">William Turner</span>
         </p>
         <p className="font-bold mb-3 text-gray-700 uppercase">
           Visit Day: {''}
           <span className="font-normal normal-case">October 10, 2021</span>
         </p>
         <p className="font-bold mb-1 text-gray-700 uppercase">Description:</p>
         <p className="text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quibusdam quaerat cumque, veritatis nobis officiis eaque voluptas.</p>
      </div>
  )
}

export default Patient
import React from 'react'

const Form = () => {
  return (
    <div className='md:w-1/2 lg:w-2/5 mb-10'>
      <h2 className='font-black text-2xl text-center mb-5'>Patient Record</h2>

        <form action="" className='bg-white shadow-md rounded-lg p-8'>
          <div className='mb-5'>
            <input className="border-2 rounded-md w-full p-2 mt-2 placeholder-gray-400" 
            type="text" name="" id="pet-name" placeholder='Pet Name'/>
          </div>
          <div className='mb-5'>
            <input className="border-2 rounded-md w-full p-2 mt-2 placeholder-gray-400" 
            type="text" name="" id="pet-owner" placeholder='Pet Owner'/>
          </div>
          <div className='mb-5'>
            <input className="border-2 rounded-md w-full p-2 mt-2 placeholder-gray-400" 
            type="email" name="" id="email-owner" placeholder='Email Owner'/>
          </div>
          <div className='mb-5'>
            <input className="border-2 rounded-md w-full p-2 mt-2 placeholder-gray-400" 
            type="date" name="" id="date-exit"/>
          </div>
          <div className='mb-5'>
            <textarea className="border-2 rounded-md w-full p-2 mt-2 placeholder-gray-400" 
            type="textarea" name="" id="pet-visit" placeholder='Description of the visit'/>
          </div>
          <input type="sumbit" name="submit" id="submit" value="Add Patient"
          className='bg-blue-900 w-full p-3 text-white uppercase font-bold text-center hover:cursor-pointer hover:bg-blue-700 transition-all' />
        </form>
    </div>
  )
}

export default Form
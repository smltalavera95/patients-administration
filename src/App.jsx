import Header from './components/header'
import Form from './components/Form'
import PatientsList from './components/PatientsList'
import { useState } from 'react'


function App() {


  return (
    <div className=" mx-auto">
      <Header/>
      <div className='mt-12 md:flex container md:px-10 px-5 mx-auto'>
        <Form/>
        <PatientsList/>
      </div>
      
    </div>
  )
}

export default App

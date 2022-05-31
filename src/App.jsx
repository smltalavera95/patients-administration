import Header from './components/header'
import Form from './components/Form'
import PatientsList from './components/PatientsList'
import { useState } from 'react'


function App() {


  return (
    <div className="container mx-auto">
      <Header/>
      <div className='mt-12 md:flex container md:mx-20 mx-5'>
        <Form/>
        <PatientsList/>
      </div>
      
    </div>
  )
}

export default App

import Header from './components/header'
import Form from './components/Form'
import PatientsList from './components/PatientsList'
import { useState } from 'react'


function App() {


  return (
    <div className="container">
      <Header/>
      <Form/>
      <PatientsList/>
    </div>
  )
}

export default App

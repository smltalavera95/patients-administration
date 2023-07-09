import { useState } from 'react'
import Header from './components/header'
import Form from './components/Form'
import PatientsList from './components/PatientsList'



function App() {

  const [patients, setPatients] = useState([]);

  return (
    <div className=" mx-auto">
      <Header/>
      <div className='mt-12 md:flex container md:px-10 px-5 mx-auto'>
        <Form 
          patients = {patients}
          setPatients = {setPatients}
        />
        <PatientsList/>
      </div>
      
    </div>
  )
}

export default App

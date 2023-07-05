import { useEffect, useState } from 'react'
import axios from 'axios'

import './App.css'
import './sass/index.scss'
import { Employee } from './components/interfaces/employee'
import { EmployeeList } from './components/lists/employee-list'
import { CreateEmployee } from './components/forms/create-employee'

function App() {
  const [employees, setEmployees] = useState<Employee[]>([])

  useEffect(() => {
    function getEmployees() {
      axios
        .get(
          'https://procom-interview-employee-test.azurewebsites.net/employee'
        )
        .then(function (response) {
          setEmployees(response.data)
        })
    }
    getEmployees()
  }, [])

  return (
    <div className="App">
      <CreateEmployee />
      <EmployeeList employees={employees} />
    </div>
  )
}

export default App

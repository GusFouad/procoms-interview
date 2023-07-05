import axios from 'axios'

import { Employee } from '../interfaces/employee'
import { EmployeeForm } from './employee-form'

export const CreateEmployee = () => {
  const onSubmit = async (data: Employee) => {
    await axios.post(
      'https://procom-interview-employee-test.azurewebsites.net/Employee',
      {
        ...data,
        id: 0,
        addresses: data.addresses.map((address) => ({
          ...address,
          apartmentNumber: Number(address?.apartmentNumber)
        }))
      }
    )
    window.location.reload()
  }
  return (
    <div>
      <EmployeeForm onSubmit={onSubmit} />
    </div>
  )
}

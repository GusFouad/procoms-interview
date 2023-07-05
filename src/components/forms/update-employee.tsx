import { useState } from 'react'
import axios from 'axios'

import { Employee } from '../interfaces/employee'
import { EmployeeForm } from './employee-form'

interface UpdateEmployeeProps {
  employee: Employee
  setShowModal: () => void
}
export const UpdateEmployee = ({
  employee,
  setShowModal
}: UpdateEmployeeProps) => {
  const [employeeId] = useState<number | undefined>(employee?.id)

  const onSubmit = async (data: Employee) => {
    const updatedData: Employee = {
      ...data,
      id: employee.id,
      addresses: data.addresses.map((address) => ({
        streetName: address?.streetName || '',
        postalCode: address?.postalCode || '',
        apartmentNumber: Number(address?.apartmentNumber) || 0,
        state: address?.state || '',
        country: address?.country || ''
      }))
    }
    await axios
      .put(
        `https://procom-interview-employee-test.azurewebsites.net/Employee/${employeeId}`,
        updatedData
      )
      .then((response) => {
        console.log('put request successful')
        console.log(response.data)
      })
    setShowModal()
    window.location.reload()
  }
  return (
    <>
      <EmployeeForm onSubmit={onSubmit} currEmployee={employee} />
    </>
  )
}

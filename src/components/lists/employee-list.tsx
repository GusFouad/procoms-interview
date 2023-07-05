import { Employee } from '../interfaces/employee'
import { EmployeeRow } from './employee-row'

interface EmployeeListProps {
  employees: Employee[]
}

export const EmployeeList = ({ employees }: EmployeeListProps) => {
  return (
    <div className="container mt-5">
      <h1>Employees List</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        {employees.map((employee: Employee, index: number) => {
          return (
            <tbody key={index}>
              <EmployeeRow employee={employee} />
            </tbody>
          )
        })}
      </table>
    </div>
  )
}

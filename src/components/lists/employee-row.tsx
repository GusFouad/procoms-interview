import { useState } from 'react'
import classNames from 'classnames'

import { UpdateEmployee } from '../forms/update-employee'
import { Employee } from '../interfaces/employee'

interface EmployeeRowProps {
  employee: Employee
}

export const EmployeeRow = ({ employee }: EmployeeRowProps) => {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <tr>
        <td>{employee.firstName}</td>
        <td>{employee.lastName}</td>
        <td>{employee.phoneNumber}</td>
        <td>{employee.email}</td>
        <td>
          <button className="btn" onClick={() => setShowModal(true)}>
            More Details / Edit Details
          </button>
        </td>
      </tr>
      <div
        className={classNames('modal modal-lg fade show', {
          'd-block': showModal
        })}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Employee</h5>
              <button
                type="button"
                className="btn-close"
                onClick={() => setShowModal(false)}
              ></button>
            </div>
            <div className="modal-body">
              <UpdateEmployee
                employee={employee}
                setShowModal={() => setShowModal(false)}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

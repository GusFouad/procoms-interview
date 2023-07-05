import { useForm, useFieldArray, SubmitHandler } from 'react-hook-form'

import { Employee } from '../interfaces/employee'

interface EmployeeFormProps {
  currEmployee?: Employee
  onSubmit: SubmitHandler<Employee>
}

export const EmployeeForm = ({ currEmployee, onSubmit }: EmployeeFormProps) => {
  const { register, handleSubmit, control } = useForm<Employee>({
    defaultValues: {
      firstName: currEmployee?.firstName,
      lastName: currEmployee?.lastName,
      email: currEmployee?.email,
      phoneNumber: currEmployee?.phoneNumber,
      addresses: currEmployee
        ? currEmployee.addresses.map((address) => ({
            streetName: address?.streetName,
            postalCode: address?.postalCode,
            apartmentNumber: address?.apartmentNumber || 0,
            state: address?.state,
            country: address?.country
          }))
        : [
            {
              streetName: '',
              postalCode: '',
              apartmentNumber: 0,
              state: '',
              country: ''
            }
          ]
    }
  })

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'addresses'
  })

  return (
    <div className="container">
      <h1>Employee Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-6">
            <label htmlFor="firstName" className="form-label">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              {...register('firstName')}
            />
          </div>
          <div className="col-6">
            <label htmlFor="lastName" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              {...register('lastName')}
            />
          </div>
          <div className="col-6">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="text"
              className="form-control"
              id="email"
              {...register('email')}
            />
          </div>
          <div className="col-6">
            <label htmlFor="phoneNumber" className="form-label">
              Phone Number
            </label>
            <input
              type="text"
              className="form-control"
              id="phoneNumber"
              {...register('phoneNumber')}
            />
          </div>
          {fields.map((item, index) => (
            <div key={item.id} className="border p-3 mb-3 mt-2">
              <h4>Address {index + 1}</h4>
              <div className="row">
                <div className="mb-3 col-4">
                  <label
                    htmlFor={`addresses.${index}.streetName`}
                    className="form-label"
                  >
                    Street Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id={`addresses.${index}.streetName`}
                    {...register(`addresses.${index}.streetName`)}
                  />
                </div>
                <div className="mb-3 col-4">
                  <label
                    htmlFor={`addresses.${index}.postalCode`}
                    className="form-label"
                  >
                    Postal Code
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id={`addresses.${index}.postalCode`}
                    {...register(`addresses.${index}.postalCode`)}
                  />
                </div>
                <div className="mb-3 col-4">
                  <label
                    htmlFor={`addresses.${index}.apartmentNumber`}
                    className="form-label"
                  >
                    Apartment Number
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id={`addresses.${index}.apartmentNumber`}
                    {...register(`addresses.${index}.apartmentNumber`)}
                  />
                </div>
                <div className="mb-3 col-6">
                  <label
                    htmlFor={`addresses.${index}.state`}
                    className="form-label"
                  >
                    State
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id={`addresses.${index}.state`}
                    {...register(`addresses.${index}.state`)}
                  />
                </div>
                <div className="mb-3 col-6">
                  <label
                    htmlFor={`addresses.${index}.country`}
                    className="form-label"
                  >
                    Country
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id={`addresses.${index}.country`}
                    {...register(`addresses.${index}.country`)}
                  />
                </div>
                <button
                  type="button"
                  className="btn btn-danger col-3 mx-auto"
                  onClick={() => remove(index)}
                >
                  Remove Address
                </button>
              </div>
            </div>
          ))}
          <div>
            <button
              type="button"
              className="btn btn-info col-3 mx-2"
              onClick={() => append(null)}
            >
              Add Adress
            </button>
            <button type="submit" className="btn btn-success col-3 mx-2">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

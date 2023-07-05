interface EmployeeAddresses {
  streetName: string
  postalCode: string
  apartmentNumber: number
  state: string
  country: string
}

export interface Employee {
  id: number
  firstName: string
  lastName: string
  email: string
  phoneNumber: string
  addresses: Array<EmployeeAddresses | null>
}

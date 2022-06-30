const employees = [
  {
    id: 1,
    name: 'Sergio'
  },
  {
    id: 2,
    name: 'Ramiro'
  },
  {
    id: 3,
    name: 'Regina'
  }
]

const salaries = [ 
  {
    id: 1,
    salary: 1500
  },
  {
    id: 2,
    salary: 2400
  }
]

const getEmployeeById = (id, callback) => {
  const employee = employees.find( ( e ) => e.id === id )

  if(employee){
    callback(null, employee)
    return
  }
  callback(`the employee with ${id} does not exist`)

}

const id = 2

getEmployeeById(id, (error, employee) => {
  if(error){
    console.log(error)
    return
  }

  console.log(`The employee: ${employee.name}`)

})
// const time = 4000
// setTimeout(() => {
//   console.log(`This runs after ${time} seconds`)
// }, time)

// const functionToExecute = () => {
//   console.log(`This runs after ${time} seconds`)
// }

// setTimeout(functionToExecute, time)

const getUserById = (id, callback) => {
  const user = {
    id,
    name: 'Braian'
  }
  setTimeout(() => callback(user), 2000)
}

getUserById(5, ({name, id}) => console.log(`Name: ${name} -- ID: ${id}`))
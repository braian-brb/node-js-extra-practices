const objPerson = {
  name: 'Braian',
  lastName: 'Bilicic',
  profession: 'Backend developer',
  getDescription() {
    return `${this.name} ${this.lastName} is ${this.profession}`
  }
}

// const name = objPerson.name
// const lastName = objPerson.lastName
// const profession = objPerson.profession


// const {name, lastName, profession} = objPerson

// console.log(name)
// console.log(lastName)
// console.log(profession)

// by not having the age defined with the = we are assigning a default value
const printData = ({name, lastName, profession, age = 30}) => {
  console.log(name, lastName, profession, age)
}
printData(objPerson)


// Array destructuring

const pets = ['Blade,', 'Shara', 'Yoru']

// const p1 = pets[0]
// const p2 = pets[1]
// const p3 = pets[2]

// const [p1, p2, p3] = pets

// console.log(p1, p2, p3)

const [, , p3] = pets

console.log(p3)


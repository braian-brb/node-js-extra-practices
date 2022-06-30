const firstName = 'Braian'
const lastName = 'Bilicic'

const output = 'Name: ' + firstName + ' Lastname: ' + lastName
const outputTemplateString = `Name: ${firstName} Lastname: ${lastName}`

console.log(output)
console.log(outputTemplateString)

if(output === outputTemplateString){
  console.log('Equivalent')
}
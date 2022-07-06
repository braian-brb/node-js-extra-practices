import fs from 'fs'
import { logic } from './logic.js'
const multiply = (base) => {

  console.log('==============')
  console.log(`Table of ${base}`)
  console.log('==============')

  const result = logic(base)

  console.log(result)
  const fileName = `tableOf${base}.txt`
  fs.writeFile(`tables/${fileName}`, result, (error) => {
    if(error) throw new Error(error);
    console.log(`The file '${fileName}' has been saved!`)
  })
}

export {
  multiply
}
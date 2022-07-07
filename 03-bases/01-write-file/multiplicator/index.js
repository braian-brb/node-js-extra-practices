import fs from 'fs'
import colors from 'colors'
import { logic } from './logic.js'
const multiply = (base, limit, visualize) => {

  console.log('=============='.green)
  console.log(`Table of ${base}`.red)
  console.log('=============='.green)

  const result = logic(base, limit)

  if(visualize) console.log(result.blue)
  
  const fileName = `tableOf${base}.txt`
  fs.writeFile(`tables/${fileName}`, result, (error) => {
    if(error) throw new Error(error);
    console.log(colors.rainbow(`The file '${fileName}' has been saved!`))
  })
}

export {
  multiply
}
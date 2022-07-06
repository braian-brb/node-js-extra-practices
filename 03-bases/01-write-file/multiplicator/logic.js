const logic = (base) => {
  let result = '';

  for(let i=0; i <= 10 ; i++){
    result += `${base} * ${i} = ${base * i} \n`
  }
  
  return result

}

export {
  logic
}
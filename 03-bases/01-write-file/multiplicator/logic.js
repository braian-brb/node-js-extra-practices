const logic = (base, limit) => {
  let result = '';

  for(let i=0; i <= limit ; i++){
    result += `${base} * ${i} = ${base * i} \n`
  }
  
  return result

}

export {
  logic
}
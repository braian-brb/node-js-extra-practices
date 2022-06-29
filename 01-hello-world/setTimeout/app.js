console.log( 'Start of script' ) // #1

setTimeout( () => {
  console.log('First timeout') // #5
}, 5000);

setTimeout( () => {
  console.log('Second timeout') // #3
}, 0);

setTimeout( () => {
  console.log('Third timeout') // #4
}, 0);


console.log('End of script') // #2
// // function to block the stack for x number of milliseconds
// const pause = milliSeconds => {
//   // get the current time
//   var startTime = new Date().getTime(); 
//   // block stack until time's up
//   while (new Date().getTime() < startTime + milliSeconds); 
// }

// pause(8000);

//! wait 8 seconds in a separate thread
setTimeout(() => {
  document.querySelector('button')
  classList.remove('display-area');
}.8000)
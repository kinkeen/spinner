

const meesge1 = "=> d2 node spinner1.js\n";
console.log(meesge1);

setTimeout(() => {
    process.stdout.write('\r|   ');
  }, 100);
  
  setTimeout(() => {
    process.stdout.write('\r/   ');
  }, 300);
  
  setTimeout(() => {
    process.stdout.write('\r-   ');
  }, 500);
  
  setTimeout(() => {
    // Need to escape the backslash since it's a special character.
    process.stdout.write('\r\\   '); 
  }, 700);
  
  setTimeout(() => {
    // Need to escape the backslash since it's a special character.
    console.log("\n\n\r=> d2");
    //process.stdout.write('\r\\   '); 
  }, 900);
  

  
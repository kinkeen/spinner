

const meesge1 = "=> d2 node spinner1.js\n";
console.log(meesge1);

function applySpinnerWithTimeout(timeout, replacChar) {
    setTimeout(function() { 
        process.stdout.write(replacChar);
    }, timeout);
  }

applySpinnerWithTimeout(100, '\r|   '); 
applySpinnerWithTimeout(300, '\r/   '); 
applySpinnerWithTimeout(500, '\r-   '); 
applySpinnerWithTimeout(700, '\r\\   '); 
  
setTimeout(() => {
    console.log("\n\n\r=> d2");
}, 900);
  

  
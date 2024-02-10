// this is to test the file system in the node js module


const { log } = require("console");
var fs = require("fs");

// fs.writeFile("message.txt", "Hello from node", (err) =>{
//     if (err) throw err;
//     console.log("file has been sucessfully updated");
    
// }
// );  in this code we write within a text file

// now we gonna the read teh data in the file 

fs.readFile("message.txt", "Utf8" , function(err, data){
    if (err) throw err;
    console.log("Read is succesfull ");
    console.log(data);
    
});
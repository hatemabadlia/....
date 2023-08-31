const path = require("path");
//get absoulte path  
let file  = path.resolve(__dirname,"hatem","abadlia",'age.txt');
console.log(file);
//join mthoed 
let file2 = path.join('/hatem',"abadlia",'age.txt');
console.log(file2);
// separator in path 
console.log(path.sep);
//the name of the last file in the path 
console.log(path.basename(file));
 
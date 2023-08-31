//fs is file systeem 
let fs = require("fs");
//for read file we do readfilesync(the path of the file , ytf-8);
let numbre1 = fs.readFileSync("./hatem/abadlia/age.txt",'utf-8');
//to crate a file we do writefilesync ( the path of the file , vaalue )
let numbre2 = fs.writeFileSync(
    "./hatem/pass.txt",
    '0699692291-2000',
    //  flag: تنحيش محتوى القديم  و تزيد فوقو جديد
    {flag:"a"},
    )
    console.log(numbre1);

     
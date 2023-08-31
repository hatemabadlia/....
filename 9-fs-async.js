let fs = require("fs");
const { createConnection } = require("net");
console.log("startt ");
fs.readFile("./hatem/password.txt","utf-8",(err,reslt)=>
{
    if(err)
    {
        console.log("err");
        return
    }
    let first = reslt;
    fs.readFile("./hatem/abadlia/age.txt",'utf-8',(err,ruslt)=>{
        if(err)
        {
            console.log('err');
            return
        }
        let second = ruslt;
        fs.writeFile
        (
            "./hatem/abadlia/newfile.txt",
            `hi frfom writeasyc ${first}, ${second}`,
            (err,ruslt)=>
            {
                if(err)
                {
                    console.log('err');
                    return;
                }
                console.log(ruslt)
            }
        )
    })
}) 
console.log("start the next project")
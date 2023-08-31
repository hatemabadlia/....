const { readFile } = require("fs");
let gettext = (path)=>
{
    
    return new Promise((resolve,reject)=>
    {
        readFile(path,"utf-8", (err,data)=>
        {
            if(err)
            {
                reject(err)
            }
            else resolve(data)
        })
        
    })
}
gettext("./hatem/abadlia/age.txt").then((res)=>{console.log(res);}).catch((err)=>console.log(err));


//accsses ou system 
const windows = require("os");
//information about your system
console.log(windows.userInfo());
//time 
console.log(windows.uptime());
let curentos =
{
    // type of sysytem && &&total ram && free ram ;
    name : windows.type(),
    release :windows.release(),
    totalmem : windows.totalmem(),
    freemem : windows.freemem(),
}

console.log(curentos)
const names=['ankith','manmith','akhil','deepak'];

//filter working like a loop
names.filter((item)=>{
    console.log(item);
});

//or

let namesLoop=names.filter((names)=>{
    return names==='ankith';
});

console.log(namesLoop);

//creatig file

const fs= require('fs'); //import fs using require function

fs.writeFileSync('helloWorld.txt',"Hello Wold!");//with using writeFileSync hellow worl pas sinside helloworld.txt


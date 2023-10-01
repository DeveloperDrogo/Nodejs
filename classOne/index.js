var a=20;
var b=30;
if(a>b){
    console.log("a is greater then b");
}else{
    console.log(" b is greater then a");
}

function number(a){
    return a;
}

var check=number(100);
console.log(check);

for(i=0;i<10;i++){
    console.log(i);
}

const names=['ankith','manmith','akhil','bhavya','manasa'];

console.log(names);

for(i=0;i<names.length;i++){
    if(names[i]=='manmith'){
        continue;
    }else if(names[i]=='manasa'){
        break;
    }
    console.log(names[i]);
}


//import data from app.js

const app=require('./app');
console.log(app);
console.log(app.name);
console.log(app.func('app developer'));





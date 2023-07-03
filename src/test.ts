// this script is used to compare the size of a json of tuples and a two arrays of tuples

const array:number[]=[];
for (let i=0; i< 1000;i++){
    array.push(i);
}
const obj:{x:number,y:number}[]=[];
const obj2:{x:number[],y:number[]}={x:[],y:[]};

for (let i=0; i< 1000;i++){
    obj.push({x:i,y:i});
    obj2.x.push(i);
    obj2.y.push(i);
}

const strobj=JSON.stringify(obj);
const strobj2=JSON.stringify(obj2);

// let's first benchmark the size of the two objects
console.log("size of obj: ",strobj.length);
console.log("size of obj2: ",strobj2.length);

// now let's benchmark the time it takes to parse the two objects
console.time("obj");
JSON.parse(strobj);
console.timeEnd("obj");

console.time("obj2");
JSON.parse(strobj2);
console.timeEnd("obj2");

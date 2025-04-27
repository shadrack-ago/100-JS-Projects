const person ={name:"eddy",age:20,role:"instructor"}
for(let key in person){
    console.log(`${key}: ${person[key]}`)
}

//learn about for in loop

//learning for...of loop
const students =["eddy","mohammed","ahmed"]
for(let student of students){
    console.log(student);
}
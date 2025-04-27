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


//learning forEach loop
const numbers = [1,2,3,4,5]
numbers.forEach((number,index)=>{
    console.log(`index: ${index}, number: ${number}`)
})

// learning break and continue
for(let i=1; i<=10; i++){
    if(i===5){
        break; // exit the loop when i is 5
    }
    console.log(`${i}`); // prints 1, 2, 3, 4
}
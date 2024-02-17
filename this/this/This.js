/*

for normal function :
     this>> will refer how its been called globally or in some object


for arrow function :
    this >> will refer where its been called 


*/



// normal function 

/*
console.log(this)

const obj={
    name:"bhaskar",

    dummy: function(){
        console.log(this)
    }
}

obj.dummy()

*/


// arrow function 
const dummy=()=>{
    console.log(this)
}

dummy()

const obj={
    dummy
}

obj.dummy()
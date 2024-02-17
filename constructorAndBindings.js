function Student(name,age,marks){
    this.name=name;
    this.age=age;
    this.marks=marks;

    this.dummy=function(arg1,arg2){
        console.log(`the details are ${arg1} and ${arg2}`)
    }
}


function Teacher(name,age,exp){
    this.name=name;
    this.age=age;
    this.exp=exp;

    // this.dummy=function(arg1,arg2){
    //     console.log(`the details are ${arg1} and ${arg2}`)
    // }
}

const student1=new Student("bhaskar",23,90)
console.log(student1)
student1.dummy("hyd","ammerpet")
const teacher1=new Teacher("t1",30,5)
console.log(teacher1)
// bind 
// teacherDummy=student1.dummy.bind(teacher1,"bih","patna")
// teacherDummy()


// call
teacherDummy=student1.dummy.call(teacher1,"bih","patna")


// apply
teacherDummy=student1.dummy.apply(teacher1,["bih","patna"])

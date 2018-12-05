/*
var person = {name: "amitabh",sname:"bachchan"};
console.log(person);

Object.defineProperty(person,"name",{
                                    value:"Brandon",
                                    configurable:true,
                                    writable:false,     //now we cannot change person key 
                                    enumerable:true,
                                    }); 
console.log(person);

Object.defineProperty(person,"name",{
    
    configurable:true,
    value:"shubham",
    enumerable:true,
});
console.log(person);

Object.defineProperties(person,{
                                name :{
                                
                                configurable:true,
                                value:"Rohan",
                                enumerable:true,
                                    },

                                sname:{
                                    value:"Bhosale",
                                    }
                                }
                        );

console.log(person);



*/

function Person(id,name)
{
    this.id = id;
    this.name = name;

    Person.prototype.print = function(){
        console.log(this.id);
    }
}

var person1 = new Person(101,"amit");
var person2 = new Person(102,"satyen");

console.log(person1);
Person.prototype.sname ="sharma";


console.log(person1.sname);
person1.print();

console.log("analysing the code");

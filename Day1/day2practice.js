/*
x=5;
console.log(x);
delete (x);

//console.log(x);
*/



//
/*

function f1(a)
{
    console.log(a);
    a();
    a();
}
*/
//not comment

// f1(100)

/*function f2()
{
    console.log("hello");
}
*/


//or below way

/*
f1(function(){
    console.log("hello");
});
*/
//not a comment


//objects

// 1st way to create object
/*
var person1 ={}
var person2 ={name:"shubam"};
var person3 ={name:"shubh", id:101};

console.log(person3);
console.log(person2.name);
console.log(person3["name"]);
console.log(person3['name']);

*/


//2nd way to create object 

/*
var amitabh= {name:"Amitabh", sname :"Bachchan"};
var abhishek= Object.create(amitabh);

abhishek.name = "Abhishek";

console.log("name :"+abhishek.name);
console.log("sname :"+abhishek.sname);

*/



//3rd way of creating object

/*
function Person(fname,lname)
{
    this.fname = fname;
    this.lname = lname;
    console.log(this.fname);

    this.print= function()
                    {
                        console.log(this.fname);
                        console.log(this.lname);
                    }
}

var person = new Person("amitabh" , "bachchan");
var person2 = new Person("abhishek","bachchan");

person.print(); 

*/


//4th way of creating object

class Person{
    constructor(fname,lname)
    {
        this.fname = fname;
        this.lname = lname;
    }
   print(){
        console.log(this.fname);
        console.log(this.fname, this.lname);
    }
}

var person = new Person("Abhishek","Bachchan");

person.print();
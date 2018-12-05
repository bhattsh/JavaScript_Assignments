
var amitabh = {
    fname:"Amitabh",
    lname:"Bachchan",
    age:78,
    skills:["Acting", "Dancing","Singing"],
    address :{
        city:"Mumbai",
        pincode: 326238,
    },
    dateOfBirth :new Date('1950-12-1'),
    married :true,
    profession:"Actor",
}

var abhishek = Object.create(amitabh);
abhishek.fname ="Abhishek";
abhishek.age =48;
abhishek.dateOfBirth = new Date('1980-11-20');

console.log(abhishek.lname);  // last name is not a property of abhishek but still we  get it because of Prototypal Inheritance



//Solution of question 3 :
                    /*Modify the above code to create third object as "Aaradhya", 
                    this object shares the common properties from amitabh as well as abhishek accordingly demostrate on your own.  */


var aradhya =Object.create(abhishek);
aradhya.fname = "Aaradhya";
console.log(aradhya.lname);






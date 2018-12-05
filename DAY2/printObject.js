
var person1 = {
    fname:"shubh",
    lname:"sharma",
    age:24,
    skills:["Java", "C","Python"],
    address :{
        city:"Mumbai",
        pincode: 326238,
    },
    dateOfBirth :new Date('2000-12-1'),
    married :true,
    profession:"teaching",
}


var person2 = {
    fname:"shubh",
    lname:"sharma",
    age:24,
    skills:["Java", "C","Python"],
    address :{
        city:"Mumbai",
        pincode: 326238,
    },
    dateOfBirth :new Date('2000-12-23'),
    married :true,
    profession:"teaching",
}

print = function(objectToDisplay){
 console.log(objectToDisplay);
}

print(person1);
print(person2);


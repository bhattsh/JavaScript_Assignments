var arr1 = [1,2,3,4];
var arr2 = [5,6,7,8];
var arr3 = ["100","shubham","Rohan","Shubham","2001","250"];
var combine = arr1.concat(arr2);
console.log(combine);



var element =arr1.includes(1);
console.log(element);
console.log(arr1.includes(1,3));



var indexOfElement = arr1.indexOf(4);
var indexOfElement1 = arr2.indexOf(8,2);
console.log(indexOfElement + "  "+ indexOfElement1);



var joinArray = arr1.join();  //string
console.log(joinArray);
var join = arr2.join(' ');
console.log(join);



var addNewElementAt = combine.push(100);
console.log(addNewElementAt);
console.log(combine.push(200,300,400));



var reverseElements = combine.reverse();
console.log(reverseElements);



console.log(combine.toString());
console.log(combine);



combine.splice(1,0,1000);  //adds 1000 at position 1 without deleting any elements
console.log(combine);

combine.splice(1,1);  //deletes element at position 1 
console.log(combine);

combine.splice(1,2);  //deletes 2 elements starting from position 1
console.log(combine);

combine.splice(-1,0,2000);  //adds 2000 at last index replacing element at that position
console.log(combine);



arr1.sort(function(a, b){return a-b});
combine.sort();  //it takes array values as string nd sorts accordingly
console.log(combine);
console.log(arr1);
arr3.sort();
console.log("sorted array: "+arr3);

console.log(combine.pop());   //removes last element and displays the number
console.log(combine);


console.log(arr1);
console.log(arr1.shift());  //removes and displays first element
console.log(arr1);



console.log(arr1.slice(1));
console.log(combine.slice(1,2));
console.log(combine);
console.log(combine.slice(2,6)); // 1st is position and 2nd is the count of number of elements to show
console.log(combine);


//for string
var r ="shubham bhatt";
var ar = r.replace("bhatt",1000);
console.log(ar);
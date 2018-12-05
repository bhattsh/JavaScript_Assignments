function option()
{
    var options ="select one of the operations:\n 1.Add\n 2.Subtract\n 3.Multiply\n 4.Divide\n 5.Exponenet\n 6.Mean\n 7.Quit";
    var selectedOption = prompt("select one of the operations:\n 1.Add\n 2.Subtract\n 3.Multiply\n 4.Divide\n 5.Exponenet\n 6.Mean\n 7.Quit");
    var result = options.includes(selectedOption);
    if(result)
    {
        if(selectedOption == "1")
        {
        var num1 =prompt("enter first number");
        var num2 = prompt("enter second number");
        var sum = parseInt(num1) + parseInt(num2);
        document.getElementById("textBox").value = sum;

        }

         else if(selectedOption == "2")
        {
        var num1 =prompt("enter first number");
        var num2 = prompt("enter second number");
        var sub = parseInt(num2) - parseInt(num1);
        document.getElementById("textBox").value = sub;
        }

        else if(selectedOption == "3")
        {
        var num1 =prompt("enter first number");
        var num2 = prompt("enter second number");
        var sub = parseInt(num2) * parseInt(num1);
        document.getElementById("textBox").value = sub;
        }
        
        else if(selectedOption == "4")
        {
        var num1 =prompt("enter first number");
        var num2 = prompt("enter second number");
        var sub = parseInt(num2) / parseInt(num1);
        document.getElementById("textBox").value = sub;
        }
        else if(selectedOption == "5")
        {
        var bs = prompt("enter base");
        var pow = prompt("enter exponent");
        var exp = Math.pow(bs,pow);
        document.getElementById("textBox").value = exp;
        }

        else if(selectedOption == "6")
        {
            enteredValue ="";
            count =0;
            mean =0;
            while(!enteredValue.includes("***"))
            {
            enteredValue = prompt("enter number");
            
            if(enteredValue.includes("***"))
            {
               break;
            }
            else{
                mean = parseInt(mean) + parseInt(enteredValue); 
                count++;
            }
        }
             mean= mean/count;

             document.getElementById("textBox").value = mean;
        }
        else
        {
        alert("something went wrong");
        option();
    }
    } 
    else
    {
        alert("please select from given options");
        option();
    }
}    



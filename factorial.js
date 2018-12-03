factorial = function()
{
    var num =5;
    var fact=1;

    while(num != 1)
    {
        fact =fact*num;
        num--;
    }

    console.log("factorial is: "+fact);
}

factorial();
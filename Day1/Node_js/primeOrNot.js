findPrime = function()
{
    var num = 327;
    
    for(i=2;i<num;i++)
    {
        if(num%i == 0)
        {
            console.log("It is  not a prime number");
            process.exit(-1);
        }
    }

    console.log("prime number");
    
}

findPrime();
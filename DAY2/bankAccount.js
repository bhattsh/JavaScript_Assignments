/*
Question 4:
 Create a JS program to implement below:-

	   BankAccount
		|(accountNumber)
		|(accountHolderName)
		|(accountBalance)
	-------------------------
	|			|
	Savings			Current
	    (isSalary)		     (odLimit)


Now, 
create 1 object of savings with accountNumber, accountHolderName, accountBalance and isSalary.
create 1 object of currrent with accountNumber, accountHolderName, accountBalance and odLimit.

use savings account object to call a function withdraw(amount), that will subtract the amount from the accountBalance, Note that accountBalance should not go below 0.

use current account object to calla function withdraw(amount), that will subtract the amount from the accountBalance, Note that accountBalance should not go below negative of odLimit.

Now, call getCurrentBalance() from both the object, that will return the accountBalance of the object used to call this method.

*/




/*
//funtion which defines properties of two types of objects: saving and current
function bankAccount(accountNumber,accountHolderName,accountBalance,isSalary){
    this.accountNumber = accountNumber;
    this.accountHolderName = accountHolderName;
    this.accountBalance = accountBalance;
    this.isSalary = isSalary;

        this.withdraw = function(amountToWithdraw){              //funtion to withdraw amount from the account either current or saving

                if(this == saving)                                //if calling object is of type saving
                {
                    this.amountToWithdraw = amountToWithdraw;
                    this.checkRemainingBalance = this.accountBalance - this.amountToWithdraw;       // how much balance will remain in saving account if the amount will be withdrawn

                        if(this.checkRemainingBalance <0)         //checks if account has enough balance to withdraw
                        {
                            console.log("Insufficient Balance");
                        }
                        else{
                            console.log("amount withdrawn successfully");
                        }
                }

                else                                // if calling object is of type current
                {
                    this.amountToWithdraw = amountToWithdraw;
                    this.checkRemainingBalance = this.accountBalance - this.amountToWithdraw;

                        if(this.checkRemainingBalance<0)        //checks if amount to withdraw will make current account balance below zero
                        {   
                                if(( (this.odLimit) + (this.accountBalance) ) > (this.amountToWithdraw))    //if amount in saving plus amount in overdraft is greater tha zero than only withdraw
                                {
                               var amountInOverdraft = (this.odLimit) + (this.accountBalance)  - (this.amountToWithdraw);
                                console.log("amount withdrawn! amount remaining in overdraft :"+amountInOverdraft);
                                }
                                else
                                {
                                    console.log("Can't withdraw as amount is exceeding overdraft limit");
                                }
                        }
                        else
                        {
                            console.log("amount withdrawn successfully from current account");
                        }
                }
            }
}
 
var saving = new bankAccount("100021213","Tejas",50000,true);
var current = Object.create(saving);
current.accountBalance = 60000;
current.odLimit = 6000;

saving.withdraw(1000000000);
current.withdraw(58000);


end of first method
*/


class BankAccount                    // calss BankAccount for common properties of saving and current account
{
    constructor(accountNumber,accountHolderName,accountBalance)
    {
        this.accountNumber = accountNumber;
        this.accountBalance = accountBalance;
        this.accountHolderName = accountHolderName;    
    }

    deposit(amount)                             //deposits the amount into the caller object(saving or current)
    {
        this.accountBalance =this.accountBalance + amount;
        console.log("amount deposited successfully.\n new balance is :"+this.accountBalance);
    }

    getCurrentBalance()                        // will display the balance in the account of caller object
    {
        if(this == saving)
        console.log("your saving account balance is: "+this.accountBalance);

        else
        console.log("your current account balance is: "+this.accountBalance);
    }
}

class Saving extends BankAccount                // class Saving for saving account
{
    
    constructor(accountNumber,accountHolderName,accountBalance,isSalary)       //creates object
    {
        super(accountNumber,accountHolderName,accountBalance);                  //calls parent class i.e. BankAccount
        this.isSalary = isSalary;
    }

    withdraw(amountToWithdraw){              //funtion to withdraw amount from the saving account

            this.amountToWithdraw = amountToWithdraw;
            this.checkRemainingBalance = this.accountBalance - this.amountToWithdraw;       // how much balance will remain in saving account if the amount will be withdrawn

                if(this.checkRemainingBalance <0)         //checks if account has enough balance to withdraw
                {
                    console.log("Insufficient Balance");
                }
                else{
                    this.accountBalance = this.checkRemainingBalance;
                    console.log("amount withdrawn successfully. \n Account Balance: "+this.accountBalance);
                }
    }
}   

class Current extends BankAccount                       //class for current account
{
    
    constructor(accountNumber,accountHolderName,accountBalance,odLimit)         //constructor to create object of type current
    {
        super(accountNumber,accountHolderName,accountBalance);
        this.odLimit = odLimit;
    }

    withdraw(amountToWithdraw)                      //to withdraw amount from current account
    {
    this.amountToWithdraw = amountToWithdraw;
    this.checkRemainingBalance = this.accountBalance - this.amountToWithdraw;

        if(this.checkRemainingBalance<0)        //checks if amount to withdraw will make current account balance below zero
        {   
                if(( (this.odLimit) + (this.accountBalance) ) > (this.amountToWithdraw))    //if amount in saving plus amount in overdraft is greater tha zero than only withdraw
                {
               var amountInOverdraft = (this.odLimit) + (this.accountBalance)  - (this.amountToWithdraw);
               this.accountBalance =0;
                console.log("amount withdrawn from overdraft! amount remaining in overdraft :"+ -amountInOverdraft);
                }
                else
                {
                    console.log("Can't withdraw as amount is exceeding overdraft limit\n your main balance is: "+this.accountBalance+" and overdraft limit is: "+this.odLimit);
                }
        }
        else
        {
            this.accountBalance = this.checkRemainingBalance;
            console.log("amount withdrawn successfully from current account.\n balance left: "+this.accountBalance);
        }

    }

}

var saving = new Saving("10002121","shubham",50000,true);
var current = new Current("10002121","shubham",60000,60000);

saving.deposit(1000);
saving.withdraw(5000);
saving.getCurrentBalance();

current.deposit(1000);
current.withdraw(90000);
current.getCurrentBalance();


function bankAccount(accountNumber,accountHolderName,accountBalance,isSalary){
    this.accountNumber = accountNumber;
    this.accountHolderName = accountHolderName;
    this.accountBalance = accountBalance;
    this.isSalary = isSalary;

    this.withdraw = function(amountToWithdraw){

        if(this == saving)
        {
            this.amountToWithdraw = amountToWithdraw;
            var checkRemainingBalance = this.accountBalance - this.amountToWithdraw;

            if(checkRemainingBalance <0)
            {
                console.log("Insufficient Balance");
            }
            else{
                console.log("amount withdrawn successfully");
            }
        }
        else
        {
            this.amountToWithdraw = amountToWithdraw;
            var checkRemainingBalance = this.accountBalance - this.amountToWithdraw;

            if(this.odLimit <0)
            {
                console.log("Can't withdraw! you are exceeding overdraft limit");
            }
            else{
                console.log("amount withdrawn successfully");
            }
        }
        }
}
 
var saving = new bankAccount("100021213","Tejas",50000,true);
var current = Object.create(saving);
current.accountBalance = 600000;
current.odLimit = 600000;

saving.withdraw(1000);
current.withdraw(1000000000);
class BankAccount{
    holdername;
    accnumber;
    balance;
    constructor(holdername,accnumber,balance){
        this.holdername=holdername;
        this.accnumber=accnumber;
        this.balance=balance;
    } 
    deposite(amount){
        console.log(amount,"money is deposited in your account");
    }
    withdraw(amount){
        console.log(amount,"is withdrawn from your account");
    }
    getbalance(){
        console.log("total balance in your account is",this.balance);
    }
}
var mamatha=new BankAccount("mamatha",12345678901,4000);
mamatha.deposite(1000);
mamatha.withdraw(2000);
mamatha.getbalance();
console.log("---------------")
var navya=new BankAccount("navya",9087654321,2000);
navya.getbalance();
navya.deposite(1000);
navya.withdraw(1000);
navya.getbalance();
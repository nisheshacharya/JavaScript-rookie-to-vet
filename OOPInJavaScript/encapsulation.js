// 2. Encapsulation: Encapsulation is the bundling of data and methods that operate on 
//  data together into a single unit as an object. 

    //Encapsulation protects data from unauthorized access.


    // Example Without Encapsulation: 

    let balance = 100;                          //You can simply do balance = 10000;

    function getBalance(){
        console.log("Your balance is ", balance);
    }
    function deposit(amt){
        if(amt>0){
        balance+=amt; 
        console.log("New balance: ", balance);
        }else{
            console.log("Amount needs to be more than $0 to deposit")
        }
    }
    function withdraw(amt){
        if(balance>=amt){
        balance = balance - amt;
        console.log("New balance: ", balance);
        }else{
            console.log("No enough balance")
        }
    }



    //Example with encapsulation 

    class BankAccount{
        constructor(initialbalance){
            this.balance = initialbalance;
        }
       getBalance(){
            console.log("Your balance is ", this.balance);
        }
        deposit(amt){
            if(amt>0){
            this.balance+=amt; 
            console.log("New balance: ", this.balance);
            }else{
                console.log("Amount needs to be more than $0 to deposit")
            }
        }
        withdraw(amt){
            if(this.balance>=amt){
            this.balance = this.balance - amt;
            console.log("New balance: ", this.balance);
            }else{
                console.log("No enough balance")
            }
        }
    }
    const myAccount = new BankAccount(100);
    myAccount.deposit(20);       //You can not do this.balance = 10000. Direct access prevented.
    myAccount.getBalance();
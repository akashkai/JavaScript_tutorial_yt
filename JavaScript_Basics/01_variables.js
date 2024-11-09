const accountId=2345            //defined variable using const for immutable variable

var userName="ram"              //define variable using var (old method-global scope)
let userEmail="ram@gmail.com"   
userCity="Ayodhya"              //variable with using let (new method - scope specific)

//just define variable without any value
let userAge

// accountId=232323         //give type error: Assignment to constant variable  //not allow modification once defined

userName="krishna"
userEmail="krishna@gmail.com"
userCity="Mathura"

//print the accountId
console.log(accountId);

//print all the values in table format
console.table([userName, userEmail, userCity, userAge])

/*

we can also change the let and var 

*/

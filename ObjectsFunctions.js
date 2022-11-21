/* Create a car object, add a color property to it with the value equals 'black' */
{
    let car = {color : 'black'};

/* Change the color property of the car object to 'green' */

    car.color = 'green';

/* Add the power property to the car object, which is a function and displays the engine power to the console */
    car.enginePower = 500;
    car.power = function(){
        console.log(this.enginePower);
    };
    console.log(car.power);
    car.power();
}
/* Pears and apples are accepted to the warehouse, write a function that returns the result of adding the number of accepted pears and apples
 */
{
    let fruits = {
        apples : 40,
        pears : 50,
    };
    function getSum(fruits){
        return fruits.apples+fruits.pears
    };
    console.log(getSum(fruits));
}
/* Your name is saved in the payment terminal, write a function to define the name in the terminal (if you entered your name, then hello + name, if not, then there is no such name)*/ 
{
    const users = ["Vasia", "Kolia","Alisa",];
    function defineName(user){
        if (users.includes(user)){
            console.log("Hello "+user);
            return true;
        }
        else{
            console.log("there is no such name");
            return false;
        }
    }
    defineName("Kolia")
    defineName("Maria")
}


/* Write a function for calculating the type of argument and type output to the console
 */{
function echoType(X){
    console.log(typeof(X));
 }
echoType(NaN);
echoType("fwefwq");
echoType(echoType);
} ;
/* Write a function that determines whether a number is prime or not */
{
    function isPrime(Number){
        for (let i = 2; i < Number**0.5; ++i){
            if (Number % i == 0){
                console.log(Number + " is not prime. Smaller devider is " + i); 
                return false
            }
        }
        console.log(Number + " is prime");
        return true
    }
    isPrime(5); 
    isPrime(8);
    isPrime(11);
    isPrime(97);
    isPrime(199);
    isPrime(199*97);
}
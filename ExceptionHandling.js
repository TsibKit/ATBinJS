/* In a try catch construction, wrap the code: console.log (a), let a = 3. 
And display an error - ‘let must be declared’ before use. 
When running 1/0, the error 'cannot be divided by zero' */
try {
    console.log (a);
    let a = 3;
  } catch(err) {
    if (err.name == "ReferenceError"){
        console.log("let must be declared");
    }else{
        throw err;
    }
  }
{
class DevideZeroError extends Error {
    constructor(message) {
        super(message); 
        this.name = "DevideZeroError";
        this.mesage = "cannot be divided by zero" 
    }
    }
try{
    let b = 1/0;
    if ([Infinity,-Infinity,NaN].includes(b)){
        throw new DevideZeroError;
    }
        console.log(b);
    } catch(err) {
        if (err.name == "DevideZeroError" ){
        console.log(err.mesage);
        }else{
            throw err;
        }
    }
}

// 1. Given an array consisting of movie names, iterate over the array with the output of the names of each movie to the console
{
    console.log("Task 1.:")
    let movies = [
        "Titanic",
        "Back to the future",
        "Back to the future II",
        "Back to the future III",
        "Star wars episode IV",
        "Star wars episode V",
        "Star wars episode VI",
    ];
    for (movie of movies) console.log(movie);
}
// 2. Given an array of car manufacturers, convert the array to a string and back to an array
{
    console.log("Task 2.:")
    let carManufacturers = [
        "LADA",
        "Renault",
        "Suzuki",
        "Tesla",
        "Russo-Baltique",
    ];
    let string = carManufacturers.join("<>");
    let newArray = string.split("<>");

    console.log(string);
    console.log(newArray);
}
// 3. Given an array of the names of your friends, add the words hello to each element of the array
{
    console.log("Task 3.:")
    let friends = [
        "Aleks",
        "Kot",
        "Andre",
        "Tonia",
        "Alko",
    ];
    friends = friends.map(item => "Hello "+ item)
    console.log(friends)
}
// 4. Convert numeric array to Boolean
{
    console.log("Task 4.:")
    let numericArray = [ -15, 5645656, 3, 0, 5];
    let booleanAray = numericArray.map(item => Boolean(item));
    console.log(booleanAray);
}
// 5. Sort the array [1,6,7,8,3,4,5,6] in descending order
{
    console.log("Task 5.:")
    forSort = [1,6,7,8,3,4,5,6];
    forSort.sort((a,b) => b-a);
    console.log(forSort);
}
// 6. Filter array [1,6,7,8,3,4,5,6] by value> 3
{
    console.log("Task 6.:")
    forFilter = [1,6,7,8,3,4,5,6];
    let filtered =  forFilter.filter(item => (item > 3));
    console.log(filtered);
}   
// 7. Write a function that takes two parameters - an array and a number and outputs the index of an array element equal to a number
{
    console.log("Task 7.:")
    array = [1,6,7,8,3,4,5,6];
    number = 5;
    function  getElementIndex(array, number){
        return array.indexOf(number);
    };
    console.log(getElementIndex(array,number));
}   
// 8. Implement a loop that will print the number 'a' until it is less than 10
{
    console.log("Task 8.:")
    let a = 12;
    while(!(a < 10)){
        console.log(a);
        a--;
    }
}
// 9. Implement a loop that prints prime numbers to the console
{
    console.log("Task 9.:")
    function isPrime(Number){
        for (let i = 2; i < Number**0.5; ++i){
            if (Number % i == 0){
                return false
            }
        }
        return true
    }
    for (let i = 80; i<100; i++){
        if (isPrime(i)) console.log(i);
    }
}
// 10. Implement a loop that prints odd numbers to the console
{
    console.log("Task 10.:")
    function isOdd(num){return num%2};
    for (let i = 81; i<85; i++){
        if (isOdd(i)) console.log(i);
    }
}
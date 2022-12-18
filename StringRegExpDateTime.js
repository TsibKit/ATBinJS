/* 1.Given the string 'ahb acb aeb aeeb adcb axeb'. Write a regular expression that matches the strings ahb, acb, aeb by pattern: letter 'a', any character, letter 'b' */
{
    console.log("______________________\n Task 1.")
    const testString = 'ahb acb aeb aeeb adcb axeb';
    const regexp = /a.b/g;
    let includes = testString.matchAll(regexp);
    for (let i of includes){
        console.log(`Match "${i[0]}" on position ${i.index}`);
    }
}
/* 2.Given the string '2 + 3 223 2223'. Write a regex that finds line 2 + 3 without capturing the rest */
{   
    console.log("______________________\n Task 2.")
    const testString = '2 + 3 223 2223';
    const regexp = /\d\s\+\s\d/g;
    let includes = testString.matchAll(regexp);
    for (let i of includes){
        console.log(`Match "${i[0]}" on position ${i.index}`);
    }
}
/* 3.Get the day, month and year of the current date and output it to the console separately */
{
    console.log("______________________\n Task 3.")
    
    function getMonthName(date){
       let monthList = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
       return monthList[date.getMonth()]
    }

    let date = new Date;
    console.log(`Day:\t${date.getDate()}\nMonth:\t${getMonthName(date)}\nYear:\t${date.getFullYear()}`);
}

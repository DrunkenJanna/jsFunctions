//normal function syntax
function name1 () {
    console.log('This is the function called name1')
}
name1()
//arrow function
const name2 = () => {
    console.log('This is the function called name2')
}
name2()
//function with arguments
const functionWithArguments = (arg1, arg2, arg3) => {
    console.log('functionWithArguments');
    console.log(arg1)
    console.log(arg2)
    console.log(arg3)
}
functionWithArguments(1, 2, 3)
//default arguments
const defaultArguments = (arg1 = 1, arg2 = 2, arg3 = 3) => {
    console.log('defaultArguments')
    console.log(arg1)
    console.log(arg2)
    console.log(arg3)
}
defaultArguments(3, 6, 9)
//missing arguments
defaultArguments(10)

//anonymous functions
let array = ['aa', 'aaa', 'aaaa']
//forEach -> prezentacja Norberta
array.forEach(function (item) {
    console.log(item)
})

array.forEach((item) => {
    console.log(item + '!')
})

//more on arrow function

const sum = (a, b) => {
    return a + b;
}
//one line
//return
const shorterSum = (a, b) => a + b;

console.log(sum(1, 2),  shorterSum(1, 2))
//no parenthesis
const oneArgument = text => console.log(text);
oneArgument('Olo lubi Anię')

//recurection
//factorial to po Polsku silnia
//tłumaczenie na tablicy jak działa silnia
const factorial = number => {
    if (number === 1 || number === 0) return 1;
    else return factorial(number - 1) * number;
}
console.log(factorial(0), 'silnia z 0');
console.log(factorial(5), 'silnia z 5');

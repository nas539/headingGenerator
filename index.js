const stringOne = "Yes";
const stringTwo = "No";
const numOne = 2;
const numTwo = 7;

const headingGenerator = (someString, someNum) => {
    if (someNum <= 6) {
        return `<h${someNum}>${someString}</h${someNum}>`
    } else {
        return "Numbers greater than 6 do not work";
    }  
}
    
console.log(headingGenerator(stringOne, numOne));
console.log(headingGenerator(stringTwo));
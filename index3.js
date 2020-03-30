function multiplyBy(factor) {

    return (number) => {
        return factor * number;
    }
    
}

const multiplyBy10 = multiplyBy(10);
const multiplyBy20 = multiplyBy(20);

console.log(multiplyBy10(5));
console.log(multiplyBy20(5));
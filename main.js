function reducePower(num, degree) {
    if (degree === 1) {
        return num;
    } 
        return num * reducePower(num, degree - 1);
} 
console.log(reducePower(5, 3));
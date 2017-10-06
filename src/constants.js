//Constabts Valiable
const MAX_SIZE = 500;
console.log('MAX_SIZE : '+ MAX_SIZE);

//Below is not allowed - TypeError: Assignment to constant variable.
//MAX_SIZE = 1000;

const objAddress = {
    City : 'Delhi',
    Country : 'India'
};
console.log(objAddress);

objAddress['PIN'] = 123465798;
console.log(objAddress);

//Below is not allowed - TypeError: Assignment to constant variable.
//objAddress = {};
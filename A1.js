const arr1 = [9, 1, 28, "abc", 5];
const arr2 = [8, 5, "abc", 2, 28];

function output(a, b) {
    const newArr1 = a.filter((x) => !b.includes(x)),
           newArr2 = b.filter((x) => !a.includes(x));
    console.log(newArr1.concat(newArr2));
};   
output(arr1,arr2);
// remove duplicate element in array

const arr = [1, 2, 2, 3, 4, 4, 5,2,4,5,5,54];
const uniqueArr = [...new Set(arr)];
console.log(uniqueArr); // [1, 2, 3, 4, 5]



const arrs = [1, 2, 2, 3, 4, 4, 5,5,4,2,41,4,5];
const uniqueArrs = arrs.filter((item, index, self) => self.indexOf(item) === index);
console.log(uniqueArrs); // [1, 2, 3, 4, 5]



const Arr = [1, 2, 2, 3, 4, 4, 5,4,7];
const uniqueArrss = Arr.reduce((acc, current) => {
  if (!acc.includes(current)) {
    acc.push(current);
  }
  return acc;
}, []);
console.log(uniqueArrss); // [1, 2, 3, 4, 5]
// 1
const arr = [1, 2, 3, 5, 1, 6, 2, 5, 6, 7]; 
let uniqueArr = [...new Set(arr)];
console.log(uniqueArr)

// 2
const obj1 = { 
   id: 1,
   name: "userName" 
};
const obj2 = { 
   d: 1, 
   password: "qwerty" 
} 

let obj3 = {
   ...obj1,
   ...obj2
}

console.log(obj3);

// 3
// const add = function (x, y) { return x + y }
const add = (x, y) => x + y

// 4
const promise = new Promise((resolve, reject) => {
   setTimeout(() => {
      resolve()
   }, 5000)
  
})
promise.then(() => { 
   console.log('Выполнилось через 5 секунд!')
});




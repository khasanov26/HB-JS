let input = document.querySelector("input");
let text = document.querySelector("p");
let btn = document.querySelector("button");

// btn.addEventListener('click', () => {
//    console.log(input.value);
// });



btn.addEventListener('click', () => {
   if(input.value === '') throw new Error(text.innerHTML =  `Пустая строка`)
   console.log(typeof(input.value));
   try {
      console.log('не пустая');
   }
   catch(e) {
      console.log('пустая строка');
   }

   if (input.value < 5 || input.value > 10) throw new Error(text.innerHTML =  `число меньше 5 или больше 10`)
   try {
      console.log('подхоящее число');
   }
   catch(e) {
      console.log('не подхоящеечисло');
   }

   if (isNaN(input.value)) throw new Error(text.innerHTML =  `Не число`)
   try {
      console.log('число');
   }
   catch(e) {
      console.log('не число');
   }

   if (!isNaN(input.value)) throw new Error(text.innerHTML =  `Подходящее число`)
   try {
      console.log(' число');
   }
   catch(e) {
      console.log('не число');
   }
})




   async function lottery() {

      let promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
          Math.random(0) > 0.5 ? resolve() : reject("Вы промахнулись");
        }, 1000);
      });
      return promise;
    }
    
    const asd = async () => {
      console.log("Вы начали игру");
      await lottery();
      resolve(console.log("Вы выиграли"))
    };

   asd();

    lottery()
      .then(() => console.log("Вы выиграли"))
      .then(() => console.log("Вам заплатили"))
      .catch(() => console.log("Вы проиграли"))
      .finally(() => console.log("Игра закончена"));
    

try {
   console.log("Вы начали игру");
   async function lottery() {
      let promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
          Math.random(0) > 0.5 ? resolve() : reject("Вы промахнулись");
        }, 1000);
      });
      return promise;
    }
    console.log("Вам заплатили");

} catch {
   console.log("Вы проиграли")
}finally {
   console.log("Игра закончена");
}




// let promise = () => {
//    return new Promise(function (resolve, reject) {
//       setTimeout(function () {
//          Math.random(0) > 0.5 ? resolve() : reject("Вы промахнулись");
//       }, 1000);
//    });
// }

// const asd = async () => {
//    console.log('start');
//    await promise();
//    console.log(promise())
//    // resolve(() => {
//    //    console.log("Вы выиграли");
//    //    console.log("Вам заплатили");
//    // })
//    // reject(() => {
//    //    console.log("Вы проиграли");
//    // })
//    // console.log("Игра закончена");
// };

// asd();



//  lottery()
//    .then(() => console.log("Вы выиграли"))
//    .then(() => console.log("Вам заплатили"))
//    .catch(() => console.log("Вы проиграли"))
//    .finally(() => console.log("Игра закончена"));


























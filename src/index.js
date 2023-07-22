// const messageEl = document.querySelector(".js-alert")

// messageEl.addEventListener('click', onNotificationClick)



// function showNotification(){
//     messageEl.classList.add("is-visible");
//     // setTimeout(hideNotification, 3000)
// }

// function hideNotification(){
//     messageEl.classList.remove("is-visible");
// }

// function onNotificationClick(){
//    hideNotification()
// }


// function printNumbers(from, to){
//     let num = from 
//     let fn = setInterval(function(){
//         if(num === to){
//          clearInterval
//         }else{
//             num ++
//             console.log(num)
//         }
//     }, 1000)
// }


// console.log(printNumbers(9, 15))


let a = 0;

setTimeout(() => console.log('а в setTimeout', a), 100); // ?

// припустимо, що час виконання цієї функції > 100 мс
for(let i = 0; i < 10000; i++) {
  a += 1;
  console.log('а всередині циклу', a);
}
















// const student = "Богданова Виктория Алексеевна"; // Очевидно, что здесь ваши личные Фамилия, Имя и Отчество

document.getElementById("student").innerHTML = student;


function getRandomIntInclusive(min, max) {
 min = Math.ceil(min);
 max = Math. floor(max);
 return Math.floor(Math.random() * (max - min + 1)) + min;
}
 function throwRandomError(errorRate) {
   if (getRandomIntInclusive(0, 100) <= errorRate) {
     throw new Error('Ой, что-то сломалось');
 }
}

let errorRate = +prompt('Введите вероятность выпада ошибки в процентах', 20)

 try {

throwRandomError(errorRate) ;

console.log('Всё в порядке, приложение работает в штатном режиме');

} catch (err) {
 console. log('Произошла ошибка, пожалуйста перезагрузите страницу');

console. log(err);
}
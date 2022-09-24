// 1-Задание

let a = prompt('Ввидите свое имя')

let sum1 = +prompt('Ввидите год рождение')

let sum2 = +prompt('Ввидите нынешний год')

 
function sum(nam1 = nam2) {
    let res = a + nam2 - nam1

    return res

}
console.log(a +' Ваш возраст '+ ( sum2 - sum1) );


// 2-Задание

function random(min,max){
    return Math.floor(Math.random() * (max-min + 1) + min)
}

 let count = prompt('Ввидите кол-во примеров')

 function randomNum(min, max){
    return Math.floor(Math.random() * (max - min + 1) + 1)
 }
 
 function randomSymbol(){
    return Math.floor(Math.random() * (5 - 1 ) + 1)
        
}
for(let i = 0; i < count; i++){
    let num1 = randomNum(1, 100)
    let num2 = randomNum(1, 100)
    let symbol = randomNum()
    let result = 0

    if(symbol == 1){
        symbol = '+'
        result = num1 + num2
    }
    else if(symbol == 2){
        symbol = '-'
        result = num1 - num2
    }
    else if(symbol == 3){
        symbol = '*'
        result = num1 * num2
    }
    else if(symbol == 4){
        symbol = '/'
        result = num1 / num2
    }
    let que = +prompt(num1 + symbol + num2 + '=?')
    
    console.log(que == result ? 'Ваш ответ верный -' + que : 'Ваш ответ не верный - ' + result);
    
    /* let que =prompt(num1 + count + num2)
    console.log((num1 + num2)== que ?' Молодец' : 'Правиотный ответ будет' + (num1 + num2)); */
 }

 let minNum = +prompt('Ввидите мин число') 
 let maxNum = +prompt('Ввидите mакс число') 
  
 
  
 
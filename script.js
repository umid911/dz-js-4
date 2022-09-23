// 1-Задание

let a = prompt('Ввидите свое имя')

let sum1 = +prompt('Ввидите год рождение')

let sum2 = +prompt('Ввидите нынешний год')

 
function sum(nam1 = nam2) {
    let res = a + nam2 - nam1

    return res

}console.log(a +' Ваш возраст '+ ( sum2 - sum1) );


// 2-Задание

function random(min,max){
    return Math.floor(Math.random() * (max-min + 1) + min)
}

 let count = prompt('Ввидите кол-во примеров')
 function randomSymbol(){
    return Math.floor(Math.random() * (4 - 1 + 1) + 1)
        
     
    
}

 let minNum = +prompt('Ввидите мин число') 
 let maxNum = +prompt('Ввидите mакс число') 
  
 for(let i = 0; i < count; i++){
    let num1 = random(minNum, maxNum)
    let num2 = random(minNum, maxNum)
    let que =prompt(num1 + count + num2)
    console.log((num1 + num2)== que ?' Молодец' : 'Правиотный ответ будет' + (num1 + num2));
 }
  
 
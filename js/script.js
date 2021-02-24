// "use strict";

//Task 1

// function getRandomArray (count, min, max) {
//    const stuffedArray = [];
//    for (let i = 0; i < count; i++) {
//       const number = Math.floor (Math.random() * (max - min)) + min;
//       stuffedArray.unshift(number);
//    }
//    return stuffedArray;
// }

// console.log (getRandomArray(20, -3, -10));

//Task 2

// const testString = '"Привет, Мир!"';

// function reverse(string) {
//    let reversedString = '';
//    for (let i = 1; i <= string.length; i++) {
//       reversedString += string[string.length - i];
//    }
//    return reversedString;
// };

// console.log(reverse(testString));

//Task 3

// просто дорога false произвольной длины
//Task 3

// просто дорога false произвольной длины
let buildRoad = function (length) {
    let road = [];
    for (let i = 0; i < length; i++) {
        road.push(false);
    }
    return road;
};
// генерация заданого кол-ва мин на ранее сгенерированной дороге.
let roadMining = function (mine, length) {

    const road = buildRoad(length);
    let mineCount = 0;

    for (let i = 0; i < mine; i++) {
        let minePlace = Math.floor(Math.random() * length);
        road[minePlace] = true;
    }

    // проверка того что на дорогу добавилось ровно 2 мины. 
    while (mineCount < mine) {
        let mineCount = 0; // каждый цикл while должна обнуляться.
        for (let i = 0; i < road.length; i++) {
            if (road[i] === true) {
                mineCount++;
            }
        };

        if (mineCount >= mine) {
            return road;
        } else {
            let minePlace = Math.floor(Math.random() * length);
            road[minePlace] = true;
        }
    }
};

let road = roadMining(3, 10);

console.log(road);
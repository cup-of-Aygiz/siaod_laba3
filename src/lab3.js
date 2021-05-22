import {KMPSearch} from "./KMPSearch.js";
import {BMHSearch} from "./BMHSearch.js";
import {graphSearch} from "./graphSearch.js";


const sought = 'string'
const str = 'aaasdadadaaastringr1214'

console.log(KMPSearch(str, sought))
console.log(BMHSearch(str, sought))

let inv = 0
let arr=[5,1,2,3,9,6,7,4,13,10,11,8,14,15,0,12]
//let arr=[7,3,5,12,6,8,14,13,2,11,9,1,0,10,4,15]
//let arr = [1, 2, 3, 4, 5, 6, 7, 8, 13, 9, 11, 12, 10, 14, 15, 0]
//let arr = [5,1,3,4,0,2,6,8,7,10,15,11,9,13,14,12]
//let arr = [11,9,4,6,3,15,7,13,2,10,0,8,5,12,1,14]
//let arr = [5,9,8,14,0,6,12,3,13,11,1,10,15,2,7,4]
// let arr = [7,1,4,15,10,12,3,14,5,6,0,11,2,13,8,9]
for(let i = 0; i < 16; i++) {
    if (arr[i])
        for (let j = 0; j < i; ++j)
            if (arr[j] > arr[i])
                ++inv;
}
for (let i = 0; i < 16; ++i) {
    if (arr[i] === 0)
        inv += 1 + i / 4;
}

let arr1 = Array();
let k = 0
for (let i = 0; i < 4; i++) {
    arr1[i] = Array();
    for (let j = 0; j < 4; j++) {
        arr1[i][j] = arr[k];
        k++
    }
}
if (inv & 1) {
    console.log("Решения нет")
} else {
    console.log("Решение есть")
    console.log(graphSearch(arr1).join(","));
}


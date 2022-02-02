n = prompt('enter the number')


let sum = 1
let g = 0



for (let i = 0; i < n; i++) {

    sum = sum + sum * i
    console.log(sum)
    g = g + 1 / sum
}

console.log(g)





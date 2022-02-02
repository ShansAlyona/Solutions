n = prompt('enter the number')
x = prompt('enter the number')


let sum = 1
let g = 1
let S = 1



for (let i = 0; i < n; i++) {

    sum = sum + sum * i
    console.log(sum)
    S = S * x
    g = g + S / sum
}

console.log(g)





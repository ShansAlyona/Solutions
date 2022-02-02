A = prompt('enter the base of the degree')
n = prompt('enter the degree')




let squareN = 1
let sum = 1

for (let i = 0; i < n; i++) {

    squareN = squareN * A * (-1)
    sum = sum + squareN

    console.log(sum)
}
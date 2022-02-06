N = prompt('Enter integer positive number')

let obratnoe = 0
let Sum = 0
let t = 0


while (N > 0) {
    obratnoe = obratnoe * 10 + N % 10
    N = Math.trunc(N / 10)
}
console.log(obratnoe)


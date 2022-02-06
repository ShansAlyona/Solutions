N = prompt('Enter integer positive number')

let number = 0
let Sum = 0
let t = 0


while (N > 0) {
    number = number + 1
    t = N % 10
    Sum = Sum + t
    N = Math.trunc(N / 10)
}
console.log(number, Sum)


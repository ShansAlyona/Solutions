N = prompt('Enter integer positive number')

let result = false



while (N > 0) {
    if (N % 10 == 2) {
        result = true
    }
    N = Math.trunc(N / 10)

}
console.log(result)



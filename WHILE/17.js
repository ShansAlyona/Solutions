N = prompt('Enter integer positive number')

while (N > 0) {
    console.log(N % 10)
    N = Math.trunc(N / 10)
}

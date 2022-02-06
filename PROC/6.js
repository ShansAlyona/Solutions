
let C = 0
let S = 0

function DigitCountSum() {

    while (K != 0) {
        S = S + (K % 10)
        C = C + 1
        K = Math.trunc(K / 10)
    }
}

for (let i = 1; i < 5; i++) {
    K = prompt('Enter the integer number')
    DigitCountSum(K, C, S)
    console.log(C, S)
}


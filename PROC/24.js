let result = false

function Even(K) {
    if (K % 2 == 0) {
        result = true
    }
    else {
        result = false
    }
    console.log(result)
}

for (let i = 0; i < 10; i++) {
    K = prompt('Enter number')
    console.log(K)
    Even(K)
}
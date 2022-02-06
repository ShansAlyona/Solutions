let result = false

function IsSquare(K) {

    if (Number.isInteger(Math.sqrt(K))) {
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
    IsSquare(K)
}
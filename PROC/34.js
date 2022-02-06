function Fact() {
    n = prompt('enter the number')
    let sum = 1

    for (let i = n; i > 0; i--) {
        sum = sum * i

    }
    console.log(sum)

}

for (let j = 0; j < 5; j++) {
    Fact()

}


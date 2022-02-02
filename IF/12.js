a = prompt('Enter the first number')
b = prompt('Enter the second number')
c = prompt('Enter the third number')
console.log(a, b, c)

function compare() {
    let min = 0
    if (a > b) {
        min = b
    }
    else {
        min = a
    }
    if (min > c) {
        min = c
    }
    else {
        mon = min
    }
    console.log(min)
}

compare()


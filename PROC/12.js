function SortInc3(a, b, c) {
    let temp = 0

    if (a > b) {
        temp = b
        b = a
        a = temp
    }
    if (a > c) {
        temp = c
        c = a
        a = temp
    }
    if (b > c) {
        temp = c
        c = b
        b = temp
    }
    console.log(a, b, c)
}

for (let i = 1; i < 3; i++) {
    a = prompt('Enter the first number')
    b = prompt('Enter the second number')
    c = prompt('Enter the thidr number')
    SortInc3(a, b, c)
}

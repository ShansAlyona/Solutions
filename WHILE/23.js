A = prompt('Введіть додатне ціле число А')
B = prompt('Введіть додатне ціле число В')

while ((A != 0) && (B != 0)) {
    if (A > B) {
        A = A % B
    }
    else {
        B = B % A
    }
}
console.log(A + B)

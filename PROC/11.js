


function Minmax(X, Y) {
    let temp = 0
    if (X > Y) {
        temp = Y
        Y = X
        X = temp
        console.log(X, Y)
    }
    else {
        X = X
        Y = Y
        console.log(X, Y)
    }
}

A = prompt('Enter A')
B = prompt('Enter B')
Minmax(A, B)

C = prompt('Enter C')
D = prompt('Enter D')
Minmax(C, D)

Minmax(A, C)
Minmax(B, D)


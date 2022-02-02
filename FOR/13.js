n = prompt('enter integer number')



let g = 1.1
let suma = 0


for (let i = 0; i < n; i++) {
    if (i % 2 == 0) {
        suma = suma + g
    }
    else {
        suma = suma - g
    }

    g = g + 0.1
}

console.log(suma)
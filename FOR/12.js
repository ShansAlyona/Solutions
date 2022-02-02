n = prompt('enter integer number')



let g = 1.1
let dobutok = 1


for (let i = 0; i < n; i++) {
    dobutok = dobutok * g
    g = g + 0.1
}

console.log(dobutok)


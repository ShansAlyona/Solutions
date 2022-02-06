let obratnoe = 0

function BackNumber() {
    for (let i = 0; i < 5; i++) {
        N = prompt('Enter integer positive number')
        while (N > 0) {
            obratnoe = obratnoe * 10 + N % 10
            N = Math.trunc(N / 10)
        }

        console.log(obratnoe)
    }

}


BackNumber()


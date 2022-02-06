function RadToDeg() {
    R = prompt('enter the number')
    let deg = 0
    const P = 3.14
    deg = (180 / P) * R
    console.log(deg)

}

for (let i = 0; i < 5; i++) {
    RadToDeg()
}




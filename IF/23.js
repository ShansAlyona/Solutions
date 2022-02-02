x1 = prompt('enter the abscissa of vertex A')
y1 = prompt('enter the ordinate of vertex A')

x2 = prompt('enter the abscissa of vertex B')
y2 = prompt('enter the ordinate of vertex B')

x3 = prompt('enter the abscissa of vertex C')
y3 = prompt('enter the ordinate of vertex C')



function koordunatu() {
    let x = 0
    let y = 0

    if (x1 == x2) {
        x = x3
    }
    if (x1 == x3) {
        x = x2
    }
    if (x3 == x2) {
        x = x1
    }

    if (y1 == y2) {
        y = y3
    }
    if (y1 == y3) {
        y = y2
    }
    if (y3 == y2) {
        y = y1
    }

    console.log(x, y)

}

koordunatu()
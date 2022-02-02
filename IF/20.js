a = prompt('enter the coordinate of point A')
b = prompt('enter the coordinate of point B')
c = prompt('enter the coordinate of point C')

function compareDistance() {

    let distanceAB = Math.abs(b - a)
    let distanceAC = Math.abs(c - a)
    console.log(distanceAB, distanceAC)


    if (distanceAB > distanceAC) {
        console.log('closer point C')
    }
    else {
        if (distanceAB < distanceAC) {
            console.log('closer point B')
        }
        else {
            console.log('they are at the same distance')
        }

    }

}

compareDistance()

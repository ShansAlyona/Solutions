//Завдання 1

// function hasElem(arr) {
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] == '5') {
//             return true
//         }
//     }

//     return false
// }
// var arr = [1, 2, 3, 4, 5, 6, 7]

// alert(hasElem(arr))


//Завдання 2

// function ProstChuslo(a) {
//     for (var i = 2; i < a - 1; i++) {
//         if (a % i == 0) {
//             return true
//         }
//     }

//     return false
// }
// let a = 25

// alert(ProstChuslo(a))

//Завдання 3

var arr = [1, 2, 3, 3, 7, 4, 5, 6, 7]

function doubleElem(arr) {

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == arr[i + 1]) {
            return true
        }
    }

    return false

}



alert(doubleElem(arr))
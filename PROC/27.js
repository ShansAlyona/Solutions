
function IsPowerN(K, N) {
	let p = 0;
	let n = 0;
	do {
		p++;
		n = Math.pow(N, p)
	} while (n < K);
	if (n == K)
		return true;
	else
		return false;
}

let number = 5;
let array = [10, 25, 35, 50, 75, 100, 125, 350, 625, 750];
let count = 0;
for (let i = 0; i < 10; i++) {
	if (IsPowerN(array[i], number)) {
		count++;
	}
}

document.write('У послідовності чисел ' + count + ' є степенями 5')

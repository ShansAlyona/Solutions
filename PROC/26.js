
function IsPower5(K) {
	let p = 0;
	let n = 0;
	do {
		p++;
		n = Math.pow(5, p)
	} while (n < K);
	if (n == K)
		return true;
	else
		return false;
}

let array = [10, 25, 35, 50, 75, 100, 125, 350, 625, 750];
let count = 0;
for (let i = 0; i < 10; i++) {
	if (IsPower5(array[i])) {
		count++;
	}
}

document.write('У послідовності чисел ' + count + ' є степенями 5')

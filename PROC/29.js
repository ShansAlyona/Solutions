
function DigitCount(K) {
	return String(K).length;
}

let k = [38, 2546, 1254, 63254, 7];

for (let i = 0; i < 5; i++) {
	document.write('У числі ' + k[i] + ' - ' + DigitCount(k[i]) + ' цифр.<br>')
}

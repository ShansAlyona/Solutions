
function DigitN(K, N) {
	if (String(K).length < N)
		return -1;
	return Number(String(K)[N]);
}

let k = [38, 2546, 1254, 63254, 7];

for (let i = 0; i < 5; i++) {
	document.write(i + '-а цифра числа ' + k[i] + ' = ' + DigitN(k[i], i) + '.<br>')
}

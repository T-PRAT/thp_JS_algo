const arr1 = [3, 7, 8, 3, 6, 1];
const arr2 = [1, 4, 5, 8];
const k = 3;
const l = 1;

function haveSun(arr, k) {
	let c = 1;
	for (i = 0; i < arr.length - 1; i++) {
		let high = arr.slice(i + 1).sort(function(a, b){return b - a})[0];
		if (arr[i] > high)
			c++;
	}
	return(c);
}

console.log(haveSun(arr2, l));

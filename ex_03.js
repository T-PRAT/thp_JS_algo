const arr1 = [10, 15, 3, 7];
const arr2 = [1, 8, 10, 21];
const k = 17;
const l = 19;

function haveSum(arr, k) {
	for (i = 0; i < arr.length; i++) {
		if (arr.includes(k - arr[i]))
			return (true);
	}
	return false;
}

console.log(haveSum(arr1, k));

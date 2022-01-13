const arr1 = [10, 15, 3, 7];
const arr2 = [1, 8, 10, 21];
const k = 17;
const l = 19;

function haveSum(arr, k) {
	for (i = 0; i < arr.length; i++) {
		for (j = 0; j < arr.length; j++) {
			if(arr[i] + arr[j] == k)
				return (true);
		}
	}
	return false;
}

console.log(haveSum(arr2, l));

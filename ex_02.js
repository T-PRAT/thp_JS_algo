const arr1 = [3, 7, 8, 3, 6, 1];
const arr2 = [1, 4, 5, 8];
const k = 3;
const l = 1;
var b = true;
var c = 0;

function haveSun(arr, k) {
	for (i = 0; i < arr.length; i++) {
		b = true;
		for (j = i; j < arr.length; j++) {
			if(arr[j] > arr[i]) {
				b = false;
				break;
			}
		}
		if (b == true)
			c++;
	}
	return(c);
}

console.log(haveSun(arr1, k));

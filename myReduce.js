// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce for more details
// Don't worry about initialValue at first. You can always add it in later.

function myReduce(arr, callback, initialValue) {
	var firstValue;
	var pos;

	if(!initialValue){
		firstValue = arr[0];
		pos = 1;
	}else{
		firstValue = initialValue;
		pos = 0;
	}

	for (i = pos; pos< arr.length; pos++){
		firstValue = callback(firstValue, arr[pos], pos, arr);
	}
	return firstValue;
//  CODE INSIDE HERE   //
	
}

/*
 Best if you don't code out here.
 If you want to check your code, use `index.js`!
*/







// export this function (you can ignore this for now)
module.exports = myReduce;

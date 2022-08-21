const findAllPossibleIntervals = (boxArray, pensNeeded) => {
	const possibleResult = [];
	
	// Loop all numbers and find all possible intervals.
	for (let i = 0; i < boxArray.length; i++) {
		let starting = i;
		let sum = 0;
		
		for (let currentIdx = i; currentIdx < boxArray.length; ++currentIdx) {
			// Add consecutive numbers for each iteration to get the sum.
			sum += boxArray[currentIdx];
            
			// Continue loop when sum is greater than pens needed.
			if(sum > pensNeeded || boxArray[currentIdx] >= pensNeeded) {
				// Yes.
				starting = currentIdx + 1;
				sum = 0;
				continue;
			}

			// Push to possible result if sum equals to pens needed.
			if(sum == pensNeeded) {
				possibleResult.push([starting, currentIdx]);
				starting = currentIdx + 1;
				sum = 0;
			}
		}
	}

	return possibleResult;
}


const findShortestInterval = (possibleIntervals) => {
	let minInterval = Number.MAX_SAFE_INTEGER;
	let result = [];
	// loop possible Result
	// each result check the combination and find thje lowest combo
	// while looping find the lowest 

	// Loop through possible intervals and find shortest interval.
	for (let i = 0; i < possibleIntervals.length; ++i) {
		// Get first possible interval.
		const [baseStart, baseEnd] = possibleIntervals[i];
		const baseInterval = baseEnd - baseStart;
		
		// Loop through next intervals.
		for (let idx = i+1; idx < possibleIntervals.length; ++idx) {
			// Get second possible interval.
			const [currentStart, currentEnd] = possibleIntervals[idx];
			const totalInterval = (currentEnd - currentStart) + baseInterval;

			// Continue to loop if first possible interval overlaps with second possible interval.
			if((baseStart >= currentStart && baseStart <= currentEnd) || (baseEnd >= currentStart && baseEnd <= currentEnd)) 
				continue;
			
			// 
			if(totalInterval < minInterval) {
				result = [possibleIntervals[i], possibleIntervals[idx]];
				minInterval = totalInterval;
			}
		
		}
	}
	return result;
}

const cases = () => {
	console.log("Running test cases.");
	const boxes1 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
	var k = 4;

	console.log(findShortestInterval(findAllPossibleIntervals(boxes1, k)));

	const boxes2 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
	k = 8;

	console.log(findShortestInterval(findAllPossibleIntervals(boxes2, k)));

	const boxes3 = [1, 2, 1, 5, 1, 1, 31, 1, 1, 9, 1, 1, 2, 4, 1, 5, 1, 1, 6, 1, 1, 7, 1, 8, 3, 7, 1, 1, 4, 1, 2, 3];
	k = 16;

	console.log(findShortestInterval(findAllPossibleIntervals(boxes3, k)));
}

const boxes = [1, 2, 2, 3, 4, 6, 3, 1, 4, 2, 8];
const k = 1;

console.log(findShortestInterval(findAllPossibleIntervals(boxes, k)));

cases();
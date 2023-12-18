const extendHex = (shortHex) => {
  // write your code here
	let ans = '#';

	if(shortHex.charAt(0) === '#'){
		shortHex = shortHex.substring(1, shortHex.length);
	}
	
	let isCapital = 'A' >= shortHex.charAt(0) && shortHex.charAt(0) <= 'Z';

	for(let i = 0; i < shortHex.length; i++){
		ans = ans + shortHex.charAt(i) + shortHex.charAt(i);
	}

	return isCapital=== true ? ans.toUpperCase() : ans;
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));

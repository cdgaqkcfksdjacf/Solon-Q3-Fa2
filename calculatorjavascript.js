function add() {
	const num1 = parseFloat(document.getElementById('num1').value);
	const num2 = parseFloat(document.getElementById('num2').value);
	const result = num1 + num2;
	document.getElementById('result').innerHTML = `The sum of ${num1} and ${num2} is ${result}.`;
		}
		function subtract() {
			const num1 = parseFloat(document.getElementById('num1').value);
			const num2 = parseFloat(document.getElementById('num2').value);
			const result = num1 - num2;
			document.getElementById('result').innerHTML = `The difference of ${num1} and ${num2} is ${result}.`;
		}
		function multiply() {
			const num1 = parseFloat(document.getElementById('num1').value);
			const num2 = parseFloat(document.getElementById('num2').value);
			const result = num1 * num2;
			document.getElementById('result').innerHTML = `The product of ${num1} and ${num2} is ${result}.`;
		}
		function divide() {
			const num1 = parseFloat(document.getElementById('num1').value);
			const num2 = parseFloat(document.getElementById('num2').value);
			const result = num1 / num2;
			document.getElementById('result').innerHTML = `The quotient of ${num1} and ${num2} is ${result}.`;
		}
		function remainder() {
			const num1 = parseFloat(document.getElementById('num1').value);
			const num2 = parseFloat(document.getElementById('num2').value);
			const result = num1 % num2;
			document.getElementById('result').innerHTML = `The remainder of ${num1} and ${num2} is ${result}.`;
		}

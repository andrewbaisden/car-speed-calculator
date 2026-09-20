const carProfile = {
	superCar: {
		carName: 'Lamborghini',
		carImg: 'http://localhost:3000/static/lambo.png',
	},
	roadCar: {
		carName: 'Volkswagon',
		carImg: 'http://localhost:3000/static/vw.png',
	},
	slowCar: {
		carName: 'Citroen',
		carImg: 'http://localhost:3000/static/citroen.png',
	},
};

const MPH_TO_KPH = 1.609344;
const formatSpeed = (mph) => {
	const roundedMph = Math.round(mph);
	return `${roundedMph}mph (${Math.round(roundedMph * MPH_TO_KPH)}kph)`;
};

const convertMphToKph = () => {
	const mphInput = document.getElementById('mph');
	const mphValue = Number(mphInput.value);
	const convertOutput = document.getElementById('convertOutput');

	if (isNaN(mphValue) || mphInput.value.trim() === '' || mphValue < 0) {
		mphInput.value = 'Enter a number of 0 or more';
		convertOutput.innerHTML = '';
		return;
	}

	const kphValue = mphValue * MPH_TO_KPH;
	convertOutput.innerHTML = `
		<p><b>${mphValue} mph</b> is <b>${Math.round(kphValue * 10) / 10} kph</b>.</p>
	`;
};

const clearConvertData = () => {
	document.getElementById('mph').value = '';
	document.getElementById('convertOutput').innerHTML = '';
};

const carSpeed = () => {
	const speed = (distance, time) => distance / time;
	const totalSpeed = (num1, num2, speedTime) => speedTime(num1, num2);

	let theDistance = document.getElementById('distance').value;
	theSpeed = document.getElementById('speed').value;
	console.log(theDistance);
	console.log(theSpeed);

	if (isNaN(theDistance) || theDistance < 1) {
		theDistance = document.getElementById('distance').value = 'Enter a number greater than zero';
	}

	if (isNaN(theSpeed) || theSpeed <= 0) {
		theSpeed = document.getElementById('speed').value = 'Enter a number greater than zero';
	}

	const maxSpeed = totalSpeed(theDistance, theSpeed, speed);
	const speedLabel = formatSpeed(maxSpeed);
	console.log(Math.floor(45.95));

	let outputData = '';

	if (maxSpeed >= 100) {
		console.log(`The car is travelling at a speed of ${speedLabel}. You are speeding!`);
		outputData += `
    <h1>I feel the need... the need for speed!</h1>
    <p>The car is travelling at a speed of ${speedLabel}. You are speeding!</p>
    <img class="img-responsive" src=${carProfile.superCar.carImg} alt=${carProfile.superCar.carName} />
    `;
		document.getElementById('outputData').innerHTML = outputData;
	} else if (maxSpeed < 100 && maxSpeed > 31) {
		console.log(`The car is travelling at a speed of ${speedLabel}. Safety first.`);
		outputData += `
    <h1>You are within driving limits</h1>
    <p>The car is travelling at a speed of ${speedLabel}. Safety first.</p>
    <img class="img-responsive" src=${carProfile.roadCar.carImg} alt=${carProfile.roadCar.carName} />
    `;
		document.getElementById('outputData').innerHTML = outputData;
	} else if (maxSpeed <= 30) {
		console.log(
			`You are going too slow! The car is travelling at a speed of ${speedLabel}. Maybe you are taking the term "road trip", too literally. :)`
		);
		outputData += `
    <h1>You are going too slow!</h1>
    <p>The car is travelling at a speed of ${speedLabel}. Maybe you are taking the term "road trip", too literally. :)</p>
    <img class="img-responsive" src=${carProfile.slowCar.carImg} alt=${carProfile.slowCar.carName} />
    `;
		document.getElementById('outputData').innerHTML = outputData;
	}
	console.log(speedLabel);
};

const runCarSpeed = () => {
	carSpeed();
};

const submitBtn = document.getElementById('submit-btn');
submitBtn.addEventListener('click', runCarSpeed);

const clearData = () => {
	theDistance = document.getElementById('distance').value = '';
	theSpeed = document.getElementById('speed').value = '';
	document.getElementById('outputData').innerHTML = '';
};

document.getElementById('clear-data-btn').addEventListener('click', clearData);

document.getElementById('convert-btn').addEventListener('click', convertMphToKph);
document.getElementById('clear-convert-btn').addEventListener('click', clearConvertData);

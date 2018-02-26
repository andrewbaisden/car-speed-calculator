const carProfile = {
  superCar: {
    carName: 'Lamborghini',
    carImg: 'http://www.mansory.com/files/media/mansory/sliders/lamborghini-huracan-torofeo.png',
  },
  roadCar: {
    carName: 'Volkswagon',
    carImg: 'http://www.pngpix.com/wp-content/uploads/2016/06/PNGPIX-COM-Red-Volkswagen-Golf-GTD-Car-PNG-Image.png',
  },
  slowCar: {
    carName: 'Citroen',
    carImg:
      'http://www.stoneacreleasing.co.uk/assets/images/models/Stoneacre-HO-Car-Website-Images-Citroen-C3-Picasso-1.png',
  },
};

const carSpeed = () => {
  const speed = (distance, time) => distance / time;
  const totalSpeed = (num1, num2, speedTime) => speedTime(num1, num2);

  const theDistance = document.getElementById('distance').value;
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
  console.log(Math.floor(45.95));

  let outputData = '';

  if (maxSpeed >= 100) {
    console.log(`The car is travelling at a speed of ${Math.round(maxSpeed)}mph. You are speeding!`);
    outputData += `
    <h1>I feel the need... the need for speed!</h1>
    <p>The car is travelling at a speed of ${Math.round(maxSpeed)}mph. You are speeding!</p>
    <img class="img-responsive" src=${carProfile.superCar.carImg} alt=${carProfile.superCar.carName} />
    `;
    document.getElementById('outputData').innerHTML = outputData;
  } else if (maxSpeed < 100 && maxSpeed > 31) {
    console.log(`The car is travelling at a speed of ${Math.round(maxSpeed)}mph. Safety first.`);
    outputData += `
    <h1>You are within driving limits</h1>
    <p>The car is travelling at a speed of ${Math.round(maxSpeed)}mph. Safety first.</p>
    <img class="img-responsive" src=${carProfile.roadCar.carImg} alt=${carProfile.roadCar.carName} />
    `;
    document.getElementById('outputData').innerHTML = outputData;
  } else if (maxSpeed <= 30) {
    console.log(
      `You are going too slow! The car is travelling at a speed of ${Math.round(
        maxSpeed
      )}mph. Maybe you are taking the term "road trip", too literally. :)`
    );
    outputData += `
    <h1>You are going too slow!</h1>
    <p>The car is travelling at a speed of ${Math.round(
      maxSpeed
    )}mph. Maybe you are taking the term "road trip", too literally. :)</p>
    <img class="img-responsive" src=${carProfile.slowCar.carImg} alt=${carProfile.slowCar.carName} />
    `;
    document.getElementById('outputData').innerHTML = outputData;
  }
  console.log(`${Math.round(maxSpeed)}mph`);
};

const runCarSpeed = () => {
  carSpeed();
};

document.getElementById('submit-btn').addEventListener('click', runCarSpeed);

const clearData = () => {
  theDistance = document.getElementById('distance').value = '';
  theSpeed = document.getElementById('speed').value = '';
  document.getElementById('outputData').innerHTML = '';
};

document.getElementById('clear-data-btn').addEventListener('click', clearData);

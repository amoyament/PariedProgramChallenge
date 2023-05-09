let car = {
  make: "Nissan",
  model: "GTR",
  color: "Grey",
  mileage: 3000,
  isWorking: true,
  driveToWork: () => {
    console.log(car.mileage);
    car.mileage = car.mileage + 33;
  },
  driveAroundTheWorld: () => {
    console.log(car.mileage);
    car.mileage = car.mileage + 24000;
  },
  runErrands: () => {
    console.log(car.mileage);
    car.mileage = car.mileage + 30;
  },
};

car.driveToWork();

car.driveAroundTheWorld();

car.runErrands();

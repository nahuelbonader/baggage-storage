const db = require("./db");
const { Passenger, Package } = require("./models");

const names = [
  "Jhon",
  "William",
  "James",
  "Evelyn",
  "Jack",
  "Scarlett",
  "Madison",
  "Wyatt",
  "Carter",
  "Addison",
];
const surNames = [
  "Smith",
  "Jones",
  "Williams",
  "Taylor",
  "Davies",
  "Brown",
  "Wilson",
  "Evans",
  "Thomas",
  "Johnson",
];
const flight_code = [
  "O2M6F",
  "PRS17",
  "06ARN",
  "OM26E",
  "RXM6F",
  "P3M8F",
  "Q2M5H",
  "KN26F",
  "ARM63",
  "WU17N",
];
const categories = ["big", "small", "clothing"];

const randomNumber = (n) => Math.floor(Math.random() * n);

const getFlightCode = () => flight_code[randomNumber(10)];

const getName = () =>
  `${names[randomNumber(10)]} ${surNames[randomNumber(10)]}`;

const createPassengers = () => {
  const passengers = [];
  for (let i = 0; i < 20; i++) {
    passengers.push({ name: getName(), flight_code: getFlightCode() });
  }
  return passengers;
};

const createPackages = (passengers) => {
  return passengers.map((p) => ({
    passengerId: p.id,
    category: categories[randomNumber(3)],
    description: "Lorem ipsum",
  }));
};

db.sync({ force: true })
  .then(() => {
    console.log("Database clean");
    return Passenger.bulkCreate(createPassengers());
  })
  .then((passengers) => {
    passengers.forEach((p) => {
      console.log(`${p.name} created`);
    });
    return createPackages(passengers);
  })
  .then((packages) => {
    return Package.bulkCreate(packages);
  })
  .then((packages) => {
    console.log(`${packages.length} packages have been created`);
    process.exit();
  })
  .catch((err) => {
    console.error(err);
    process.exit();
  });

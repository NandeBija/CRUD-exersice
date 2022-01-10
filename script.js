var carList = document.getElementById("cars");
cars = [
  "Range Rover",
  "Land Rover",
  "Aston Martin",
  "Tesla",
  "Audi",
  "Toyota",
  "Ford",
  "BMW ",
  "VW",
  "Mercedes",
  "Haval",
];

countCars = (data) => {
  var count = document.getElementById("counter");

  if (data) {
    count.innerHTML = "There are a total of " + data + " cars";
  } else {
    count.innerHTML = "No cars selected";
    document.getElementById("name").style.display = "none";
  }
};
// Read: GET
getCars = () => {
  var data = "";
  if (cars.length > 0) {
    for (i = 0; i < cars.length; i++) {
      data += "<tr>";
      data += "<td>" + cars[i] + "</td>";
      data += '<td><button onclick="editCar(' + i + ')">Edit</button></td>';
      data += '<td><button onclick="deleteCar(' + i + ')">Delete</button></td>';
      data += "</tr>";
    }
  }

  countCars(cars.length);
  return (carList.innerHTML = data);
};
// Create: POST
addCar = () => {
  var carAdded = document.getElementById("add-name");
  // Get the value
  var car = carAdded.value;

  if (car) {
    // addCountry the new value
    cars.push(car.trim());
    // Reset input value
    carAdded.value = "";
    // Dislay the new list
    getCars();
  }
};
// Update: PUT
editCar = (item) => {
  var editCar = document.getElementById("edit-name");
  // Display value in the field
  editCar.value = cars[item];
  // Display fields
  document.getElementById("editForm").style.display = "block";

  document.getElementById("saveEdit").onsubmit = () => {
    // Get value
    var car = editCar.value;
    if (car) {
      // editCountry value
      cars.splice(item, 1, car.trim());
      // Display the new list
      getCars();
      // Hide fields
      closeInput();
    }
  };
};
// Delete: Delete
deleteCar = (item) => {
  // deleteCar the current row
  cars.splice(item, 1);
  // Display the new list
  getCars();
};

getCars();

closeInput = () => {
  document.getElementById("editForm").style.display = "none";
};

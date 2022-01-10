
let vehicles = new Array()

//create
console.log("Creating Objects")

var benz = {
     name: "Mercedes",
     transmission: "Manual",
     engine: "1200",
     color: "grey",
     fuel: "Diesel"
}

var toyota = {
    name: "Toyota",
    transmission: "Automatic",
    engine: "2000",
    color: "white",
    fuel: "Petrol"
}

vehicles.push(benz);
vehicles.push(toyota);


//create a new table row
function addRow(vehicle){
    var body = document.getElementById("outputTableBody");
    var row = document.createElement("tr");
    
    Keys = Object.keys(vehicle);
    Keys.forEach(key => {
        node = document.createElement("td");
        text = document.createTextNode(vehicle[key])
        node.appendChild(text)
        row.appendChild(node);
    })

    editBtn = document.createElement('button')
    editBtn.setAttribute( "onclick", "editVehicle('"+vehicle['name']+ "')");
    editBtn.textContent = 'edit'
    row.appendChild(editBtn)

    deleteBtn = document.createElement('button')
    deleteBtn.setAttribute( "onclick", "deleteVehicle('"+vehicle['name']+ "')");
    deleteBtn.textContent = 'edit'
    deleteBtn.textContent =  'delete'
    row.appendChild(deleteBtn)

    body.appendChild(row);
}

//render table
function displayTable(){
    vehicles.forEach(vehicle => {
       addRow(vehicle);
    });
}

//refresh table
function refresh(){
    var body = document.getElementById("outputTableBody");
    var newBody = document.createElement('tbody')
    newBody.setAttribute( "id", "outputTableBody");
    body.replaceWith(newBody);
    displayTable();
}


//adding a new record
function addVehicle(){
    var newVehicle = {
        name: document.getElementById('name').value,
        transmission: document.getElementById('transmission').value,
        engine: document.getElementById('capacity').value,
        color: document.getElementById('color').value,
        fuel: document.getElementById('fuel').value,
    }

    vehicles.push(newVehicle);
    addRow(newVehicle);

    console.log(vehicles);
}

//addVehicle();


//Read
console.log('Finding a vehicle')
function findByName(fname){
    var car = vehicles.find( function (vehicle) {
        return vehicle.name == fname
    })
    return car;
}

//findByName("Mercedes");


//filling edit form
function editVehicle(vname){
    var vehicle = vehicles.find( function (vehicle) {
        return vehicle.name == vname
    })
    console.log(vehicle)
    document.getElementById('editName').value = vehicle['name']
    document.getElementById('editCapacity').value = vehicle['engine']
    document.getElementById('editColor').value = vehicle['color']
    document.getElementById('editTransmission').value = vehicle['transmission']
    document.getElementById('editFuel').value = vehicle['fuel']
    document.getElementById('editVehicle').setAttribute( "onclick", "updateVehicle('"+vehicle['name']+ "')");
}


//edit
console.log("Editing Objects")
function updateVehicle(vname){
    var editThis = vehicles.find( function (vehicle) {
        return vehicle.name == vname
    })
    if(editThis){
        editThis.name = document.getElementById('editName').value,
        editThis.engine = document.getElementById('editCapacity').value,
        editThis.transmission = document.getElementById('editTransmission').value,
        editThis.color = document.getElementById('editColor').value,
        editThis.fuel = document.getElementById('editFuel').value

        console.log(vehicles);
    } else {
        console.log("Not Changed");
        console.log(vehicles); 
    }
    refresh();
}

//updateVehicle("Mercedes", "transmission", "automatic");
//updateVehicle("Toyota", 'color', "BLUE");



//delete
console.log("Deleting a vehicle")
function deleteVehicle(vname){
    vehicles = vehicles.filter( function (vehicle) {
        return vehicle.name != vname;
    })
    console.log(vehicles)
    refresh();
}






//button key bindings
document.getElementById('newVehicle').onclick = function(){
    addVehicle();
}

document.getElementById('searchVehicle').onclick = function(){
    var tag = document.getElementById('searchText').value
    console.log(tag)
    if (tag){
        car = findByName(tag)
        document.getElementById('searchOutput').textContent = JSON.stringify(car)
    }
    
}
    

displayTable();

let vehicles = new Array()


//create
console.log("Creating Objects")

var benz = {
     name: "Mercedes",
     transmission: "Manual",
     color: "grey",
     capacity: 4
}

var toyota = {
    name: "Toyota",
    transmission: "Automatic",
    color: "white",
    capacity: 4
}

vehicles.push(benz);
vehicles.push(toyota);

function displayAll(){
    console.log(vehicles);
}
displayAll();



console.log("adding a vehicle")
function addVehicle(){
    var bus = {
        name: "Mistubishi",
        transmission: "Manual",
        color: "yellow",
        capacity: 56
    }
    vehicles.push(bus);

    console.log(vehicles);
}

//addVehicle();


//Read
console.log('Finding a vehicle')
function findByName(fname){
    var car = vehicles.find( function (vehicle) {
        if (vehicle.name == fname){
        return vehicle; 
        }
    })
    console.log(car)
}

//findByName("Mercedes");



//edit
console.log("Editing Objects")
function editVehicle(vname, field, newvalue){
    var editThis = vehicles.find( function (vehicle) {
        return vehicle.name == vname
    })
    if(editThis){
        editThis[field] = newvalue;
        console.log("Changed "+vname+ " " +field+ " to " +newvalue );
        console.log(vehicles);
    } else {
        console.log("Not Changed");
        console.log(vehicles); 
    }
}

//editVehicle("Mercedes", "transmission", "automatic");
//editVehicle("Toyota", 'color', "BLUE");


//delete
console.log("Deleting a vehicle")
function deleteVehicle(vname){
    vehicles = vehicles.filter( function (vehicle) {
        return vehicle.name != vname;
    })
    console.log(vehicles)
}

//deleteVehicle("Mercedes")

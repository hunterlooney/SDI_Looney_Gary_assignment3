//Gary W. Hunter Looney
//SDI 1303: Project 3





















//Practice

//Objects
/*
var arr = [true, false, " ", [], function () {}, 101];

//the { is what makes this an object to jave
var student = { 
				id: "0000111", 
				name: "Mike", 
				interests: [
							"Javascript", 
							"HTML", 
							"CSS", 
							"Flash"
				],
				age: 503423,
				sayHi: function () {
									console.log("Hi");
	}
};

var key = "id";

console.log( student[ key ] );
console.log( student.sayHi );
console.log ( student["sayHi"] );

//use if function has console.log in function
student.sayHi ();
student["sayHi"] ();
student.sayHi ();
student.sayHi = function () {
								console.log("Get Lost!!");
				} ;
student.sayHi ();

//for statement in objects "turns values into strings"
for (var key in student) {
							console.log( "key: " + key + ", value: " + student [key]);
};

//to get actual values not strings
for (var key in student) {
							console.log( "key: " + key + ", value: ", student [key]);
};
*/

//Revealing Module Pattern
/*
//Dauntless, Interceptor, Bounty, Enterprise
//Constructor
var pirateShip = function (name) { //private
		var cargoHold = [];
		var cargoLoad = function (item) {
				if (item !== "elephants") {
				cargoHold.push(item);
				} else {
				console.log("Not allowed to load elephants!!!");
				}
		};
		var cargoList = function () {
				for (var n = 0; n < cargoHold.length; n++) {
						console.log(name + " cargo " + n + ": " + cargoHold [ n ] + ".");
				}
		};
		var getName = function () { 
				return name; 
		};
		return { //public
				"name": getName,
				"captain": " ",
				"crew": [],
				"cargoLoad": cargoLoad,
				"cargoList": cargoList
		};	
};

// api : application programming interface (in return)

var dauntless = pirateShip("Dauntless");
dauntless.cargoLoad("oranges");
dauntless.cargoLoad("elephants");
//dauntless.hold.push("elephants");
console.log(dauntless.name); //getter; accessor
dauntless.cargoList ();
*/

//Data Structuring
/*
//Accessing JSON


var handleData = function (json) {
	for (var i = 0; i < json.friends.length; i++) {
			var friend = json.friends[i]
			console.log("User ID: " + friend.uuid + ", Name: " + friend.name + ", Age: " + friend.age);
	};
};

handleData(json2);

//creates a single line of the java script object
// var jsonstring = JSON.stringify(json);

//Reverse parsing makes a normal java script object from data
//var receivedjson = JSON.parse(jsonstring);
*/
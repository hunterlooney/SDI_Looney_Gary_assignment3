//Gary W. Hunter Looney
//SDI 1303: Project 3


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

//Dauntless, Interceptor, Bounty, Enterprise
//Constructor
var pirateShip = function (name) {
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
									return {
												"name": name,
												"captain": " ",
												"crew": [],
												"cargoLoad": cargoLoad,
												"cargoList": cargoList
									};	
};

var dauntless = pirateShip("Dauntless");

dauntless.cargoLoad("oranges");
dauntless.cargoLoad("elephants");
//dauntless.hold.push("elephants");
console.log(dauntless);

dauntless.cargoList ();

//18:24

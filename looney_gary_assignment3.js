//Gary W. Hunter Looney
//SDI 1303: Project 3

var takeInventory = true;
if (takeInventory ===true) {
		var player = function (json) {
				for (var i = 0; i < json.contents.length; i++) {
						var content = json.contents[i]
						console.log("Player Number: " + content.player + ", Name: " + content.name + ", Amount of Lockpicks in Backpack: " + content.backpack);
				};
		};
		player(json3);
};

var equipInvent = function () { //private
		var backpackHold = [];
		var backpackLoad = function (item) {
				if (item !== 0) {
				backpackHold.push(item);
				console.log("You just added a lockpick!");
				console.log("You have " + backpackHold + " lockpicks in your backpack.");
				} else {
				console.log("Why are you trying to add 0 lockpicks?");
				}
				while (backpackHold < 2) {
						console.log("\"I better keep looking for lockpicks.\"");
						console.log("You just found a lockpick!");
						console.log("You just added a lockpick!");
						backpackHold++;
						console.log("You have " + backpackHold + " lockpicks in your backpack.");
				};
				if (backpackHold >= 2) {
						console.log("\"Now I can pick the lock and escape this room.\"");
						console.log("\"Come on Bob let's go! Get up!\" Bob's ankle is injured.");
						console.log("\We will probably have to rest periodically because of Bob's injury.");
				};
		};
		return { //public
				"backpackLoad": backpackLoad,
				"backpackHold": backpackHold
		};	
};
var player1 = equipInvent();
player1.backpackLoad(0);


var escape = function () {
		var badGuys = [ "Bad Guy 1",  "Bad Guy 2",  "Bad Guy 3",  "Bad Guy 4" ], //array
			wayOutWithoutFight = false, //boolean
			weaponsAvailable = 1, //number
			killedSomeone = "\"Why did I have to kill someone? I'm not a killer.\"", //string
			kaylaKit = { //object
					name: "Kayla", 
					weapon: "knife",
					attackPhrase: "\"Let's do this!\""
			},
			bobKit = {
					name: "Bob", 
					weapon: "hammer",
					attackPhrase: "\"I'm Ready! Are you?\""
			}
		return {
				"badGuys": badGuys, //Return Array
				"wayOutWithoutFight": "\"Is there a way out without a fight?\" " + wayOutWithoutFight, //Return String and Boolean
				"weaponsAvailable": "\"How many weapons do we have?\" " + weaponsAvailable, //Return String and Number
				"killedSomeone": killedSomeone, //Return String
				"kaylaKit": kaylaKit, //Return Object
				"bobKit": bobKit //Return Object
		};
};

var abilityToEscape = escape();


//Log the returns out individually
console.log(abilityToEscape.badGuys);
console.log(abilityToEscape.wayOutWithoutFight);
console.log(abilityToEscape.weaponsAvailable);
console.log(abilityToEscape.killedSomeone);
console.log(abilityToEscape.kaylaKit);
console.log(abilityToEscape.bobKit);

//Or log out the whole thing I'm going to comment it out though
//console.log(abilityToEscape);




//Notes
//Definitions
/*
reference: http://www.cs.kent.ac.uk/people/staff/djb/book/glossary.html#m
*/
//Mutator
/*
mutator method
A method specifically designed to allow controlled modification of a private attribute of a class. 
By convention, we name mutators with a set prefix followed by the name of the attribute being modified. 
For instance, the mutator for an attribute named speed would be setSpeed. 
By making an attribute private, we prevent objects of other 
classes from altering its value other than through its mutator. 
The mutator is able to check the value being used to modify the 
attribute and reject the modification if necessary. 
In addition, modification of one attribute might require others 
to be modified in order to keep the object in a consistent state. 
A mutator method can undertake this role. 
Mutators are used both to grant safe access to the value of a private attribute 
and to protect attributes from modification by objects of other classes. 
The latter goal is achieved by choosing an appropriate visibility for the mutator.
*/
//Argument
/*
argument
Information passed to a method. 
Arguments are also sometimes called parameters. 
A method expecting to receive arguments must contain a 
formal argument declaration for each as part of its method header. 
When a method is called, the actual argument values are copied 
into the corresponding formal arguments.
*/
//Method
/*
method
The part of a class definition that implements some of 
the behavior of objects of the class. 
The body of the method contains declarations of 
local variables and statements to implement the behavior. 
A method receives input via its arguments, if any, and may return 
a result if it has not been declared as void.
*/

//Practice Exercises from Full Sail
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
// this is a single line comment
// another comment...

/*
 * this is
 * very
 * cool
 */

console.log('hello from javascript');
console.log("this is another string");

// debugger

var a = 10;
var b = 20;
var c = a + b;
var d = c * b;
var e = d * (b - a);

var power = Math.pow(2, 8);

console.log('e is ' + e);
console.log('2 to the 8th power is ' + power);

// :example:
// you have a room that is 8ft by 12ft
// write the code that will compute the area of
// the room and print that out to the console

var length = 8;
var width = 12;
var area = length * width;
var areaMessage = 'the area of 8x12 feet is ' + area + ' square feet';
console.log(areaMessage);

// example
// you have a cylinder with radius 5in, height of 9in.
// what is the volume in cu.in.

var radius = 5;
var height = 9;
var circleArea = Math.PI * Math.pow(radius, 2);
var circleVol = circleArea * height;
console.log('the volume of a 5in radius cylinder, 9 inches high is ' + circleVol);

// you are a floor painter
// you have an exceptionally large bucket of paint
// you can paint 29,572 square feet of surface without having to refill.
// every house you encounter has 3 rooms. here are the dimensions.
// 3 x 5
// 7 x 9
// 6 x 2
// how many full houses can you paint before running out of paint.

var room1 = 3 * 5;
var room2 = 7 * 9;
var room3 = 6 * 2;
var home = room1 + room2 + room3;
var paint = 29572;
var homesToPaint = paint / home;
homesToPaint = Math.floor(homesToPaint);
console.log(homesToPaint);

// you are a spaceperson, with lasers
// you can travel the speed of light
// you are in the andromeda galaxy, somewhere
// you want to destroy justin bieber
// if you leave tomorrow
// when will you arrive to meet the bieb.
// i.e., how many days will it take you to get here
// please hurry!

var years = 2538000;
var daysPerYear = 365;
var totalDays = years * 365;
console.log(totalDays);

var firstName = prompt('Enter your first name');
console.log('your first name is ' + firstName);
var lastName = prompt('Enter your last name');
console.log('your full name is ' + firstName + ' ' + lastName);

// debugger
var l = prompt('Enter the length of your room');
l = parseInt(l);
var w = prompt('Enter the width of your room');
w = parseInt(w);
var h = prompt('Enter the height of your room');
h = parseInt(h);
var volume = l * w * h;
console.log(volume);

var age = prompt('what is your age');
age = parseInt(age);

if(age < 18)
  console.log('you cannot vote');
else
  console.log('you can vote');





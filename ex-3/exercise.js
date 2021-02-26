// write your JS here
// remember to always test in the browser
// to see if everything works correctly
//Create an array to hold your top choices (colors, presidents, whatever).

//For each choice, log to the screen a string like: "My #1 choice is blue."

//Change your top choices into objects, e.g. pet with: name, type of pet.. as properties.

//Display it to the browser.
/*function displayChoice(choiceNumber) {
    return "my #" +choiceNumber + " choice is " + choices[choiceNumber -1]

};

var choices = ["black", "salvini", "boxing"];
alert(displaychoice(1));
alert(displaychoice(2));
alert(displaychoice(3));*/
var choices = [colors, cities];
var colors = ["red", "pink", "purple", "black", "blue"];
alert("My #1 choice is " + colors[3]);
var cities = ["Milan", "venice", "London", "canada"];
alert("My #1 choice is " + cities[3]);
var presidents = ["biden", "conte", "stanley"];
alert("My #1 choice is " + presidents[2]);

const favourites = {
    color: "Black",
    city: "Milan",
    presidents: "stanley",
}
alert("My favourite color is " + favourites.color);
alert("My favourite city is " + favourites.city);
alert("My favourite presidents is " + favourites.presidents);

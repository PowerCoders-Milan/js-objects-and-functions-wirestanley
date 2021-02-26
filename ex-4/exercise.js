// write your JS here
// remember to always test in the browser
// to see if everything works correctly

/*Improve your age calculator by using a function

Rebuild the age calculator by using new Date()

Then use that inside a function

Call that function several times with different dates*/


function ageCalculator() {
    birthYear = prompt("Please put your Birthday year");
    actualYear = new Date();
    age = actualYear.getFullYear()-birthYear
    return "Your age is " + age
}

window.alert(ageCalculator())
window.alert(ageCalculator())

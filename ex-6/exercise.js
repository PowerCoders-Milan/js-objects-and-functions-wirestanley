// write your JS here
// remember to always test in the browser
// to see if everything works correctly

/*Write a function named greaterNum that:

Takes 2 arguments, both numbers.

Returns whichever number is the greater (higher) number.

Call that function 2 times with different number pairs

Log the output, e.g. "The greater number of 5 and 10 is 5." like we did yesterday.*/

var x = 5;
var y = 10;
    function greaterNum() {
    if (x < y) {
        alert(y + " is the greater number " + x);
    }
    else if (x > y) {
        alert(x + "is the greater number " + y);
    }
    else{
        alert("they are equall");
    }
}
 greaterNum();
 greaterNum();
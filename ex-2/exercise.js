// write your JS here
// remember to always test in the browser
// to see if everything works correctly
var children = prompt("please number of chldren");
var partner = prompt("please your partners name");
var place = prompt("please your city");
var job = prompt("please your job title")

function tellFortune(children, partner, place, job) {
    this.children = children
    this.partner = partner
    this.place = place
    this.job = job
    this.fortune = function() {
        alert(" you are going to be married to " + partner + " live in " + place + " work as " + job + " with " + children + " kids ")
    }
}
var stanley = new tellFortune(children, partner, place, job);
stanley.fortune()





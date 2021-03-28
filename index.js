let myProfil = {
    name : "Gregory",
    campus : "Remote-fr"
}


console.log(myProfil);

const myInformation = require('./information.js');

myInformation();

var cowsay = require("cowsay");

console.log(cowsay.say({
	text : `Hi my name is ${myProfil.name}, and my campus is ${myProfil.campus}`,
	e : "oO",
	T : "U "
}));
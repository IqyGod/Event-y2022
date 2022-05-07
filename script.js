document.getElementById("demo").innerHTML = Date();

var then =  new Date(2022,02,02),
    today = new Date;

document.getElementById("wait").innerHTML = Math.round((today - then) / (1000 * 60 * 60 * 24))

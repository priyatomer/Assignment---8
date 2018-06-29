var a , b ,c , d;
var output;

function init() {
	a = document.querySelector("#val_a");
	b = document.querySelector("#val_b");
	c = document.querySelector("#val_c");
	output = document.querySelector("#output");
}

function eqn() {

	document.querySelector("#a").innerHTML = a.value==""?"a":a.value;
	document.querySelector("#b").innerHTML = b.value==""?"b":b.value;
	document.querySelector("#c").innerHTML = c.value==""?"c":c.value;

}

function solve() {
	a1 = eval(a.value);
	b1 = eval(b.value);
	c1 = eval(c.value);

	if (a1 == undefined || b1 == undefined || c1 == undefined) {
		console.log("hrllo");
		output.innerHTML = "Please Enter All Three Values."
	}

	else{
		d = Math.pow(b1,2)-4*a1*c1;

			if (d < 0 ) {
				output.innerHTML = "There is no real root."
			}

			else if (d == 0) {
				var r1 = (-b1 + Math.sqrt(d))/(2+a1);
				var r2 = (-b1 - Math.sqrt(d))/(2+a1);
				output.innerHTML = "There is real and equal root.<br>"
				output.innerHTML += "x<sub>1</sub>: " + r1 + "<br>";
				output.innerHTML += "x<sub>2</sub>: " + r2 + "<br>";
			}

			else {
				var r1 = (-b1 + Math.sqrt(d))/(2+a1);
				var r2 = (-b1 - Math.sqrt(d))/(2+a1);
				output.innerHTML = "There is real and distinct root.<br>"
				output.innerHTML += "x<sub>1</sub>: " + r1 + "<br>";
				output.innerHTML += "x<sub>2</sub>: " + r2 + "<br>";
			}
	}
	
}
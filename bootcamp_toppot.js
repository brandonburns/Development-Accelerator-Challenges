function TopPot(location, hoursOfOp, percentEnter, averagePerOrder, hourlyFT, donutsperHour) {
	this.location = location;
	this.hoursOfOp = hoursOfOp;
	this.percentEnter = percentEnter;
	this.averagePerOrder = averagePerOrder;
	this.hourlyFT = function () {
		return (Math.random() * (hourlyFT.max - hourlyFT.min) + 1) + hourlyFT.min;
	};
	this.donutsPerHour = function () {
		return this.hourlyFT() * this.percentEnter / 100 * this.averagePerOrder;
	};
};

var donutsNeeded = function(store) {
	var hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
	for (var i = 0; i < hours.length; i++) {
		document.getElementById("hourlyReport").innerHTML = "The " + store.location +
		" location is projected to sell " + Math.round(store.donutsPerHour()) + " donuts per hour.";
	};
};

var report = function(store) {
	var hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
	var sum = 0;
	for (var i = 0; i < hours.length; i++) {
		sum += store.donutsPerHour();
	};
	document.getElementById("dailyReport").innerHTML = "The " + store.location + 
	" location is projected to sell " + Math.round(sum) + " donuts per day.";
};

var button1 = document.getElementById('calculate');

var print = function() {
	var parameter1 = document.getElementById('input1').value;
	var parameter2 = document.getElementById('input2').value;
	var parameter3 = document.getElementById('input3').value;
	var parameter4 = document.getElementById('input4').value;
	var parameter5 = document.getElementById('input5').value;
	var parameter6 = document.getElementById('input6').value;
	var newStore = new TopPot(parameter1, parameter2, parameter5, parameter6, 
		{max: parameter3, min: parameter4});

	report(newStore);
	donutsNeeded(newStore);

	//document.getElementById("dailyReport").innerHTML = "Total Donuts Needed For Day: " + answer1; 
	//document.getElementById("hourlyReport").innerHTML = "Hourly Donuts Needed: "; 
};

button1.addEventListener('click', print);

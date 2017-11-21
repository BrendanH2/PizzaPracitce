function getReceipt() {

	var text1 = "<h3>You Ordered:</h3>";
	var runningTotal = 0;
	var sizeTotal = 0;
	var sizeArray = document.getElementsByClassName("size");
	for (var i = 0; i < sizeArray.length; i++) {
		if (sizeArray[i].checked) {
			var selectedSize = sizeArray[i].value;
			text1 = text1+selectedSize+"<br>";
		}
	}
	if (selectedSize === "Personal") {
		sizeTotal = 6;
	} else if (selectedSize === "Medium") {
		sizeTotal = 10;
	} else if (selectedSize === "Large") {
		sizeTotal = 14;
	} else if (selectedSize === "Extra Large") {
		sizeTotal = 16;
	}
	
	
	
	runningTotal = sizeTotal;
	console.log(selectedSize+" = $"+sizeTotal+".00");
	console.log("size text1: "+text1);
	console.log("subtotal: $"+runningTotal+".00");
	getMeat(runningTotal,text1); // All three of these variables will be passed on to each function
};

<!-- Meat -->
function getMeat(runningTotal,text1) {
	var meatTotal = 0;
	var selectedMeat = [];
	var meatArray = document.getElementsByClassName("meats");
	for (var j = 0; j < meatArray.length; j++) {
		if (meatArray[j].checked) {
			selectedMeat.push(meatArray[j].value);
			console.log("selected meat item: ("+meatArray[j].value+")");
			text1 = text1+meatArray[j].value+"<br>";
		}
	}
	var meatCount = selectedMeat.length;
	if (meatCount > 1) {
		meatTotal = (meatCount - 1);
		
	} else {
		meatTotal = 0;
	}
	

	runningTotal = (runningTotal + meatTotal);
	console.log("total selected meat items: "+meatCount);
	console.log(meatCount+" meat - 1 free meat = "+"$"+meatTotal+".00");
	console.log("meat text1: "+text1);
	console.log("Purchase Total: "+"$"+runningTotal+".00");
	getCheese(runningTotal,text1)
};	

<!-- CHEESE -->
function getCheese(runningTotal,text1) {
	var cheeseTotal = 0;
	var cheeseArray = document.getElementsByClassName("cheese");
	for (var l = 0; l < cheeseArray.length; l++) {
		if (cheeseArray[l].checked) {
			var selectedCheese = cheeseArray[l].value;
			text1 = text1+selectedCheese+"<br>";
		}
	}
	if (selectedCheese === "Regular") {
		cheeseTotal = 0;
	} else if (selectedCheese === "No Cheese") {
		cheeseTotal = 0;
	} else if (selectedCheese === "Extra Cheese") {
		cheeseTotal = 3;
	}
	runningTotal = (runningTotal + cheeseTotal);
	console.log(selectedCheese+" = $"+cheeseTotal+".00");
	console.log("cheese text1: "+text1);
	console.log("subtotal: $"+runningTotal+".00");
	getCrust(runningTotal,text1); 
};


<!-- Crust -->
function getCrust(runningTotal,text1) {
	var crustTotal = 0;
	var crustArray = document.getElementsByClassName("crust");
	for (var i = 0; i < crustArray.length; i++) {
		if (crustArray[i].checked) {
			var selectedCrust = crustArray[i].value;
			text1 = text1+selectedCrust+"<br>";
		}
	}
	if (selectedCrust === "Cheese Stuffed Crust") {
		crustTotal = 3;
	} else {
		crustTotal = 0;
	} 
	
	runningTotal = (runningTotal + crustTotal);
	console.log(selectedCrust+" = $"+crustTotal+".00");
	console.log("crust text1: "+text1);
	console.log("subtotal: $"+runningTotal+".00");
	getSauce(runningTotal,text1); 
};


<!-- Sauce -->
function getSauce(runningTotal,text1) {
	var sauceTotal = 0;
	var sauceArray = document.getElementsByClassName("sauce");
	for (var i = 0; i < sauceArray.length; i++) {
		if (sauceArray[i].checked) {
			var selectedSauce = sauceArray[i].value;
			text1 = text1+selectedSauce+"<br>";
		}
	}
	if (selectedSauce === "Marinara Sauce") {
		sauceTotal = 0;
	} else if(selectedSauce === "White Sauce") {
		sauceTotal = 0;
	} else if(selectedSauce === "Barbeque Sauce") {
		sauceTotal = 0;
	} else if(selectedSauce === "No Sauce") {
		sauceTotal = 0;
	}
		
	runningTotal = (runningTotal + sauceTotal);
	console.log(selectedSauce+" = $"+sauceTotal+".00");
	console.log("sauce text1: "+text1);
	console.log("subtotal: $"+runningTotal+".00");
	getVegetables(runningTotal,text1); 
};

<!-- Vegetables -->
function getVegetables(runningTotal,text1) {
	var vegetableTotal = 0;
	var selectedVegetable = [];
	var vegetableArray = document.getElementsByClassName("vegetables");
	for (var k = 0; k < vegetableArray.length; k++) {
		if (vegetableArray[k].checked) {
			selectedVegetable.push(vegetableArray[k].value);
			console.log("selected vegetables item: ("+vegetableArray[k].value+")");
			text1 = text1+vegetableArray[k].value+"<br>";
		}
	}
	var vegetableCount = selectedVegetable.length;
	if (vegetableCount > 1) {
		vegetableTotal = (vegetableCount - 1);
	} else {
		vegetableTotal = 0;
	}
	runningTotal = (runningTotal +  vegetableTotal);
	console.log("total selected vegetable items: " +vegetableCount);
	console.log(vegetableCount+" vegetable - 1 free vegetable = "+"$"+vegetableTotal+".00");
	console.log("vegetable text1: "+text1);
	console.log("Purchase Total: "+"$"+runningTotal+".00");
	document.getElementById("showText").innerHTML=text1;
	document.getElementById("totalPrice").innerHTML = "</h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
};	
		
		
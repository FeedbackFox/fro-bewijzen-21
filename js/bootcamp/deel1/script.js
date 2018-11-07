var currentYear = new Date().getFullYear();
var name = "Timo Raterink";

(function start(){
	
	//Change date everywhere
	var htmlYear = document.getElementsByClassName("year");
	console.log(htmlYear[1]);
	
	
	
	for (var i = 0; i < htmlYear.length; i++)
		{
		htmlYear[i].textContent = currentYear;
		}
	document.title = "JavaScript Bootcamp " + currentYear;
	
	//Change name everywhere
	
	var htmlName = document.getElementsByClassName("name");
	for (var i = 0; i < htmlName.length; i++)
		{
		htmlName[i].textContent = name;
		}
	
}());

function instruction3() {
	//Grab all related classes
	var title = document.getElementsByClassName("title");
	var assignment = document.getElementsByClassName("assignment");
	var execution = document.getElementsByClassName("execution");
	//Change said classes to real content
	title[0].textContent = "Click Event"
	assignment[0].textContent = "Door op de link Click event te klikken zorgt javascript ervoor dat de text wordt aangepast.";
	execution[0].textContent = "";
}
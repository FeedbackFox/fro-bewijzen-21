"use strict";

// Declare variables
var date = new Date();
var student = "Timo Raterink";
var group = "MD2A";
var startyear = 2018;
var year = "you should not be seeing this";
var title = "Javascript Bootcamp 2018";


// Init
setYear();
instruction2();


//Instructions

function instruction2() {
    document.title = title;
    document.getElementById("pageHeader").innerText = title;

    document.getElementById("group").innerText = group;

    setClassTextContent("year", year);
    setClassTextContent("student", student);
}

function instruction3() {
    var description = "Na op de link 'Click Event' te hebben geklikt werden de header," +
        " de beschrijving en de oplossing van de opdracht aangepast";

    setIdsText("instructionHeader", "Opdracht 3");
    setIdsText("instructionDescription", description);
    setIdsText("instructionResult", "");
}

function instruction6() {
    var description = "Bepaal de periode op basis van het startjaar en het huidige jaar en voer een klein testje uit voor verschillende startjaren: vorige jaar, huidige jaar en volgende jaar.";
    var result = "Huidige jaar: " + date.getFullYear() + "\nStartjaren:\n- 2017: ";
    setStartYear("2017");
    result += year + "\n- 2018: "; 
    setStartYear("2018");
    result += year + "\n- 2019: ";
    setStartYear("2019");
    result += year;

    setIdsText("instructionHeader", "Opdracht 6");
    setIdsText("instructionDescription", description);
    setIdsText("instructionResult", result);

}

function instruction7() {
    var description = "Bepaal de dag van vandaag op drie verschillende manieren: 1)if/else, 2)switch en 3) array";
    var result = "Door gebruik te maken van if/else weet ik dat het vandaag " + instruction7a() + " is.\nOok wanneer ik switch gebruik weet ik dat het vandaag " + instruction7b() + " is.\nEn tenslotte door gebruik te maken van een array weet ik ook dat het vandaag " + instruction7c() + " is.\n\n De beste manier om hiervoor te gebruiken is de Array methode, omdat je hiervoor minder code hoeft te gebruiken.";


    setIdsText("instructionHeader", "Opdracht 7");
    setIdsText("instructionDescription", description);
    setIdsText("instructionResult", result);

}

function instruction7a() {
    var weekday = date.getDay();
    if(weekday == 0)
    {weekday = "Zondag"}
    else if(weekday == 1)
    {weekday = "Maandag"}
    else if(weekday == 2)
    {weekday = "Dinsdag"}
    else if(weekday == 3)
    {weekday = "Woensdag"}
    else if(weekday == 4)
    {weekday = "Donderdag"}
    else if(weekday == 5)
    {weekday = "Vrijdag"}
    else if(weekday == 6)
    {weekday = "Zaterdag"}
    return weekday;
}
function instruction7b() {
    var weekday = date.getDay();
    switch (weekday) {
        case 0:
            weekday = "Zondag";
            break;
        case 1:
            weekday = "Maandag";
            break;
        case 2:
            weekday = "Dinsdag";
            break;
        case 3:
            weekday = "Woensdag";
            break;
        case 4:
            weekday = "Donderdag";
            break;
        case 5:
            weekday = "Vrijdag";
            break;
        case 6:
            weekday = "Zaterdag";
            
    }
    return weekday;
}
function instruction7c() {
    var weekdayarray = ["Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag"];
    return weekdayarray[date.getDay()];
}

function instruction8() {
    var colors = ["Rood", "Geel", "Blauw", "Groen", "Zwart"]

    var description = "Sorteer een array alfabetisch.";
    var result = "Kleuren: ";

    result += colors.join(", ");
    colors.sort();
    result += "\nGesorteerd (A-Z): " + colors.join(", ");
    colors.reverse();
    result += "\nGesorteerd (Z-A): " + colors.join(", ");
 

    


    setIdsText("instructionHeader", "Opdracht 8");
    setIdsText("instructionDescription", description);
    setIdsText("instructionResult", result);
}



//Setters and Getters
function setYear()
{
    if (date.getFullYear() <= startyear) {
    year = startyear;
    }
    else {
    year = startyear + " - " + date.getFullYear();
    }
}

function setStartYear(input) {
    startyear = input;
    setYear();
}


function setClassTextContent(classvar, input) {
    var temp = document.getElementsByClassName(classvar);
    for (var i = 0; i < temp.length; i++) {
        temp[i].innerText = input;
    }

}

function setIdsText(idvar, input) {
    document.getElementById(idvar).innerText = input;
}
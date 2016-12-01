function getOptions(){
	var x = document.getElementById("mySelect");
	var txt = "Cautions: ";
	var txt1;

	if (document.getElementById("mySelect").value == "")
		txt1 = txt + "\n" + "Please choose one of the medicine";
	if (document.getElementById("mySelect").value == "1")
		txt1 = txt + "\n" + "Aslo known as acetylsalicylic acid (ASA) / Aspirin overdose can be acute or chronic";
	if (document.getElementById("mySelect").value == "2")
		txt1 = txt + "\n" + "A vitamin is an organic compound and a vital nutrient that an organism requires in litmited amounts";
	alert(txt1);
}

function addSection(where){
	var main = document.getElementById("section0");
	var cntr = (main.datacntr || 0) + 1;
	main.datacntr = cntr;

	var clone = main.cloneNode(true);
	//clone.id = "section" + cntr;
	where.parentNode.insertBefore(clone, where);
}

function myFunction(field){
	field.parentNode.outerHTML = "";
	field.parentNode.style.visibility='none';
}

function myPatient1(){
	var x1 = document.getElementById("main_pre");
	var x2 = document.getElementById("patient_03");
	var x3 = document.getElementById("patient_04");
	x1.style.display = 'block';
	x2.style.display = 'none';
	x3.style.display = 'none';
}

function myPatient2(){
	var y1 = document.getElementById("main_pre");
	var y2 = document.getElementById("patient_02");
	var y3 = document.getElementById("patient_04");
	y1.style.display = 'block';
	y2.style.display = 'none';
	y3.style.display = 'none';
}

function myPatient3(){
	var z1 = document.getElementById("main_pre");
	var z2 = document.getElementById("patient_02");
	var z3 = document.getElementById("patient_03");
	z1.style.display = 'block';
	z2.style.display = 'none';
	z3.style.display = 'none';
}

function mySubmit(){
	var w1 = document.getElementById("main_pre");
	var w2 = document.getElementById("patient_02");
	var w3 = document.getElementById("patient_03");
	var w4 = document.getElementById("patient_04");
	w1.style.display = 'none';
	w2.style.display = 'block';
	w3.style.display = 'block';
	w4.style.display = 'block';
}

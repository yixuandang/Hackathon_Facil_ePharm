function openToday()
{
	var d;
	var today;

	d = new Date();
	today = d.getDay();
	document.getElementById(today).classList.add("today");
	document.getElementById(today).style.display = "block";
}

function openDay(evt, day)
{
	var i, tabcontent, tablinks, d, n;

	d = new Date();
	n = d.getDay();
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++)
	{
		tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++)
	{
		tablinks[i].classList.remove("today");
		tablinks[i].classList.remove("otherday");
	}
	if (day == n)
		evt.currentTarget.classList.add("today");
	else
		evt.currentTarget.classList.add("otherday");
	document.getElementById(day).style.display = "block";
}

function openMeds(evt, id, info, links)
{
	var medinfo = document.getElementsByClassName(info);
	for (i = 0; i < medinfo.length; i++)
	{
		medinfo[i].style.display = "none";
	}
	var medlinks = document.getElementsByClassName(links);
	for (i = 0; i < medlinks.length; i++)
	{
		medlinks[i].classList.remove("selected");
	}
	evt.currentTarget.classList.add("selected");
	document.getElementById(id).style.display = "block";
}

function hide(str)
{
	var elements = document.getElementsByClassName(str);
	for(i = 0; i < elements.length; i++)
	{
		elements[i].style.display = "none";
	}
}

function show(str)
{
	var elements = document.getElementsByClassName(str);
	for(i = 0; i < elements.length; i++)
	{
		elements[i].style.display = "block";
	}
}

function toggle(evt, links, info)
{
	hide(links);
	hide(info);
	if (evt.currentTarget.classList.contains("toggle"))
		evt.currentTarget.classList.remove("toggle");
	else
	{
		evt.currentTarget.classList.add("toggle");
		show(links);
	}
}
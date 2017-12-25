var jsonList = new Array();
jsonList = [
{
	"name": "Sanchez Hopkins",
	"designation": "Founder and CEO",
	"avatar": "http://coenraets.org/apps/angular-directory/pics/james_king.jpg"
},
{
	"name": "Abigail Shields",
	"designation": "Software Engineer",
	"avatar": "http://coenraets.org/apps/angular-directory/pics/james_king.jpg"
},
{
	"name": "Juliette Thompson",
	"designation": "Frontend engineer",
	"avatar": "http://coenraets.org/apps/angular-directory/pics/james_king.jpg"
},
{
	"name": "Marks Whitehead",
	"designation": "Accountant",
	"avatar": "http://coenraets.org/apps/angular-directory/pics/james_king.jpg"
},
{
	"name": "Ratliff Murphy",
	"designation": "Software Engineer",
	"avatar": "http://coenraets.org/apps/angular-directory/pics/james_king.jpg"
},
{
	"name": "Alyce Hoffman",
	"designation": "Frontend engineer",
	"avatar": "http://coenraets.org/apps/angular-directory/pics/james_king.jpg"
},
{
	"name": "Bauer Cantrell",
	"designation": "Advisor",
	"avatar": "http://coenraets.org/apps/angular-directory/pics/james_king.jpg"
},
{
	"name": "Talley Hayden",
	"designation": "Software Engineer",
	"avatar": "http://coenraets.org/apps/angular-directory/pics/james_king.jpg"
},
{
	"name": "Gonzalez Hurley",
	"designation": "Lead Designer",
	"avatar": "http://coenraets.org/apps/angular-directory/pics/james_king.jpg"
},
{
	"name": "Trina Bishop",
	"designation": "Designer",
	"avatar": "http://coenraets.org/apps/angular-directory/pics/james_king.jpg"
}
];
function sortByName(jsonList , name) {
	return jsonList.sort(function(a, b) {
		var x = a[name]; var y = b[name];
		return ((x < y) ? -1 : ((x > y) ? 1 : 0));
	});
}

jsonList = sortByName(jsonList, 'name');
var tbody = document.createElement('tbody');
window.onload = function(){
	generateData();
}

function searchResults(){
	var textValue = (document.getElementById("jsonText").value).toLowerCase();
	if(textValue == ""){
		generateData();
	}
	else{
		var innerHTML = "";
		for(i=0;i<jsonList.length;i++){
			if((jsonList[i].name).toLowerCase().indexOf(textValue) > -1 || (jsonList[i].designation).toLowerCase().indexOf(textValue) > -1){
				innerHTML = innerHTML + '<tr><td>' + jsonList[i].name + '</td><td>' + jsonList[i].designation +'</td><td>'+ '<img class="avatar" src ="' +jsonList[i].avatar + '">' + '</td></tr>';
			}
		}
		if(innerHTML==""){
			document.getElementById("newEntry").style.display = "block";
			innerHTML = innerHTML + '<tr><td><input type="text" id="nameField" value="Enter Name"></td><td><input type="text" id="designationField" value="Enter Designation"></td><td><img class="avatar" src="http://coenraets.org/apps/angular-directory/pics/james_king.jpg"></td></tr>';
		}
		else
			document.getElementById("newEntry").style.display = "none";
		tbody.innerHTML = innerHTML;
		document.getElementById("jsonList").appendChild(tbody);
	}
}

function addDetails(){
	var newDetails = {"name" : document.getElementById("nameField").value,
	"designation": document.getElementById("designationField").value,
	"avatar": "http://coenraets.org/apps/angular-directory/pics/james_king.jpg"};
	jsonList.push(newDetails);
	jsonList = sortByName(jsonList, 'name');
	document.getElementById("jsonText").value = '';
	generateData();
	alert("Entry has been Saved succesfully!!! Click OK!!!");
}

function generateData(){
	var innerHTML = "";
	for(i=0;i<jsonList.length;i++){
		innerHTML = innerHTML + '<tr><td>' + jsonList[i].name + '</td><td>' + jsonList[i].designation +'</td><td>'+ '<img class="avatar" src ="' +jsonList[i].avatar + '">' + '</td></tr>';
	}
	document.getElementById("newEntry").style.display = "none";
	tbody.innerHTML = innerHTML;
	document.getElementById("jsonList").appendChild(tbody);
}


var outputArea = document.getElementById('output-target');

document.getElementById('art').addEventListener("click", function(event){
	console.log("target", event.target);
	console.log("currentTarget", event.currentTarget);
	outputArea.innerHTML = "You clicked on the " + event.target.innerHTML + " section.";
});

//MOUSEOVER AND MOUSEOUT FOR OUTPUT AREA
document.getElementById('page-title').addEventListener("mouseover", function(){
	outputArea.innerHTML = "You moved your mouse over the header.";
});
document.getElementById('page-title').addEventListener("mouseout", function(){
	outputArea.innerHTML = "You left me!!";
});
//OUTPUT FIELD MIRRORS INPUT FIELD
document.getElementById('keypress-input').addEventListener("keyup", function(event){
	outputArea.innerHTML = event.target.value;
});

//BUTTON EVENT LISTENERS VIA CSS
document.getElementById('add-color').addEventListener("click", function(){
	document.getElementById('guinea-pig').classList.toggle("blue");
})
document.getElementById('make-large').addEventListener("click", function(){
	document.getElementById('guinea-pig').classList.toggle("hulkify");
})
document.getElementById('add-border').addEventListener("click", function(){
	document.getElementById('guinea-pig').classList.toggle("capture-it");
})
document.getElementById('add-rounding').addEventListener("click", function(){
	document.getElementById('guinea-pig').classList.toggle("rounded");
})

"You clicked on the {} section"
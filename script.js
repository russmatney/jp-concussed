//this function waits for the page to be loaded, then runs
$(document).ready(function(){
	//jquery uses css selectors surrounded by $("") to find elements.
	//	A tag with class="hello" can be selected with $(".hello") in jQuery
	// 	A tag with id="hello" can be selected with $("#hello") in jQuery
	// 	in general, classes can be used to label multiple times per class, ids only once per id


	//this function runs and waits for a 'submit' event on selected element
	//	which is class="formA" right now.
	$(".formA").on("submit", function(event){
		//by default, clicking a button reloads the page unless you prevent it.
		event.preventDefault();

		//formData uses this serializeForm plugin to hold all your input data
		var formData = $(this).serializeForm();

		//pull formData into seperate variables so it's easier to work with
		var name = formData.name; //text can stay text
		var a = parseFloat(formData.inputA); //converts to float
		var b = parseFloat(formData.inputB); //converts to float

		//right now, the way this is set up, there is no form validation (making sure the inputs are valid)
		//  or protection against empty inputs.

		//do some math here and assign it to var = answer before the end

		//example
		var scatScore = a + b;

		//jQuery's .append() function adds html to the end of the html inside the selected tag
		//	which is, in this case, id='answer'
		$("#answer").append("<li>" + name + ": " + scatScore + "</li>");//each is wrapped with 'li' tags because they are list items in the '#answer' 'ul'
	});
});
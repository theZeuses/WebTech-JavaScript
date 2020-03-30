function validateForm()								 
{ 
	var name = document.forms["myForm"]["usrname"];			  
	var password = document.forms["myForm"]["pass"]; 

	if (name.value == "")								 
	{ 
		window.alert("Please enter your name."); 
		name.focus(); 
		return false; 
	} 

	if (password.value == "")					 
	{ 
		window.alert("Please enter your password"); 
		password.focus(); 
		return false; 
	} 

	return true; 
}

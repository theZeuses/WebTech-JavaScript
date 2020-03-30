function validateForm()								 
{ 
	var name = document.forms["RegForm"]["name"];			 
	var email = document.forms["RegForm"]["email"]; 
	var username = document.forms["RegForm"]["usrname"]; 
	var password = document.forms["RegForm"]["pass"]; 
	var confirmpassword = document.forms["RegForm"]["confirmpassword"]; 
	var dob = document.forms["RegForm"]["dob"]; 

	if (name.value == "")								 
	{ 
		window.alert("Please enter your name."); 
		name.focus(); 
		return false; 
	} 
	
	if (email.value == "")								 
	{ 
		window.alert("Please enter a valid e-mail address."); 
		email.focus(); 
		return false; 
	} 

	if (password.value == "")					 
	{ 
		window.alert("Please enter your password"); 
		password.focus(); 
		return false; 
	} 

	if (confirmpassword.value == "")					 
	{ 
		window.alert("Please re-enter your password"); 
		password.focus(); 
		return false; 
	} 

	if (confirmpassword.value != password.value)					 
	{ 
		window.alert("Please re-enter your password correctly"); 
		password.focus(); 
		return false; 
	} 

	if (dob.value=="")				 
	{ 
		alert("Please enter your Date of birth."); 
		what.focus(); 
		return false; 
	} 

	return true; 
}

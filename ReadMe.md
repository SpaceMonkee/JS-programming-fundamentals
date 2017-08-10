My assisted code is to be linked to a button that would show the date and time as well as current timezone when clicked and can be refreshed by each click made.
-	I have decided to place the JavaScript code for this part of the assignment directly into the HTML as the code needed was not too heavy.
-	An empty text field was also placed so when the button is pressed the text field will be populated with the time, timezone and date 
-	The line of code used looked as follows
    o	onclick="document.getElementById('time').innerHTML = Date()"

My Unassisted assignment is to have a new random code generated if a user requests a temporary password by clicking another button
-	For this I have decided to have a separate page linked to the HTML and place a script tag inside the HTML instead as I felt that this JavaScript code is a lot heavier than the one mentioned above 
-	An input field has been made that will be filled out by the code once the user clicks on the button
-	The code in the JS file is shown below
    o	function password(length) {
        var chars = "0123456789!@#$%^&*-+()abcdefghijklmnopqrstuvwxyz<>ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
        var pass = "";
        for (var i = 0; i < length; i++) {
            var i = Math.floor(Math.random() * chars.length);
            pass += chars.charAt(i);
        }
        return pass;
        }

        function generate()  {
            myform.row_password.value = password(myform.length.value);
        }

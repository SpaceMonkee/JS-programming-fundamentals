

//this code is for the merged JS function

function password(length) {
var chars = "0123456789!@#$%^&*-+()abcdefghijklmnopqrstuvwxyz<>ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var pass = "";
for (var x = 0; x < length; x++) {
    var i = Math.floor(Math.random() * chars.length);
    pass += chars.charAt(i);
}
return pass;
}

function generate() {
    myform2.true_password.value = password(myform2.length.value);
}
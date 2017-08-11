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
    myform.row_password.value = password(myform.length.value);
}
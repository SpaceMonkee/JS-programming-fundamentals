function password(length) {
var chars = "0123456789!@#$%^&*-+()abcdefghijklmnopqrstuvwxyz<>ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
var pass = "";
for (var i = 0; i < length; i++) {
    var i = Math.floor(Math.random() * chars.length);
    pass += chars.charAt(i);
}
return Text;
}

function generate()  {
    myform.row_password.value = password(myform.length.value);
} 
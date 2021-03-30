function print2() {
    let a = document.getElementById('username').value;
    let b = document.getElementById('password').value;
    let c = document.getElementById('checkbox').checked;

    console.log("username is: ", a);
    console.log("Password is: ", b);
    if (c == true) {
        console.log("checkbox is checked", c);
    } else {
        console.log("checkbox is not checked", c);
    }

    return false;
}

function print1() {
    var a = document.getElementById('website').value;
    console.log(a);
    return false;
}
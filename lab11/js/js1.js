function print2() {
    event.preventDefault();
    let em1 = $('#username').val();
    let em2 = $('#password').val();
    let em3 = $('#checkbox:checkbox:checked').length > 0;
    console.log(`username is: ${em1},Password is:${em2}`);
    if (em3 == true) {
        $('.ishide').parent().hide();
    } else {
        console.log(`checkbox is not checked ${em3}`);
    }

    // return false;
}

function print1() {
    event.preventDefault();
    var a = $('#website').val();
    console.log(`${a}`);
    // return false;
}
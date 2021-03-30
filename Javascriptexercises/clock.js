window.onload = setInterval(getdate, 1000);

function getdate() {
    var d = new Date();
    var year = d.getFullYear();
    var month = d.getMonth();
    month++;

    month = update(month)
    var day = d.getDate();
    day = update(day);



    let second = d.getSeconds();
    second = update(second);


    let minutes = d.getMinutes();
    minutes = update(minutes);

    let hours = d.getHours();
    hours = update(hours);
    document.getElementById("ptime").innerHTML = hours + ":" + minutes + ":" + second;
    document.getElementById("pdate").innerHTML = year + "-" + month + "-" + day;



}


function update(x) {
    if (x < 10) {
        return "0" + x;
    } else
        return x;

}
// document.write("<h1>" + "ff" + getdate() + "</h1>");
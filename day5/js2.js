function add1() {
    var a = document.getElementById("name");
    var b = document.getElementById("supp");
    var c = document.getElementById("date");
    var d = document.getElementById("sel");
    var abcd = d.options[d.selectedIndex].value;
    var f = document.getElementById("pname");
    var e = document.getElementById("unitprice");
    alert(a.value + "  " + b.value + "  " + c.value + "  " + e.value + "  " + f.value + "  " + e.value + abcd);
    //+ b.value + c.value + d.value + e.value + f.value + e.value
}
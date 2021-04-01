window.onload = function() {
    var buttonClicked = document.getElementById("biggerDecoration");
    buttonClicked.onclick = setTimer;
    var checkboxChecked = document.getElementById("blingCheckbox");
    checkboxChecked.onchange = bling;
    wordCheck();
};

function setTimer() {
    setInterval(biggerDecoration, 1000);
}

function biggerDecoration() {
    var fontSize = document.getElementById('txter').style.fontSize;
    if (!fontSize) {
        fontSize = "12pt";
    }
    document.getElementById('txter').style.fontSize = (parseInt(fontSize) + 2) + "pt";
}

function bling() {
    if (document.getElementById('blingCheckbox').checked) {
        document.getElementsByTagName('body')[0].style.backgroundImage = "url(https://courses.cs.washington.edu/courses/cse190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg)";
        document.getElementById('txter').style.fontWeight = "bold";
        document.getElementById('txter').style.color = "green";
        document.getElementById('txter').style.textDecoration = "underline";
    } else {
        document.getElementsByTagName('body')[0].style.backgroundImage = "";
        document.getElementById('txter').style.fontWeight = "normal";
        document.getElementById('txter').style.color = "black";
        document.getElementById('txter').style.textDecoration = "none";

    }

}

function wordCheck() {
    var text = document.getElementById("txter").innerHTML;
    for (let i in text) {
        if (tex[i].length >= 5)

            var newText = text[i].replace("klejdi");
    }
    document.getElementById("txter").innerHTML = newText;
}
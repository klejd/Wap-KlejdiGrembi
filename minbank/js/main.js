function CreateNewAccount() {
    let row = 4;
    //so the next row will be  pushed at the end because we actually have 3 rows
    //if we want to add at the beginning the row should be one 

    let AccNo = document.getElementById("Accno").value;
    let Cname = document.getElementById("Cname").value;

    let TypeAccount = document.getElementById("opt");
    let Ta = TypeAccount.options[TypeAccount.selectedIndex].value;

    let displaytable = document.getElementById("display");

    let newRow = displaytable.insertRow(row);
    let cell = newRow.insertCell(0);
    cell.innerHTML = AccNo + "|" + Cname + "|" + Ta;
    row++;

    return false;
}
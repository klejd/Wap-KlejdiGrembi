var row = 2;
$(function() {


    // function CreateNewAccount() {

    $("#create").click(function() {


        let AccNo = $("#acc").val();
        let Cname = $("#cname").val();
        let TypeAccount = $("#opt").val();
        // console.log(AccNo, Cname, TypeAccount);

        var newrow = "<tr> <th scope='row'>" + ++row + "</td> <td>" + AccNo + "</td>  <td>" + Cname + "</td>  <td class='ishide'>" + TypeAccount + "</td> </tr>";
        $('tbody').append(newrow);
    });
    var isHideElder = false;
    $("#chck:checkbox").change(function() {
        isHideElder = !isHideElder;
        var e = $('.ishide');
        for (i = 0; i < e.length; i++) {
            if (e[i].textContent == "Checking") {

                if (!isHideElder) {
                    e[i].parentElement.removeAttribute("style");
                } else {
                    e[i].parentElement.setAttribute("style", "display:none");
                }
            }
        }

        // for (i = 0; i < ele.length; i++) {
        //     if (ele[i].html == "Saving")
        //         console.log(ele[i].textContent);
        //     ele.parent().hide();


    });
    var isHideElder = false;
    $("#chck1:checkbox").change(function() {
        isHideElder = !isHideElder;
        var e = $('.ishide');
        for (i = 0; i < e.length; i++) {
            if (e[i].textContent == "Saving") {

                if (!isHideElder) {
                    e[i].parentElement.removeAttribute("style");
                } else {
                    e[i].parentElement.setAttribute("style", "display:none");
                }
            }
        }

        // for (i = 0; i < ele.length; i++) {
        //     if (ele[i].html == "Saving")
        //         console.log(ele[i].textContent);
        //     ele.parent().hide();


    });

    $("#chck2:checkbox").change(function() {



        if (!this.checked) {


            $('#display').find('tbody tr:contains("Loan")').show();
            //$('#display td:nth-child(4):contains("Loan")').parent().hide();
            // e[i].parent().hide();

        }
        if (this.checked) {
            $('#display').find('tbody tr:contains("Loan")').hide();
        }


    });
});
// }
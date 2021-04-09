var row = 2;

function sbmt() {
    event.preventDefault();
    let AccNo = $("#acc").val();
    let Cname = $("#cname").val();
    let TypeAccount = $("#opt").val();
    // if ($.trim($("acc").html()) == '' || $.trim($("#cname").html()) == '') {
    //     $('#errormsg').text("Please fill the form").css("color", "red");
    // } else {
    var newrow = "<tr> <th scope='row'>" + ++row + "</td> <td>" + AccNo + "</td>  <td>" + Cname + "</td>  <td class='ishide'>" + TypeAccount + "</td> </tr>";
    $('tbody').append(newrow);
}

// }

$(function() {
    // event.preventDefault();
    //var row = 2;
    // function CreateNewAccount() {

    // $("#create").click(function(event) {
    //     event.preventDefault();
    //     let AccNo = $("#acc").val();
    //     let Cname = $("#cname").val();
    //     let TypeAccount = $("#opt").val();

    //     var newrow = "<tr> <th scope='row'>" + ++row + "</td> <td>" + AccNo + "</td>  <td>" + Cname + "</td>  <td class='ishide'>" + TypeAccount + "</td> </tr>";
    //     $('tbody').append(newrow);



    // });
    // var isHideElder = false;
    $("#chck:checkbox").change(function() {



        if (!this.checked) {


            $('#display').find('tbody tr').show();
            //$('#display td:nth-child(4):contains("Loan")').parent().hide();
            // e[i].parent().hide();

        }
        if (this.checked) {
            // $('#display').find('tbody tr:not(:contains("Loan"))').hide();
            $('#display td:nth-child(4):not(:contains("Saving"))').parent().hide();
        }
        // isHideElder = !isHideElder;
        // var e = $('.ishide');
        // for (i = 0; i < e.length; i++) {
        //     if (e[i].textContent == "Checking") {

        //         if (!isHideElder) {
        //             e[i].parentElement.removeAttribute("style");
        //         } else {
        //             e[i].parentElement.setAttribute("style", "display:none");
        //         }
        //     }
        // }

        // for (i = 0; i < ele.length; i++) {
        //     if (ele[i].html == "Saving")
        //         console.log(ele[i].textContent);
        //     ele.parent().hide();


    });
    // var isHideElder = false;
    $("#chck1:checkbox").change(function() {

        if (!this.checked) {


            $('#display').find('tbody tr').show();
            //$('#display td:nth-child(4):contains("Loan")').parent().hide();
            // e[i].parent().hide();

        }
        if (this.checked) {
            // $('#display').find('tbody tr:not(:contains("Loan"))').hide();
            $('#display td:nth-child(4):not(:contains("Checking"))').parent().hide();
        }
        // isHideElder = !isHideElder;
        // var e = $('.ishide');
        // for (i = 0; i < e.length; i++) {
        //     if (e[i].textContent == "Saving") {

        //         if (!isHideElder) {
        //             e[i].parentElement.removeAttribute("style");
        //         } else {
        //             e[i].parentElement.setAttribute("style", "display:none");
        //         }
        //     }
        // }

        // for (i = 0; i < ele.length; i++) {
        //     if (ele[i].html == "Saving")
        //         console.log(ele[i].textContent);
        //     ele.parent().hide();


    });

    $("#chck2:checkbox").change(function() {


        //----------------------It'S not working for no reason------------------------
        // if (this.checked) {
        //     var ele = $('.ishide'); // -->Created a class for every typeof account we add or we have
        //     for (i = 0; i < ele.length; i++) { //loop through 
        //         if (ele[i].textContent == "Loan")
        //             console.log(ele[i]);
        //         // ele.parent().hide(); //-->if we wanna hide all of them it works
        //         //ele[i].parent().hide(); //-->is not working
        //     }
        // } else {
        //     ele.parent().show();
        // }

        //----------------------------------------------------------------------------

        if (!this.checked) {


            $('#display').find('tbody tr').show();
            //$('#display td:nth-child(4):contains("Loan")').parent().hide();
            // e[i].parent().hide();

        }
        if (this.checked) {
            // $('#display').find('tbody tr:not(:contains("Loan"))').hide();
            $('#display td:nth-child(4):not(:contains("Loan"))').parent().hide();
        }


    });
});
// }
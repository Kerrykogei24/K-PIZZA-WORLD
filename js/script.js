$(document).ready(function() {
    $("#firstselect").click(function() {
        $("#checkoutdetails").toggle();
    })
    $("#secondselect").click(function() {
        $("#deliveryoption").toggle();
    })
    $("#pickup").click(function() {
        $("#pick").toggle();
    })
    $("#letsdeliver").click(function() {
        $("#pickup2").toggle();
    })
    $("#thirdsubmit").click(function() {
        $("#delivery").toggle();
    });
});
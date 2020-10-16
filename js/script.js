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

function orderNow() {

    var flavor = $("input#pizza-type").val();
    var crust = $("input#size").val();
    var size = $("input#crust").val();
    var number = $("input#number").val();

    var ordePrice;
    if (flavor === "pizza1" || flavor === "pizza2" || flavor === "pizza3") {
        if (size === "small") {
            ordePrice === 700;
        } else if (size === "medium") {
            orderPrice === 1000;
        } else if (size === "large") {
            orderPrice === 1400;
        }
    } else if (flavor === " pizza4" || flavor === "pizza5" || flavor === "pizza6") {
        if (size === "small") {
            ordePrice === 800;
        } else if (size === "medium") {
            orderPrice === 1100;
        } else if (size === "large") {
            orderPrice === 1600;
        }

    } else {
        alert("You  have not made any order")
    }
}
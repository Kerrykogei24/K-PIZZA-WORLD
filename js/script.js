function orderNow() {

    // var flavor = document.getElementById("pizzatype").value;

    // var crust = document.getElementById("crust").value;

    // var size = document.getElementById("size").value;

    // var number = document.getElementById("number").value;
    var name = $("input#name").val();
    var flavor = $("#pizzatype").val();
    var crust = $("#size").val();
    var size = $("#crust").val();
    var number = $("#pizza-no").val();
    var topping = [];
    $.each($('input[name="topping"]:checked'),
        function() {
            topping.push($(this).val());
        }
    );

    var orderPrice;
    if (flavor === "Margherita Pizza" || flavor === "Pepperoni Pizza" || flavor === "BBQ Chicken Pizza") {
        if (size === "small") {
            orderPrice === 700;
        } else if (size === "medium") {
            orderPrice === 1000;
        } else if (size === "large") {
            orderPrice === 1400;
        }
    } else if (flavor === "BBQ Chicken Pizza" || flavor === "Hawaiian Pizza" || flavor === "Meat-Lover's Pizza") {
        if (size === "small") {
            orderPrice === 800;
        } else if (size === "medium") {
            orderPrice === 1100;
        } else if (size === "large") {
            orderPrice === 1600;
        }

    }

    var crustPrice;

    if (crust === "Crispy") {
        crustPrice === 200;
    } else if (crust === "Stuffed") {
        crustPrice === 170;
    } else if (crust === "Gluten") {
        crustPrice === 150;
    }

    var selected = $('input[name="topping"]:checked').length;
    var toppingPrice;
    if (size === "large") {
        toppingPrice === selected * 200;
    } else if (size === "medium") {
        toppingPrice === selected * 150;
    } else if (size === "small") {
        toppingPrice === selected * 100;
    }


    $("input[type='checkbox']:not(:checked)").prop({
        disabled: true
    });
    $('#thirdsubmit').prop('disabled', true);
    $("#checkoutdetails").show();

    var price = (orderPrice + crustPrice + toppingPrice);
    var totalPrice = parseInt(price * number);

    $(".clientname").text(name);
    // $(".clientname").append('<tr><td id="clientname">' + name);
    $(".number").append('<tr><td id="pizza-no">' + number);
    $(".size").append('<tr><td id="size">' + size);
    $(".crust").append('<tr><td id="crust">' + crust);
    $(".flavor").append('<tr><td id="pizzatype">' + flavor);
    $(".total").append('<tr><td id="total">' + totalPrice);





    arrayTotal.push(totalPrice);
    if (topping == "") {
        $(".topping").append('<tr><td id="ptopping">' + "-");
    }
    if (topping != "") {
        $(".topping").append('<tr><td id="ptopping">' + topping);

        $(".name").text(name);
    } else {
        alert("pick atleast 2 toppings");
    }




}
$(document).ready(function() {
    $("#order").submit(function(event) {
        event.preventDefault();
        orderNow();
    });
    $("#checkoutdetails").submit(function(event) {
        event.preventDefault();
        letsdeliver();
    });
});

function letsDeliver() {
    $("#pickup2 ").show();

    var location = $("input#location").val();
    var phone = $("input#phone").val();

    $(".location").text(location);
    $(".phone").text(phone);
    $("#delivery").hide();


}

function checkOut() {
    $("#deliveryoption").show();
    $("#checkoutdetails").hide();
}

function deliverNow() {
    $("#pickup2").hide();
    $("#delivery").show();
}
$(document).ready(function() {
    $("#thirdsubmit").submit(function(event) {
        event.preventDefault();
        deliverNow();

    });
});
// function letsDeliver()
// $(document).ready(function() {
//     $("#firstselect").click(function() {
//         $("#checkoutdetails").toggle();
//     })
//     $("#secondselect").click(function() {
//         $("#deliveryoption").toggle();
//     })
//     $("#pickup").click(function() {
//         $("#pick").toggle();
//     })
//     $("#letsdeliver").click(function() {
//         $("#pickup2").toggle();
//     })
//     $("#thirdsubmit").click(function() {
//         $("#delivery").toggle();
//     });
// })
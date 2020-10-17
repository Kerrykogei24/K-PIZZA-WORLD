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
    $.each($('input[name="toppings"]:checked'),
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

    if (crust === "crispy") {
        crustPrice === 200;
    } else if (crust === "stuffed") {
        crustPrice === 170;
    } else if (crust === "gluten-free") {
        crustPrice === 150;
    }

    var selected = $('input[name="toppings"]:checked') var toppingPrice;
    if ()

}


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
// });
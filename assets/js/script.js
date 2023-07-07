const total_amount = 0;

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('button').addEventListener('click', function() {
        calculateTip();
    });  
});

function calculateTip(total_amount) {
    bill_amount = parseInt(document.getElementById("bill_amount").value);
    tip_amount = document.querySelector('input[name="tip_amount"]:checked');
    people = parseInt(document.getElementById("people-tipping").value)

    console.log(bill_amount,people)

    if (tip_amount.value === "five"){
        total_amount = bill_amount * 1.05
    }
    if (tip_amount.value === "ten"){
        total_amount = bill_amount * 1.1
    }
    if (tip_amount.value === "fifteen"){
        total_amount = bill_amount * 1.15
    }
    if (tip_amount.value === "twenty"){
        total_amount = bill_amount * 1.2
    }



}
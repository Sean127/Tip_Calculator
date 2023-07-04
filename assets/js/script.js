document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('button').addEventListener('click', function() {
        calculateTip();
    });  
});

function calculateTip() {
    bill_amount = parseInt(document.getElementById("bill_amount").value);
    tip_amount = document.querySelector('input[name="tip_amount"]:checked');
    people = parseInt(document.getElementById("people-tipping").value)

    if (bill_amount === "" || bill_amount < 1 ){
        alert("Please enter a valid bill amount")
    }
}
const total_tip = 0;

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('button').addEventListener('click', function() {
        calculateTip();
    });  
});

function calculateTip(total_tip) {
    bill_amount = parseInt(document.getElementById("bill_amount").value);
    tip_amount = document.querySelector('input[name="tip_amount"]:checked');
    people = parseInt(document.getElementById("people-tipping").value)

    if (tip_amount.value === "five"){
        total_tip = bill_amount * 0.05
    }
    if (tip_amount.value === "ten"){
        total_tip = bill_amount * 0.1
    }
    if (tip_amount.value === "fifteen"){
        total_tip = bill_amount * 0.15
    }
    if (tip_amount.value === "twenty"){
        total_tip = bill_amount * 0.2
    }
    let per_person_tip = total_tip/people
    per_person_tip = per_person_tip.toFixed(2)
 
    if (people > 1){
        document.getElementById("total_amount").innerHTML = `€${per_person_tip}`
        document.getElementById("per_person").innerHTML = "Per Person"

    }
    else{
        document.getElementById("total_amount").innerHTML = `€${per_person_tip}`
    }


}
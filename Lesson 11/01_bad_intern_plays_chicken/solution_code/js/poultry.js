
function validateOrderQty(e){
    e.preventDefault();

    // Get the requested quantity
    let orderQty = parseInt(document.getElementById('pbeOrderQty').value);

    // If quantity is above or below the allowed then show alert message
    if(isNaN(orderQty) || orderQty < 10 || orderQty > 200){
        alert("Please limit your order to a quantity between 10 and 200.");
    }else{
            // Show acceptance alert message if allowed quantity
        alert("Your order has been submitted");
        document.getElementById('pbeOrderQty').value = "";
    }


}




document.addEventListener('DOMContentLoaded', function(event) {


document.querySelector('#pbeOrderSubmit').addEventListener('click',validateOrderQty);



const openControls = document.querySelectorAll('.descOpen');
console.log(openControls);

for(let i=0;i<openControls.length;i++){
    openControls[i].addEventListener('click',function(e){

        e.preventDefault();

        this.closest('section').classList.add('pbeDescAccordionCollapsed');
    
    });
}


const closeControls = document.querySelectorAll('.descOpen');
console.log(openControls);

for(let i=0;i<closeControls.length;i++){
    closeControls[i].addEventListener('click',function(e){

        e.preventDefault();

        this.closest('section').classList.remove('pbeDescAccordionCollapsed');
    });
}



});

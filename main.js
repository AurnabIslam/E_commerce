var pantsQ = 0;
var shirtQ = 0;
var pantsExP = 0;
var shirtExP = 0;
var subTotal = 0;
var taxAmt = 0;
var totalAmt = 0;
//document.getElementById("pants-quantity");
//Pants Q 

document.onload = hideoutput();

function hideoutput(){
    document.getElementById('output').style.display = 'none';
}

document.getElementById("pants-incr").addEventListener("click",function(){
    pantsQ+=1;
    if(pantsQ>=0){
        document.getElementById("pants-quantity").innerHTML = pantsQ;
        pantsExP = pantsQ*40.99;
        document.getElementById("pants-ex-price").innerHTML = "$" + pantsExP.toFixed(2);
    }
    else{
        alert("Qunatity cannot be negative!")
    }    
})

document.getElementById("pants-dcr").addEventListener("click",function(){
    pantsQ-=1;
    if(pantsQ>=0){        
        document.getElementById("pants-quantity").innerHTML = pantsQ;
        pantsExP = pantsQ*40.99;
        document.getElementById("pants-ex-price").innerHTML = "$" + pantsExP.toFixed(2);
    }
    else{
        alert("Qunatity cannot be negative!")
    }
})

//Shirt Q
document.getElementById("shirt-incr").addEventListener("click",function(){
    shirtQ+=1;
    if(shirtQ>=0){
        document.getElementById("shirt-quantity").innerHTML = shirtQ;
        shirtExP = shirtQ*10.99;
        document.getElementById("shirt-ex-price").innerHTML = "$" + shirtExP.toFixed(2);
    }
    else{
        alert("Qunatity cannot be negative!")
    }
})

document.getElementById("shirt-dcr").addEventListener("click",function(){
    shirtQ-=1;
    if(shirtQ>=0){
        document.getElementById("shirt-quantity").innerHTML = shirtQ;
        shirtExP = shirtQ*10.99;
        document.getElementById("shirt-ex-price").innerHTML = "$" + shirtExP.toFixed(2);
    }
    else{
        alert("Qunatity cannot be negative!")
    }
})

//subtotal tax and total
document.getElementById("calculate-price").addEventListener("click", function(){
    subTotal=shirtExP+pantsExP;
    taxAmt=subTotal*.13;
    totalAmt=taxAmt+subTotal;
    document.getElementById("sub-total-amount").innerHTML="Sub-Total: $"+subTotal.toFixed(2);
    document.getElementById("tax-amount").innerHTML="Tax: $"+taxAmt.toFixed(2);
    document.getElementById("total-amount").innerHTML="Total: $"+totalAmt.toFixed(2);

    document.getElementById('output').style.display = 'block';
})
var coupon = "coupon";
document.getElementById("promo-btn").addEventListener("click",function(){
    coupon = prompt("Please enter your coupon code.");
    if(coupon=="NOTAX"){
        taxAmt=0;
        totalAmt=subTotal;
        document.getElementById("sub-total-amount").innerHTML="Sub-Total: $"+subTotal.toFixed(2);
        document.getElementById("tax-amount").innerHTML="Tax: $"+taxAmt.toFixed(2);
        document.getElementById("total-amount").innerHTML="Total: $"+totalAmt.toFixed(2);
    }
    else if(coupon=="FIFTYFIFTY"){
        subTotal=subTotal*0.5;
        totalAmt=subTotal+taxAmt;
        document.getElementById("sub-total-amount").innerHTML="Sub-Total: $"+subTotal.toFixed(2);
        document.getElementById("tax-amount").innerHTML="Tax: $"+taxAmt.toFixed(2);
        document.getElementById("total-amount").innerHTML="Total: $"+totalAmt.toFixed(2);
    }
    else{
        alert("The coupon you entered is invalid.")
    }
})
document.getElementById('kitkat-buy-btn').addEventListener('click', function(){
      getElementById('kitkat-quantity','chocolate',200,'chocolate','total','kitkat-buy-btn');
});
document.getElementById('rose-buy-btn').addEventListener('click', function(){
   getElementById('rose-quantity','rose',100,'rose','total','rose-buy-btn');
});
document.getElementById('diary-buy-btn').addEventListener('click', function(){
    getElementById('diary-quantity','diary',100,'diary','total','diary-buy-btn');
});
function getElementById(id,id1,value,id4,id5,id6){
    const kitkatQuantity = document.getElementById(id).value;
    if(kitkatQuantity==='' || isNaN(kitkatQuantity) || kitkatQuantity<=0){
        alert("Please Provide any Valid input")
    }
    else{
        const kitkatTotal = kitkatQuantity * value;
    const kitkatNew = parseInt(kitkatTotal);
    document.getElementById(id).value = null;
    document.getElementById(id6).setAttribute('disabled', true);
    const chocolate = document.getElementById(id1).innerText = kitkatNew;
    // document.getElementById(id).value = null;
    const chocolate1 = document.getElementById(id4).innerText;
    const newChocolate1 = parseInt(chocolate1);
   document.getElementById(id4).innerText =  kitkatNew;

    const total = document.getElementById(id5).innerText;
    const newTotal = parseInt(total);
    document.getElementById(id5).innerText = newTotal  + newChocolate1;
    // document.getElementById(id6).setAttribute('disabled', true)
    }
//     const kitkatTotal = kitkatQuantity * value;
//     const kitkatNew = parseInt(kitkatTotal);
//     const chocolate = document.getElementById(id1).innerText = kitkatNew;
//     document.getElementById(id).value = null;
//     const chocolate1 = document.getElementById(id4).innerText;
//     const newChocolate1 = parseInt(chocolate1);
//    document.getElementById(id4).innerText =  kitkatNew;

//     const total = document.getElementById(id5).innerText;
//     const newTotal = parseInt(total);
//     document.getElementById(id5).innerText = newTotal  + newChocolate1;
};

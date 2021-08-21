//buying memory and delivery cost function
function MemoryandDeliveryCost(product, isadd){
    const cost = document.getElementById(product +'-cost');
    let NewCost = cost.innerText

    if(isadd == true)
    {
        NewCost = 180;

    }
    else if (isadd == false) {
        NewCost = 20;

    }
    else{
        NewCost = 0;
    }
    cost.innerText = parseInt(NewCost)
    TotalPrice()
};
//storage buying cost
function StorageCostCalculating(spaces, isadd){
    const storages = document.getElementById(spaces +'-cost');

    if(isadd == true)
    {
        storages.innerText = 100;
    }
    else if (isadd == false)
    {
        
        storages.innerText = 180;
    }
    else{
        storages.innerText = 0;
    }
    TotalPrice()
};

//total price calculating

function TotalCost(product)
{
    const poroductCost = document.getElementById(product +'-cost');
    const AllproductCost = parseInt(poroductCost.innerText);
    return AllproductCost;
};
function TotalPrice()
{   const PreviousBestPrice = document.getElementById('best-price');
    const CurrentBestPrice = parseInt(PreviousBestPrice.innerText);
    const TotalPrice = document.getElementById('total-price');

    const TotalProductPrice = CurrentBestPrice + TotalCost('memory') + TotalCost('delivery') + TotalCost('storage');

    TotalPrice.innerText = TotalProductPrice;

    document.getElementById('total-discount-price').innerText = TotalPrice.innerText;

};

//Memory buying click event 

document.getElementById('8gb-memory-btn').addEventListener('click', function(){
    MemoryandDeliveryCost('memory');
});

document.getElementById('16gb-memory-btn').addEventListener('click', function(){
    MemoryandDeliveryCost('memory', true);
});


//storage click event

document.getElementById('256gb-storage').addEventListener('click', function(){
    StorageCostCalculating('storage');
});

document.getElementById('512gb-storage').addEventListener('click', function(){
    StorageCostCalculating('storage', true);
});
document.getElementById('1TB-storage').addEventListener('click', function(){
    StorageCostCalculating('storage', false);
});

//delivery charge click event

document.getElementById('delivery-free').addEventListener('click', function(){
    MemoryandDeliveryCost('delivery');
});

document.getElementById('deliver-apply').addEventListener('click', function(){
    MemoryandDeliveryCost('delivery', false);
});

//Promo code apply for discount
let count = 0;
document.getElementById('apply-btn').addEventListener('click', function(){
    const promoCode = document.getElementById('promoCodeInput');
    const promoCodeValue = promoCode.value
    const CurrentTotalPrice = document.getElementById('total-discount-price');
    const TotalPrice = parseFloat(CurrentTotalPrice.innerText)
    if(promoCodeValue == 'stevekaku' && count == 0)
    {
        const discount20percent = (20/100);
        const discountPrice = discount20percent * TotalPrice;
        const TotalDiscount = TotalPrice - discountPrice;
        CurrentTotalPrice.innerText = parseFloat(TotalDiscount)
        count ++
        promoCodeInput.value = '';
    }
    else{
        promoCode.style.backgroundColor = 'red'
        promoCodeInput.value = 'you already applied or enter valid code'
        promoCode.addEventListener('focus', function(){
            promoCode.style.backgroundColor = 'white'
            promoCodeInput.value = '';
        })
    }
});

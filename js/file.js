//memory buttons handle

//16 gb memory handle
document.getElementById('16gb-memory').
    addEventListener('click', function () {
        const memoryPrice = 180;
        document.getElementById('extra-memory').innerText = memoryPrice;
        const balanceTotal = document.getElementById('total');
        const totalText = balanceTotal.innerText;
        const prevTotalText = parseInt(totalText);
        balanceTotal.innerText = prevTotalText + memoryPrice;


    })
//8gb memory 
document.getElementById('8gb-memory').addEventListener('click', function () {
    const memoryPrice = 00;
    document.getElementById('extra-memory').innerText = memoryPrice;

})

//storage handle
//250 gb ssd storage
document.getElementById('250-ssd-storage').addEventListener('click', function () {
    const storagePrice = 00;
    document.getElementById('extra-storage').innerText = storagePrice;

})
//512 gb storage
document.getElementById('512-ssd-storage').addEventListener('click', function () {
    const storagePrice = 100;
    document.getElementById('extra-storage').innerText = storagePrice;
    const balanceTotal = document.getElementById('total');
    const totalText = balanceTotal.innerText;
    const prevTotalText = parseInt(totalText);
    balanceTotal.innerText = prevTotalText + storagePrice;
})
//1tb storage
document.getElementById('1tb-ssd-storage').addEventListener('click', function () {
    const storagePrice = 180;
    document.getElementById('extra-storage').innerText = storagePrice;
    const balanceTotal = document.getElementById('total');
    const totalText = balanceTotal.innerText;
    const prevTotalText = parseInt(totalText);
    balanceTotal.innerText = prevTotalText + storagePrice;
})
//delivery handle
//free delivery 
document.getElementById('free-delivery').addEventListener('click', function () {
    const deliveryCost = 00;
    document.getElementById('delivery-cost').innerText = deliveryCost;

})
//paid & fast delivery
document.getElementById('paid-delivery').addEventListener('click', function () {
    const deliveryCost = 20;
    document.getElementById('delivery-cost').innerText = deliveryCost;
    const balanceTotal = document.getElementById('total');
    const totalText = balanceTotal.innerText;
    const prevTotalText = parseInt(totalText);
    balanceTotal.innerText = prevTotalText + deliveryCost;


})

document.getElementById('offer-confirm').addEventListener('click', function (event) {
    if (event.target.value == 'stevekaku') {
        document.getElementById('offer-btn').removeAttribute('disable');
    }


})
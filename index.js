//step-1 select the price ammount
const mainPrice = document.getElementById('main-price');
const cnvrtMainPrice = parseFloat(mainPrice.innerText);
// console.log();

// step-2 slect the apply 30% button 
const firstDiscount = document.getElementById('first-discount');

// step-3 select the please pay output
let payOutput = document.getElementById('pay-output');
let requerPayment = parseFloat(payOutput.innerText);

//step-4 run event listenr for apply 30% discount
firstDiscount.addEventListener('click', function (event) {
    payOutput.innerText = cnvrtMainPrice - (requerPayment * 30/100);
})


//step-5 select the coputn discount button
const couponBtn = document.getElementById('coupon-btn');

//step-6 select couputn input and run onchange event for verify is copun input mathch. if match the coupon code then the button is enabled
const getCopunInput = document.getElementById('coupon-input');
    getCopunInput.addEventListener('keyup', function(e){
        if (e.target.value === 'DISC30') {
            couponBtn.removeAttribute('disabled')
        }else{
            couponBtn.setAttribute('disabled','true')
        }
    })

// step-7 run event listener on coupon button
couponBtn.addEventListener('click',function(e){
    e.preventDefault()
        // step-5 run event listener for coupon button
        const extraDiscount = parseFloat(payOutput.innerText)
        payOutput.innerText = extraDiscount - (extraDiscount * 30/100);

        //delete input value
        getCopunInput.value = ''

        //  disable coupon input and coupon button
        getCopunInput.setAttribute('disabled','true');
        couponBtn.setAttribute('disabled','true');
    })
//gets bitcoin value from binance api
// https://www.binance.com/exchange/public/convert?from=BTC&to=USDT&amount=1

const runTasks = function(){
    setTimeout(function(){
        let BtcAmount    = document.querySelectorAll('li.total strong')[0].innerHTML.slice(0, -4);
        let DollarAmount = document.querySelectorAll('li.total strong')[1].innerHTML.slice(1).replace(/\,/g,'');
        let BtcValue     = DollarAmount / BtcAmount;

        const style = document.createElement('style');
        document.head.appendChild(style);
        style.sheet.insertRule(`
            .accountInfo-lists li .items>div.locked{
                width: 90px !important;
            }
        `);

        style.sheet.insertRule(`
            .usd-value{
                width: 70px;
                color: #8452D5 !important;
            }
        `);

        const items = document.querySelectorAll('.accountInfo-lists .equalValue');
        items.forEach((value, index) => {
            if(index == 0){
                value.insertAdjacentHTML('afterend', '<div class="f-right usd-value">US$ Value</div>');
            }else{
                value.insertAdjacentHTML('afterend', `<div class="f-right usd-value">${parseFloat(value.innerHTML * BtcValue).toFixed(2)}</div>`);
            }
        });
    }, 1000);
}

if(document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', runTasks);
} else {
    runTasks();
}
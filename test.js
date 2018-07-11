const Nightmare = require('nightmare');
const nightmare = Nightmare({ show: true });

let url;

nightmare
    .viewport(1090, 1000)
    .goto('https://www.kaola.com/activity/flashSaleIndex/show.html')
    .evaluate(async (sel) => {
        return document.querySelector('#goodsList .detailWrap .pic:nth-child(1)').href;
    })
    .goto(url)
    .screenshot('./images/p3.png')
    .end()
    .then(function(result = 'done') {
        console.log(result);
    })
    .catch(function(err) {
        console.log(err);
    })
    ;
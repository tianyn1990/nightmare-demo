const Nightmare = require('nightmare');
const nightmare = Nightmare({ show: true });

nightmare
    .viewport(1090, 1000)
    .goto('https://www.kaola.com/product/1811482.html')
    .evaluate(() => {
        let mouseMoveEvent = document.createEvent('MouseEvents');
        mouseMoveEvent.initMouseEvent('mousemove');
        let el = document.querySelector('#showImgBox');
        el.dispatchEvent(mouseMoveEvent);
    })
    .wait(100)
    .screenshot('./images/p1.png')

    .goto('https://www.baidu.com')
    .wait('.bri')
    .mouseover('.bri')
    .screenshot('./images/p2.png')
    .end()
    .then(function(result = 'done') {
        console.log(result);
    })
    .catch(function(err) {
        console.log(err);
    })
    ;
